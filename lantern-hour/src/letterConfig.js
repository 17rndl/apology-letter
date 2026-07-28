/**
 * Everything she reads lives here. Change the words here, nowhere else.
 *
 * One slot is still a placeholder: your name. The app logs a dev-console warning
 * while any [bracketed] text remains.
 */

export const slots = {
  yourName: {
    value: '[your name]',
    hint: 'Sign it the way she calls you.',
  },
};

export const letter = {
  eyebrow: 'For Angelyn',
  title: 'The apology I owe you',

  paragraphs: [
    'You had to ask me for support, and then you had to ask again. You said it yourself — you were begging me for it. Nobody should have to beg for that, and you should never have had to beg me. You came to me carrying something heavy and I turned it into work for you. That’s what I did. Not a misunderstanding, not bad timing. Me.',

    'I’ve been thinking about what that was like from where you were sitting. Reaching out is already the hard part, and you did the hard part — then you had to keep doing it, while the person you were reaching for didn’t move. And I never once asked what you were actually feeling about any of it. So you were carrying it, and explaining it, and asking for it, all at the same time. That’s exhausting, and none of it was your job.',

    'You said sorry for blocking me. Please take that one back. You were hurt, and you did what you needed to do to stop being hurt. That isn’t something you owe me an apology for — I’d rather you were safe than reachable. If shutting the door on me was the right call then, it was the right call.',

    'I’m not going to walk you through my reasons. Every one of them turns into an excuse by the second sentence, and you’ve heard enough of those from me. I wasn’t there. Figuring out why I go quiet exactly when someone needs me is my work to do, not yours to sit through.',

    'Here’s what changes, in things you can actually check. Once is enough — you will never have to ask me twice for support again. And I’ll ask. When something is off with you, you’ll hear me ask what you’re feeling about it, instead of waiting for you to carry it over and explain it to me first. Those two you can hold me to. I’m not going to promise you a better person in general; that’s easy to say and impossible to check.',

    'I’ve spent days now asking you to talk to me, to tell me about it, to let me in. I’m going to stop asking. You don’t owe me a conversation, a reply, or forgiveness — not tonight, not on any timeline, maybe not ever. If what you need is distance, take it, and I won’t fill it with messages. This isn’t me asking you for something. It’s just the whole apology in one place, for whenever you want it, if you ever do.',

    'What I actually meant, underneath all the badly timed messages: I’m sorry you had to hold that on your own. You deserved someone who showed up the first time you asked, and I wasn’t him. I’d like to be, and I know that’s something I have to show you rather than tell you. Whenever you want to cry it out — or never talk about it again — I’m here, and I’m not keeping score.',
  ],

  signoff: 'I’m sorry, Angelyn.',
  signature: '{{yourName}}',
};

export const microCopy = {
  cover: {
    eyebrow: 'For Angelyn',
    line: 'There’s a letter under here. Open it whenever you’re ready — today, another day, or not at all.',
    action: 'wipe the glass',
    sub: 'the light is already on',
  },
  postReveal: 'That’s the whole letter. Take all the time you need with it.',
  noPressure:
    'Nothing here is sent to me, and nothing here is waiting on an answer. No reply, no conversation, no forgiveness — not tonight, not on any schedule. It’s just yours to read.',
  skipPacing: 'show everything',
  replay: 'read again from the start',
  ack: {
    button: 'I read it.',
    after: 'Thank you. That’s all this page asks.',
  },
  goodnight: {
    lead: 'You don’t owe a response. When you’re done, you can put this page to rest.',
    button: 'goodnight',
    resting: 'This page will be here if you ever want it. Take care, Angelyn.',
    undo: 'wake it up',
  },
};

const SLOT_PATTERN = /\{\{(\w+)\}\}/g;

/** Replace {{slotKey}} with its value. Unknown keys are left untouched so they stay visible. */
export function fill(text) {
  return text.replace(SLOT_PATTERN, (match, key) => slots[key]?.value ?? match);
}

/** Split a string into plain-text and slot segments, so the signature can be handwriting. */
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

/** Dev-only nudge: the page must never be sent while a placeholder remains. */
export function warnOnUnfilledSlots() {
  if (!import.meta.env.DEV) return;
  const unfilled = Object.entries(slots).filter(([, slot]) => /\[.+\]/.test(slot.value));
  if (unfilled.length === 0) return;
  console.warn(
    `[apology] ${unfilled.length} slot(s) still hold placeholder text — fill these in src/letterConfig.js before sharing the link:\n` +
      unfilled.map(([key, slot]) => `  • ${key}: ${slot.hint}`).join('\n'),
  );
}
