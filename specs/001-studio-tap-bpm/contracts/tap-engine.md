# Contract: Tap Engine API (client library)

Pure TypeScript module used by UI islands. No network I/O.

## `createTapEngine(options?) → TapEngine`

### Options

| Option | Default | Meaning |
|--------|---------|---------|
| minTapsToDisplay | 3 | Taps before BPM shown |
| windowSize | 8 | Max intervals in rolling window |
| staleGapMs | 2000 | Gap that resets session |
| minBpm | 30 | Range floor |
| maxBpm | 300 | Range ceiling |
| stableTapCount | 8 | Min taps for `high` confidence eligibility |

### Methods

| Method | Behavior |
|--------|----------|
| `tap(atMs?: number)` | Record tap; return `EngineSnapshot` |
| `reset()` | Clear session → idle snapshot |
| `setFactor(factor: 0.5 \| 1 \| 2)` | Adjust display BPM |
| `half()` / `double()` | Convenience ÷2 / ×2 |
| `hydrateBpm(bpm: number, source: 'share')` | Set reading without taps |
| `getSnapshot()` | Current snapshot |

### `EngineSnapshot`

```ts
{
  status: 'idle' | 'measuring' | 'stable'
  tapCount: number
  rawBpm: number | null
  bpm: number | null          // after factor + clamp
  factor: 0.5 | 1 | 2
  confidence: 'none' | 'low' | 'medium' | 'high'
  deviationBpm: number | null
  inRange: boolean
  source: 'tap' | 'share' | 'manual'
}
```

### Invariants

- `bpm` is null until `minTapsToDisplay` reached OR hydrated via share
- `confidence` is `none` when `bpm` is null
- Reset clears factor to `1` and source to ready idle
- Engine MUST be deterministic for a given tap timestamp sequence (unit-testable)
