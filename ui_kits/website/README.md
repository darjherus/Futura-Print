# Futura Print — Website UI Kit

A high-fidelity, interactive recreation of the Futura Print marketing site,
built with React (in-browser Babel) on top of the shared design tokens.

## Run
Open `index.html`. It loads `../../colors_and_type.css` (tokens + fonts),
`site.css` (kit helpers), Lucide icons, React 18, and the JSX components below.

## Files
| File | What it is |
|---|---|
| `index.html` | Entry point — assembles the full page and the quote modal |
| `site.css` | Buttons, photo placeholders, reveal animation, kit-level helpers |
| `Primitives.jsx` | `Icon`, `Button`, `Eyebrow`, `Logo`, `Photo`, `useReveal` (shared via `window`) |
| `Header.jsx` | Sticky, frosted-on-scroll nav with logo + CTA |
| `Hero.jsx` | Matte-black hero with stat row and showcase strip |
| `Services.jsx` | Lifted tactile service cards (light ground) |
| `StatsBand.jsx` | Flat teal structural band |
| `Portfolio.jsx` | Filterable gallery + click-to-open lightbox |
| `Process.jsx` | Four-step process on matte black |
| `QuoteFlow.jsx` | Three-step "Start a project" modal (the interactive core) |
| `Footer.jsx` | Closing CTA card + footer |
| `App.jsx` | Composition root |

## Interactions
- **Start a project** (header / hero / footer) → opens the multi-step quote modal
  (service → scale & substrate → contact → success).
- **Portfolio** category filter + lightbox.
- Header frosts on scroll; sections animate in on scroll.

## Notes
- Components are simplified, mainly-cosmetic recreations — not production logic.
- Imagery uses honest `Photo` placeholders (labeled gradient tiles); drop real
  installation photography in for production.
- Icons: Lucide pinned to `0.294.0` (keeps brand icons). Component coverage is
  the priority, not replicating every section.
- Reveal uses a visible-by-default base + entrance animation so content is never
  stuck hidden if JS/animation is throttled.
