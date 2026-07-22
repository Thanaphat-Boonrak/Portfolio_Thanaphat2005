# Portfolio — Angular

Standalone-component Angular app. Sections are split into components under `src/app/components/`:

- `navbar/` — top nav
- `hero/` — intro headline
- `about/` — bio + stat row
- `stack/` — skill columns + architecture strip
- `projects/` — project cards (data-driven from a `projects` array in `projects.component.ts`)
- `contact/` — closing CTA

Styling is Tailwind CSS. `app.component.html` composes all sections in order.

## Run locally

```bash
npm install
npm start
```

Opens at `http://localhost:4200`.

## Edit content

Most content lives in each component's `.ts` file as typed data (`stats`, `columns`, `projects`), not hardcoded in the templates — edit the arrays and the page updates. Text still in the `.html` files (hero headline, about paragraphs, contact copy) can be edited directly.

Replace anything in `[brackets]` with your real details, and set your real email in `contact.component.ts`.

## Build for production

```bash
npm run build
```

Output goes to `dist/portfolio-angular/browser`.

## Deploy to Vercel

### Option A — Vercel dashboard (recommended for a real Angular build)
1. Push this folder to a GitHub repo
2. vercel.com → New Project → Import the repo
3. Vercel auto-detects Angular via `vercel.json` (build command `npm run build`, output `dist/portfolio-angular/browser`) — just click Deploy

### Option B — CLI
```bash
npm i -g vercel
vercel        # first deploy, follow prompts
vercel --prod # promote to production
```
