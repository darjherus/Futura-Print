---
name: futura-print-design
description: Use this skill to generate well-branded interfaces and assets for Futura Print (large-format printing & bespoke scenography), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

`README.md` holds the brand context, content & voice rules, visual foundations,
and iconography. `colors_and_type.css` is the single source of truth for all
tokens (fonts, color scales, semantic vars, shadows/emboss/grain, radii,
spacing, type, motion) — link it or copy its values. `assets/` has the logo
lockups (dark-ground and light-ground variants) plus the color reference.
`preview/` holds specimen cards. `ui_kits/website/` is a high-fidelity React
recreation of the marketing site. `Futura Print — Landing Page.html` is a
finished skeuomorphic landing page you can lift sections from.

Core rules to honor every time:
- **60 / 30 / 10**: 60% matte black (#111110) or pure white ground, 30% deep
  teal (#00b1b8) structure, 10% sharp orange (#e84b1e) accent. One accent moment
  per view.
- **Poppins** everywhere; Black/ExtraBold display with tight tracking.
- **Skeuomorphic depth**: highly rounded corners, multi-layer shadows, top-left
  directional light, emboss/engrave/gloss surfaces, low-opacity grain.
- **Voice**: premium, impactful, authoritative — craft, scale, precision. "You"
  for the client, "we" for the studio. No emoji.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy
assets out and create static HTML files for the user to view. If working on
production code, copy assets and read the rules here to become an expert in
designing with this brand.

If the user invokes this skill without any other guidance, ask them what they
want to build or design, ask some questions, and act as an expert designer who
outputs HTML artifacts _or_ production code, depending on the need.
