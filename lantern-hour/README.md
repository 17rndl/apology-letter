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

## Before sending the link

`src/letterConfig.js` still holds nine `[bracketed]` placeholders. The app logs a dev-console
warning listing every unfilled one. Fill them all — the guidance for each slot is in the file
next to it, and in `REDESIGN_PLAN.md` §1.2.
