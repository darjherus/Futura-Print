/* ============================================================
   Header — sticky, frosted over dark hero, logo + nav + CTA
   ============================================================ */
function Header({ onQuote }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "Work", "Process", "Studio"];

  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: 50,
        transition: "background .3s var(--ease-out), box-shadow .3s, border-color .3s",
        background: scrolled ? "rgba(17,17,16,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(1.4)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(1.4)" : "none",
        borderBottom: "1px solid " + (scrolled ? "rgba(255,255,255,0.10)" : "transparent"),
      }}
    >
      <div className="fp-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 78 }}>
        <a href="#top" style={{ display: "flex", alignItems: "center" }}><Logo variant="wordmark" height={26} /></a>

        <nav style={{ display: "flex", gap: 4, alignItems: "center" }} className="fp-nav-desktop">
          {links.map((l) => (
            <a key={l} href={"#" + l.toLowerCase()}
              style={{ color: "rgba(255,255,255,0.82)", fontWeight: 600, fontSize: 15, padding: "10px 16px", borderRadius: 12, transition: "color .2s,background .2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.82)"; e.currentTarget.style.background = "transparent"; }}>
              {l}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Button variant="primary" size="sm" icon="pen-line" onClick={onQuote} style={{ borderRadius: 999 }}>
            Start a project
          </Button>
        </div>
      </div>
    </header>
  );
}
Object.assign(window, { Header });
