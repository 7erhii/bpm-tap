# Feature Specification: Studio Tap BPM

**Feature Branch**: `001-studio-tap-bpm`

**Created**: 2026-07-22

**Status**: Approved

**Input**: User description: "Clone-and-surpass beatsperminuteonline.com as a free studio-grade online Tap BPM / tap tempo product. SEO-first information architecture. Full MVP: core tap with confidence, ÷2/×2, copy, reset, keyboard/touch, fullscreen; metronome confirm; delay/ms table; session history; share URL; genre BPM SEO hub; EN+RU; PWA-ready. No accounts, no premium. Monetization later via ads that never cover the tool."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Instant Tap Tempo (Priority: P1)

A musician, DJ, or casual listener opens the site to measure a song’s tempo. Within the first viewport they see a large tap target and BPM display. They tap (mouse, touch, or Space) along with the beat. After a few taps they see a live BPM; as tapping continues, the reading stabilizes and shows a confidence/stability cue. They can reset, halve/double the reading (÷2 / ×2), and copy the BPM in one action. They can enter a distraction-free fullscreen “studio” mode.

**Why this priority**: This is the entire search intent and product reason to exist. Alone it is a shippable MVP.

**Independent Test**: Open homepage on phone and desktop; tap 8–12 times; observe stable BPM; use ÷2/×2/reset/copy; verify Space taps on desktop; verify fullscreen hides chrome without blocking taps.

**Acceptance Scenarios**:

1. **Given** a first-time visitor on the homepage, **When** the page finishes loading, **Then** the tap tool and BPM area are usable in the first viewport without scrolling.
2. **Given** the tool is idle, **When** the user performs 3 valid taps in rhythm, **Then** a BPM value is shown and updates with further taps.
3. **Given** the user continues tapping consistently (~8+ taps), **When** intervals stabilize, **Then** the UI indicates a stable/confident reading (not only a raw flickering number).
4. **Given** a BPM is displayed, **When** the user activates ÷2 or ×2, **Then** the displayed BPM updates immediately to half or double.
5. **Given** a BPM is displayed, **When** the user activates Copy, **Then** the BPM value is placed on the clipboard and the UI confirms success.
6. **Given** the user is tapping, **When** they activate Reset, **Then** the measurement session clears and the UI returns to a ready-to-tap state.
7. **Given** a desktop keyboard, **When** the user presses Space (outside unrelated text fields), **Then** it registers as a tap.
8. **Given** any device, **When** the user enters fullscreen/studio mode, **Then** the tap tool remains primary and non-essential chrome is minimized.

---

### User Story 2 - Confirm Tempo & Production Helpers (Priority: P2)

After finding a BPM, a producer or DJ wants to verify and use it: start a metronome at that tempo, see note durations in milliseconds for delay/reverb sync, keep a short local history of recent measurements, and share/open a URL that carries a BPM value.

**Why this priority**: Differentiates from bare tap counters and makes the result immediately useful in a studio/DJ workflow.

**Independent Test**: Obtain a BPM from tap (or open a shared BPM URL); start metronome; copy a delay value; confirm history lists recent values after refresh in the same browser; open `?bpm=` link and see prefilled BPM.

**Acceptance Scenarios**:

1. **Given** a current BPM, **When** the user starts the metronome, **Then** audible (or clearly indicated) beats play at that tempo and can be stopped.
2. **Given** a current BPM, **When** the user opens the delay/note-duration view, **Then** they see common note lengths (at least quarter, eighth, dotted, and triplet variants as applicable) in milliseconds and can copy a value.
3. **Given** the user completed one or more measurements in a session, **When** they open history, **Then** recent BPM results are listed without creating an account.
4. **Given** a BPM value, **When** the user uses share/copy-link, **Then** the link encodes the BPM so opening it shows that value ready to use.
5. **Given** a shared BPM link, **When** a new visitor opens it, **Then** they see the BPM without needing to tap first, and can still start a new tap session.

---

### User Story 3 - SEO Intent Hub & Locales (Priority: P3)

