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
| `npm run deploy:cf` | Cloudflare Worker deploy + re-apply Resend secret |

## Ads

Reserved slots only. Keep off until traffic exists:

```bash
PUBLIC_ADS_ENABLED=false
```

## Contact form (Cloudflare Worker)

Mail via Resend. **Ops runbook (secrets, deploy commands, 404): [`docs/cloudflare.md`](docs/cloudflare.md).**

Short version: keep `RESEND_API_KEY` as a **Builds** secret. Deploy/Version commands must be `npm run deploy:cf` — raw `npx wrangler deploy` wipes the runtime key. Do not commit `.env`.

## Spec Kit

Product specs live in `specs/001-studio-tap-bpm/`.
