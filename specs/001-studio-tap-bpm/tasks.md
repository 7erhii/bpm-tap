# Tasks: Studio Tap BPM

**Input**: Design documents from `/specs/001-studio-tap-bpm/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: Included for tap engine math and critical e2e journeys (plan/quickstart gates).

**Organization**: By user story for parallel delivery after foundation.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: US1…US4
- Paths are repo-root relative for `bpm-app`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Bootstrap Astro app and tooling

- [x] T001 Create directory layout per plan (`src/components`, `src/lib`, `src/pages/en|ru`, `src/content`, `tests/unit`, `tests/e2e`, `public/icons`)
- [x] T002 Initialize Astro 5 + TypeScript project in repo root (`package.json`, `astro.config.mjs`, `tsconfig.json`)
- [x] T003 [P] Add React integration for islands (`@astrojs/react`) and wire `astro.config.mjs`
- [x] T004 [P] Configure Vitest + Playwright + npm scripts (`test`, `test:e2e`, `dev`, `build`, `preview`)
- [x] T005 [P] Add ESLint/Prettier (or Astro-recommended lint) and `.gitignore` for Node
- [x] T006 [P] Add base `README.md` with dev/build commands (product project, not Spec Kit)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Design system, layouts, i18n shell, shared libs stubs — required before story UI

**⚠️ CRITICAL**: No user story UI work before this checkpoint

- [x] T007 Create design tokens and global styles in `src/styles/tokens.css` and `src/styles/global.css` (studio night system)
- [x] T008 [P] Implement `src/layouts/BaseLayout.astro` (meta slots, fonts, global CSS)
- [x] T009 [P] Implement `src/layouts/ToolLayout.astro` with `[data-tool-root]`, below-fold slot, reserved `AdSlot` region
- [x] T010 [P] Add i18n message files `src/i18n/en.json` + `src/i18n/ru.json` and `src/i18n/utils.ts`
- [x] T011 Configure Astro i18n routing for `en`/`ru` prefixes + `/` → `/en/` redirect in `astro.config.mjs` / `src/pages/index.astro`
- [x] T012 [P] Implement `src/components/ui/SiteHeader.astro` + `LocaleSwitcher` + `SiteFooter.astro`
- [x] T013 [P] Implement SEO helpers `src/components/seo/JsonLd.astro` + `FaqSection.astro` + `AdSlot.astro` (empty by default; `PUBLIC_ADS_ENABLED`)
- [x] T014 [P] Scaffold pure libs: `src/lib/bpm/`, `src/lib/delay/`, `src/lib/share/`, `src/lib/history/` with exported types matching `data-model.md`
- [x] T015 Add sitemap integration (`@astrojs/sitemap`) and `public/robots.txt`
- [x] T016 [P] Add PWA config skeleton (`@vite-pwa/astro` or chosen plugin) + icons under `public/icons/`

**Checkpoint**: `npm run dev` serves `/en/` shell with layout/i18n; no broken imports

---

## Phase 3: User Story 1 — Instant Tap BPM (P1) 🎯 MVP

**Goal**: Tool-first tap BPM with confidence, ÷2/×2, copy, reset, Space, fullscreen

**Independent Test**: quickstart Scenario A

### Tests for User Story 1

- [x] T017 [P] [US1] Unit tests for tap engine window/stale/confidence/factor in `tests/unit/bpm-engine.test.ts`
- [x] T018 [P] [US1] Unit tests for share/BPM clamp helpers used by hydrate in `tests/unit/share.test.ts`

### Implementation for User Story 1

- [x] T019 [US1] Implement `createTapEngine` per `contracts/tap-engine.md` in `src/lib/bpm/engine.ts`
- [x] T020 [P] [US1] Implement confidence/deviation helpers in `src/lib/bpm/confidence.ts`
- [x] T021 [US1] Build React island `src/components/tool/TapApp.tsx` composing readout + tap target + controls
- [x] T022 [P] [US1] Build `BpmReadout.tsx`, `ConfidenceCue.tsx`, `TapTarget.tsx` under `src/components/tool/`
- [x] T023 [P] [US1] Build `PrimaryControls.tsx` (Reset, ÷2, ×2, Copy) with clipboard feedback
- [x] T024 [US1] Wire Space key + pointer/touch handlers; respect text-field focus exception
- [x] T025 [US1] Implement fullscreen/studio mode in `src/components/tool/FullscreenToggle.tsx`
- [x] T026 [US1] Create homepage `src/pages/en/index.astro` + `src/pages/ru/index.astro` using ToolLayout + TapApp island + below-fold FAQ content
- [x] T027 [US1] Add homepage titles/meta/JSON-LD/FAQ content (EN+RU) unique per locale
- [x] T028 [US1] Playwright smoke `tests/e2e/tap-home.spec.ts` for Scenario A essentials

**Checkpoint**: US1 alone is demoable and shippable

---

## Phase 4: User Story 2 — Confirm Tempo & Production Helpers (P2)

**Goal**: Metronome, delay table, history, share URL

**Independent Test**: quickstart Scenario B

### Tests for User Story 2

- [x] T029 [P] [US2] Unit tests for note duration math in `tests/unit/delay.test.ts`
- [x] T030 [P] [US2] Unit tests for history repository in `tests/unit/history.test.ts`

### Implementation for User Story 2

- [x] T031 [US2] Implement delay table generator in `src/lib/delay/noteDurations.ts`
- [x] T032 [US2] Implement Web Audio metronome scheduler in `src/lib/metronome/scheduler.ts`
- [x] T033 [US2] Implement history repo in `src/lib/history/storage.ts` per `contracts/local-storage.md`
- [x] T034 [US2] Implement `parseBpmParam` / `buildShareUrl` in `src/lib/share/url.ts`
- [x] T035 [P] [US2] UI `DelayTable.tsx` with per-cell copy in `src/components/tool/`
- [x] T036 [P] [US2] UI `MetronomeControls.tsx` (start/stop; gesture-gated audio)
- [x] T037 [P] [US2] UI `HistoryList.tsx` + auto-save readings from TapApp
- [x] T038 [US2] Hydrate TapApp from `?bpm=` on load; share/copy-link control
- [x] T039 [US2] Pages `src/pages/en/delay.astro`, `src/pages/ru/delay.astro` (tool above fold)
- [x] T040 [US2] Pages `src/pages/en/metronome.astro`, `src/pages/ru/metronome.astro`
- [x] T041 [US2] Playwright `tests/e2e/helpers-share.spec.ts` for Scenario B

**Checkpoint**: US2 works with or without new taps (share hydrate)

---

## Phase 5: User Story 3 — SEO Intent Hub & Locales (P3)

**Goal**: Genre hub, intent pages polish, hreflang/sitemap, ad safety

**Independent Test**: quickstart Scenario C

### Implementation for User Story 3

- [x] T042 [P] [US3] Define genres content collection schema + seed ~12 genres in `src/content/genres/`
- [x] T043 [US3] Build `src/pages/en/genres/index.astro` + `src/pages/ru/genres/index.astro`
- [x] T044 [US3] Build `src/pages/en/genres/[slug].astro` + RU counterpart with unique copy/ranges + CTA to tap tool
- [x] T045 [P] [US3] Ensure delay/metronome/home have unique titles, canonical, hreflang, FAQ blocks
- [x] T046 [P] [US3] Verify `AdSlot` cannot render inside `[data-tool-root]`; document env flag in README
- [x] T047 [US3] Generate locale-aware sitemap; validate `robots.txt`
- [x] T048 [US3] Playwright `tests/e2e/seo-i18n.spec.ts` (routes, hreflang presence, no account CTA)

**Checkpoint**: Long-tail routes are indexable and useful

---

## Phase 6: User Story 4 — Installable App Feel (P3)

**Goal**: PWA install + offline core tap

**Independent Test**: quickstart Scenario D

- [x] T049 [US4] Finalize PWA manifest/icons/theme colors for BPM Tap branding
- [x] T050 [US4] Precache shell + tap engine assets for offline measurement
- [x] T051 [US4] Manual/automated check offline tap on production preview; note device results in PR

**Checkpoint**: Installable; offline tap works after first visit

---

## Phase 7: Polish & Cross-Cutting

**Purpose**: Perf, a11y, content quality, deploy readiness

- [ ] T052 [P] Add Lighthouse CI script/budget for `/en/` with ads disabled
- [ ] T053 [P] Accessibility pass: focus states, aria on tap controls, reduced-motion handling
- [ ] T054 [P] Motion polish: tap pulse + stable settle (respect `prefers-reduced-motion`)
- [ ] T055 Copy-edit EN/RU below-fold SEO content for thin/duplicate issues
- [ ] T056 Production deploy config (Cloudflare Pages / Netlify / Vercel) + env sample `.env.example`
- [ ] T057 Run full quickstart A–D and mark spec scenarios validated

---

## Dependencies & Execution Order

### Phase order

1. Setup (T001–T006)
2. Foundational (T007–T016) — blocks all stories
3. US1 (T017–T028) — MVP
4. US2 (T029–T041) — depends on US1 TapApp/engine
5. US3 (T042–T048) — can start content seeding [P] partly parallel with US2 UI after T014
6. US4 (T049–T051) — after US1 build pipeline exists; best after US3 pages stable
7. Polish (T052–T057)

### User story dependency graph

```text
Setup → Foundation → US1 → US2 → US3 → US4 → Polish
                         ↘ (genre content T042 can parallel US2)
```

### Parallel opportunities

- After Foundation: US1 tests T017–T018 parallel; UI atoms T022–T023 parallel
- US2: T029–T030 tests + T035–T037 UI parallel after libs
- US3: T042 content parallel with US2; T045–T046 parallel

### Suggested subagent split

| Agent | Tasks |
|-------|-------|
| A — Engine | T017–T020, T029–T034 |
| B — Tool UI | T021–T027, T035–T038 |
| C — Pages/SEO | T026–T027, T039–T040, T042–T048 |
| D — PWA/Perf | T016, T049–T053 |

Merge order: Engine → Tool UI → Pages → PWA/Perf.

---

## Implementation Strategy

1. **Ship MVP**: Finish US1 and deploy a preview URL — already beats cluttered competitors on UX.
2. **Add helpers**: US2 makes the result “studio useful”.
3. **SEO scale**: US3 brings long-tail pages; keep tool-first.
4. **PWA + polish**: US4 + Lighthouse/a11y before ads enablement.
5. **Ads later**: flip `PUBLIC_ADS_ENABLED` only after traffic + CWV stay green.

## Milestone: MVP (US1 only)

T001–T028 complete → public tap tool EN (+ RU shell strings ok if pages exist).
