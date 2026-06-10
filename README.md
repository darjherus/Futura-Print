# Futura Print — Design System

> **Where Dimension Meets Impression.**
> *Comunicação Visual* — large-format printing & bespoke scenography.

Futura Print transforms spaces and amplifies brands through **premium
large-format printing** and **bespoke scenography**. The work combines
cutting-edge graphic technology with high-tactile craftsmanship: vision pulled
out of the screen and into the real world — with absolute precision, rich
texture, and unforgettable scale.

This repository is the brand's design system: the typography, color, shadow and
spacing foundations, the real logo assets, the voice & tone guide, and a
high-fidelity UI kit for the marketing surface. Use it to generate
well-branded interfaces, decks, and assets for Futura Print.

---

## What was provided

This system was built from brand source material supplied directly by the
client — no codebase or Figma file was attached. Sources:

| Source | What it is |
|---|---|
| `uploads/Logo_Futura Print@4x.png` | Full lockup: "Futura **P**rint" wordmark + `COMUNICAÇÃO VISUAL` tagline (white + teal, for dark grounds) |
| `uploads/Logo Futura Print 2@4x.png` | The "P" symbol mark alone (teal) |
| `uploads/Ativo Logo Futura Print 3 @4x.png` | "Futura **P**rint" wordmark, no tagline (white + teal) |
| `uploads/Referencia de cores@4x.png` | Official color reference: the 60/30/10 split |
| `uploads/Poppins-*.ttf` (18 files) | **Poppins** type family — the brand typeface |
| Brand brief | Company description, voice, and the visual-foundations notes captured below |

> **Note on the logos:** all supplied lockups are the *light* version (white
> wordmark, teal mark) intended for the matte-black ground. A dark-on-light
> version was **not** provided — see Caveats. On light backgrounds use the
> teal "P" mark plus near-black (`--ink`) wordmark text.

> **Language:** the brand is Brazilian and its tagline is Portuguese
> (*Comunicação Visual* = Visual Communication). Marketing copy may be authored
> in PT-BR or EN depending on audience; this kit ships EN sample copy with the
> PT-BR tagline preserved on the logo.

---

## The system at a glance

- **Type:** Poppins, the full weight range. Geometric, confident, rounded —
  it mirrors the rounded corners of the brand marks. Black/ExtraBold for
  display, Regular/Medium for body.
- **Color:** a strict **60 / 30 / 10** discipline — 60% matte black
  (`#111110`) *or* pure white, 30% deep teal (`#00b1b8`), 10% sharp orange
  (`#e84b1e`).
- **Surface language:** skeuomorphic realism. Highly rounded corners,
  dramatic directional lighting, multi-layered "pop-out" shadows, and a subtle
  grain/noise overlay that mimics canvas and matte print substrates.
- **Voice:** premium, impactful, authoritative — craft, scale, precision.

---

## CONTENT FUNDAMENTALS

**Voice.** Premium, impactful, authoritative. Futura Print speaks like a master
craftsperson who also happens to run cutting-edge machines — proud of the
physical object, confident about the engineering behind it. Never cute, never
jargon-soaked, never apologetic.

**Three pillars every line should ladder up to:**
1. **Physical craftsmanship** — texture, material, the hand and the substrate.
2. **Structural scale** — big, architectural, space-transforming.
3. **Technical precision** — exact color, exact registration, no compromise.

**Person & address.** Talk to the client as **"you"**, speak as **"we"**. The
client's brand is the hero; Futura Print is the expert that amplifies it.
*"We bring your vision out of the screen and into the real world."*

**Casing.**
- Display headlines: **sentence case** for long lines; **Title Case** allowed
  for short two-/three-word statements (e.g. *"Real Scale. Real Texture."*).
- Eyebrows, labels, nav, and the tagline: **UPPERCASE** with wide letter-
  spacing (`--tracking-wide` / `--tracking-caps`), echoing `COMUNICAÇÃO VISUAL`.
- Body: normal sentence case.

**Sentence rhythm.** Lead with a short, declarative punch, then expand with one
richer, texture-laden sentence. Em-dashes for dramatic pauses. Periods as
stops — fragments are welcome for impact: *"Out of the screen. Into the room."*

**Vocabulary that's on-brand:** dimension, impression, scale, substrate,
tactile, scenography, large-format, registration, finish, depth, presence,
bespoke, precision, amplify, transform, material, canvas, matte.
**Avoid:** "solutions," "synergy," "cheap," "basic," generic startup-speak,
exclamation overload.

**Numbers & specs.** Lean into concrete technical specs — they prove
precision: print widths in meters/cm, DPI, color systems (CMYK / Pantone),
substrate names, square-meterage. Specifics > adjectives. Don't invent stats
for decoration; every number should be real and earn its place.

