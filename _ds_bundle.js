/* @ds-bundle: {"format":3,"namespace":"FuturaPrintDesignSystem_3348f3","components":[],"sourceHashes":{"ui_kits/website/App.jsx":"bfa12021fcc6","ui_kits/website/Footer.jsx":"b45046b5d3e3","ui_kits/website/Header.jsx":"4955f48a2ff5","ui_kits/website/Hero.jsx":"ccb520d0b8f4","ui_kits/website/Portfolio.jsx":"4572c2ac7f42","ui_kits/website/Primitives.jsx":"4f59357525b5","ui_kits/website/Process.jsx":"0cbccfa73235","ui_kits/website/QuoteFlow.jsx":"323506e444a2","ui_kits/website/Services.jsx":"f8936a91bd32","ui_kits/website/StatsBand.jsx":"f88b53e7f995"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FuturaPrintDesignSystem_3348f3 = window.FuturaPrintDesignSystem_3348f3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/App.jsx
try { (() => {
/* ============================================================
   App — assembles the Futura Print marketing site
   ============================================================ */
function App() {
  const [quote, setQuote] = React.useState(false);
  useReveal();
  const openQuote = () => setQuote(true);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    onQuote: openQuote
  }), /*#__PURE__*/React.createElement(Hero, {
    onQuote: openQuote
  }), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(StatsBand, null), /*#__PURE__*/React.createElement(Portfolio, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Footer, {
    onQuote: openQuote
  }), /*#__PURE__*/React.createElement(QuoteFlow, {
    open: quote,
    onClose: () => setQuote(false)
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* ============================================================
   CTA + Footer — closing matte-black band with the mark
   ============================================================ */
function Footer({
  onQuote
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    id: "studio",
    style: {
      background: "var(--bg)",
      padding: "0 0 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-grain reveal",
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--r-2xl)",
      background: "linear-gradient(120deg,var(--ink),#1c2b2b 70%,var(--teal-800))",
      color: "#fff",
      padding: "72px 56px",
      boxShadow: "var(--shadow-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: "var(--teal-300)"
    }
  }, "Let's build it"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontWeight: 900,
      fontSize: "clamp(34px,4.4vw,56px)",
      letterSpacing: "-.03em",
      lineHeight: 1.02,
      margin: "16px 0 18px"
    }
  }, "Out of the screen.", /*#__PURE__*/React.createElement("br", null), "Into the room."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.74)",
      margin: "0 0 30px"
    }
  }, "Tell us about the space and the scale. We'll handle the precision, the texture, and the impression."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "pen-line",
    onClick: onQuote
  }, "Start your project"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    icon: "phone",
    style: {
      color: "#fff"
    }
  }, "Talk to the studio")))))), /*#__PURE__*/React.createElement("footer", {
    className: "fp-dark",
    style: {
      background: "#0b0b0a",
      color: "#fff",
      paddingTop: 64,
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
      gap: 32,
      paddingBottom: 48,
      borderBottom: "1px solid rgba(255,255,255,0.10)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    height: 28
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.6)",
      maxWidth: 280,
      marginTop: 18
    }
  }, "Premium large-format printing and bespoke scenography. Where dimension meets impression."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 20
    }
  }, ["instagram", "linkedin", "facebook"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.12)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "rgba(255,255,255,0.8)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s,
    size: 18
  }))))), [["Services", ["Large-format", "Vehicle wraps", "Signage", "Scenography"]], ["Studio", ["Work", "Process", "About", "Careers"]], ["Contact", ["Get a quote", "São Paulo, BR", "ola@futuraprint.com", "+55 11 0000-0000"]]].map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--teal-300)",
      marginBottom: 16
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 11
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: {
      fontSize: 14,
      color: "rgba(255,255,255,0.66)"
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 24,
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,0.42)"
    }
  }, "\xA9 2026 Futura Print \xB7 Comunica\xE7\xE3o Visual"), /*#__PURE__*/React.createElement("span", {
    className: "fp-caps",
    style: {
      fontSize: 12,
      color: "rgba(255,255,255,0.42)",
      letterSpacing: ".16em"
    }
  }, "WHERE DIMENSION MEETS IMPRESSION")))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* ============================================================
   Header — sticky, frosted over dark hero, logo + nav + CTA
   ============================================================ */
