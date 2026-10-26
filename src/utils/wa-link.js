// The single source of truth for the WhatsApp number.
//
// Why this file exists: the number used to be typed by hand in four places (the
// floating button, the footer pill, the contact card, the JSON-LD in
// template.html). One of them was left on an old line (+90 531 …) while the
// others moved to +90 530 …, and the "WhatsApp button does not work" report
// came back more than once. Nothing below is ever typed by hand again.
//
// wa.me wants the number in international form, digits only, no plus sign.
export const WA_NUMBER = "905300799487";
export const WA_DISPLAY = "+90 530 079 9487";

/**
 * A wa.me link. With a message, the chat opens with that text already typed.
 * The text is percent-encoded, which is what makes Arabic and the emoji in a
 * prefill survive the jump into WhatsApp.
 */
export function waHref(text) {
  const base = `https://wa.me/${WA_NUMBER}`;
  const body = typeof text === "string" ? text.trim() : "";
  return body ? `${base}?text=${encodeURIComponent(body)}` : base;
}
