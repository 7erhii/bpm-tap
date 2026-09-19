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

The form posts to `/api/contact` (`functions/api/contact.ts`) and sends mail with Resend. Locally, copy `.env.example` → `.env`. Do not commit `.env` or paste the Google account password into Cloudflare.

Production secrets live in the [Cloudflare dashboard](https://dash.cloudflare.com/?to=/:account/workers-and-pages), not in the repo:

1. **Workers & Pages** → the bpm-tap Pages project.
2. **Settings** → **Environment variables** (sometimes **Variables and Secrets**).
3. Add these for **Production** (and Preview if you want the form on branch deploys):

| Variable | Value | Encrypt / Secret |
|---|---|---|
| `RESEND_API_KEY` | key from [resend.com/api-keys](https://resend.com/api-keys) | yes |
| `RESEND_FROM` | `BPM Tap <onboarding@resend.dev>` until the domain is verified | no |
| `CONTACT_TO_EMAIL` | inbox that should receive messages | no |

4. Save, then **Retry deployment** / redeploy. Pages Functions pick up env only on a new deploy.

Never prefix these with `PUBLIC_`. After deploy, send a test from `/en/contact/` and check the inbox (and spam).

Workers `_redirects` only allow 200/301/302/303/307/308 — do not use a `404` splat. Custom 404 is `src/pages/404.astro` via `wrangler.toml` (`not_found_handling = "404-page"`).

## Spec Kit

Product specs live in `specs/001-studio-tap-bpm/`.