function Header({
  onQuote
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["Services", "Work", "Process", "Studio"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      transition: "background .3s var(--ease-out), box-shadow .3s, border-color .3s",
      background: scrolled ? "rgba(17,17,16,0.72)" : "transparent",
      backdropFilter: scrolled ? "blur(16px) saturate(1.4)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(16px) saturate(1.4)" : "none",
      borderBottom: "1px solid " + (scrolled ? "rgba(255,255,255,0.10)" : "transparent")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-wrap",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 78
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    height: 26
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      alignItems: "center"
    },
    className: "fp-nav-desktop"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#" + l.toLowerCase(),
    style: {
      color: "rgba(255,255,255,0.82)",
      fontWeight: 600,
      fontSize: 15,
      padding: "10px 16px",
      borderRadius: 12,
      transition: "color .2s,background .2s"
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = "#fff";
      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = "rgba(255,255,255,0.82)";
      e.currentTarget.style.background = "transparent";
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    icon: "pen-line",
    onClick: onQuote,
    style: {
      borderRadius: 999
    }
  }, "Start a project"))));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* ============================================================
   Hero — matte-black ground, the signature Futura Print look
   ============================================================ */
function Hero({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "fp-dark fp-grain",
    style: {
      background: "var(--ink)",
      position: "relative",
      paddingTop: 40,
      paddingBottom: 96,
      marginTop: -78
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -120,
      right: -160,
      width: 620,
      height: 620,
      background: "radial-gradient(circle at 50% 50%, rgba(0,177,184,0.55), rgba(0,177,184,0) 62%)",
      filter: "blur(10px)",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fp-wrap",
    style: {
      position: "relative",
      zIndex: 2,
      paddingTop: 140
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal in",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 16px",
      borderRadius: 999,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.12)",
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 99,
      background: "var(--orange-500)",
      boxShadow: "0 0 12px var(--orange-500)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: ".06em",
      color: "rgba(255,255,255,0.85)"
    }
  }, "LARGE-FORMAT PRINTING & SCENOGRAPHY")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontWeight: 900,
      fontSize: "clamp(48px,7.2vw,104px)",
      lineHeight: 0.98,
      letterSpacing: "-0.035em",
      margin: 0,
      color: "#fff"
    }
  }, "Where dimension", /*#__PURE__*/React.createElement("br", null), "meets ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--teal-300)"
    }
  }, "impression.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.74)",
      maxWidth: 600,
      marginTop: 28
    }
  }, "We bring your vision out of the screen and into the real world \u2014 premium large-format printing and bespoke scenography, with absolute precision, rich texture, and unforgettable scale."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 38,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "pen-line",
    onClick: onQuote
  }, "Start your project"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    iconRight: "arrow-down",
    style: {
      color: "#fff"
    },
    onClick: () => document.getElementById("work")?.scrollTo?.()
  }, "See the scale")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      marginTop: 64,
      flexWrap: "wrap"
    }
  }, [["5m", "max print width"], ["±0.1mm", "registration"], ["12yr", "in the craft"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 34,
      letterSpacing: "-.02em",
      color: "#fff"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: ".04em",
      color: "rgba(255,255,255,0.5)",
      textTransform: "uppercase",
      marginTop: 2
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: 16,
      marginTop: 72
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "Backlit storefront \u2014 S\xE3o Paulo",
    tone: "teal",
    icon: "store",
    height: 260,
    radius: 26,
    style: {
      boxShadow: "var(--shadow-xl)"
    }
  }), /*#__PURE__*/React.createElement(Photo, {
    label: "Vehicle wrap",
    tone: "orange",
    icon: "truck",
    height: 260,
    radius: 26,
    style: {
      boxShadow: "var(--shadow-xl)"
    }
  }), /*#__PURE__*/React.createElement(Photo, {
    label: "Expo scenography",
    tone: "mix",
    icon: "boxes",
    height: 260,
    radius: 26,
    style: {
      boxShadow: "var(--shadow-xl)"
    }
  }))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Portfolio.jsx
