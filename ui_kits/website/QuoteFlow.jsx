/* ============================================================
   QuoteFlow — multi-step "Start a project" modal (the interactive core)
   ============================================================ */
const QF_SERVICES = [
  { id: "lf", icon: "printer", t: "Large-format print" },
  { id: "wrap", icon: "car-front", t: "Vehicle wrap" },
  { id: "sign", icon: "store", t: "Signage" },
  { id: "sceno", icon: "boxes", t: "Scenography" },
];
const QF_SIZES = ["Under 1m²", "1–10m²", "10–50m²", "50m²+ / full build"];
const QF_SUBSTRATES = ["Vinyl / banner", "Backlit film", "Rigid board", "Fabric / canvas", "Not sure yet"];

function Field({ label, children }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg2)" }}>{label}</span>
      {children}
    </label>
  );
}
const inputStyle = {
  fontFamily: "var(--font-sans)", fontSize: 15, padding: "13px 16px", borderRadius: "var(--r-md)",
  border: "1px solid var(--border-strong)", background: "#fff", boxShadow: "var(--inset-soft)", color: "var(--ink)", width: "100%", outline: "none",
};

function Chip({ active, icon, children, onClick }) {
  return (
    <button onClick={onClick} type="button"
      style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10, padding: "14px 16px", borderRadius: "var(--r-md)", textAlign: "left",
        border: "1.5px solid " + (active ? "var(--teal-500)" : "var(--border-strong)"),
        background: active ? "var(--teal-50)" : "#fff", color: active ? "var(--teal-700)" : "var(--fg1)",
        boxShadow: active ? "0 0 0 3px rgba(0,177,184,.16)" : "var(--shadow-xs)", fontWeight: 600, fontSize: 14, transition: "all .18s" }}>
      {icon && <Icon name={icon} size={20} />}
      <span style={{ flex: 1 }}>{children}</span>
      {active && <Icon name="check" size={16} />}
    </button>
  );
}

function QuoteFlow({ open, onClose }) {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({ service: null, size: null, substrate: null, brief: "", name: "", email: "" });
  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));
  React.useEffect(() => { if (open) { setStep(0); setData({ service: null, size: null, substrate: null, brief: "", name: "", email: "" }); } }, [open]);
  if (!open) return null;

  const canNext = step === 0 ? data.service : step === 1 ? data.size && data.substrate : data.name && data.email;
  const steps = ["Service", "Details", "Contact"];

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 120, background: "rgba(10,10,9,0.74)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: "min(580px,96vw)", maxHeight: "92vh", overflow: "auto", background: "#fff", borderRadius: "var(--r-2xl)", boxShadow: "var(--shadow-xl)", border: "1px solid var(--border)" }}>
        {/* header */}
        <div style={{ padding: "24px 28px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="../../assets/logo-futura-print-mark.png" alt="" style={{ height: 30 }} />
            <span style={{ fontWeight: 800, fontSize: 17, letterSpacing: "-.01em" }}>Start your project</span>
          </div>
          <button onClick={onClose} aria-label="Close" style={{ background: "var(--n-100)", border: 0, width: 38, height: 38, borderRadius: 12, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--fg2)" }}>
            <Icon name="x" size={20} />
          </button>
        </div>

        {step < 3 && (
          <div style={{ display: "flex", gap: 8, padding: "20px 28px 4px" }}>
            {steps.map((s, i) => (
              <div key={s} style={{ flex: 1 }}>
                <div style={{ height: 5, borderRadius: 99, background: i <= step ? "var(--teal-500)" : "var(--n-200)", transition: "background .3s" }} />
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: i <= step ? "var(--teal-700)" : "var(--fg3)", marginTop: 8 }}>{s}</div>
              </div>
            ))}
          </div>
        )}

        <div style={{ padding: "18px 28px 28px" }}>
          {step === 0 && (
            <React.Fragment>
              <h3 style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-.01em", margin: "8px 0 4px" }}>What are we making?</h3>
              <p style={{ fontSize: 14, color: "var(--fg2)", margin: "0 0 20px" }}>Pick the closest fit — we'll refine it together.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {QF_SERVICES.map((s) => <Chip key={s.id} icon={s.icon} active={data.service === s.id} onClick={() => set("service", s.id)}>{s.t}</Chip>)}
              </div>
            </React.Fragment>
          )}

          {step === 1 && (
            <React.Fragment>
              <h3 style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-.01em", margin: "8px 0 18px" }}>Scale & substrate</h3>
              <div style={{ marginBottom: 18 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg2)", marginBottom: 10 }}>Approx. size</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {QF_SIZES.map((s) => <Chip key={s} active={data.size === s} onClick={() => set("size", s)}>{s}</Chip>)}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg2)", marginBottom: 10 }}>Substrate</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {QF_SUBSTRATES.map((s) => <Chip key={s} active={data.substrate === s} onClick={() => set("substrate", s)}>{s}</Chip>)}
                </div>
              </div>
            </React.Fragment>
          )}

          {step === 2 && (
            <React.Fragment>
              <h3 style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-.01em", margin: "8px 0 18px" }}>Where do we send the quote?</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <Field label="Your name"><input style={inputStyle} value={data.name} onChange={(e) => set("name", e.target.value)} placeholder="Ana Ribeiro" /></Field>
                <Field label="Email"><input style={inputStyle} value={data.email} onChange={(e) => set("email", e.target.value)} placeholder="ana@brand.com" type="email" /></Field>
                <Field label="Anything else? (optional)"><textarea style={{ ...inputStyle, height: 84, resize: "vertical" }} value={data.brief} onChange={(e) => set("brief", e.target.value)} placeholder="Tell us about the space, deadline and scale…" /></Field>
              </div>
            </React.Fragment>
          )}

          {step === 3 && (
            <div style={{ textAlign: "center", padding: "26px 6px 14px" }}>
              <div style={{ width: 72, height: 72, borderRadius: 22, margin: "0 auto 20px", background: "var(--teal-500)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-teal),var(--sheen-top)" }}>
                <Icon name="check" size={36} strokeWidth={2.6} />
              </div>
              <h3 style={{ fontWeight: 800, fontSize: 24, letterSpacing: "-.01em", margin: "0 0 8px" }}>Brief received, {data.name.split(" ")[0] || "thanks"}.</h3>
              <p style={{ fontSize: 15, color: "var(--fg2)", lineHeight: 1.6, margin: "0 auto", maxWidth: 380 }}>
                Our studio will review the scale and substrate and send a measured quote to <strong style={{ color: "var(--ink)" }}>{data.email || "your inbox"}</strong> within one business day.
              </p>
              <div style={{ marginTop: 24 }}><Button variant="primary" onClick={onClose} icon="check">Done</Button></div>
            </div>
          )}

          {step < 3 && (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 26 }}>
              <button onClick={() => (step === 0 ? onClose() : setStep(step - 1))}
                style={{ background: "transparent", border: 0, cursor: "pointer", fontWeight: 700, fontSize: 14, color: "var(--fg2)", display: "flex", alignItems: "center", gap: 6, padding: "10px 6px" }}>
                <Icon name="arrow-left" size={16} />{step === 0 ? "Cancel" : "Back"}
              </button>
              <Button variant={canNext ? "primary" : "ghost"} iconRight={step === 2 ? "send" : "arrow-right"}
                onClick={() => canNext && setStep(step + 1)} style={!canNext ? { opacity: 0.5, cursor: "not-allowed" } : {}}>
                {step === 2 ? "Send brief" : "Continue"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { QuoteFlow });
