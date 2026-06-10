/* ============================================================
   Portfolio — filterable gallery with click-to-open lightbox
   ============================================================ */
const FP_WORK = [
  { t: "Backlit storefront", cat: "Signage", tone: "teal", icon: "store", span: 2 },
  { t: "Festival stage backdrop", cat: "Scenography", tone: "mix", icon: "music", span: 1 },
  { t: "Full fleet wrap", cat: "Wraps", tone: "orange", icon: "truck", span: 1 },
  { t: "Museum exhibition", cat: "Scenography", tone: "ink", icon: "boxes", span: 1 },
  { t: "Stadium banner", cat: "Large-format", tone: "teal", icon: "flag", span: 1 },
  { t: "Retail window vinyl", cat: "Large-format", tone: "orange", icon: "square-dashed", span: 1 },
  { t: "Conference scenography", cat: "Scenography", tone: "mix", icon: "presentation", span: 2 },
  { t: "Illuminated facade", cat: "Signage", tone: "teal", icon: "lightbulb", span: 1 },
];
const FP_CATS = ["All", "Large-format", "Signage", "Wraps", "Scenography"];

function Lightbox({ item, onClose }) {
  if (!item) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(10,10,9,0.82)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 28 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: "min(860px,94vw)", background: "var(--ink)", borderRadius: "var(--r-xl)", overflow: "hidden", boxShadow: "var(--shadow-xl)", border: "1px solid rgba(255,255,255,0.12)" }}>
        <Photo tone={item.tone} icon={item.icon} height={420} label={item.t + " — full resolution placeholder"} />
        <div style={{ padding: "22px 26px", display: "flex", alignItems: "center", justifyContent: "space-between", color: "#fff" }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--teal-300)" }}>{item.cat}</div>
            <div style={{ fontWeight: 800, fontSize: 22, marginTop: 4 }}>{item.t}</div>
          </div>
          <button onClick={onClose} aria-label="Close" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", color: "#fff", width: 44, height: 44, borderRadius: 14, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="x" size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  const [cat, setCat] = React.useState("All");
  const [open, setOpen] = React.useState(null);
  const shown = FP_WORK.filter((w) => cat === "All" || w.cat === cat);
  return (
    <section id="work" style={{ background: "var(--bg-sunken)", padding: "104px 0" }}>
      <div className="fp-wrap">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 36 }}>
          <div style={{ maxWidth: 560 }}>
            <Eyebrow className="reveal">Selected work</Eyebrow>
            <h2 className="reveal" style={{ fontWeight: 800, fontSize: "clamp(34px,4vw,52px)", letterSpacing: "-.02em", lineHeight: 1.05, margin: "14px 0 0" }}>
              Real scale. Real texture.
            </h2>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {FP_CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)}
                style={{ cursor: "pointer", fontWeight: 700, fontSize: 13, padding: "9px 16px", borderRadius: 999, border: "1px solid " + (cat === c ? "transparent" : "var(--border-strong)"),
                  background: cat === c ? "var(--ink)" : "transparent", color: cat === c ? "#fff" : "var(--fg2)", transition: "all .2s" }}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridAutoRows: 220, gap: 18 }}>
          {shown.map((w) => (
            <button key={w.t} onClick={() => setOpen(w)}
              style={{ gridColumn: "span " + w.span, padding: 0, border: 0, cursor: "pointer", borderRadius: "var(--r-lg)", overflow: "hidden", boxShadow: "var(--shadow-md)", transition: "transform .25s var(--ease-out), box-shadow .25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}>
              <Photo tone={w.tone} icon={w.icon} label={w.t} height="100%" style={{ height: "100%" }} />
            </button>
          ))}
        </div>
      </div>
      <Lightbox item={open} onClose={() => setOpen(null)} />
    </section>
  );
}
Object.assign(window, { Portfolio });