try { (() => {
/* ============================================================
   Portfolio — filterable gallery with click-to-open lightbox
   ============================================================ */
const FP_WORK = [{
  t: "Backlit storefront",
  cat: "Signage",
  tone: "teal",
  icon: "store",
  span: 2
}, {
  t: "Festival stage backdrop",
  cat: "Scenography",
  tone: "mix",
  icon: "music",
  span: 1
}, {
  t: "Full fleet wrap",
  cat: "Wraps",
  tone: "orange",
  icon: "truck",
  span: 1
}, {
  t: "Museum exhibition",
  cat: "Scenography",
  tone: "ink",
  icon: "boxes",
  span: 1
}, {
  t: "Stadium banner",
  cat: "Large-format",
  tone: "teal",
  icon: "flag",
  span: 1
}, {
  t: "Retail window vinyl",
  cat: "Large-format",
  tone: "orange",
  icon: "square-dashed",
  span: 1
}, {
  t: "Conference scenography",
  cat: "Scenography",
  tone: "mix",
  icon: "presentation",
  span: 2
}, {
  t: "Illuminated facade",
  cat: "Signage",
  tone: "teal",
  icon: "lightbulb",
  span: 1
}];
const FP_CATS = ["All", "Large-format", "Signage", "Wraps", "Scenography"];
function Lightbox({
  item,
  onClose
}) {
  if (!item) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "rgba(10,10,9,0.82)",
      backdropFilter: "blur(8px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "min(860px,94vw)",
      background: "var(--ink)",
      borderRadius: "var(--r-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-xl)",
      border: "1px solid rgba(255,255,255,0.12)"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    tone: item.tone,
    icon: item.icon,
    height: 420,
    label: item.t + " — full resolution placeholder"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 26px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--teal-300)"
    }
  }, item.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 22,
      marginTop: 4
    }
  }, item.t)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.16)",
      color: "#fff",
      width: 44,
      height: 44,
      borderRadius: 14,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 22
  })))));
}
function Portfolio() {
  const [cat, setCat] = React.useState("All");
  const [open, setOpen] = React.useState(null);
  const shown = FP_WORK.filter(w => cat === "All" || w.cat === cat);
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      background: "var(--bg-sunken)",
      padding: "104px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap",
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    className: "reveal"
  }, "Selected work"), /*#__PURE__*/React.createElement("h2", {
    className: "reveal",
    style: {
      fontWeight: 800,
      fontSize: "clamp(34px,4vw,52px)",
      letterSpacing: "-.02em",
      lineHeight: 1.05,
      margin: "14px 0 0"
    }
  }, "Real scale. Real texture.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, FP_CATS.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCat(c),
    style: {
      cursor: "pointer",
      fontWeight: 700,
      fontSize: 13,
      padding: "9px 16px",
      borderRadius: 999,
      border: "1px solid " + (cat === c ? "transparent" : "var(--border-strong)"),
      background: cat === c ? "var(--ink)" : "transparent",
      color: cat === c ? "#fff" : "var(--fg2)",
      transition: "all .2s"
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gridAutoRows: 220,
      gap: 18
    }
  }, shown.map(w => /*#__PURE__*/React.createElement("button", {
    key: w.t,
    onClick: () => setOpen(w),
    style: {
      gridColumn: "span " + w.span,
      padding: 0,
      border: 0,
      cursor: "pointer",
      borderRadius: "var(--r-lg)",
      overflow: "hidden",
      boxShadow: "var(--shadow-md)",
      transition: "transform .25s var(--ease-out), box-shadow .25s"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    tone: w.tone,
    icon: w.icon,
    label: w.t,
    height: "100%",
    style: {
      height: "100%"
    }
  }))))), /*#__PURE__*/React.createElement(Lightbox, {
    item: open,
    onClose: () => setOpen(null)
  }));
}
Object.assign(window, {
  Portfolio
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Portfolio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Primitives.jsx
try { (() => {
/* ============================================================
   Futura Print — shared primitives (Icon, Button, Logo, etc.)
   Exported to window for cross-file use.
   ============================================================ */

/* Lucide icon wrapper — fills an empty span imperatively so React
   reconciliation never fights the SVG that lucide injects. */
function Icon({
  name,
  size = 20,
  color,
  strokeWidth = 2,
  style = {}
}) {
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
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color,
      ...style
    }
  });
}
function Button({
  variant = "primary",
  size,
  children,
  icon,
  iconRight,
  onClick,
  style = {},
  type
}) {
  const cls = ["btn", "btn-" + variant];
  if (size) cls.push("btn-" + size);
  return /*#__PURE__*/React.createElement("button", {
    type: type || "button",
    className: cls.join(" "),
    onClick: onClick,
    style: style
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size === "lg" ? 20 : 18
  }), children, iconRight && /*#__PURE__*/React.createElement(Icon, {
    name: iconRight,
    size: size === "lg" ? 20 : 18
  }));
}
function Eyebrow({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: style
  }, children);
}

