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

Production secrets live on the **Worker** named `bpm-tap` (this repo deploys with `npx wrangler deploy`, not classic Pages Functions). Pages-project env vars are ignored.

1. [Workers & Pages](https://dash.cloudflare.com/?to=/:account/workers-and-pages) → **bpm-tap** (Workers, not a Pages project).
2. **Settings** → **Variables and Secrets**.
3. Add `RESEND_API_KEY` as a **Secret** (not a plaintext Variable — those get wiped on deploy). `RESEND_FROM` and `CONTACT_TO_EMAIL` ship in `wrangler.toml`. `keep_vars = true` keeps dashboard values across `wrangler deploy`.
4. Save, then send a test from `/en/contact/`.

Never prefix these with `PUBLIC_`. After deploy, send a test from `/en/contact/` and check the inbox (and spam).

Workers `_redirects` only allow 200/301/302/303/307/308 — do not use a `404` splat. Custom 404 is `src/pages/404.astro` via `wrangler.toml` (`not_found_handling = "404-page"`).

## Spec Kit

Product specs live in `specs/001-studio-tap-bpm/`.
