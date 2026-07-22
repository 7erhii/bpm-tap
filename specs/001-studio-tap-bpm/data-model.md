# Data Model: Studio Tap BPM

All runtime entities are client-side. No server persistence in MVP.

## TapSession

Represents one measurement attempt.

| Field | Type | Rules |
|-------|------|--------|
| id | string | Unique per session (uuid or timestamp+rand) |
| taps | number[] | Monotonic timestamps (ms) |
| startedAt | number | First tap time |
| updatedAt | number | Last tap time |
| status | `idle` \| `measuring` \| `stable` \| `reset` | Derived + explicit reset |

**Transitions**:
- `idle` → `measuring` on first accepted tap
- `measuring` → `stable` when confidence ≥ medium and tapCount ≥ 8 (tunable)
- any → `idle` on Reset (clear taps)
- long gap → new session (treat as reset + first tap)

## BpmReading

| Field | Type | Rules |
|-------|------|--------|
| bpm | number | Display BPM after average + optional ÷2/×2 |
| rawBpm | number | Pre-adjust average from taps |
| factor | `1` \| `0.5` \| `2` | From ÷2/×2 stack (normalized) |
| confidence | `none` \| `low` \| `medium` \| `high` | From variance + count |
| deviationBpm | number \| null | Optional ± hint for UI |
| source | `tap` \| `share` \| `manual` | Origin of current value |
| inRange | boolean | Within 30–300 (configurable) |

## NoteDurationSet

Derived from `BpmReading.bpm` (not stored permanently).

| Field | Type | Notes |
|-------|------|--------|
| bpm | number | Input |
| entries | NoteDuration[] | Computed list |

### NoteDuration

| Field | Type | Rules |
|-------|------|--------|
| id | string | e.g. `quarter`, `eighth-dotted`, `quarter-triplet` |
| label | string | Localized display label |
| kind | `straight` \| `dotted` \| `triplet` | |
| division | number | Relative to whole note (e.g. 1/4 → 4) |
| ms | number | Rounded sensibly for display (1 decimal or integer) |

## HistoryItem

Stored in `localStorage` array (max 10, newest first).

| Field | Type | Rules |
|-------|------|--------|
| id | string | Unique |
| bpm | number | Integer 30–300 preferred for storage |
| capturedAt | string (ISO) | When saved |
| source | `tap` \| `share` | |
| locale | `en` \| `ru` | Optional context |

**Validation**: Drop invalid BPM; dedupe consecutive identical BPM within short window (optional).

## GenreProfile (content)

Build-time content collection.

| Field | Type | Rules |
|-------|------|--------|
| slug | string | URL-safe, unique per locale file or shared slug |
| name | string | Localized |
| bpmMin | number | Inclusive |
| bpmMax | number | Inclusive ≥ min |
| summary | string | Unique SEO blurb |
| related | string[] | Optional related genre slugs |
| order | number | Index sort |

## LocaleBundle

| Field | Type | Rules |
|-------|------|--------|
| code | `en` \| `ru` | |
| messages | key→string | UI chrome + tool strings |
| fallback | `en` | Missing keys fall back |

## AdSlotConfig

| Field | Type | Rules |
|-------|------|--------|
| id | `below-tool` \| `footer` | Never `overlay-tool` |
| enabled | boolean | From env |
| minHeightPx | number | Reserve to limit CLS |
| pageTypes | string[] | Which layouts show slot |

## ShareParams

| Field | Type | Rules |
|-------|------|--------|
| bpm | number \| null | From `?bpm=`; invalid → null |

## Validation summary

- BPM display/storage: prefer integers; allow one decimal during live averaging if desired, round on copy/share.
- Tap gaps > stale threshold invalidate continuity.
- History cap 10.
- Genre ranges must be published with unique copy per page.
