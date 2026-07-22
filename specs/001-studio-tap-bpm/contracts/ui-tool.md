# Contract: Tool UI (first viewport)

Applies to homepage and any page embedding the primary tap tool.

## Required regions (first viewport)

1. **Brand** — product name visible without competing headline dominance
2. **BpmReadout** — large numeric BPM (or placeholder state)
3. **ConfidenceCue** — text/indicator for stability (`none/low/medium/high`)
4. **TapTarget** — dominant hit area; labeled affordance (“Tap the beat” / localized)
5. **PrimaryControls** — Reset, ÷2, ×2, Copy (labels required; icons optional)
6. **Secondary entry** — Metronome / Delay / History / Fullscreen accessible without burying Reset/Copy

## Interaction contracts

| Action | Input | Result |
|--------|-------|--------|
| Tap | pointerup/touch on TapTarget OR Space (when not in text field) | `engine.tap()` + pulse feedback |
| Reset | control | idle state |
| ÷2 / ×2 | control | factor change; metronome/delay follow displayed BPM |
| Copy | control | clipboard write of integer BPM string; toast/inline confirm |
| Fullscreen | control | studio mode; tap still works |
| Esc | key in fullscreen | exit fullscreen |

## Forbidden

- Ads, modals, or banners covering TapTarget or BpmReadout
- Account/premium CTAs in tool chrome
- Requiring scroll to reach TapTarget on reference mobile width (390×844) and desktop (1280×800)

## Empty / share states

- Idle: show CTA to tap; BPM placeholder (e.g. `—` or `0` with muted style — pick one in implementation and keep consistent)
- Share hydrate: show BPM immediately; confidence may be `none` or labeled as shared until user taps
