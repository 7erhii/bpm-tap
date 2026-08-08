<!--
SYNC IMPACT REPORT
==================
Version change: 1.0.0 → 1.1.0
Bump rationale: Codify hard brand constraint — never use competitor phrase
  "tap tempo" / TapTempo on public surfaces (owner directive, repeated).

Principles defined: unchanged (I–V).

Added/changed:
  - Product Constraints: Forbidden competitor phrase "tap tempo"
  - Cursor rule: .cursor/rules/no-tap-tempo-brand.mdc (alwaysApply)

Templates reviewed: no template token changes required.
Follow-up TODOs: none.
-->

# BPM Tap Constitution

BPM Tap is a free, browser-based BPM tap product: users measure beats per minute
instantly, then use the result (copy, metronome, delay times, genre context). The product
competes on clarity, speed, and search usefulness — not on accounts or paywalls.

## Core Principles

### I. Tool-First Experience

The primary job of every core page is to let a person tap and get a trustworthy BPM
without friction.

- The first viewport MUST present a working tap tool: large BPM readout, large tap target,
  and essential controls. Marketing copy, SEO prose, and ads MUST NOT push the tool below
  the fold on the homepage or primary tool pages.
- No signup, login, account, premium pass, or paywall for core measurement features.
- Controls MUST be understandable (labels or clear affordances). Icon-only mystery toolbars
  are not allowed for primary actions.
- Keyboard and touch are first-class: Space to tap, obvious reset/copy paths, large mobile
  hit targets.

**Rationale:** Competitors lose users to ads and clutter. Trust and completion rate are the
moat.

### II. SEO Is a Product Surface

Search ranking is a primary product goal, not a post-launch marketing task.

- High-intent pages MUST ship with a live tool above the fold plus unique, useful content
  below (not doorway/thin pages).
- Information architecture MUST map to search intents (tap BPM, BPM calculator, delay/ms,
  metronome, genre BPM references, localized routes).
- Content MUST help a real musician/DJ/dancer; keyword stuffing without utility is forbidden.
- Technical SEO (titles, meta, canonical, hreflang, structured data, sitemap, crawlability)
  is part of definition-of-done for public pages.

**Rationale:** Traffic is the business. Ads only matter after ranking; ranking requires
useful pages that people stay on.

### III. Performance Is Ranking

Speed and stability are product requirements tied to search and UX.

- Core Web Vitals targets are binding for primary tool pages (especially mobile LCP, INP, CLS).
- The tap interaction MUST feel instant; measurement logic runs client-side.
- Third-party scripts (including ads) MUST NOT materially degrade tool interactivity or cause
  layout shift over the tap zone.
- Ship the smallest UI needed for the job; avoid heavy frameworks/widgets on the critical path
  without justification in the plan.

**Rationale:** Slow or jumpy pages bounce — and bounce kills rankings and ad revenue.

### IV. Privacy-Local by Default

User rhythm data stays on the device unless a future spec explicitly changes this.

- Tap timestamps, session history, and preferences MUST default to local browser storage.
- MVP MUST NOT upload microphone audio or tap streams to a server.
- Analytics, if added, MUST avoid capturing PII and MUST NOT log raw authorization secrets.
- No dark-pattern tracking for “premium upsell” — there is no premium.

**Rationale:** A tap tool needs no account graph. Local-first builds trust and keeps the
product simple.

### V. Monetize Without Breaking Trust

Monetization is advertising only. Ads exist to fund a free tool after search traction —
they must never become the product.

- Accounts, subscriptions, premium passes, and paid feature gates are out of scope unless the
  constitution is explicitly amended.
- Ads MUST NEVER overlay, cover, or intercept the tap zone or primary BPM readout.
- Prefer below-fold or clearly separated ad regions; reserve space to avoid CLS.
- Ad density MUST remain secondary to task completion. If ads and UX conflict, UX wins.
- It is acceptable to launch with empty/reserved ad slots and enable ads after organic traffic.

**Rationale:** Intrusive ads are why users hate competitors. Sustainable revenue requires
traffic + trust, in that order.

## Product Constraints

- **Brand (temporary):** BPM Tap (`bpm-tap` / project `bpm-app`). Final naming/domain may
  change without changing these principles.
- **Forbidden competitor phrase (HARD):** NEVER use **tap tempo** / **Tap Tempo** /
  **tap-tempo** / **TapTempo** in public copy, titles, meta, FAQ, guides, UI, schema,
  slugs, or marketing. That phrase is the competitor brand behind
  [taptempo.io](https://taptempo.io/). Use **Tap BPM**, **BPM counter**, **BPM tap**,
  or plain **tempo** instead. Do not target their brand as our on-page keyword.
  Legacy 301s from old `tap-tempo-*` paths may remain; do not recreate those pages.
- **Audience:** musicians, producers, DJs, dancers, fitness, rhythm gamers, casual listeners.
- **Explicit non-goals for v1:** user accounts, premium, social feeds, BPM guessing games as
  the core loop, heart-rate as the primary product positioning, BPH/RPS “product zoo”.
- **Heart-rate / pulse:** may exist only as a secondary informational page with a clear
  non-medical disclaimer — never the homepage hero.
- **Scope ambition:** full tool suite (tap + confidence, metronome, delay table, history,
  share URL, genre/SEO hub, EN+RU) is in scope; delivery may be phased by user-story
  priority but must not permanently drop P2/P3 without a constitution/spec amendment.
- **Design bar:** modern studio-grade UI/UX; one clear composition on first viewport; no
  generic AI-slop aesthetic defaults (purple-gradient SaaS, cream/terracotta brochure, dense
  newspaper layout).

## Development Workflow & Quality Gates

- Spec Kit order is binding: constitution → specify → (clarify) → plan → tasks → implement.
- Specs describe WHAT/WHY; plans describe HOW. Do not leak stack choices into `spec.md`.
- Every user story MUST be independently testable with acceptance scenarios.
- Public pages are not done without: working tool (where applicable), SEO metadata, and
  mobile-usable layout.
- Prefer small vertical slices that ship usable value (P1 before polish of P3), while keeping
  the full backlog visible in tasks.
- Subagents/parallel work are encouraged for speed; they MUST still land against the same
  specs/tasks and pass the constitution check.

## Governance

This constitution supersedes ad-hoc product decisions when they conflict.

- **Authority.** Principles I–V are binding. Plan “Constitution Check” and
  `/speckit-analyze` treat MUST conflicts as CRITICAL. Resolve by changing spec/plan/tasks —
  not by weakening a principle.
- **Amendments.** Require an explicit update to this file, version bump, and sync note at the
  top. Monetization model changes (e.g. adding accounts/premium) are MAJOR amendments.
- **Versioning.** MAJOR = remove/redefine a principle or change monetization/privacy model;
  MINOR = new principle/section or material expansion; PATCH = clarifications only.
- **Compliance.** Reviews MUST verify tool-first layout, no account creep, ad safety rules,
  SEO/perf definition-of-done for user-facing routes, and **zero public use of the
  competitor phrase «tap tempo»**.

**Version**: 1.1.0 | **Ratified**: 2026-07-22 | **Last Amended**: 2026-08-08
