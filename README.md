# Aenerzy — concept site

A single-page concept/thesis site for **Aenerzy**, exploring an orchestration
layer for local energy digital twins. It is not a product landing page — it
invites conversations with municipalities, energy hubs, business parks, and
planners.

Built with **Vite + React + TypeScript**, plain CSS with design tokens, and
[Motion](https://motion.dev) for animation. Diagrams are hand-built SVG — no
AI-generated or stock imagery.

## Develop

```bash
npm install      # one-time
npm run dev      # local dev server
npm run build    # type-check + production build to /dist
npm run preview  # serve the production build locally
```

## Editing content

All copy lives in [`src/content/`](src/content) — edit text without touching
component logic:

| File | What it holds |
| --- | --- |
| `siteContent.ts` | hero, problem, thesis, workflow, product boundary, audience, closing CTA, and **contact email** |
| `useCases.ts` | the Amsterdam use case (diagram stages) and the example questions |
| `principles.ts` | the principles list |
| `navigation.ts` | the header / footer navigation items |

### Change the contact address

The "Start a conversation" buttons use a `mailto:` link built from
`meta.contactEmail` in [`src/content/siteContent.ts`](src/content/siteContent.ts).
The shipped value `hello@aenerzy.com` is a **placeholder** — replace it.

## Editing the look

Every color, font, spacing, radius, and animation timing is a CSS variable in
[`src/styles/tokens.css`](src/styles/tokens.css). Change a token once and it
propagates everywhere (e.g. change `--color-accent` to restyle every button,
link, and diagram highlight). Component styles are scoped CSS Modules.

## Deploy (GitHub Pages)

Deployment is automated by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): every push to
`main` builds the site and publishes `/dist` to GitHub Pages.

One-time setup:

1. Create a GitHub repository named **`aenerzy-website`** and push this code to
   its `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source = GitHub
   Actions**.
3. The site will be served at `https://<your-username>.github.io/aenerzy-website/`.

> **Important:** the Vite `base` in [`vite.config.ts`](vite.config.ts) must match
> the repository name. It is currently `"/aenerzy-website/"`. If you name the
> repo differently, update `base` to `"/<repo-name>/"`.

### Custom domain (later)

When connecting a domain such as `aenerzy.com`:

1. Set `base: "/"` in `vite.config.ts`.
2. Add the domain under **Settings → Pages → Custom domain** (GitHub creates the
   `CNAME` file) and configure DNS.

## Structure

```
src/
  components/   primitives + page sections + hand-built SVG diagrams
  content/      all site copy (typed)
  lib/          shared Motion variants, utils, reduced-motion hook
  styles/       tokens.css, globals.css, animations.css
```

The first version is one page, but the architecture (content layer, primitives,
section components) is built to grow into multiple pages — e.g. `/use-cases`,
`/technology`, `/about` — without restructuring.
