# Contract: localStorage schema

Namespace prefix: `bpm-tap:`

## Keys

| Key | Value | Max |
|-----|-------|-----|
| `bpm-tap:history` | JSON array of `HistoryItem` | 10 items |
| `bpm-tap:locale-pref` | `"en"` \| `"ru"` | optional UX preference |
| `bpm-tap:prefs` | JSON `{ soundEnabled?: boolean }` | optional |

## HistoryItem JSON

```json
{
  "id": "string",
  "bpm": 128,
  "capturedAt": "2026-07-22T18:00:00.000Z",
  "source": "tap",
  "locale": "en"
}
```

## Rules

- Corrupt JSON → reset to `[]` / defaults without crashing UI
- Writes are best-effort; quota errors MUST NOT break tapping
- No secrets/PII stored