A visitor arrives from search on a long-tail query (e.g. genre BPM, delay calculator, metronome, localized tap BPM). They land on a dedicated page that still offers a working tool above the fold, plus unique useful content (tables, explanations, FAQ). The site supports English and Russian. Pages expose proper titles, descriptions, and FAQ/software structured data where relevant. Optional non-intrusive ad regions may exist outside the tool, including empty reserved slots at launch.

**Why this priority**: Required to compete for search traffic and eventual ad revenue, but still valuable only after the tool works.

**Independent Test**: Crawl key routes; verify unique titles/H1s; verify tool present on tool-intent pages; switch EN/RU; validate FAQ visible; confirm ads (if present) never cover tap zone; confirm no account CTAs.

**Acceptance Scenarios**:

1. **Given** a user opens a genre BPM reference index or a specific genre page, **When** the page loads, **Then** they see useful BPM range information for that genre and a path back to the live tap tool.
2. **Given** a user opens delay-calculator or metronome intent pages, **When** the page loads, **Then** the relevant helper is usable above the fold (not only marketing text).
3. **Given** EN and RU locales, **When** the user switches language, **Then** primary UI chrome and key content strings update, and locale-specific URLs/hreflang relationships are available for indexing.
4. **Given** a primary tool page, **When** a search engine fetches it, **Then** it has a unique title/meta description, crawlable content below the tool, and FAQ content suitable for rich results where FAQs exist.
5. **Given** ad regions are enabled or reserved, **When** the user uses the tap tool, **Then** ads never overlay the tap target or primary BPM readout and do not require an account/premium upsell.

---

### User Story 4 - Installable Lightweight App Feel (Priority: P3)

A returning user on mobile wants the tool available like a small app: add to home screen / install prompt where supported, and basic offline ability to tap tempo if the shell was cached.

**Why this priority**: Improves retention and perceived quality; secondary to SEO pages.

**Independent Test**: Install PWA (or add to home screen); open offline after first visit; confirm tap still works for core measurement.

**Acceptance Scenarios**:

1. **Given** a supported mobile browser after first visit, **When** the user chooses install/add to home screen, **Then** the site is launchable as a standalone icon experience.
2. **Given** a previously visited installable build, **When** the network is unavailable, **Then** the core tap measurement still functions.

---

### Edge Cases

- Very slow tapping / long gaps: session should expire or ignore stale intervals so BPM does not become absurd.
- Very fast tapping: BPM remains within a sensible musical range or shows a clear out-of-range state.
- Accidental double-taps / jitter: averaging should damp noise; confidence should worsen if inconsistent.
- User taps half-time or double-time feel: ÷2/×2 must remain available after a reading exists.
- Clipboard permission denied: Copy failure is shown without breaking the tool.
- Metronome audio blocked by browser autoplay policies: user gesture starts audio; failure is explained.
- Opening share URL with invalid BPM param: ignore/fallback to empty tool state without crash.
- Language missing translation: fall back to English for that string.
- Ad script failure: tool remains fully usable.
- Reduced motion preference: essential feedback remains; non-essential animation is reduced.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide a tap-tempo measurement on the homepage that accepts pointer tap, touch, and Space key input.
- **FR-002**: System MUST compute BPM from intervals between taps and display it after at least 3 taps.
- **FR-003**: System MUST refine the displayed BPM as more taps arrive using a rolling/averaged approach suitable for live use.
- **FR-004**: System MUST present a stability/confidence indication that improves with consistent tapping and worsens with inconsistent tapping.
- **FR-005**: Users MUST be able to reset the current measurement session in one action.
- **FR-006**: Users MUST be able to halve or double the current BPM (÷2 / ×2) in one action each.
- **FR-007**: Users MUST be able to copy the current BPM to the clipboard in one action, with success/failure feedback.
- **FR-008**: System MUST offer a fullscreen/studio mode that keeps tapping primary and reduces surrounding chrome.
- **FR-009**: System MUST keep the tap tool usable in the first viewport on mobile and desktop for primary tool pages.
- **FR-010**: System MUST NOT require accounts, login, or premium payment for any MVP feature.
- **FR-011**: Given a current BPM, users MUST be able to start and stop a metronome at that tempo.
- **FR-012**: Given a current BPM, system MUST show a delay/note-duration table in milliseconds including common subdivisions (quarter, eighth, dotted, triplet variants) with per-value copy.
- **FR-013**: System MUST keep a short session history of recent BPM measurements locally in the browser (no account).
- **FR-014**: Users MUST be able to obtain a shareable link that encodes a BPM; opening that link MUST surface the BPM.
- **FR-015**: System MUST provide a genre BPM reference index and individual genre pages with useful tempo ranges and navigation to the tap tool.
- **FR-016**: System MUST provide dedicated intent pages for at least: primary tap BPM, delay calculator, and metronome.
- **FR-017**: System MUST support English and Russian UI/content for primary chrome and key pages, with indexable locale routing.
- **FR-018**: Primary public pages MUST include unique titles/meta descriptions and on-page FAQ or explanatory content below the tool where relevant.
- **FR-019**: System MUST expose structured data appropriate to tool/FAQ pages (e.g. software application and FAQ) without fabricating false claims.
- **FR-020**: If ads are shown, they MUST NOT overlay or intercept the tap zone or primary BPM readout; reserved non-shifting regions are preferred.
- **FR-021**: System MUST be installable as a PWA/home-screen app on supported browsers, with core tap available offline after first load.
- **FR-022**: System MUST work without uploading tap data or audio to a server for MVP measurement features.
- **FR-023**: Heart-rate/pulse MUST NOT be the homepage primary positioning; if present, it is secondary and includes a non-medical disclaimer.
- **FR-024**: System MUST provide clear empty/ready and active measurement states so first-time users understand they should tap to the beat.

