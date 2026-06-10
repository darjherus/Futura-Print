/* ============================================================
   StatsBand — large flat teal field (the 30% structural color)
   ============================================================ */
function StatsBand() {
  const stats = [
    ["2,400+", "projects delivered"],
    ["48h", "rush turnaround"],
    ["5 metres", "max print width"],
    ["100%", "color-matched"],
  ];
  return (
    <section className="fp-grain" style={{ background: "var(--teal-600)", color: "#fff", padding: "72px 0" }}>
      <div className="fp-wrap" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {stats.map(([n, l]) => (
            <div key={l} className="reveal" style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 900, fontSize: "clamp(36px,4.4vw,60px)", letterSpacing: "-.03em", lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "rgba(255,255,255,0.82)", marginTop: 10 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { StatsBand });