**Emoji.** None. The brand expresses warmth through texture and color, not
emoji. Unicode pictographs are not used in product or marketing copy.

**Examples (on-brand):**
- *"Where dimension meets impression."* (tagline)
- *"We bring your vision out of the screen and into the real world — with
  absolute precision, rich texture, and unforgettable scale."*
- Eyebrow: `LARGE-FORMAT PRINTING`
- CTA: *"Start your project"*, *"Request a sample"*, *"See the scale"*
- Section opener: *"Real materials. Real scale. Measured to the millimeter."*

---

## VISUAL FOUNDATIONS

**Color & the 60/30/10 rule.** This is the most important rule in the system.
- **60% ground:** matte black `#111110` *or* pure white `#ffffff`. Pick one per
  surface and let it dominate. The signature look is the matte-black ground.
- **30% structure:** deep teal `#00b1b8` — section blocks, panels, large
  supporting shapes, the "P" mark, primary buttons, links.
- **10% accent:** sharp orange `#e84b1e` — strictly strategic. One accent per
  view: a single CTA, a highlight, a key number. Orange never becomes a
  background; it earns attention precisely because it's rare.
Neutrals are **warm-tinted** greys sampled toward the ink, never cold blue-grey.

**Typography.** Poppins everywhere. Display/hero in Black (900) or ExtraBold
(800) with tight negative tracking (`-0.03em` to `-0.015em`) so big letters
lock together into a solid mass. Body in Regular (400)/Medium (500) at relaxed
line-height (1.6). Eyebrows & labels in Bold uppercase with wide tracking. The
italic Black weight is reserved for moments of motion/emphasis (it matches the
forward-leaning italic "Print" in the logo).

**Spacing & layout.** 4px base rhythm; generous section padding (80–128px on
desktop). Strong, confident grid. Content max-width ~1200px. Big negative space
around hero statements — scale is communicated by letting things breathe, then
punctuating with one oversized element.

**Backgrounds.** Solid matte black or solid white dominate — **no decorative
gradient washes** as the primary ground. Where depth is wanted, use:
- the **grain/noise overlay** (`.fp-grain`) at low opacity to evoke canvas /
  matte stock,
- full-bleed **photography** of installations, signage, and printed material
  (the product *is* visual), placed edge-to-edge,
- large flat **teal blocks** as structural color fields.
Gradients appear only subtly *within* the teal mark or as soft directional
lighting on a raised component — never as a rainbow background.

**Skeuomorphic depth (the signature).** Components physically *pop out* of the
page. Achieve it with:
- **Multi-layered shadows** (`--shadow-md/lg/xl`) — a tight contact shadow plus
  a soft long cast, so cards feel lifted and grounded at once.
- **Directional lighting**: a top sheen (`--sheen-top`) on raised buttons and a
  subtle inner bottom shadow, as if lit from above.
- **Colored glow lifts** (`--shadow-teal`, `--shadow-orange`) under filled
  brand buttons so they feel backlit.
- **Inset bevels** (`--inset-deep`) for pressed/recessed states and inputs.

**Corner radii.** Highly rounded throughout — it's core to the brand (mirrors
the logo's soft terminals). Buttons & inputs `--r-md`(18px) to `--r-lg`(26px);
cards `--r-lg`(26px) to `--r-xl`(36px); pills/chips `--r-pill`. Avoid sharp 0–4px
corners except hairline dividers.

**Cards.** Rounded (26–36px), white (or `--n-800` on dark), lifted with
`--shadow-md`/`lg`, optional 1px `--border` hairline, optional top sheen. They
look like physical printed tiles or sample swatches resting on the surface.

**Borders.** Hairline `--border` (warm grey on light, low-alpha white on dark).
Used sparingly — depth comes from shadow, not outlines. Strong borders only for
inputs and selected states.

**Hover states.** Raised elements lift further (increase shadow + translateY
−2px) and brighten slightly. Brand-fill buttons deepen one step on the scale
(teal-500→teal-600) while the glow intensifies. Links: teal→teal-700 / underline
reveal. Transitions ~220ms on `--ease-out`.

**Press / active states.** Components *depress*: translateY 0/+1px, shadow
collapses to `--shadow-xs`, and an `--inset-deep` bevel appears so the surface
reads as pushed in. A confident, physical click.

**Motion.** Purposeful and weighty, never bouncy-for-the-sake-of-it. Default
`--ease-out` (confident settle). `--ease-pop` (slight overshoot) reserved for
elements entering or for the tactile button release. Fades + short rises
(12–20px) on scroll-in. Durations 120–420ms. Respect
`prefers-reduced-motion`.

