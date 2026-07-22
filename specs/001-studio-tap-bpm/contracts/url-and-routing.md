# Contract: URL & Routing

## Locale prefixes

| Locale | Prefix | Default |
|--------|--------|---------|
| English | `/en/` | Yes (primary SEO) |
| Russian | `/ru/` | No |

Root `/` MUST redirect to `/en/` (or negotiate with fallback to `/en/`).

## Public routes (v1)

| Route | Intent | Tool above fold |
|-------|--------|-----------------|
| `/{locale}/` | Tap BPM home | Tap tool |
| `/{locale}/delay` | Delay / ms calculator | Delay table (+ tap entry optional) |
| `/{locale}/metronome` | Online metronome | Metronome (+ BPM from tap/share) |
| `/{locale}/genres` | Genre BPM index | Link/embed to tap; table content OK |
| `/{locale}/genres/{slug}` | Genre BPM reference | Link to tap; unique content |

## Share query param

```
?bpm={integer}
```

- Valid: integer in **30–300** inclusive
- Invalid/missing: ignore; tool starts idle
- May combine with locale path: `/en/?bpm=128`
- Opening a valid share URL MUST show BPM ready without requiring taps first

## Hreflang

Each indexable page MUST alternate between `en` and `ru` counterparts + `x-default` → English URL.
