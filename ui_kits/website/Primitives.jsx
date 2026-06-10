/* ============================================================
   Futura Print — shared primitives (Icon, Button, Logo, etc.)
   Exported to window for cross-file use.
   ============================================================ */

/* Lucide icon wrapper — fills an empty span imperatively so React
   reconciliation never fights the SVG that lucide injects. */
function Icon({ name, size = 20, color, strokeWidth = 2, style = {} }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = '<i data-lucide="' + name + '"></i>';
    if (window.lucide) window.lucide.createIcons();
    const svg = el.querySelector("svg");
    if (svg) {
      svg.setAttribute("width", size);
      svg.setAttribute("height", size);
      svg.style.strokeWidth = strokeWidth;
      svg.style.display = "block";
    }
  }, [name, size, strokeWidth]);
  return (
    <span
      ref={ref}
      aria-hidden="true"
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", color, ...style }}
    />
  );
}

function Button({ variant = "primary", size, children, icon, iconRight, onClick, style = {}, type }) {
  const cls = ["btn", "btn-" + variant];
  if (size) cls.push("btn-" + size);
  return (
    <button type={type || "button"} className={cls.join(" ")} onClick={onClick} style={style}>
      {icon && <Icon name={icon} size={size === "lg" ? 20 : 18} />}
      {children}
      {iconRight && <Icon name={iconRight} size={size === "lg" ? 20 : 18} />}
    </button>
  );
}

function Eyebrow({ children, style = {} }) {
  return <div className="eyebrow" style={style}>{children}</div>;
}

/* Brand logo. variant: "full" | "wordmark" | "mark" */
function Logo({ variant = "wordmark", height = 30, style = {} }) {
  const src = {
    full: "../../assets/logo-futura-print-full.png",
    wordmark: "../../assets/logo-futura-print-wordmark.png",
    mark: "../../assets/logo-futura-print-mark.png",
  }[variant];
  return <img src={src} alt="Futura Print" style={{ height, width: "auto", display: "block", ...style }} />;
}

/* Photographic placeholder slot — honest stand-in for real imagery.
   tone: "teal" | "orange" | "ink" | "mix" */
function Photo({ label, tone = "teal", icon = "image", height, radius = 0, grain = true, style = {} }) {
  const bg = {
    teal: "linear-gradient(135deg,#0c4a4d,#00747a 55%,#11c0c7)",
    orange: "linear-gradient(135deg,#5e2010,#a02f10 55%,#ec6238)",
    ink: "linear-gradient(135deg,#000,#23221f 60%,#3a3935)",
    mix: "linear-gradient(135deg,#0c4a4d,#23221f 55%,#a02f10)",
  }[tone];
  return (
    <div
      className={"photo" + (grain ? " fp-grain" : "")}
      style={{ height, borderRadius: radius, background: bg, ...style }}
    >
      <div className="ph-mark"><Icon name={icon} size={Math.min(64, (height || 200) * 0.28)} strokeWidth={1.4} /></div>
      {label && <div className="ph-label"><Icon name="camera" size={14} />{label}</div>}
    </div>
  );
}

/* Scroll reveal hook — adds .in when element enters viewport.
   Uses a self-terminating polling loop: scroll events and
   IntersectionObserver do NOT fire inside this scaled preview iframe,
   but getBoundingClientRect + window.scrollY stay accurate. Falls back
   gracefully and also responds to real scroll events in a normal browser. */
function useReveal() {
  React.useEffect(() => {
    let stopped = false;
    const reveal = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      let remaining = 0;
      document.querySelectorAll(".reveal").forEach((el) => {
        if (el.classList.contains("in")) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add("in");
        else remaining++;
      });
      return remaining;
    };
    const tick = () => {
      if (stopped) return;
      const remaining = reveal();
      if (remaining > 0) setTimeout(tick, 100); // keep polling until all shown
    };
    tick();
    const onScroll = () => reveal();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      stopped = true;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}

Object.assign(window, { Icon, Button, Eyebrow, Logo, Photo, useReveal });