**Transparency & blur.** Used sparingly: a frosted (`backdrop-filter: blur`)
sticky header over photography; subtle scrims/protection gradients behind text
on full-bleed images (dark-to-transparent from the edge that holds the text).
No glassmorphism everywhere — it's a tool for legibility, not decoration.

**Imagery vibe.** Rich, warm, high-contrast photography of real printed work,
installations, and substrates — texture is the point. Slight grain welcome.
Cool teal and warm orange can appear as in-scene brand color. Avoid flat
stocky studio shots; favor material close-ups and dramatic-scale environments.

**Iconography.** See ICONOGRAPHY below.

---

## ICONOGRAPHY

No proprietary icon set was supplied with the brand. The system standardizes on
**[Lucide](https://lucide.dev)** — an open-source line-icon family whose
rounded caps/joins and consistent ~2px stroke echo the rounded, geometric
character of the Futura Print marks and Poppins. *This is a documented
substitution; if Futura Print has an in-house icon set, drop the SVGs into
`assets/icons/` and update this section.*

**Rules.**
- **Style:** line icons, ~2px stroke, rounded linecap & linejoin. Don't mix
  filled and line icons in the same view.
- **Color:** inherit `currentColor`. Default `--fg2`; teal for active/branded,
  orange only for the single accent moment.
- **Sizing:** 20px inline with text, 24px in nav/buttons, 32–40px as feature
  glyphs. Keep stroke optically consistent across sizes.
- **Usage:** functional and restrained — never decorative clusters. One clear
  icon per affordance.
- **Logo vs. icons:** the "P" symbol mark is brand identity, **not** a UI icon —
  don't use it inline as a bullet or button glyph.
- **Emoji / unicode glyphs:** not used as icons anywhere.

**Load (UI kit / prototypes):** pin a version that still ships brand icons
(later lucide releases dropped instagram/linkedin/facebook):
```html
<script src="https://cdn.jsdelivr.net/npm/lucide@0.294.0/dist/umd/lucide.min.js"></script>
<!-- <i data-lucide="printer"></i> ... --> <script>lucide.createIcons()</script>
```

**Logo assets** (`assets/`):
- `logo-futura-print-full.png` — full lockup + tagline (white/teal, **dark** grounds)
- `logo-futura-print-wordmark.png` — wordmark, no tagline (white/teal, **dark**)
- `logo-futura-print-mark.png` — the "FP" symbol mark alone (white F + teal P, **dark**)
- `logo-futura-print-*-dark.png` — **light-ground** variants (white parts recolored
  to ink #111110, teal preserved) for full / wordmark / mark
- `color-reference.png` — the official 60/30/10 swatch sheet

> **Logo on color:** on a **teal** ground render the wordmark fully white
> (`filter: brightness(0) invert(1)`). On **white** grounds use the `*-dark`
> variants so the white "F" / "Futura" becomes ink (#111110).

---

## File index

Root of this design system:

| File / folder | Purpose |
|---|---|
| `README.md` | This file — brand context, content & visual foundations, iconography, index |
| `SKILL.md` | Agent-Skill manifest so this system works as a Claude skill |
| `colors_and_type.css` | All design tokens: fonts, color scales, semantic vars, shadows, radii, spacing, type, motion |
| `fonts/` | Poppins `.ttf` weights used by the system |
| `assets/` | Logo lockups, the "P" mark, color reference |
| `preview/` | Small HTML specimen cards that populate the Design System tab |
| `Futura Print — Landing Page.html` | Finished skeuomorphic institutional + portfolio landing page (lift sections from it) |
| `ui_kits/website/` | High-fidelity marketing-site UI kit (React/JSX components + interactive `index.html`) |

### UI kits
- **`ui_kits/website/`** — Futura Print marketing site: sticky header, hero,
  services, gallery/portfolio, process, quote-request flow, footer. Components
  are modular JSX; `index.html` is an interactive click-through.

---

## Caveats / things to confirm
- **Dark-on-light logos were generated programmatically** (white pixels recolored
  to ink #111110, teal preserved) since only the white/teal lockups were supplied.
  They read cleanly, but please supply an official dark lockup if one exists.
- **Icon set is a substitution** (Lucide, pinned to 0.294.0 for brand icons).
  Swap in the house set if there is one.
- **Tactile utilities** (`--emboss`, `--engrave`, `--gloss`, `--grain-url`) fold in
  the client-supplied 3D-shadow and noise snippets.
- **Imagery is photographic placeholders** — drop real Futura Print installation
  & print photography into `assets/` for production use.
- **Sample copy** is illustrative EN marketing copy, not approved client copy.
