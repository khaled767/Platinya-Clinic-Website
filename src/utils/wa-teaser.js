// Proactive WhatsApp greeting.
//
// A visitor reads for a while, then a small message appears beside the support
// button: a greeting, a question, and — if they stay longer — one more nudge.
// Everything is in the language of the page they are on, because the text comes
// from the same locale files as the rest of the site.
//
// Rules that matter:
//   * nothing happens in jsdom (the pre-renderer) or without JavaScript — the
//     bubble ships hidden and empty;
//   * the countdown starts at the FIRST page view and keeps running across SPA
//     navigations, so a visitor who browses five pages still gets greeted once
//     rather than never;
//   * closing it ends it for the browser session (sessionStorage), and it never
//     reappears on the next page;
//   * the chime is synthesised with Web Audio (no audio file, 0 KB) and fails
//     silently when the browser blocks sound before the first interaction.

import { t } from "../i18n";
import { isRealBrowser, prefersReducedMotion } from "./motion";

const DISMISS_KEY = "platinya:wa-teaser";
const MESSAGES = ["wa.teaser1", "wa.teaser2", "wa.teaser3"];
// Cumulative seconds from the first page view.
const MILESTONES_MS = [10000, 32000, 62000];
const TYPING_MS = 1500;

// Test hook: the suite cannot sit through a 62-second sequence, so the timeline
// can be compressed from outside. Absent in production, these are undefined.
function timeline() {
  const o = typeof window !== "undefined" ? window.__PLATINYA_WA_TIMING__ : null;
  return Array.isArray(o) && o.length ? o : MILESTONES_MS;
}
function typingDelay() {
  const o = typeof window !== "undefined" ? window.__PLATINYA_WA_TYPING__ : null;
  return Number.isFinite(o) ? o : TYPING_MS;
}

let startedAt = 0;
let shown = 0;
let timers = [];
let audioCtx = null;
let audioUnlocked = false;

function clearTimers() {
  timers.forEach((id) => clearTimeout(id));
  timers = [];
}

function dismissed() {
  try {
    return sessionStorage.getItem(DISMISS_KEY) === "closed";
  } catch (e) {
    return false;
  }
}

/** A soft two-note chime. No asset, no network, no bytes. */
function chime() {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    if (!audioCtx) audioCtx = new AC();
    if (audioCtx.state === "suspended") audioCtx.resume().catch(() => {});

    const now = audioCtx.currentTime;
    [
      [987.77, 0, 0.14],
      [1318.51, 0.1, 0.18],
    ].forEach(([freq, at, len]) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, now + at);
      gain.gain.linearRampToValueAtTime(0.16, now + at + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + at + len);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now + at);
      osc.stop(now + at + len + 0.03);
    });
  } catch (e) {
    /* autoplay blocked or no Web Audio — a silent greeting is still a greeting */
  }
}

/** Browsers only allow sound after a gesture; arm it the moment one happens. */
function unlockAudioOnce() {
  if (audioUnlocked) return;
  audioUnlocked = true;
  const unlock = () => {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!audioCtx) audioCtx = new AC();
      if (audioCtx.state === "suspended") audioCtx.resume().catch(() => {});
    } catch (e) {
      /* ignore */
    }
    ["pointerdown", "keydown", "touchstart"].forEach((evt) =>
      document.removeEventListener(evt, unlock, true)
    );
  };
  ["pointerdown", "keydown", "touchstart"].forEach((evt) =>
    document.addEventListener(evt, unlock, true)
  );
}

export function resetWaTeaser() {
  clearTimers();
  startedAt = 0;
  shown = 0;
}

export function initWaTeaser() {
  const box = document.getElementById("wa-teaser");
  if (!box || !isRealBrowser() || dismissed()) return;

  const textEl = box.querySelector(".wa-teaser-text");
  if (!textEl) return;

  clearTimers();
  if (!startedAt) startedAt = Date.now();

  // Never greet a tab that is in the background: a visitor who switched away
  // should meet the first message on return, not the third.
  const whenVisible = (fn) => {
    if (!document.hidden) return fn();
    const onShown = () => {
      if (document.hidden) return;
      document.removeEventListener("visibilitychange", onShown);
      fn();
    };
    document.addEventListener("visibilitychange", onShown);
  };

  const reveal = (index) => whenVisible(() => {
    box.hidden = false;
    box.classList.add("is-typing");
    const typing = setTimeout(() => {
      box.classList.remove("is-typing");
      textEl.textContent = t(MESSAGES[index]);
      box.classList.add("is-open");
      if (!prefersReducedMotion()) chime();
      shown = index + 1;
    }, prefersReducedMotion() ? 0 : typingDelay());
    timers.push(typing);
  });

  // Continue the sequence from wherever this page view joins it.
  timeline().forEach((at, index) => {
    if (index < shown) return;
    const remaining = at - (Date.now() - startedAt);
    if (remaining <= 0) {
      reveal(index);
      return;
    }
    timers.push(setTimeout(() => reveal(index), remaining));
  });

  const close = box.querySelector(".wa-teaser-close");
  if (close && !close.dataset.bound) {
    close.dataset.bound = "1";
    close.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      clearTimers();
      shown = MESSAGES.length;
      box.classList.remove("is-open");
      box.hidden = true;
      try {
        sessionStorage.setItem(DISMISS_KEY, "closed");
      } catch (err) {
        /* private mode: it will simply show again next visit */
      }
    });
  }

  unlockAudioOnce();
}