### Key Entities

- **Tap Session**: A single measurement attempt; timestamps of taps; derived BPM; confidence/stability; created/reset time.
- **BPM Reading**: Numeric tempo value shown to the user; may be adjusted by ÷2/×2; copyable/shareable.
- **Note Duration Set**: Millisecond durations for musical subdivisions derived from a BPM reading.
- **History Item**: Locally stored past BPM reading with timestamp (and optional source: tap vs shared link).
- **Genre Profile**: Named genre with typical BPM range and short description for SEO/reference pages.
- **Locale Bundle**: Language-specific strings and content variants (EN, RU).
- **Ad Slot** (optional): Named placement outside the tool, with reserved space rules; may be empty at launch.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A new mobile visitor can obtain a usable BPM (3+ taps) in under 15 seconds from first paint, without creating an account.
- **SC-002**: On primary tool pages, the tap target and BPM readout are reachable without scrolling for at least the common mobile and desktop breakpoints used in QA.
- **SC-003**: After 8–12 consistent taps on a steady beat, users can achieve a reading suitable for musical use (perceived stable enough to copy into a DAW/DJ workflow); inconsistent tapping visibly lowers confidence.
- **SC-004**: At least 90% of moderated first-use test participants complete “get BPM and copy it” on the first attempt without help text beyond on-screen affordances.
- **SC-005**: Primary tool page passes agreed performance budgets in lab testing (mobile-focused): fast first interaction with the tap control and no ad-related layout shift over the tap zone.
- **SC-006**: Genre reference and intent pages each have unique titles/H1s and unique substantive content (not duplicate thin copies).
- **SC-007**: EN and RU locales both allow completing the primary tap → copy journey.
- **SC-008**: Core tap measurement remains usable when ad scripts fail or slots are empty.
- **SC-009**: After first visit, core tap works in offline/standalone install mode on a supported browser used in QA.
- **SC-010**: No user-facing path in MVP asks for signup, login, or premium purchase.

## Assumptions

- Temporary product name is **BPM Tap**; final domain/branding may change later without changing requirements.
- English is the primary SEO language; Russian is the first additional locale with full primary flows.
- Ads may launch empty (reserved slots) and be enabled after organic traffic; ad network choice is a plan-time detail.
- “Confidence/stability” is a UX signal derived from tap consistency, not a medical or scientific certification.
- Metronome sound requires a user gesture due to browser policies.
- Genre list for v1 is a curated starter set (enough for SEO hub value), expandable later.
- No backend account service in MVP; any future analytics is privacy-minimized and separate from measurement.
- Competing site features explicitly out of MVP core: premium pass, heart-rate as main product, BPH/RPS product sprawl, BPM guessing game as homepage focus.
- Delivery may use parallel workstreams/subagents, but acceptance is against these stories/requirements as a whole.
