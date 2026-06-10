/* ============================================================
   CTA + Footer — closing matte-black band with the mark
   ============================================================ */
function Footer({ onQuote }) {
  return (
    <React.Fragment>
      {/* closing CTA */}
      <section id="studio" style={{ background: "var(--bg)", padding: "0 0 96px" }}>
        <div className="fp-wrap">
          <div className="fp-grain reveal" style={{ position: "relative", overflow: "hidden", borderRadius: "var(--r-2xl)", background: "linear-gradient(120deg,var(--ink),#1c2b2b 70%,var(--teal-800))", color: "#fff", padding: "72px 56px", boxShadow: "var(--shadow-xl)" }}>
            <div style={{ position: "relative", zIndex: 2, maxWidth: 620 }}>
              <Eyebrow style={{ color: "var(--teal-300)" }}>Let's build it</Eyebrow>
              <h2 style={{ fontWeight: 900, fontSize: "clamp(34px,4.4vw,56px)", letterSpacing: "-.03em", lineHeight: 1.02, margin: "16px 0 18px" }}>
                Out of the screen.<br />Into the room.
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,0.74)", margin: "0 0 30px" }}>
                Tell us about the space and the scale. We'll handle the precision, the texture, and the impression.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Button variant="primary" size="lg" icon="pen-line" onClick={onQuote}>Start your project</Button>
                <Button variant="ghost" size="lg" icon="phone" style={{ color: "#fff" }}>Talk to the studio</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="fp-dark" style={{ background: "#0b0b0a", color: "#fff", paddingTop: 64, paddingBottom: 36 }}>
        <div className="fp-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 32, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
            <div>
              <Logo variant="wordmark" height={28} />
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.6)", maxWidth: 280, marginTop: 18 }}>
                Premium large-format printing and bespoke scenography. Where dimension meets impression.
              </p>
              <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
                {["instagram", "linkedin", "facebook"].map((s) => (
                  <a key={s} href="#" style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.8)" }}>
                    <Icon name={s} size={18} />
                  </a>
                ))}
              </div>
            </div>
            {[
              ["Services", ["Large-format", "Vehicle wraps", "Signage", "Scenography"]],
              ["Studio", ["Work", "Process", "About", "Careers"]],
              ["Contact", ["Get a quote", "São Paulo, BR", "ola@futuraprint.com", "+55 11 0000-0000"]],
            ].map(([h, items]) => (
              <div key={h}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--teal-300)", marginBottom: 16 }}>{h}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                  {items.map((it) => <a key={it} href="#" style={{ fontSize: 14, color: "rgba(255,255,255,0.66)" }}>{it}</a>)}
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 24, flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.42)" }}>© 2026 Futura Print · Comunicação Visual</span>
            <span className="fp-caps" style={{ fontSize: 12, color: "rgba(255,255,255,0.42)", letterSpacing: ".16em" }}>WHERE DIMENSION MEETS IMPRESSION</span>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
Object.assign(window, { Footer });
