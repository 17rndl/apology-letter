/**
 * Everything the recipient reads lives here. Personalizing the site = editing this file.
 *
 * Slot values still wrapped in [brackets] are placeholders. Fill every one of them before
 * sending the link — the site logs a warning in dev while any remain.
 */

export const slots = {
  theirName: {
    value: '[their name]',
    hint: 'What you actually call them. A nickname lands warmer than a formal name.',
  },
  yourName: {
    value: '[your name]',
    hint: 'Sign it the way they know you.',
  },
  whatIDid: {
    value: '[one plain sentence naming exactly what you did]',
    hint: 'Active voice, starts with "I". Name the act, not its category — "I read your messages without asking", not "I violated your privacy". No softeners ("kind of", "ended up").',
  },
  whatItCostThem: {
    value: '[what it cost them, from their side]',
    hint: 'Their experience, from their vantage point: what they waited through, found out, had to carry. Not your guilt.',
  },
  whatTheyDidRight: {
    value: '[what they were doing right]',
    hint: 'The trust that was broken. Completes "You were ___" — e.g. "trusting me with something that wasn\'t easy to share", "counting on me the way people should be able to count on each other".',
  },
  honestReason: {
    value: '[the honest, unflattering reason]',
    hint: 'A plain admission about yourself, stated as fact — "I put my own comfort ahead of my word". Never an excuse.',
  },
  changeOne: {
    value: '[specific, observable behavior change]',
    hint: 'Checkable from the outside: "You hear it from me before you have to ask". Never "I\'ll be more considerate".',
  },
  changeTwo: {
    value: '[optional second change — delete this slot if one is enough]',
    hint: 'Two maximum. More reads as bargaining.',
  },
  oneTrueThing: {
    value: '[one concrete, true detail about them or the relationship]',
    hint: 'A real memory or the role they play in your life. This line is what keeps the restraint from reading cold — make it particular.',
  },
};

export const letter = {
  eyebrow: 'For {{theirName}}',
  title: 'The apology I owe you',

  paragraphs: [
    'This is the plain version of what I should have said right away, and didn\'t. So here it is, with nothing dressed up: {{whatIDid}}. That happened because of choices I made. Not a misunderstanding. Not bad timing. Me.',

    'From where you stood: {{whatItCostThem}}. You didn\'t deserve any of that. You were {{whatTheyDidRight}}, and I turned that into something that hurt. Whatever you\'ve felt since — anger, hurt, embarrassment, or just being tired of it — you\'re right to feel it. I\'m not here to talk you out of any of it. You don\'t have to soften any of it for my sake. Please don\'t, actually.',

    'You deserve honesty about why, so here it is without varnish: {{honestReason}}. I\'m not offering that as a defense — there isn\'t one. It was a choice. I made it. It was wrong. I knew you better than that. I should have acted like it. Figuring out the rest of the why is my homework, not yours.',

    'Here\'s what changes, in terms you can actually check. {{changeOne}}. {{changeTwo}}. I\'m not promising to be perfect — that\'s easy to say and impossible to verify. I\'m promising those specific things. You won\'t have to take my word for it; you\'ll be able to see it. And if I slip, I\'ll own it out loud without you having to catch me.',

    'One thing matters more than the rest: this letter asks nothing of you. You don\'t have to reply. You don\'t have to forgive me — not this week, not this year, not ever. Forgiveness isn\'t a debt you owe me for saying sorry. If you need distance, take it, for as long as you need. If you ever want to talk, I\'m here, and the door doesn\'t close. The apology stands either way. No expiration, no strings.',

    'One more thing, because it\'s true and I don\'t say it enough. You matter to me — not in a vague way, but in the specific way of {{oneTrueThing}}. I hurt someone I\'m lucky to know. I\'m sorry.',
  ],

  signoff: 'I meant every word.',
  signature: '{{yourName}}',
};

export const microCopy = {
  cover: {
    eyebrow: 'For {{theirName}}',
    line: 'There\'s a letter under here. Open it whenever you\'re ready — today, or any other day.',
    action: 'wipe the glass',
    sub: 'the light is already on',
  },
  postReveal: 'That\'s the whole letter. Take all the time you need with it.',
  noPressure:
    'Reading this is all it ever asked. You don\'t owe a reply, an answer, or forgiveness — not now, not on any schedule, maybe not ever. This exists so you\'d know, not so you\'d answer.',
  skipPacing: 'show everything',
  replay: 'read again from the start',
  ack: {
    button: 'I read it.',
    after: 'Thank you. That\'s all this page asks.',
  },
  goodnight: {
    lead: 'You don\'t owe a response. When you\'re done, you can put this page to rest.',
    button: 'goodnight',
    resting: 'This page will be here if you ever want it. Take care, {{theirName}}.',
    undo: 'wake it up',
  },
};

const SLOT_PATTERN = /\{\{(\w+)\}\}/g;

/** Replace {{slotKey}} with its value. Unknown keys are left untouched so they stay visible. */
export function fill(text) {
  return text.replace(SLOT_PATTERN, (match, key) => slots[key]?.value ?? match);
}

/** Split a string into plain-text and slot segments, for rendering slots as handwriting. */
export function segments(text) {
  const out = [];
  let cursor = 0;
  for (const match of text.matchAll(SLOT_PATTERN)) {
    if (match.index > cursor) {
      out.push({ type: 'text', content: text.slice(cursor, match.index) });
    }
    const key = match[1];
    out.push({ type: slots[key] ? 'slot' : 'text', key, content: slots[key]?.value ?? match[0] });
    cursor = match.index + match[0].length;
  }
  if (cursor < text.length) out.push({ type: 'text', content: text.slice(cursor) });
  return out;
}

/** Dev-only nudge: the site must never be sent while placeholders remain. */
export function warnOnUnfilledSlots() {
  if (!import.meta.env.DEV) return;
  const unfilled = Object.entries(slots).filter(([, slot]) => /\[.+\]/.test(slot.value));
  if (unfilled.length === 0) return;
  console.warn(
    `[apology] ${unfilled.length} slot(s) still hold placeholder text — fill these in src/letterConfig.js before sharing the link:\n` +
      unfilled.map(([key, slot]) => `  • ${key}: ${slot.hint}`).join('\n'),
  );
}
