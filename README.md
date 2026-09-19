# BPM Tap

Free studio-grade online BPM tap tool. SEO-first, no accounts, ads never cover the pad.

## Develop

```bash
npm install
npm run dev
```

Open `http://localhost:4321/en/`.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local Astro server |
| `npm run build` | Production build |
| `npm run preview` | Preview build |
| `npm test` | Vitest unit tests |
| `npm run test:e2e` | Playwright (needs build/preview) |

## Ads

Reserved slots only. Keep off until traffic exists:

```bash
PUBLIC_ADS_ENABLED=false
```

## Contact form (Cloudflare Pages)

The form posts to `/api/contact` (`src/cloudflare-worker.ts` on Workers) and sends mail with Resend. Locally, copy `.env.example` → `.env`. Do not commit `.env` or paste the Google account password into Cloudflare.

Git `wrangler deploy` overwrites runtime Variables. Keep `RESEND_API_KEY` as a **Builds** secret (you already have this). Set both **Deploy command** and **Version command** in Cloudflare to:

```bash
npm run deploy:cf
```

That deploy reapplies the build secret to the Worker after upload, so it is not wiped. Do not put the key in `wrangler.toml`.

Never prefix these with `PUBLIC_`. After deploy, send a test from `/en/contact/` and check the inbox (and spam).

Workers `_redirects` only allow 200/301/302/303/307/308 — do not use a `404` splat. Custom 404 is `src/pages/404.astro` via `wrangler.toml` (`not_found_handling = "404-page"`).

## Spec Kit

Product specs live in `specs/001-studio-tap-bpm/`.
