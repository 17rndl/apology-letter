# Apology Site Redesign Plan — "Lantern Hour"

**Status: PLAN ONLY — nothing executed.** Produced 2026-07-29 from a 9-agent design/copy panel
(3 design concepts + 3 letter registers + gimmick ideation, scored by 2 judges).

---

## 0. What exists today

Single screen: lavender scratch-card (canvas, "Please scratch to reveal...") → frosted-glass
card with a generic 3-paragraph apology → 3 seconds of pink party confetti. Pastel animated
gradient background. Playfair Display + Inter.

Problems this plan fixes:

1. **The text is generic.** "I deeply regret the hurt and frustration I caused" names nothing,
   owns nothing specific, and ends by asking for forgiveness — which is pressure.
2. **Party confetti fires at the exact moment the recipient starts reading an apology.**
   Celebration language at their expense.
3. **The scratch card reads "lottery ticket / prize inside"** — wrong frame for an apology.
4. **Dead weight on disk:** `Timer.jsx`, `VirtualPet.jsx`, `hero.png`, `react.svg`, `vite.svg`
   are unused pomodoro leftovers.

Everything below is implementable with the already-installed stack
(**framer-motion, canvas-confetti, lucide-react, CSS**). **Zero new npm dependencies.**
Only change to externals: a Google Fonts swap in `index.html`.

---

## 1. The letter (this matters most)

Three registers were drafted (tender-earnest / quiet-accountable / warm-gently-light) and
judged *as the recipient of a serious apology would read them*. Winner: **quiet-accountable**
(63/70) — cleanest ownership, zero pressure. The final text below is that draft with the
judge's fixes applied and the best lines grafted in from the other two.

### 1.1 Final letter text

> Title: **For [their name] — the apology I owe you**
>
> This is the plain version of what I should have said right away, and didn't. So here it is,
> with nothing dressed up: **[one plain sentence naming exactly what you did]**. That happened
> because of choices I made. Not a misunderstanding. Not bad timing. Me.
>
> From where you stood: **[what it cost them, from their side]**. You didn't deserve any of
> that. You were **[what they were doing right — trusting me, counting on me]**, and I turned
> that into something that hurt. Whatever you've felt since — anger, hurt, embarrassment, or
> just being tired of it — you're right to feel it. I'm not here to talk you out of any of it.
> You don't have to soften any of it for my sake. Please don't, actually.
>
> You deserve honesty about why, so here it is without varnish: **[the honest, unflattering
> reason — a plain admission stated as fact, never as excuse]**. I'm not offering that as a
> defense — there isn't one. It was a choice. I made it. It was wrong. I knew you better than
> that. I should have acted like it. Figuring out the rest of the why is my homework, not yours.
>
> Here's what changes, in terms you can actually check. **[specific, observable behavior
> change #1]**. **[optional behavior change #2 — two maximum; more reads as bargaining]**.
> I'm not promising to be perfect — that's easy to say and impossible to verify. I'm promising
> those specific things. You won't have to take my word for it; you'll be able to see it.
> And if I slip, I'll own it out loud without you having to catch me.
>
> One thing matters more than the rest: this letter asks nothing of you. You don't have to
> reply. You don't have to forgive me — not this week, not this year, not ever. Forgiveness
> isn't a debt you owe me for saying sorry. If you need distance, take it, for as long as you
> need. If you ever want to talk, I'm here, and the door doesn't close. The apology stands
> either way. No expiration, no strings.
>
> One more thing, because it's true and I don't say it enough. You matter to me — not in a
> vague way, but in the specific way of **[one concrete, true detail about them or the
> relationship]**. I hurt someone I'm lucky to know. I'm sorry.
>
> **I meant every word. — [your name]**

### 1.2 Personalization slots (MUST be filled before this ever ships)

The site must never render with brackets visible. All slots live in one config file
(`src/letterConfig.js`) so personalizing = editing one file.

