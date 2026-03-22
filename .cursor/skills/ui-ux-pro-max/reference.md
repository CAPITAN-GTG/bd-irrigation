# UI/UX Pro Max – Reference

Extended reference for the ui-ux-pro-max skill. See [SKILL.md](SKILL.md) for when to apply and quick checks.

## Optional: Full Install (Scripts + Data)

The upstream repo provides a CLI that installs the skill plus Python scripts and CSV data for design-system generation and domain search. To get that in this project:

```bash
npm install -g uipro-cli
cd /path/to/this/project
uipro init --ai cursor
```

This populates `.cursor/skills/ui-ux-pro-max/` with SKILL content and a `scripts/` folder (e.g. `search.py`) and data. After install, design-system and domain searches work as in the sections below.

**Prerequisite:** Python 3.x (`python3 --version` or `python --version`). On Windows: `winget install Python.Python.3.12`.

## Design System Command (When Scripts Are Installed)

Generate a full design system (pattern, style, colors, typography, effects, anti-patterns):

```bash
# From project root; path may be .cursor/skills/ui-ux-pro-max/scripts/search.py
python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "<product> <industry> <keywords>" --design-system -p "Project Name"
```

Examples:
- `"beauty spa wellness" --design-system -p "Serenity Spa"`
- `"fintech banking" --design-system -f markdown`

Persist to `design-system/MASTER.md` and optional page overrides:

```bash
python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name"
python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name" --page "dashboard"
```

When building a page, prefer `design-system/pages/<page>.md` overrides when they exist; otherwise use `design-system/MASTER.md`.

## Domain Searches (When Scripts Are Installed)

```bash
python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> [-n <max_results>]
```

| Domain         | Use for                          | Example keywords                    |
|----------------|----------------------------------|-------------------------------------|
| `product`      | Product-type recommendations    | SaaS, e-commerce, healthcare, beauty |
| `style`       | UI styles, effects               | glassmorphism, minimalism, dark mode |
| `typography`  | Font pairings                    | elegant, playful, professional      |
| `color`       | Color palettes by product        | saas, fintech, wellness              |
| `landing`     | Page structure, CTAs             | hero, testimonial, pricing           |
| `chart`       | Chart types, libraries           | trend, comparison, funnel            |
| `ux`          | Best practices, anti-patterns    | animation, accessibility, loading   |
| `react`       | React/Next.js performance        | memo, suspense, bundle              |

Stack-specific:

```bash
python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack react
# or: next, vue, html-tailwind, etc.
```

## Style Overview (67 styles, subset)

**General:** Minimalism & Swiss, Neumorphism, Glassmorphism, Brutalism, 3D & Hyperrealism, Vibrant & Block-based, Dark Mode (OLED), Accessible & Ethical, Claymorphism, Aurora UI, Retro-Futurism, Flat Design, Skeuomorphism, Liquid Glass, Motion-Driven, Micro-interactions, Inclusive Design, Soft UI Evolution, Neubrutalism, Bento Box Grid, Y2K, Cyberpunk UI, Organic Biophilic, AI-Native UI, Memphis Design, Vaporwave, Dimensional Layering, Editorial Grid, Gradient Mesh / Aurora Evolved.

**Landing:** Hero-Centric, Conversion-Optimized, Feature-Rich Showcase, Minimal & Direct, Social Proof-Focused, Interactive Product Demo, Trust & Authority, Storytelling-Driven.

**Dashboards:** Data-Dense, Heat Map, Executive, Real-Time Monitoring, Drill-Down, Comparative, Predictive, User Behavior, Financial, Sales Intelligence.

Match style to product and industry; keep one consistent style per product.

## Accessibility (Critical)

- Contrast: normal text ≥4.5:1, large text ≥3:1.
- Focus: visible focus rings (2–4px) on all interactive elements.
- Icons: descriptive labels (aria-label / accessibilityLabel) for icon-only controls.
- Keyboard: tab order matches visual order; all actions reachable by keyboard.
- Motion: respect `prefers-reduced-motion`; reduce or disable animations when requested.
- Forms: use `<label for="...">`; show errors near fields; provide recovery path.

## Common UX Rules (Condensed)

- Touch: min 44×44pt (iOS) / 48×48dp (Android); 8px+ between targets.
- Images: WebP/AVIF, dimensions or aspect-ratio to avoid CLS, lazy load below fold.
- Layout: mobile-first; breakpoints 375 / 768 / 1024 / 1440; no horizontal scroll; viewport meta without disabling zoom.
- Typography: base 16px, line-height 1.5–1.75, semantic type scale; avoid body &lt;12px.
- Animation: 150–300ms; use transform/opacity only; meaningful, not decorative.
- Forms: visible labels, inline validation on blur, errors below field, helper text where needed.
- Navigation: predictable back, bottom nav ≤5 items, deep links for key screens.

For the full rule set and stack-specific guidance, use the upstream [SKILL](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) or run domain/stack searches when scripts are installed.
