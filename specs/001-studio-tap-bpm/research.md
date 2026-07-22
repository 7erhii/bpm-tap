# Research: Studio Tap BPM

## 1. Framework / rendering model

**Decision**: Astro 5 (SSG) + React islands for interactive tool UI.

**Rationale**:
- SEO hub needs many static, crawlable pages with unique content — Astro excels here.
- Core interaction is client-only; shipping a full SPA framework for every page hurts CWV.
- React islands keep tap/metronome/delay UX rich without hydrating the whole document.

**Alternatives considered**:
- Next.js App Router: fine SEO, heavier default JS; rejected for content-heavy + tool-small shape.
- Pure Vite SPA: weaker default SEO/SSR story for genre hub; rejected.
- Svelte/Solid islands: excellent, but React has broader agent/ecosystem familiarity for parallel delivery.

## 2. BPM measurement algorithm

**Decision**: Rolling average of recent inter-tap intervals with stale-gap reset; confidence from interval variance + tap count.

**Details**:
- Record `performance.now()` (or `Date.now()` fallback) per tap.
- Ignore/reset if gap exceeds threshold (e.g. > 2.0s) — starts a new session.
- BPM = `60000 / mean(intervalMs)` over last N intervals (N≈8, min taps=3 to show value).
- Clamp display to musical range (e.g. 30–300) or show out-of-range state.
- Confidence: map coefficient of variation + tap count → `low | medium | high` (and optional ±BPM hint).
- ÷2 / ×2 multiply displayed BPM (and feed metronome/delay), not raw tap buffer rewrite required.

**Alternatives considered**:
- Full-minute count: too slow for UX.
- Median-only: more robust to outliers but less “live”; may combine median of window later if needed.
- Server-side analysis: violates privacy-local + unnecessary for tap.

## 3. Metronome audio

**Decision**: Web Audio API clock with look-ahead scheduler; start only after user gesture.

**Rationale**: Accurate timing vs `setInterval`; complies with autoplay policies when tied to click/tap.

**Alternatives considered**:
- HTMLAudioElement loop: simpler, less precise.
- Oscillator click samples: good; short buffer click preferred for feel.

## 4. Delay / note duration table

**Decision**: Derive ms from BPM for note values: 1/1, 1/2, 1/4, 1/8, 1/16 + dotted and triplet columns (or rows). Copy individual cells.

**Formula base**: quarter note ms = `60000 / BPM`.

**Alternatives considered**:
- Only quarter/eighth: too weak vs producer competitors.
- External API: unnecessary.

## 5. Internationalization

**Decision**: Astro built-in i18n routing with `/en/...` and `/ru/...` prefixes; default locale `en`; `hreflang` + sitemap per locale.

**Rationale**: Spec requires indexable locale URLs; prefix routing is explicit for SEO.

**Alternatives considered**:
- Subdomain locales: ops-heavy for v1.
- Cookie-only language: bad for SEO.

## 6. History & share URL

**Decision**:
- History: `localStorage` key namespaced (`bpm-tap:history`), max ~10 items, JSON array.
- Share: query param `?bpm=128` (integer 30–300); optional hash-less links; invalid values ignored.

**Alternatives considered**:
- IndexedDB: overkill for 10 items.
- Path param `/bpm/128`: nicer but conflicts with content routes; query is enough for v1.

## 7. PWA / offline

**Decision**: `@vite-pwa/astro` (Workbox) precaching app shell + core JS/CSS; network-first or cache-first for static content pages; ensure tap engine bundle is precached.

**Rationale**: Spec requires installability + offline core tap after first visit.

**Alternatives considered**:
- Manual service worker: more control, more maintenance.
- No PWA in v1: fails US4.

## 8. Ads integration

**Decision**: `AdSlot` component with fixed min-height reserved regions **below fold / aside from tool**; default render empty placeholder; enable via env `PUBLIC_ADS_ENABLED=true` later. Never portal/overlay into tool layout.

**Rationale**: Constitution V + launch-with-empty-slots assumption.

**Alternatives considered**:
- Sticky bottom ad on day 1: risks CLS and tap obstruction — rejected for tool pages.
- Premium to remove ads: explicitly out of scope.

## 9. Visual design system

**Decision**: Custom “studio night” tokens in CSS variables — near-black base, single acid/amber accent, distinctive display font for BPM digits, purposeful motion (tap pulse, settle). No generic purple SaaS / cream-terracotta / broadsheet kits.

**Rationale**: Spec + constitution design bar; brand differentiation vs orange-ad competitor.

## 10. Testing & quality gates

**Decision**: Vitest for pure lib math; Playwright for critical journeys; Lighthouse CI on `/en/` with ads disabled.

**Rationale**: Measurement correctness is logic-heavy; SEO/UX regressions need e2e + perf budget.

## 11. Hosting

**Decision**: Static hosting (Cloudflare Pages / Netlify / Vercel — choose at deploy time). No server runtime required for MVP.

**Rationale**: SSG output; lowest ops; global CDN helps TTFB/SEO.