| Slot | Rule |
|------|------|
| `[their name]` | The name you actually call them — nickname beats formal name. |
| `[what you did]` | One sentence, active voice, starts with "I". Name the act, not its category ("I read your messages without asking", not "I violated your privacy"). No softeners ("kind of", "ended up"). |
| `[what it cost them]` | Their experience, from their vantage point — what they waited through, found out, had to carry. Not your guilt. |
| `[what they were doing right]` | The trust that was broken: "trusting me with something hard to share", "counting on me". |
| `[the honest, unflattering reason]` | Plain admission stated as fact: "I put my own comfort ahead of my word". Never an excuse. |
| `[behavior change #1 / #2]` | Concrete and checkable from the outside. "You hear it from me before you have to ask" — never "I'll be more considerate". Max two. |
| `[one concrete, true detail]` | A real memory or role they play — this line keeps the restrained register from reading cold. |
| `[your name]` | Sign it the way they know you. |

### 1.3 Micro-copy (every touchpoint repeats the no-pressure stance)

| Where | Text |
|-------|------|
| Cover (pre-reveal) | "For [their name]. There's a letter under here. Open it whenever you're ready — today, or any other day." |
| Wipe hint | "wipe the glass" + small subline "the light is already on" — no rush language anywhere |
| Post-reveal line | "That's the whole letter. Take all the time you need with it." |
| No-pressure note (below letter) | "Reading this is all it ever asked. You don't owe a reply, an answer, or forgiveness — not now, not on any schedule, maybe not ever. This exists so you'd know, not so you'd answer." |
| Buttons | "Read it again" / "Close for now" — **nothing else.** No "talk to me" button (a persistent clickable invitation contradicts the letter's release), no share, no reply field. |

### 1.4 Copy rules learned from the judge (apply to ANY future edits)

- No "but", no "if you felt", no explaining the harm away.
- Never narrate your own effort ("I've written this a dozen times", "I spent hours on this
  site") — the recipient reads that as billing them for labor.
- Never grade your own apology ("the harder promise", "I checked — no buts"). 
- No gift framing ("this is a gift with no receipt") — an apology is owed, not bestowed.
- No growth-arc closer ("I understand now in a way I didn't") — their pain isn't your lesson.
- "With love" only if the relationship unambiguously supports it (see D-4).

Full alternate letters (tender-earnest and warm-gently-light, with the judge's line-by-line
flags) are in **Appendix A** — the warm-light register is salvageable only for a mild incident.

---

## 2. Visual direction — "Lantern Hour" (judge's pick)

**One line:** a hushed blue dusk; the reader wipes mist off glass to reveal a candlelit paper
letter — the single brightest, warmest object on the page — while fireflies drift in the margins.

Why it won: it's the only concept that treats a *long letter* as something to be comfortably
read (Lora 17–18px/1.85 in a 36em measure); wiping fog to see clearly is practically the
thesis of an apology; it **keeps the existing ScratchCard** (only repaints cover + brush); zero
new deps; best mobile discipline. Runner-up "Pressed & Sealed" (wax-seal envelope) lost on
iOS-Safari 3D-flap risk and all-handwriting legibility; "Storybook Meadow" lost because the pet
mascot inserts a third character into a two-person moment. Both alternates: **Appendix B**.

### 2.1 Design tokens (paste into `src/index.css`, replacing current `:root`)

```css
:root {
  /* sky */
  --dusk-zenith: #0b102a;
  --dusk-upper: #141b3f;
  --dusk-mid: #2a2b5e;
  --dusk-lower: #4a3763;
  --dusk-horizon: #6e4560;
  /* light */
  --lantern-core: #ffd9a0;
  --lantern-amber: #ffb765;
  --lantern-halo: rgba(255, 170, 90, 0.18);
  --firefly: #ffe9b3;
  --moonlight: #cfd3ee;
  --moonlight-dim: #9aa0c7;
  /* paper */
  --paper: #f7f1e5;
  --paper-deep: #f0e6d2;
  --paper-edge: rgba(255, 205, 150, 0.35);
  --ink: #3d3550;
  --ink-soft: #5c5470;
  --ink-accent: #8a5a36;
  /* type */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Lora', Georgia, serif;
  --font-hand: 'Caveat', cursive;
  --font-ui: 'Inter', system-ui, sans-serif;
  /* shape + shadow */
  --radius-card: 14px;
  --shadow-card: 0 0 0 1px rgba(255, 190, 120, 0.12),
                 0 12px 48px rgba(6, 8, 24, 0.55),
                 0 0 90px var(--lantern-halo);
  --glow-display: 0 0 24px rgba(255, 205, 150, 0.35), 0 0 2px rgba(255, 255, 255, 0.4);
  --grain-svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  /* motion */
  --ease-settle: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-materialize: 1.4s;
  --dur-breath: 90s;
}
```

### 2.2 Typography

Replace the Playfair link in `index.html` with one request:

```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Lora:ital,wght@0,400;0,500;1,400&family=Caveat:wght@500;600&family=Inter:wght@400;500&display=swap
```

- **Display** — Cormorant Garamond 500/600 + italic. Sky heading "For [Name]" at
  `clamp(2rem, 7vw, 3.25rem)`, moonlight `#cfd3ee` with the `--glow-display` text-shadow.
  **Never below weight 500** (thin cuts vanish on low-DPI Android).
- **Body** — Lora 400/500, `clamp(1.0625rem, 2.5vw, 1.125rem)`, line-height 1.85,
  max-width 36em, ink `#3d3550`. This is the reading surface; nothing competes with it.
- **Accent** — Caveat 500/600 for the signoff only, 1.6em, rotated −1.5°. **18px floor,
  never body copy.**
- **UI** — Inter 400/500, 12–13px, uppercase, letter-spacing 0.08em, `--moonlight-dim`.

### 2.3 Background (4 fixed layers, `100dvh`, all CSS + a few motion divs)

1. **Dusk sky** — `linear-gradient(180deg, #0b102a 0%, #141b3f 45%, #2a2b5e 72%, #4a3763 90%, #6e4560 100%)`
   topped with two warm radial gradients pooling at the horizon and a faint moon
   (`radial-gradient(circle at 82% 12%, rgba(235,238,255,0.16)…)`). Layer is 120% tall,
   drifts via `translateY` over 90s alternate — GPU-cheap breathing.
2. **Stars** — ~40 comma-separated 1px radial-gradient dots on a `::before`, masked out
   toward the horizon (`mask-image: linear-gradient(180deg, black 0%, transparent 65%)`);
   duplicate layer at offset positions, two out-of-phase opacity loops (12s/17s) = twinkle.
3. **Grain dither** — `::after` with the `--grain-svg` turbulence tile, opacity 0.05,
   `mix-blend-mode: soft-light`. **Load-bearing: prevents OLED banding on the dark gradient.**
4. **Fireflies** — 12 divs (8 under 640px), 6px, `#ffe9b3` with layered amber box-shadow glow;
   framer-motion x/y waypoint drifts + opacity `[0,1,0.35,1,0]` over randomized 14–26s,
   `repeatType:'mirror'`. **Spawn only in the outer 20% margins — they frame the letter,
   never cross the text.** z-index below the card.

### 2.4 Reveal — ScratchCard re-fictioned from lottery ticket to misted glass

Keep the component, the 50% threshold, and the touch handling. Change:

- **Cover paint:** vertical gradient `#1a2150 → #2a2b5e` at ~96% alpha + an offscreen render
  of the grain tile drawn at `globalAlpha 0.25` — reads as condensation on cold glass. A faint
  warm radial wash (`rgba(255,183,101,0.10)`) at center **leaks the lantern glow through the
  fog before any interaction** — the reader knows something warm waits underneath.
- **Cover text:** Cormorant italic, `#cfd3ee` — "wipe the glass"; Inter 12px subline
  "the light is already on".
- **Brush:** 48px soft-edged radial stamp (feathered alpha falloff on the `destination-out`
  arc, not a hard circle) so wipes look like a palm on fog.
- **New `onProgress(pct)` prop** — the existing `checkReveal` already computes the
  percentage; expose it, **rAF-throttled** (it runs `getImageData` per pointermove — do not
  call more than once a frame). Drives: the wipe hint fading out and the card's amber halo
  swelling as wiping progresses, so the reveal literally warms under the reader's hand.
- **No re-fogging.** (Considered; rejected — re-covering cleared words toys with the reader.)

### 2.5 The letter card

Opaque candlelit paper — **not** frosted glass (backdrop-filter on dark reads cold and janks
on Android):

- `linear-gradient(180deg, #f7f1e5, #f0e6d2)`; grain tile overlay at 0.3 soft-light;
  radius 14px; 1px `--paper-edge` border; `--shadow-card` — the 90px outer amber ring is the
  lantern halo that makes the card the warmest object on the page. A `::before` paints a soft
  amber pool at the top edge, as if lit from a lantern hung above.
- **Tri-fold creases** (graft from Pressed & Sealed): two 3px gradient lines at 33%/66% —
  quietly asserts "this is a real letter that was folded." Pure CSS.
- Content: "For [Name]" in Cormorant italic; first paragraph opens with a 3-line Lora drop
  cap in `--ink-accent`; paragraphs separated by a centered amber interpunct `·`; Caveat signoff.
- **Highlighted slots** (graft from Storybook): `[Name]` and the personalized phrases render
  in Caveat 600 over a soft amber highlight (`linear-gradient(transparent 58%, rgba(255,217,160,0.35) 58%)`)
  — personalized words read as handwritten insertions into a typeset letter. Cheapest intimacy
  multiplier in the whole panel.
- **Materialization:** card `initial {opacity:0, y:24, filter:'blur(6px)'}` →
  `{opacity:1, y:0, filter:'blur(0)'}`, 1.4s, `--ease-settle`; paragraphs are stagger children
  (0.35s apart, fade + 12px rise + blur-to-clear) — the letter surfaces like breath clearing,
  which paces the reader into actually reading. **"Show everything" skip link top-right** —
  pacing is an offer, not a leash. Total pacing under ~8s. Never replays on revisit.
- **Signature flourish** (graft from Pressed & Sealed): an SVG `motion.path` underline below
  the signoff, `pathLength 0→1` over ~2.2s, fired after the last paragraph settles. ~15 lines
  of code; the single most intimate micro-moment of any concept.

### 2.6 Firefly rise replaces confetti

Party confetti is **removed**. On reveal, `canvas-confetti` is repurposed once:

```js
confetti({
  particleCount: 40, shapes: ['circle'],
  colors: ['#ffd9a0', '#ffb765', '#ffe9b3'],
  scalar: 0.6, startVelocity: 12, gravity: -0.25,
  drift: 0.5, ticks: 500, origin: { y: 1.1 },
});
```

Small amber points floating **up** from the bottom edge for ~6s — hushed, not celebratory.
Negative gravity is an off-label use: tune live; fallback is a one-shot framer-motion burst of
20 firefly divs.

### 2.7 Motion language (house rules)

Nothing under 1 second, nothing overshoots. House ease `cubic-bezier(0.22,1,0.36,1)`;
**springs banned** (bounce reads playful — wrong register). Hover/tap states change opacity or
glow only, no scale pops. `useReducedMotion()` gates everything: static sky, 5 static dots,
letter appears with a single 0.6s fade, no particles.

---

## 3. Gimmick roadmap (from 14 ideated, sensitivity-screened)

### Phase A — ship with the redesign

| Gimmick | What | Effort |
|---------|------|--------|
| Mist-wipe reveal | §2.4 — the core mechanic | M |
| Unhurried Ink | §2.5 staggered paragraphs + mandatory skip link | S |
| Firefly rise | §2.6 | S |
| Halo-swell on progress | §2.4 `onProgress` → glow warms as they wipe | S |
| Signature flourish | §2.5 self-drawing underline | S |

### Phase B — quick wins after the core lands

| Gimmick | What | Effort |
|---------|------|--------|
| **"I read it." release valve** | ~8s after reveal, one soft pill button below the signoff. Tap → morphs (`layout` animation) into "Thank you. That's all this page asks." Nothing else ever appears. localStorage so revisits don't re-ask. Past-tense fact, not a favor — and absolutely no "notify sender" implication. | S |
| **Welcome back, no rush** | localStorage `revealed` flag: revisits skip the fog and pacing entirely — straight to the letter, with a small "read again from the start" link to replay the ritual. The ceremony was for the first time; the words are theirs now. Track nothing else — no timestamps, no visit counts surfaced. | S |
| **Goodnight exit** | Bottom of page: "You don't owe a response. When you're done, you can put this page to rest." → 3s dim to deepest dusk, one line remains: "This page will be here if you ever want it. Take care, [name]." Not persisted — refresh restores. A felt ending instead of a dead-end tab. | S |

### Phase C — optional, decide per D-5

| Gimmick | Note |
|---------|------|
| P.S. fold | Small folded triangle after everything; unfolds (two-stage rotateX) to one sentence of pure gratitude — zero asks. Good ending beat. S |
| Soft room tone | Opt-in Web Audio pad + wipe shimmer + 3-note resolve on reveal. **Off by default, always** — autoplayed emotional music is manipulation by soundtrack. ~80 lines, no lib. S |
| Margin honesty | Max 2 dotted-underlined phrases with tap-to-show handwritten margin notes (second, more honest pass). Notes must deepen accountability, never relitigate. M |
| Promise flip-cards | "What I'm doing about it" row after the letter. **Lean skip** — the letter's repair paragraph already does this; duplicating risks reading as performance. M |

### Cut (and why — do not resurrect casually)

- **Pet mascot / Quiet Courier** — design judge: a third character in a two-person moment;
  splits attention, reads as performed charm. Revisit only under D-3.
- **Party confetti + "one more confetti" button** — celebration mechanic attached to
  someone's hurt.
- **Time-of-day palette** — conflicts with the fixed dusk fiction (was designed for the
  old pastel look).
- **Wax-seal envelope** — belongs to the Pressed & Sealed alternate (Appendix B); two gates
  before the words is one gate too many.
- **Any reply field, share button, or "talk to me" CTA** — the letter releases; the UI must
  not ask.

---

## 4. File-by-file execution list

| # | File | Change |
|---|------|--------|
| 1 | `index.html` | Font link swap (§2.2). Title → "For [Name]" (from config at build, or leave "I'm Sorry"). |
| 2 | `src/letterConfig.js` **(new)** | All letter text + every personalization slot + micro-copy in one exported object. Personalizing the site = editing this one file. Dev-mode console warning if any `[bracket]` remains. |
| 3 | `src/index.css` | Replace tokens with §2.1; dusk sky + stars + grain + vignette layers; remove old pastel gradient. |
| 4 | `src/App.jsx` | Orchestrate: cover → letter → ack → goodnight states; `revealed` localStorage bypass; reveal handler calls firefly rise. |
| 5 | `src/components/ScratchCard.jsx` | Cover repaint (gradient + noise + glow leak), feathered brush, `onProgress` (rAF-throttled), keep threshold + touch logic. |
| 6 | `src/components/ScratchCard.css` | Cursor, sizing to letter, halo transition driven by progress. |
| 7 | `src/components/Fireflies.jsx` **(new)** | Ambient margin fireflies (§2.3 layer 4). |
| 8 | `src/components/ApologyLetter.jsx` | New copy from config; drop cap, interpuncts, highlighted slots, stagger + blur variants, skip link, signature flourish, no-pressure note, buttons. |
| 9 | `src/components/ApologyLetter.css` | Candlelit paper, creases, halo, typography (§2.5). |
| 10 | `src/components/AckButton.jsx` **(new)** | Phase B "I read it." |
| 11 | `src/components/Confetti.jsx` | Replace `triggerConfetti` with `fireflyRise()` (§2.6) + reduced-motion no-op. |
| 12 | Delete | `Timer.jsx`, `Timer.css`, `VirtualPet.jsx`\*, `VirtualPet.css`\*, `src/assets/hero.png`, `react.svg`, `vite.svg`. (\*keep until D-3 decided) |

Estimated effort: Phase A ≈ one focused day; Phase B ≈ half day; Phase C à la carte.

---

## 5. Verification checklist (run at execution time)

- [ ] 375px mobile: letter measure, fog wipe with thumb, fireflies count drops to 8.
- [ ] `prefers-reduced-motion`: letter immediately visible, single fade, zero particles.
- [ ] OLED / dark-gradient banding: grain layer present (check at 30% screen brightness —
      also the register check: must read "warm dusk", not "sad night"; if somber, warm the
      horizon band and halo, don't lighten the sky).
- [ ] iOS Safari: `100dvh` on fixed background (URL-bar collapse must not jump the horizon).
- [ ] Contrast: body ink on paper ≥ AA; `--ink-accent` and moonlight text display-size only.
- [ ] `getImageData` throttle: wipe stays 60fps on a mid-tier phone.
- [ ] No `[bracket]` text renders anywhere (config lint).
- [ ] localStorage flows: revisit skip, ack persistence, goodnight NOT persisted.
- [ ] Negative-gravity confetti behaves; if not, swap to the framer-motion fallback.

---

## 6. Open decisions (owner: you)

| # | Decision | Default if unanswered |
|---|----------|----------------------|
| D-1 | **How serious was the incident?** Serious → ship exactly this plan. Mild/inside-joke → the warm-gently-light register (Appendix A2, with judge fixes applied) + Storybook direction become viable. | Serious — the safe register |
| D-2 | **Design direction** — A: Lantern Hour (recommended) · B: Pressed & Sealed (Appendix B1) · C: Storybook Meadow / keep-cute (Appendix B2) | A |
| D-3 | **Pet mascot in or out?** Judge says out for a sincere apology. If the relationship is playful and the incident mild, the "Quiet Courier" spec (nervous peek → relieved blink, never sad-at-reader) is in Appendix B2. | Out |
| D-4 | **Signoff intimacy** — "I meant every word." vs "With love —". "With love" only if unambiguously right for the relationship. | "I meant every word." |
| D-5 | **Phase C extras** — P.S. fold / sound / margin notes / promise cards. | P.S. fold only |
| D-6 | **"Close for now" behavior** — plain link vs the Goodnight dim ritual. | Goodnight dim |
| D-7 | **Deploy target** (Vercel/Netlify/GH Pages) + whether the page title should carry their name. | Undecided — doesn't block build |

---

## Appendix A — alternate letters (full text, with judge's flags)

### A1. Tender-earnest (2nd place, 59/70)

Best parts (already grafted into §1.1): the honest-unflattering-reason paragraph, the
slip-clause, "this letter isn't a bill". Judge flags if you use it whole: cut the
"dozen times" opener (bids for credit before ownership), cut "when I picture your face…
I don't get to look away" (guilt-as-performance), drop "harder" from "smaller, harder
promise", replace the "If you ever want to talk" **button** (UI-level ask), and swap
"With love, and nothing owed" unless D-4 says otherwise.

> **The apology I owe you**
>
> [Their name] — I should have said this a long time ago. Plainly: I'm sorry for [the specific
> thing]. I did that. Not circumstances, not a misunderstanding — me. You deserved to hear
> this sooner, and without having to ask for it.
>
> I keep thinking about what it was like on your side of it. [How it landed for them]. That's
> the part that matters — not my intentions, not what I meant to happen. You got hurt, and you
> got hurt by someone you should've been able to count on. You shouldn't have had to be in
> that moment at all. I put you there.
>
> You deserve honesty about why, so here it is without varnish: [the honest, unflattering
> reason]. I'm not offering that as a defense — there isn't one. It was a choice. I made it.
> It was wrong.
>
> Here's what changes, in concrete terms, whether or not we ever speak about this again:
> [behavior change #1], and [behavior change #2]. I won't insult you with a promise to be
> perfect. I'll make the smaller promise instead: in the exact situation where I failed you,
> I'll do the specific thing I didn't do. And if I slip, I'll own it out loud without you
> having to catch me.
>
> One true thing about you, and then I'm done: [one true, specific thing about them] — and you
> have never treated me the way I treated you. Whatever happens next, that fact stands.
>
> Last thing, and I mean it completely: you don't owe me anything for this. Not a reply, not
> acceptance, not forgiveness — not this week, not ever. This letter isn't a bill; there's no
> balance due on the other side of it. If you ever want to talk, I'm here, and I'll listen
> without defending myself. If what you need is distance, you'll have that too — no follow-ups,
> no guilt. This was just something true that belonged to you, and I finally wanted you to
> have it.
>
> I meant every word. — [your name]

### A2. Warm-gently-light (3rd place, 54/70 — mild incidents ONLY)

Structural problem for serious harm: the original opened with a full paragraph about the
website and the writer's effort before naming the harm ("look what I made you" before
"I'm sorry"). Usable version below applies all judge fixes: apology first, medium
acknowledged in one clause afterward, jokes removed from the accountability and repair
paragraphs, gift-framing deleted, no confetti button, "patiently" removed.

> **[their name], I'm sorry.**
>
> Here it is, plainly: I'm sorry for [the specific thing]. Not sorry-if, not
> sorry-things-got-weird. Sorry for what I did. You trusted me to [what they had every right
> to expect], and I didn't. That's on me. All of it. (I know the format is a lot — I wanted
> this to take more effort than a text.)
>
> I've been thinking about your side of it — which I should have done before I acted, not
> after. You didn't ask for any of this. It cost you [what it actually cost them], and
> whatever you felt about that — hurt, anger, embarrassment, plain old exhaustion with me —
> every bit of it was fair. You don't have to soften any of it for my sake. Please don't,
> actually.
>
> I'm not going to walk you through my reasons, because every explanation I draft turns into
> an excuse about four words in. What I did was wrong. Figuring out why I did it is my
> homework, not yours.
>
> Here's what changes — specifics you can check: [one or two concrete, checkable behavior
> changes]. I won't promise perfect — that's unverifiable. I'll promise these, and you can
> hold me to them.
>
> One more thing, and it might matter most: this letter asks nothing of you. You don't owe me
> a reply, a conversation, forgiveness, or so much as an emoji. Not today, not on any
> schedule, not ever. If the kindest thing for you is to close this tab, please do exactly
> that. This exists so you'd know, not so you'd answer.
>
> That's everything. No twist ending, no request hiding in the last line. Just this: I see
> what I did, I'm sorry all the way down, and whatever comes next — including nothing at
> all — is entirely up to you.
>
> No deadlines on any of this. — [your name]

---

## Appendix B — alternate design directions (full specs available)

### B1. Pressed & Sealed (2nd place)

Kraft envelope under lamplight; press the wax seal (pure-CSS crimson blob button) → seal
cracks in two, flap opens (rotateX spring), deckle-edged cream letter rises out. Caveat
handwriting body on ruled lines (32px rhythm), Homemade Apple signature, washi tape, pressed
wildflower SVG, dried-petal fall via `confetti.shapeFromPath`. Palette: desk linen
`#EFE3CC/#E0CFAF`, paper `#FBF6EA`, ink `#2F3A56`, kraft `#C9A876`, wax `#A63A2B`.
Zero new deps. **Why it lost:** whole-letter handwriting fatigues on a long read; the
preserve-3d flap has known iOS Safari flashing/z-order quirks — highest-risk build on the
exact device this will be opened on; seal-tap loses the scratch card's sustained-effort
quality. **Grafted into the main plan already:** signature flourish, tri-fold creases,
warmth-tuning guide, reduced-motion posture.

### B2. Storybook Meadow (3rd place — pairs with D-1 "mild" + D-3 "pet in")

Evolves the current pastel identity: watercolor meadow washes (blush/lavender/sage/butter
radial gradients), picture-book letter card with deckled edge, Fraunces drop cap + Literata
body, butter-highlighter behind slots, vellum scratch cover, two washi strips + one
pressed-flower sticker (hard cap — more tips childish), retuned pastel confetti puffs.
VirtualPet reused as shy companion: peeks behind the card, blush tracks scratch progress,
one-shot joy hop at the signoff (the infinite wiggle is retired — a pet fidgeting forever
next to a sincere letter is exactly the wrong tone), `pointer-events:none` always.
**Why it lost for the general case:** the mascot is a third party in the room, and the
register needs constant policing. Easiest build of the three if chosen.
