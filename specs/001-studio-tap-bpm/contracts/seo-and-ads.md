# Contract: SEO metadata & ads

## Per-page SEO

Every indexable page MUST provide:

| Field | Rule |
|-------|------|
| `<title>` | Unique; includes primary intent keyword naturally |
| meta description | Unique; ≤ ~160 chars target |
| canonical | Absolute self URL |
| hreflang | en + ru + x-default |
| H1 | One primary H1 matching intent |
| OG tags | title/description/url for sharing |

## JSON-LD

| Page type | Schema |
|-----------|--------|
| Tool pages (home, delay, metronome) | `WebApplication` or `SoftwareApplication` (free, browser) |
| Pages with FAQ blocks | `FAQPage` |
| Genre pages | optional `Article` or plain WebPage + FAQ if present |

Claims in schema MUST match visible page (no fake ratings/review counts).

## Sitemap / robots

- `sitemap-index` including locale URLs
- `robots.txt` allows all public tool/content routes

## AdSlot contract

| Rule | Requirement |
|------|-------------|
| Placement IDs | `below-tool`, `footer` only for v1 |
| Default | Render reserved empty region OR nothing when `PUBLIC_ADS_ENABLED` is false |
| Overlay | Forbidden on `[data-tool-root]` |
| CLS | Slot has min-height when enabled |
| Copy | No “Go Premium / Ad-free $1” CTAs |

`[data-tool-root]` marks the tool composition that ads must not cover.
