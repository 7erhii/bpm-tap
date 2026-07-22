# Quickstart Validation: Studio Tap BPM

Validation guide after implementation. Not an implementation checklist.

## Prerequisites

- Node 22+
- pnpm or npm
- Modern browser (Chrome or Safari)

## Setup

```bash
cd /Users/skrepets/Desktop/ProTos/bpm-app
npm install
npm run dev
```

Open the printed local URL (expect `/en/` home).

## Scenario A — P1 Tap (manual)

1. Load `/en/` — tap target visible without scroll (390px-wide viewport).
2. Tap 3 times — BPM appears.
3. Tap to ~10 — confidence becomes medium/high on steady rhythm.
4. Press ÷2 / ×2 — BPM changes; Copy puts integer BPM on clipboard.
5. Reset — returns to idle.
6. Desktop: Space registers taps.
7. Fullscreen — chrome minimizes; tap still works; Esc exits.

**Pass**: All steps succeed without account prompts.

## Scenario B — P2 Helpers

1. From a BPM, start metronome — audible click; stop works.
2. Open delay view — quarter/eighth/dotted/triplet ms visible; copy one value.
3. Refresh — history still lists recent BPM (same browser).
4. Open `/en/?bpm=128` — shows 128 ready; can still start new tap session.

**Pass**: Helpers follow displayed BPM; share hydrate works; invalid `?bpm=9999` ignored safely.

## Scenario C — P3 SEO / i18n / ads safety

1. Visit `/en/genres` and one genre page — unique title/H1/content.
2. Visit `/en/delay` and `/en/metronome` — tool usable above fold.
3. Switch to `/ru/` counterparts — primary chrome translated; hreflang present in view-source.
4. Confirm no ad overlay on `[data-tool-root]` (ads may be empty placeholders).

**Pass**: Routes unique; locales work; tool unobstructed.

## Scenario D — PWA offline

1. Build + preview production (`npm run build && npm run preview`).
2. Install / add to home screen if prompted.
3. Go offline → open app → core tap still measures BPM.

**Pass**: Offline tap works after first production visit.

## Automated gates

```bash
npm test                 # Vitest unit (engine, delay, share parse)
npm run test:e2e         # Playwright A–C smoke
npm run lhci             # Lighthouse budget on /en/ with ads off
```

Expected: unit + e2e green; Lighthouse Performance ≥ 95 on clean homepage profile.

## References

- [Tap engine contract](./contracts/tap-engine.md)
- [UI tool contract](./contracts/ui-tool.md)
- [URL routing](./contracts/url-and-routing.md)
- [Data model](./data-model.md)