/* Brand logo. variant: "full" | "wordmark" | "mark" */
function Logo({
  variant = "wordmark",
  height = 30,
  style = {}
}) {
  const src = {
    full: "../../assets/logo-futura-print-full.png",
    wordmark: "../../assets/logo-futura-print-wordmark.png",
    mark: "../../assets/logo-futura-print-mark.png"
  }[variant];
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Futura Print",
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  });
}

/* Photographic placeholder slot — honest stand-in for real imagery.
   tone: "teal" | "orange" | "ink" | "mix" */
function Photo({
  label,
  tone = "teal",
  icon = "image",
  height,
  radius = 0,
  grain = true,
  style = {}
}) {
  const bg = {
    teal: "linear-gradient(135deg,#0c4a4d,#00747a 55%,#11c0c7)",
    orange: "linear-gradient(135deg,#5e2010,#a02f10 55%,#ec6238)",
    ink: "linear-gradient(135deg,#000,#23221f 60%,#3a3935)",
    mix: "linear-gradient(135deg,#0c4a4d,#23221f 55%,#a02f10)"
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    className: "photo" + (grain ? " fp-grain" : ""),
    style: {
      height,
      borderRadius: radius,
      background: bg,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph-mark"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: Math.min(64, (height || 200) * 0.28),
    strokeWidth: 1.4
  })), label && /*#__PURE__*/React.createElement("div", {
    className: "ph-label"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "camera",
    size: 14
  }), label));
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
      document.querySelectorAll(".reveal").forEach(el => {
        if (el.classList.contains("in")) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add("in");else remaining++;
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
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", onScroll);
    return () => {
      stopped = true;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}
Object.assign(window, {
  Icon,
  Button,
  Eyebrow,
  Logo,
  Photo,
  useReveal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Process.jsx
try { (() => {
/* ============================================================
   Process — numbered steps on matte-black ground
   ============================================================ */
const FP_STEPS = [{
  n: "01",
  icon: "messages-square",
  t: "Brief & vision",
  b: "We listen to the space, the brand and the scale you're after."
}, {
  n: "02",
  icon: "ruler",
  t: "Design & proof",
  b: "Layouts, material samples and a physical color proof in hand."
}, {
  n: "03",
  icon: "printer",
  t: "Print & build",
  b: "Cutting-edge machines, calibrated color, hand-finished detail."
}, {
  n: "04",
  icon: "truck",
  t: "Install on site",
  b: "Delivered and mounted — measured to the millimeter."
}];
function Process() {
  return /*#__PURE__*/React.createElement("section", {
    id: "process",
    className: "fp-dark fp-grain",
    style: {
      background: "var(--ink)",
      color: "#fff",
      padding: "104px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-wrap",
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 600,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    className: "reveal",
    style: {
      color: "var(--teal-300)"
    }
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    className: "reveal",
    style: {
      fontWeight: 800,
      fontSize: "clamp(34px,4vw,52px)",
      letterSpacing: "-.02em",
      lineHeight: 1.05,
      margin: "14px 0 0",
      color: "#fff"
    }
  }, "From screen to street in four steps.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 20
    }
  }, FP_STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    className: "reveal",
    style: {
      position: "relative",
      padding: "28px 22px",
      borderRadius: "var(--r-lg)",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 16,
      color: i === 3 ? "var(--orange-400)" : "var(--teal-300)",
      letterSpacing: ".1em"
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      marginBottom: 14,
      color: i === 3 ? "var(--orange-400)" : "var(--teal-300)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 30,
    strokeWidth: 1.8
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      margin: "0 0 8px"
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.66)",
      margin: 0
    }
  }, s.b))))));
}
Object.assign(window, {
  Process
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Process.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/QuoteFlow.jsx
try { (() => {
/* ============================================================
   QuoteFlow — multi-step "Start a project" modal (the interactive core)
   ============================================================ */
const QF_SERVICES = [{
  id: "lf",
  icon: "printer",
  t: "Large-format print"
}, {
  id: "wrap",
  icon: "car-front",
  t: "Vehicle wrap"
}, {
  id: "sign",
  icon: "store",
  t: "Signage"
}, {
  id: "sceno",
  icon: "boxes",
  t: "Scenography"
}];
const QF_SIZES = ["Under 1m²", "1–10m²", "10–50m²", "50m²+ / full build"];
const QF_SUBSTRATES = ["Vinyl / banner", "Backlit film", "Rigid board", "Fabric / canvas", "Not sure yet"];
function Field({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--fg2)"
    }
  }, label), children);
}
const inputStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: 15,
  padding: "13px 16px",
  borderRadius: "var(--r-md)",
  border: "1px solid var(--border-strong)",
  background: "#fff",
  boxShadow: "var(--inset-soft)",
  color: "var(--ink)",
  width: "100%",
  outline: "none"
};
function Chip({
  active,
  icon,
  children,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    type: "button",
    style: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 16px",
      borderRadius: "var(--r-md)",
      textAlign: "left",
      border: "1.5px solid " + (active ? "var(--teal-500)" : "var(--border-strong)"),
      background: active ? "var(--teal-50)" : "#fff",
      color: active ? "var(--teal-700)" : "var(--fg1)",
      boxShadow: active ? "0 0 0 3px rgba(0,177,184,.16)" : "var(--shadow-xs)",
      fontWeight: 600,
      fontSize: 14,
      transition: "all .18s"
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), active && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16
  }));
}
function QuoteFlow({
  open,
  onClose
}) {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    service: null,
    size: null,
    substrate: null,
    brief: "",
    name: "",
    email: ""
  });
  const set = (k, v) => setData(d => ({
    ...d,
    [k]: v
  }));
  React.useEffect(() => {
    if (open) {
      setStep(0);
      setData({
        service: null,
        size: null,
        substrate: null,
        brief: "",
        name: "",
        email: ""
      });
    }
  }, [open]);
  if (!open) return null;
  const canNext = step === 0 ? data.service : step === 1 ? data.size && data.substrate : data.name && data.email;
  const steps = ["Service", "Details", "Contact"];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 120,
      background: "rgba(10,10,9,0.74)",
      backdropFilter: "blur(8px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "min(580px,96vw)",
      maxHeight: "92vh",
      overflow: "auto",
      background: "#fff",
      borderRadius: "var(--r-2xl)",
      boxShadow: "var(--shadow-xl)",
      border: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 28px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-futura-print-mark.png",
    alt: "",
    style: {
      height: 30
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 17,
      letterSpacing: "-.01em"
    }
  }, "Start your project")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: "var(--n-100)",
      border: 0,
      width: 38,
      height: 38,
      borderRadius: 12,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--fg2)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 20
  }))), step < 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: "20px 28px 4px"
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      borderRadius: 99,
      background: i <= step ? "var(--teal-500)" : "var(--n-200)",
      transition: "background .3s"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: i <= step ? "var(--teal-700)" : "var(--fg3)",
      marginTop: 8
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 28px 28px"
    }
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: "-.01em",
      margin: "8px 0 4px"
    }
  }, "What are we making?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--fg2)",
      margin: "0 0 20px"
    }
  }, "Pick the closest fit \u2014 we'll refine it together."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, QF_SERVICES.map(s => /*#__PURE__*/React.createElement(Chip, {
    key: s.id,
    icon: s.icon,
    active: data.service === s.id,
    onClick: () => set("service", s.id)
  }, s.t)))), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: "-.01em",
      margin: "8px 0 18px"
    }
  }, "Scale & substrate"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--fg2)",
      marginBottom: 10
    }
  }, "Approx. size"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, QF_SIZES.map(s => /*#__PURE__*/React.createElement(Chip, {
    key: s,
    active: data.size === s,
    onClick: () => set("size", s)
  }, s)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--fg2)",
      marginBottom: 10
    }
  }, "Substrate"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, QF_SUBSTRATES.map(s => /*#__PURE__*/React.createElement(Chip, {
    key: s,
    active: data.substrate === s,
    onClick: () => set("substrate", s)
  }, s))))), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: "-.01em",
      margin: "8px 0 18px"
    }
  }, "Where do we send the quote?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: data.name,
    onChange: e => set("name", e.target.value),
    placeholder: "Ana Ribeiro"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: data.email,
    onChange: e => set("email", e.target.value),
    placeholder: "ana@brand.com",
    type: "email"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Anything else? (optional)"
  }, /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...inputStyle,
      height: 84,
      resize: "vertical"
    },
    value: data.brief,
    onChange: e => set("brief", e.target.value),
    placeholder: "Tell us about the space, deadline and scale\u2026"
  })))), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "26px 6px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: 22,
      margin: "0 auto 20px",
      background: "var(--teal-500)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "var(--shadow-teal),var(--sheen-top)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 36,
    strokeWidth: 2.6
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontWeight: 800,
      fontSize: 24,
      letterSpacing: "-.01em",
      margin: "0 0 8px"
    }
  }, "Brief received, ", data.name.split(" ")[0] || "thanks", "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--fg2)",
      lineHeight: 1.6,
      margin: "0 auto",
      maxWidth: 380
    }
  }, "Our studio will review the scale and substrate and send a measured quote to ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, data.email || "your inbox"), " within one business day."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onClose,
    icon: "check"
  }, "Done"))), step < 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => step === 0 ? onClose() : setStep(step - 1),
    style: {
      background: "transparent",
      border: 0,
      cursor: "pointer",
      fontWeight: 700,
      fontSize: 14,
      color: "var(--fg2)",
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "10px 6px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), step === 0 ? "Cancel" : "Back"), /*#__PURE__*/React.createElement(Button, {
    variant: canNext ? "primary" : "ghost",
    iconRight: step === 2 ? "send" : "arrow-right",
    onClick: () => canNext && setStep(step + 1),
    style: !canNext ? {
      opacity: 0.5,
      cursor: "not-allowed"
    } : {}
  }, step === 2 ? "Send brief" : "Continue")))));
}
Object.assign(window, {
  QuoteFlow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/QuoteFlow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ============================================================
   Services — rounded, lifted tactile cards on light ground
   ============================================================ */
const FP_SERVICES = [{
  icon: "printer",
  tone: "teal",
  title: "Large-format printing",
  body: "Banners, backlit, posters and wall graphics up to 5m wide — color-exact in CMYK and Pantone."
}, {
  icon: "car-front",
  tone: "orange",
  title: "Vehicle & fleet wraps",
  body: "Precision-cut, contour-fit wraps that turn any fleet into a moving billboard."
}, {
  icon: "boxes",
  tone: "teal",
  title: "Bespoke scenography",
  body: "Stands, sets and spatial builds with real material depth and structural scale."
}, {
  icon: "store",
  tone: "teal",
  title: "Signage & storefronts",
  body: "Illuminated letters, facades and wayfinding engineered to last outdoors."
}, {
  icon: "layers",
  tone: "orange",
  title: "Premium finishing",
  body: "Lamination, mounting, cutting and texture — the tactile last 10%."
}, {
  icon: "palette",
  tone: "teal",
  title: "Color management",
  body: "Calibrated profiles and physical proofing so the print matches the screen."
}];
function ServiceCard({
  icon,
  tone,
  title,
  body
}) {
  const [h, setH] = React.useState(false);
  const accent = tone === "orange" ? "var(--orange-600)" : "var(--teal-600)";
  const top = tone === "orange" ? "linear-gradient(135deg,var(--orange-400),var(--orange-700))" : "linear-gradient(135deg,var(--teal-400),var(--teal-700))";
  return /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: "#fff",
      borderRadius: "var(--r-xl)",
      border: "1px solid var(--border)",
      overflow: "hidden",
      boxShadow: h ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: h ? "translateY(-4px)" : "none",
      transition: "transform .25s var(--ease-out), box-shadow .25s var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-grain",
    style: {
      height: 8,
      background: top
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px 26px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: 16,
      background: "#fff",
      boxShadow: "var(--shadow-md),var(--sheen-top)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: accent,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontWeight: 800,
      fontSize: 21,
      letterSpacing: "-.01em",
      margin: "0 0 8px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--fg2)",
      margin: 0
    }
  }, body)));
}
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      background: "var(--bg)",
      padding: "104px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      marginBottom: 52
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    className: "reveal"
  }, "What we make"), /*#__PURE__*/React.createElement("h2", {
    className: "reveal",
    style: {
      fontWeight: 800,
      fontSize: "clamp(34px,4vw,52px)",
      letterSpacing: "-.02em",
      lineHeight: 1.05,
      margin: "14px 0 16px"
    }
  }, "Six ways we put your brand into the physical world."), /*#__PURE__*/React.createElement("p", {
    className: "reveal",
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: "var(--fg2)",
      margin: 0
    }
  }, "From a single backlit panel to a full expo build \u2014 every job is measured to the millimeter and finished by hand.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20
    }
  }, FP_SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.title
  }, s))))));
}
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StatsBand.jsx
try { (() => {
/* ============================================================
   StatsBand — large flat teal field (the 30% structural color)
   ============================================================ */
function StatsBand() {
  const stats = [["2,400+", "projects delivered"], ["48h", "rush turnaround"], ["5 metres", "max print width"], ["100%", "color-matched"]];
  return /*#__PURE__*/React.createElement("section", {
    className: "fp-grain",
    style: {
      background: "var(--teal-600)",
      color: "#fff",
      padding: "72px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-wrap",
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 24
    }
  }, stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "reveal",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: "clamp(36px,4.4vw,60px)",
      letterSpacing: "-.03em",
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.82)",
      marginTop: 10
    }
  }, l))))));
}
Object.assign(window, {
  StatsBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StatsBand.jsx", error: String((e && e.message) || e) }); }

})();
