# Portfolio Site — Design Spec

**Date:** 2026-06-15
**Owner:** Tudor Nicoară
**Goal:** Personal portfolio for a fullstack developer. Stylish, animated, senior-UI-quality. Deployed to GitHub Pages at `tudornicoara.com`.

## Stack

- **Vite + React + TypeScript**
- **Framer Motion** — scroll reveals, hover physics, animated background
- **CSS variables** for theming (no SCSS, no Tailwind — minimal deps, full control)
- Google Fonts: **Inter** (body), **JetBrains Mono** (accents)
- Single-page app, anchor-scroll navigation

## Aesthetic — Modern dev / terminal

- Dark-first. Default = system preference (`prefers-color-scheme`), persisted to `localStorage`.
- Accent: cyan → violet gradient glow.
- Animated background: subtle grid/particle mesh reacting to mouse, GPU-cheap.
- Glassy cards: thin borders, blur, soft shadow.
- Monospace accents for labels/code-flavored text; sans for prose.

## Theming

- `ThemeProvider` React context exposes `theme` (`'light' | 'dark'`) and `toggle()`.
- Init order: `localStorage('theme')` → system `prefers-color-scheme` → fallback `dark`.
- Applies `data-theme` attr on `<html>`; CSS variables switch on `[data-theme="..."]`.
- Toggle persists choice to `localStorage`.
- Respect `prefers-reduced-motion`: disable/curb heavy animation.

## Sections

1. **Hero** — animated `TN` monogram (no photo), name, typewriter tagline ("Fullstack Developer · .NET · Angular · React · Next.js"), gradient glow, scroll cue.
2. **About** — short, punchy custom bio (not the LinkedIn text). Terminal-framed.
3. **Skills** — animated badge grid. Emphasize **.NET, Aspire, Angular, React, Next.js**; supporting: TypeScript, C#, SQL, Docker, etc.
4. **Projects** — responsive card grid. **Placeholder entries** now (title, description, tag list, GitHub link, optional live link). Data array easy to extend later.
5. **Experience** — vertical timeline. **Placeholder entries** (role, company, period, blurb) the owner edits.
6. **Contact** — email (nicoaratudor@gmail.com), phone (+40727741424), GitHub (tudornicoara), LinkedIn (tudor-nicoara). Copy-to-clipboard on email/phone.

## Components

Isolated, single-purpose:

- `ThemeProvider` — theme context + localStorage + system detection.
- `Background` — animated mesh/particles (canvas or motion), reduced-motion aware.
- `Nav` — sticky top bar; logo, anchor links, theme toggle, mobile hamburger.
- `Hero`, `About`, `Skills`, `Projects`, `Experience`, `Contact`, `Footer`.
- Primitives: `Section` (consistent spacing + scroll-reveal wrapper), `Card`.
- Content data: `src/data/` (skills, projects, experience arrays) — separates content from layout.

## Data flow

- Static content lives in typed arrays under `src/data/`.
- Sections map over data → render cards/badges.
- No backend, no API. Contact is mailto/tel + copy-to-clipboard (no form submission backend).

## Mobile / responsive

- Mobile-first CSS, fluid type (`clamp`).
- Hamburger nav under breakpoint.
- Touch-friendly targets (≥44px).
- Animations degrade gracefully on small/`reduced-motion`.

## Error handling

- Clipboard copy: try/catch, show transient "Copied" feedback, fail silently if unsupported.
- Background canvas: guard for missing context; skip if `reduced-motion`.
- No network calls → no fetch error states.

## Testing

- Lightweight: `vitest` + React Testing Library.
- Cover: ThemeProvider init logic (localStorage > system > default) and toggle/persist; clipboard copy handler. Keep visual/animation untested (manual).

## Deploy

- GitHub Pages. `vite.config` `base` set appropriately for custom domain (`/`).
- `public/CNAME` = `tudornicoara.com`.
- GitHub Actions workflow: build on push to `master` → deploy to Pages.
- DNS (Namecheap) instructions delivered to user at end:
  - `A` records for apex → GitHub Pages IPs (185.199.108–111.153).
  - `CNAME` for `www` → `tudornicoara.github.io`.
  - Enforce HTTPS in repo Pages settings.

## Out of scope (YAGNI)

- No CMS, no blog, no i18n, no analytics (can add later).
- No real scraped LinkedIn/GitHub data — placeholders the owner edits.
- No contact-form backend.
