/**
 * Everything she reads lives here. Change the words here, nowhere else.
 *
 * `yourName` is still a placeholder — the app warns in the dev console while it is.
 */

export const slots = {
  yourName: {
    value: 'Randel',
    hint: 'Sign it the way she calls you.',
  },
};

export const letter = {
  eyebrow: 'Dear Ely,',

  paragraphs: [
    'I’m sorry that I wasn’t able to show up the way you wanted and needed me to. I hope you will be able to forgive me for that. I should’ve just listened, but I made many apologies and excuses instead. If you feel like you need time for and with yourself, I will be waiting. I'll just be here,.',

    'But if you want to talk about it with me, please do so. I want to talk to you. I want you to tell me about the things that ails you. I want you to be able to trust me once more. Please, I really want us to work this out.',
  ],

  // the greeting and the signature bookend the letter; no extra closing line
  signoff: '',
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
