# Aenerzy Website — Project Structure

## What this is
A single-page React concept/pitch site for **Aenerzy** — an orchestration layer for local energy digital twins (municipalities/gemeentes, energy hubs, business parks). Live at `https://anerzy-flow.github.io/anerzy-webiste/`.

## Tech stack
- **React 18** + **TypeScript** + **Vite 6**
- **Motion v11** (`motion/react`) for all animations — scroll-reveal, AnimatePresence stage transitions, interactive hover
- **CSS Modules** per component — no Tailwind, no styled-components
- **Fraunces Variable** (serif — all headings, wordmark, italic accents) + **Source Sans 3 Variable** (body) + **IBM Plex Mono** (data labels inside the demo only) from `@fontsource`
- No routing, no state management, no backend

## Deployment
- GitHub Actions workflow in `.github/workflows/` — builds on push to `main`, deploys to GitHub Pages
- `dist/` is gitignored; CI builds it
- `vite.config.ts` `base: "/anerzy-webiste/"` — must match the repo name exactly

## Page structure (top → bottom, in `App.tsx`)
```
Header
Hero                  ← headline, "conductor" tagline, CTAs, OrchestrationDiagram (product demo)
ProblemSection        ← 3 columns: isolated models / manual data / late decisions
ThesisSection         ← main thesis paragraph
UseCaseSection        ← generic neighborhood heat-transition example (#example), 3-stage UseCaseDiagram
ExampleQuestions      ← 3 question cards with outputs
ProductBoundarySection← "This is / This is not" + principles chip strip (merged section)
AudienceSection       ← 5 audience blocks
CTASection            ← final call to action (#contact)
Footer
```
Removed sections (do not re-add): WorkflowSection, PrinciplesSection (merged into ProductBoundarySection), WorkflowDiagram.

## Hero demo — OrchestrationDiagram
`src/components/diagrams/OrchestrationDiagram.tsx` is a **5-stage auto-playing product demo**, one stage on screen at a time:
01 Ask (typed prompt) → 02 Plan (steps + clarifying question) → 03 Select (domain-grouped tool picker) → 04 Run (progress rows) → 05 Deliver (status + decision + mini bar chart).
- Per-stage durations in `STAGES[].ms` (Select holds longest); loops; clickable step rail jumps + pauses; resumes after 12 s idle (`IDLE_MS`)
- Pauses off-screen (`useInView`); `prefers-reduced-motion` → click-only
- Stage transitions via `AnimatePresence mode="wait"`; demo copy lives in the component (not siteContent)
- **Select stage uses real tool names** from the product vision: Vesta MAIS / Hestia (heat), pandapower / PyPSA (electricity), plus BAG / DSO / 3D-city-model data feeds. Monogram badges stand in for logos — swap the badge `<span>` for an `<img>` when official brand assets are available (and permission is cleared).

## File layout
```
src/
  App.tsx                         — page composition only
  main.tsx                        — React root mount
  content/
    siteContent.ts                — ALL pitch copy (hero, problem, thesis, boundary, audience, cta)
    types.ts                      — TypeScript interfaces for content shapes
    navigation.ts                 — nav items: Thesis / Example / Questions / Contact
    principles.ts                 — 5 principles (rendered as chips in ProductBoundarySection)
    useCases.ts                   — neighborhoodUseCase (3 stages) + exampleQuestions (3)
  components/
    Header/                       — sticky nav
    Hero/                         — hero section + OrchestrationDiagram demo
    ProblemSection/
    ThesisSection/
    UseCaseSection/               — Section id="example"
    ExampleQuestions/             — Section id="questions"
    ProductBoundarySection/       — is/is-not columns + principles strip
    AudienceSection/
    CTASection/                   — Section id="contact"
    Footer/
    diagrams/
      OrchestrationDiagram.tsx    — hero product demo (see above)
      UseCaseDiagram.tsx          — staged pipeline, adapts to any stage count
    primitives/
      Button.tsx / .module.css    — variant="primary"|"secondary"|"link"
      Container.tsx               — max-width wrapper (1180px, fluid padding)
      Eyebrow.tsx                 — mono uppercase label
      Section.tsx                 — semantic <section> with scroll-margin
      Reveal.tsx                  — motion wrapper (fade + rise on scroll)
      StatusIndicator.tsx         — traffic-light dot (feasible/constraint/blocked)
      index.ts                    — barrel export
  styles/
    tokens.css                    — ALL design tokens (colors, spacing, type, motion)
    globals.css                   — reset + base typography
    animations.css                — CSS keyframes (pulse, flow-dash)
  lib/
    animation.ts                  — Motion constants (EASE_STANDARD, DURATION, VIEWPORT, variants)
    utils.ts                      — cx() classname helper
```

## Design tokens (key ones — all in `src/styles/tokens.css`)
| Token | Value | Use |
|---|---|---|
| `--color-accent` | `#1f4e8c` (Delft blue) | primary brand, buttons, links |
| `--color-water` | `#00a6d6` (cyan) | active diagram lines, progress fills |
| `--color-porcelain` | `#f8f5ef` | main background |
| `--color-muted` | `#67645e` | secondary text |
| `--font-serif` | Fraunces Variable | all headings, wordmark, italic accent lines |
| `--font-sans` | Source Sans 3 Variable | all body text, labels |
| `--font-mono` | IBM Plex Mono | data figures inside the demo only — never section labels |
| `--space-section` | `clamp(72px, 9vw, 120px)` | vertical section rhythm |
| `--text-display` | `clamp(2rem, …, 4.25rem)` | hero headline |

## Content architecture — single source of truth
**All pitch copy lives in `src/content/siteContent.ts`** as typed objects. Components import named exports (`hero`, `problem`, `thesis`, etc.). Never hardcode copy in components — edit the content file.

Exceptions (hardcoded in components by design):
- Hero tagline "The conductor for digital twin technologies." in `Hero.tsx`
- The hero demo's stage copy in `OrchestrationDiagram.tsx` (demo content, not pitch copy)

**Copy style: crisp, generic.** Short sentences, no filler. Say "gemeente / neighborhood / district" — never name a specific city.

## Animation patterns
- **Scroll reveal**: wrap in `<Reveal>` primitive, or `motion.div` with `variants={staggerContainer()}` + `whileInView="visible"` + `viewport={VIEWPORT}` from `src/lib/animation.ts`
- **Stage transitions**: `AnimatePresence mode="wait"` with hidden/visible/exit variants (see OrchestrationDiagram)
- **Stagger children**: parent gets `staggerContainer()` variants, children get `staggerItem`
- Motion is restrained/professional: fades, small rises, thin progress fills — no floating collages

## Key conventions
- Each component folder has `ComponentName.tsx` + `ComponentName.module.css` only
- CSS classes use camelCase in modules (`.sectionTitle`, not `.section-title`)
- `cx()` from `src/lib/utils.ts` for conditional class joining
- Define keyframes locally in the CSS Module that uses them (global keyframe refs are unreliable in modules)
- `--color-fire` / `--color-solar` are used sparingly (attention only)
- Max border-radius: 8px (`--radius-md`); pill chips use 999px
- No dark mode yet (tokens ready for it via `[data-theme="dark"]`)

## Contact / CTA
All "Start a conversation" buttons point to `contactHref` from `siteContent.ts` — a `mailto:` built from `meta.contactEmail`. Change the email there, all CTAs update.
