/* ============================================================
   Process — numbered steps on matte-black ground
   ============================================================ */
const FP_STEPS = [
  { n: "01", icon: "messages-square", t: "Brief & vision", b: "We listen to the space, the brand and the scale you're after." },
  { n: "02", icon: "ruler", t: "Design & proof", b: "Layouts, material samples and a physical color proof in hand." },
  { n: "03", icon: "printer", t: "Print & build", b: "Cutting-edge machines, calibrated color, hand-finished detail." },
  { n: "04", icon: "truck", t: "Install on site", b: "Delivered and mounted — measured to the millimeter." },
];

function Process() {
  return (
    <section id="process" className="fp-dark fp-grain" style={{ background: "var(--ink)", color: "#fff", padding: "104px 0" }}>
      <div className="fp-wrap" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 600, marginBottom: 56 }}>
          <Eyebrow className="reveal" style={{ color: "var(--teal-300)" }}>How it works</Eyebrow>
          <h2 className="reveal" style={{ fontWeight: 800, fontSize: "clamp(34px,4vw,52px)", letterSpacing: "-.02em", lineHeight: 1.05, margin: "14px 0 0", color: "#fff" }}>
            From screen to street in four steps.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {FP_STEPS.map((s, i) => (
            <div key={s.n} className="reveal" style={{ position: "relative", padding: "28px 22px", borderRadius: "var(--r-lg)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }}>
              <div style={{ fontWeight: 900, fontSize: 16, color: i === 3 ? "var(--orange-400)" : "var(--teal-300)", letterSpacing: ".1em" }}>{s.n}</div>
              <div style={{ marginTop: 18, marginBottom: 14, color: i === 3 ? "var(--orange-400)" : "var(--teal-300)" }}><Icon name={s.icon} size={30} strokeWidth={1.8} /></div>
              <h4 style={{ fontWeight: 700, fontSize: 18, margin: "0 0 8px" }}>{s.t}</h4>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.66)", margin: 0 }}>{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Process });
