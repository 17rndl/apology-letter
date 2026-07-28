/**
 * Everything she reads lives here. Change the words here, nowhere else.
 *
 * `yourName` is still a placeholder — the app warns in the dev console while it is.
 */

export const slots = {
  yourName: {
    value: '[your name]',
    hint: 'Sign it the way she calls you.',
  },
};

export const letter = {
  eyebrow: 'For Angelyn',

  paragraphs: [
    'You had to ask me for support, and then ask again. You said it yourself — you were begging me for it. You should never have had to.',

    'And I never asked what you were feeling. So you were carrying it, explaining it, and asking for it, all at once. None of that was your job.',

    'You said sorry for blocking me. Please take that one back. You were hurt and you did what you needed to do — that isn’t something you owe me an apology for.',

    'I won’t give you reasons; they turn into excuses. Here’s what changes instead. Once is enough — you’ll never have to ask me twice again. And I’ll ask first, instead of waiting for you to explain.',

    'I’ve been asking you to talk to me. I’m going to stop asking. You don’t owe me a reply or forgiveness, tonight or ever. Whenever you want to cry it out — or never talk about it again — I’m here, and I’m not keeping score.',
  ],

  signoff: 'I’m sorry, Angelyn.',
  signature: '{{yourName}}',
};

const SLOT_PATTERN = /\{\{(\w+)\}\}/g;

/** Replace {{slotKey}} with its value. Unknown keys stay visible so they get noticed. */
export function fill(text) {
  return text.replace(SLOT_PATTERN, (match, key) => slots[key]?.value ?? match);
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
