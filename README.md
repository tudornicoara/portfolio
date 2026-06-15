# Portfolio — Tudor Nicoară

Personal portfolio. Vite + React + TypeScript, Framer Motion, light/dark theme. Deploys to GitHub Pages at [tudornicoara.com](https://tudornicoara.com).

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run test     # vitest
npm run build    # type-check + production build → dist/
npm run preview  # serve the built dist/
```

## Edit content

All content lives in `src/data/`:

- `profile.ts` — name, taglines, bio, email, phone, socials
- `skills.ts` — skill badges (`primary: true` = highlighted)
- `projects.ts` — project cards (add real projects + `github`/`live` links)
- `experience.ts` — timeline entries

Projects and experience ship with placeholders — replace them.

## Structure

- `src/theme/` — `ThemeProvider` (system default + `localStorage` persistence)
- `src/components/` — one folder per section, co-located CSS
- `src/components/ui/` — `Section`, `Card`, `ThemeToggle` primitives
- `src/components/Background/` — animated canvas mesh (respects `prefers-reduced-motion`)

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml` → GitHub Pages.
Custom domain set via `public/CNAME`. See DNS notes in the conversation/handoff.
