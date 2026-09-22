# Cloudflare: bpm-tap Worker

Host is a **Worker with static assets**, not classic Pages Functions. Git builds run `npm run build` then `npm run deploy:cf`.

Do not put secrets in git. `.env` is local only.

## Contact form

The page `/en/contact/` POSTs JSON to `/api/contact`. `src/cloudflare-worker.ts` handles that route and sends mail with [Resend](https://resend.com/). Inbox: `bpmtapcom@gmail.com`. Until the domain is verified, From is `BPM Tap <onboarding@resend.dev>` (Reply-To is the visitor).

| Piece | Where |
|---|---|
| Worker entry | `src/cloudflare-worker.ts` |
| Shared handler | `src/lib/contact/handler.ts` |
| Deploy script | `scripts/cf-deploy.mjs` (`npm run deploy:cf`) |
| Config | `wrangler.toml` |
| Local API | `astro.config.mjs` plugin (reads `.env`) |

Local: copy `.env.example` → `.env`, set `RESEND_API_KEY` from [resend.com/api-keys](https://resend.com/api-keys). Never `PUBLIC_`-prefix the key.

## Secrets (read this before the next deploy)

`npx wrangler deploy` **replaces runtime Variables** with `[vars]` in `wrangler.toml`. A key added only in **Runtime variables and secrets** gets wiped on the next Git build.

**Keep `RESEND_API_KEY` as a Cloudflare Builds secret** (Settings → Builds → Variables and secrets, next to `bpm-tap build token`). That one survives builds. `deploy:cf` copies it onto the Worker after upload via `wrangler secret put`.

Dashboard **Build configuration** must be:

| Field | Value |
|---|---|
| Build command | `npm run build` |
| Deploy command | `npm run deploy:cf` |
| Version command | `npm run deploy:cf` |
| Root directory | `/` |

If those two commands are still `npx wrangler deploy`, the runtime key will disappear again.

### Do not

- Put `RESEND_API_KEY` in `wrangler.toml` or GitHub.
- Use **Bindings → Secrets Store** (`env.X.get()`). This Worker reads a string `env.RESEND_API_KEY`.
- Confuse **Builds** secrets (correct) with a one-off **Runtime** Variable (gets wiped).
- Put the Google account password in Cloudflare.

`RESEND_FROM` and `CONTACT_TO_EMAIL` live in `wrangler.toml` `[vars]` on purpose. `keep_vars = true` is extra safety, not a substitute for `deploy:cf`.

## Custom 404

`src/pages/404.astro` builds to `dist/404.html`. Workers do not infer it.

- `wrangler.toml`: `not_found_handling = "404-page"`, `run_worker_first = ["/", "/api/*"]`.
- `public/_redirects` must **not** use a `404` splat (`/* /404.html 404`). Workers only allow 200 / 3xx there — that line failed deploy with code 100324.

`/` is redirected by `src/cloudflare-worker.ts` (cookie `locale` or `Accept-Language`, else `/en/`). `public/root.css` is only for that bare `/` shell (`/root.css`). Do not serve it in place of hashed `/_astro/*.css`: a 200 stand-in is precached by the service worker and then every page loads the wrong stylesheet. `/_astro/*` is served by the asset layer, not the Worker.

## Check it

After a green build:

1. Unknown URL (e.g. `https://bpm-tap.com/en/no-such-page/`) shows our 404, not a generic Cloudflare page.
2. Submit `/en/contact/` or:

```bash
curl -sS -X POST 'https://bpm-tap.com/api/contact' \
  -H 'content-type: application/json' \
  -d '{"name":"Test","email":"you@example.com","message":"Hello from curl.","website":"","source":"bpm-tap","locale":"en"}'
```

`{"ok":true}` is success. `{"error":"config"}` means the Worker still has no `RESEND_API_KEY`. `{"error":"email"}` means Resend rejected the send. Check Gmail (and spam).
