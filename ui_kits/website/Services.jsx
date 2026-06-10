/* ============================================================
   Services — rounded, lifted tactile cards on light ground
   ============================================================ */
const FP_SERVICES = [
  { icon: "printer", tone: "teal", title: "Large-format printing", body: "Banners, backlit, posters and wall graphics up to 5m wide — color-exact in CMYK and Pantone." },
  { icon: "car-front", tone: "orange", title: "Vehicle & fleet wraps", body: "Precision-cut, contour-fit wraps that turn any fleet into a moving billboard." },
  { icon: "boxes", tone: "teal", title: "Bespoke scenography", body: "Stands, sets and spatial builds with real material depth and structural scale." },
  { icon: "store", tone: "teal", title: "Signage & storefronts", body: "Illuminated letters, facades and wayfinding engineered to last outdoors." },
  { icon: "layers", tone: "orange", title: "Premium finishing", body: "Lamination, mounting, cutting and texture — the tactile last 10%." },
  { icon: "palette", tone: "teal", title: "Color management", body: "Calibrated profiles and physical proofing so the print matches the screen." },
];

function ServiceCard({ icon, tone, title, body }) {
  const [h, setH] = React.useState(false);
  const accent = tone === "orange" ? "var(--orange-600)" : "var(--teal-600)";
  const top = tone === "orange"
    ? "linear-gradient(135deg,var(--orange-400),var(--orange-700))"
    : "linear-gradient(135deg,var(--teal-400),var(--teal-700))";
  return (
    <div className="reveal" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: "#fff", borderRadius: "var(--r-xl)", border: "1px solid var(--border)", overflow: "hidden",
        boxShadow: h ? "var(--shadow-lg)" : "var(--shadow-sm)", transform: h ? "translateY(-4px)" : "none",
        transition: "transform .25s var(--ease-out), box-shadow .25s var(--ease-out)" }}>
      <div className="fp-grain" style={{ height: 8, background: top }} />
      <div style={{ padding: "26px 26px 28px" }}>
        <div style={{ width: 54, height: 54, borderRadius: 16, background: "#fff", boxShadow: "var(--shadow-md),var(--sheen-top)", display: "flex", alignItems: "center", justifyContent: "center", color: accent, marginBottom: 18 }}>
          <Icon name={icon} size={26} />
        </div>
        <h3 style={{ fontWeight: 800, fontSize: 21, letterSpacing: "-.01em", margin: "0 0 8px" }}>{title}</h3>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--fg2)", margin: 0 }}>{body}</p>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" style={{ background: "var(--bg)", padding: "104px 0" }}>
      <div className="fp-wrap">
        <div style={{ maxWidth: 640, marginBottom: 52 }}>
          <Eyebrow className="reveal">What we make</Eyebrow>
          <h2 className="reveal" style={{ fontWeight: 800, fontSize: "clamp(34px,4vw,52px)", letterSpacing: "-.02em", lineHeight: 1.05, margin: "14px 0 16px" }}>
            Six ways we put your brand into the physical world.
          </h2>
          <p className="reveal" style={{ fontSize: 18, lineHeight: 1.6, color: "var(--fg2)", margin: 0 }}>
            From a single backlit panel to a full expo build — every job is measured to the millimeter and finished by hand.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {FP_SERVICES.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Services });
