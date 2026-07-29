# Implementation Plan: Studio Tap BPM

**Branch**: `001-studio-tap-bpm` | **Date**: 2026-07-22 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-studio-tap-bpm/spec.md`

## Summary

Build a free, SEO-first **BPM Tap** web app: a studio-grade BPM tap tool above the fold, plus metronome, delay/ms helpers, local history, shareable BPM URLs, genre/intent content hubs, EN+RU routing, and PWA/offline core. No accounts. Ads only in reserved non-tool slots (empty at launch).

**Technical approach**: Astro content site (SSG) for crawlable SEO pages + React client islands for interactive tools. Measurement, history, and metronome run entirely in the browser. Deploy as a static (or edge-static) site with excellent Core Web Vitals.

## Technical Context

**Language/Version**: TypeScript 5.x on Node 22 LTS (build-time)

**Primary Dependencies**: Astro 5, React 19 (islands only), Vitest, Playwright, @astrojs/sitemap, astro i18n routing, @vite-pwa/astro (or equivalent), Web Audio API (browser)

**Storage**: `localStorage` for history/preferences; no application database; no user accounts backend

**Testing**: Vitest (unit: BPM math, confidence, delay table, URL parsing); Playwright (e2e: tap flow, copy, locales, share URL); Lighthouse CI budget on homepage

**Target Platform**: Modern mobile + desktop browsers (Chrome/Safari/Firefox/Edge last 2 years); installable PWA

**Project Type**: Static/content web application with client-side interactive tools

**Performance Goals**: Homepage mobile LCP under ~2.0s on mid-tier lab profile; INP for tap feels instant (<100ms handler work); CLS ~0 on tool region; Lighthouse Performance ≥ 95 on primary tool page in clean (ads-off) profile

**Constraints**: Tool-first first viewport; no accounts/premium; ads never overlay tap/BPM; measurement privacy-local; offline core tap after first visit; EN primary SEO + RU parity for primary flows

**Scale/Scope**: ~10–20 public routes at v1 (home, delay, metronome, genres index + ~12 genre pages × 2 locales); curated genre dataset; expandable later

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Gate | Status |
|-----------|------|--------|
| I. Tool-First | Homepage + tool intent pages put live tool in first viewport; no signup | PASS (layout + IA in plan) |
| II. SEO as product | SSG pages, unique content, sitemap, hreflang, JSON-LD | PASS |
| III. Performance is ranking | Astro SSG + small React islands; ad slots reserved/CLS-safe; Lighthouse budget | PASS |
| IV. Privacy-local | localStorage only; no tap/audio upload | PASS |
| V. Monetize without breaking trust | `AdSlot` reserved regions; default empty; never over tool | PASS |
| No accounts/premium | No auth stack | PASS |

**Post-design re-check**: Still PASS — contracts are client/URL/UI only; no account APIs; ads are optional placeholders.

## Project Structure

### Documentation (this feature)

```text
specs/001-studio-tap-bpm/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
└── tasks.md              # created by /speckit-tasks (not this command)
```

### Source Code (repository root)

```text
bpm-app/
├── public/
│   ├── favicon.svg
│   ├── icons/                 # PWA icons
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── tool/              # React islands: TapPad, BpmReadout, Controls, Metronome, DelayTable, History, Fullscreen
│   │   ├── seo/               # JsonLd, FaqSection, AdSlot (reserved)
│   │   └── ui/                # LocaleSwitcher, SiteHeader, SiteFooter
│   ├── content/
│   │   ├── genres/            # genre markdown/json collections
│   │   └── faq/               # per-route FAQ content
│   ├── i18n/
│   │   ├── en.json
│   │   ├── ru.json
│   │   └── utils.ts
│   ├── lib/
│   │   ├── bpm/               # tap engine, confidence, clamp, ÷2/×2
│   │   ├── delay/             # note duration math
│   │   ├── metronome/         # Web Audio scheduler
│   │   ├── history/           # localStorage repository
│   │   ├── share/             # ?bpm= parse/serialize
│   │   └── analytics/         # optional no-PII stub (off by default)
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ToolLayout.astro   # tool-first shell + below-fold content slot
│   ├── pages/
│   │   ├── index.astro        # redirect or default locale entry
│   │   ├── en/
│   │   │   ├── index.astro    # tap home
│   │   │   ├── delay.astro
│   │   │   ├── metronome.astro
│   │   │   └── genres/
│   │   │       ├── index.astro
│   │   │       └── [slug].astro
│   │   └── ru/                # mirror routes
│   ├── styles/
│   │   ├── tokens.css         # studio visual system
│   │   └── global.css
│   └── env.d.ts
├── tests/
│   ├── unit/
│   └── e2e/
├── astro.config.mjs
├── package.json
└── playwright.config.ts
```

**Structure Decision**: Single Astro app with locale-prefixed routes and React islands for interactive tools. Content collections drive genre SEO pages. No separate backend service.

## Complexity Tracking

> No constitution violations requiring justification.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| — | — | — |
