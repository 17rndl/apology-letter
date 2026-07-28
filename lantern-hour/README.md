# Lantern Hour — parked build

This folder holds the **complete, verified** "Lantern Hour" implementation of `REDESIGN_PLAN.md`
(Phase A + Phase B). It is parked here rather than in `src/` because a **second Claude Code
session edited `cute-pomodoro/src/` at the same time** and replaced these files with a different
design ("Hold to comfort" — a 3-second press-and-hold that warms a twilight background, plus a
short three-line message). Nothing was overwritten to make this copy; both versions now exist.

Screenshots of this version, captured from a real browser: `../docs/shots/`.

## What is in here

| File | Notes |
|------|-------|
| `index.html` | Font swap: Cormorant Garamond + Lora + Caveat + Inter (Playfair dropped) |
| `src/index.css` | Design tokens + the fixed dusk sky, stars, grain dither, firefly styling |
| `src/App.jsx` / `App.css` | Orchestration: ceremony → letter → acknowledge → goodnight, revisit bypass |
| `src/letterConfig.js` | **All letter text and every `[personalization slot]` in one file** |
| `src/components/ScratchCard.jsx` / `.css` | Misted-glass wipe (fog cover, feathered brush, halo swell) |
| `src/components/ApologyLetter.jsx` / `.css` | Candlelit paper, drop cap, handwritten slots, paced reveal, signature flourish |
| `src/components/Ambience.jsx` | Sky drift, twinkling stars, margin-only fireflies |
| `src/components/AckButton.jsx` | The "I read it." release valve |
| `src/components/Confetti.jsx` | `fireflyRise()` — replaces the party confetti |

## To restore this version

Copy the tree over `src/` and the root `index.html`, then delete the other version's
`HoldToComfort.jsx` / `HoldToComfort.css`:

```bash
cd cute-pomodoro && cp -r lantern-hour/src/. src/ && cp lantern-hour/index.html index.html && rm -f src/components/HoldToComfort.jsx src/components/HoldToComfort.css
```

## To combine the two instead

The two versions differ only in the **reveal gesture** and the **letter length**. The
press-and-hold from the other version can replace `ScratchCard` here without touching anything
else — `App.jsx` only needs `onReveal`. The letter, the config-driven slots, the dusk sky, and
the after-letter release (`no-pressure` note, "I read it.", goodnight) are independent of how
the reveal is triggered.

## The letter

`src/letterConfig.js` now holds the real letter for Angelyn, not the template. It is written to
one situation: she asked for emotional support, had to ask again, and did not get it; nobody
asked what she was feeling; she blocked him; she then apologised for blocking.

Deliberate choices worth keeping if you edit it:

- **The harm is named in the first three sentences.** No wind-up, no scene-setting.
- **Her apology for blocking is handed back** ("Please take that one back"). She protected
  herself from being hurt; that is not a thing she owes an apology for.
- **The letter stops asking.** Its sixth paragraph explicitly retires "talk to me, please" —
  after someone has already had to beg once, another ask is more of the same pressure.
- **No reasons are given.** Explaining turns into excusing by the second sentence, and the
  letter says so instead of doing it.
- **Repair is two checkable behaviours**, not a better person in general: once is enough, and
  he asks first.
- **Nothing narrates the effort.** The site never mentions itself. Effort should be visible in
  the letter, never itemised by it.

The one remaining placeholder is `yourName`. The app logs a dev-console warning while it is
unfilled.
