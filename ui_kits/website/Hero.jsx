/* ============================================================
   Hero — matte-black ground, the signature Futura Print look
   ============================================================ */
function Hero({ onQuote }) {
  return (
    <section id="top" className="fp-dark fp-grain" style={{ background: "var(--ink)", position: "relative", paddingTop: 40, paddingBottom: 96, marginTop: -78 }}>
      {/* large structural teal field, off to the right */}
      <div style={{ position: "absolute", top: -120, right: -160, width: 620, height: 620, background: "radial-gradient(circle at 50% 50%, rgba(0,177,184,0.55), rgba(0,177,184,0) 62%)", filter: "blur(10px)", zIndex: 0 }} />
      <div className="fp-wrap" style={{ position: "relative", zIndex: 2, paddingTop: 140 }}>
        <div style={{ maxWidth: 880 }}>
          <div className="reveal in" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 16px", borderRadius: 999, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", marginBottom: 26 }}>
            <span style={{ width: 8, height: 8, borderRadius: 99, background: "var(--orange-500)", boxShadow: "0 0 12px var(--orange-500)" }} />
            <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: ".06em", color: "rgba(255,255,255,0.85)" }}>LARGE-FORMAT PRINTING & SCENOGRAPHY</span>
          </div>

          <h1 style={{ fontWeight: 900, fontSize: "clamp(48px,7.2vw,104px)", lineHeight: 0.98, letterSpacing: "-0.035em", margin: 0, color: "#fff" }}>
            Where dimension<br />meets <span style={{ color: "var(--teal-300)" }}>impression.</span>
          </h1>

          <p style={{ fontSize: 20, lineHeight: 1.6, color: "rgba(255,255,255,0.74)", maxWidth: 600, marginTop: 28 }}>
            We bring your vision out of the screen and into the real world — premium large-format printing and bespoke scenography, with absolute precision, rich texture, and unforgettable scale.
          </p>

          <div style={{ display: "flex", gap: 14, marginTop: 38, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" icon="pen-line" onClick={onQuote}>Start your project</Button>
            <Button variant="ghost" size="lg" iconRight="arrow-down" style={{ color: "#fff" }} onClick={() => document.getElementById("work")?.scrollTo?.()}>See the scale</Button>
          </div>

          <div style={{ display: "flex", gap: 40, marginTop: 64, flexWrap: "wrap" }}>
            {[["5m", "max print width"], ["±0.1mm", "registration"], ["12yr", "in the craft"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontWeight: 900, fontSize: 34, letterSpacing: "-.02em", color: "#fff" }}>{n}</div>
                <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: ".04em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* full-bleed showcase strip */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 16, marginTop: 72 }}>
          <Photo label="Backlit storefront — São Paulo" tone="teal" icon="store" height={260} radius={26} style={{ boxShadow: "var(--shadow-xl)" }} />
          <Photo label="Vehicle wrap" tone="orange" icon="truck" height={260} radius={26} style={{ boxShadow: "var(--shadow-xl)" }} />
          <Photo label="Expo scenography" tone="mix" icon="boxes" height={260} radius={26} style={{ boxShadow: "var(--shadow-xl)" }} />
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
