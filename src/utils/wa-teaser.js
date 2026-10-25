// Proactive WhatsApp greeting.
//
// A visitor reads for a few seconds, then a small message appears beside the
// support button: a greeting, a question, one more nudge — each in the language
// of the page. Closing it does not silence the coordinator forever: it steps
// back and returns later with the next message. Only the last message ends it.
//
// Timing: 6s → 24s → 50s from the first page view. Closing snoozes the next
// message by 40s instead of cancelling it.
//
// The state (how many messages were shown, when the next one is due) lives in
// sessionStorage, because every internal link is a real page load: without it a
// visitor would meet message one again on every page of the site.
//
// Nothing happens in jsdom (the pre-renderer) or without JavaScript — the bubble
// ships hidden and empty.

import { t } from "../i18n";
import { isRealBrowser, prefersReducedMotion } from "./motion";

const STATE_KEY = "platinya:wa-state";
const MESSAGES = ["wa.teaser1", "wa.teaser2", "wa.teaser3"];
const FIRST_DELAY = 6000;
const MILESTONES_MS = [6000, 24000, 50000];
const SNOOZE_MS = 40000;
const TYPING_MS = 1500;

let timers = [];
let audioCtx = null;
let audioUnlocked = false;

// The suite cannot sit through a 50-second sequence, so the timeline can be
// compressed from outside. Absent in production, these are undefined.
function config() {
  const w = typeof window !== "undefined" ? window : {};
  const gaps = Array.isArray(w.__PLATINYA_WA_TIMING__) && w.__PLATINYA_WA_TIMING__.length
    ? w.__PLATINYA_WA_TIMING__
    : MILESTONES_MS;
  return {
    milestones: gaps,
    first: Number.isFinite(w.__PLATINYA_WA_FIRST__) ? w.__PLATINYA_WA_FIRST__ : FIRST_DELAY,
    snooze: Number.isFinite(w.__PLATINYA_WA_SNOOZE__) ? w.__PLATINYA_WA_SNOOZE__ : SNOOZE_MS,
    typing: Number.isFinite(w.__PLATINYA_WA_TYPING__) ? w.__PLATINYA_WA_TYPING__ : TYPING_MS,
  };
}

function clearTimers() {
  timers.forEach((id) => clearTimeout(id));
  timers = [];
}

function readState() {
  try {
    const raw = sessionStorage.getItem(STATE_KEY);
    const s = raw ? JSON.parse(raw) : null;
    if (s && typeof s === "object" && Number.isFinite(s.shown)) return s;
  } catch (e) {
    /* private mode */
  }
  return null;
}

function saveState(state) {
  try {
    sessionStorage.setItem(STATE_KEY, JSON.stringify(state));
  } catch (e) {
    /* private mode: the greeting just restarts on the next page */
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

/** Never greet a tab that is in the background. */
function whenVisible(fn) {
  if (!document.hidden) return fn();
  const onShown = () => {
    if (document.hidden) return;
    document.removeEventListener("visibilitychange", onShown);
    fn();
  };
  document.addEventListener("visibilitychange", onShown);
}

export function initWaTeaser() {
  const box = document.getElementById("wa-teaser");
  if (!box || !isRealBrowser()) return;
  const textEl = box.querySelector(".wa-teaser-text");
  if (!textEl) return;

  const c = config();
  const state = readState() || { shown: 0, nextAt: Date.now() + c.first };
  if (state.done || state.shown >= MESSAGES.length) {
    state.done = true;
    saveState(state);
    return;
  }
  if (!Number.isFinite(state.nextAt)) state.nextAt = Date.now() + c.first;

  clearTimers();

  const reveal = () => {
    whenVisible(() => {
      if (state.done) return;
      box.hidden = false;
      box.classList.add("is-typing");
      timers.push(
        setTimeout(() => {
          if (state.done) return;
          box.classList.remove("is-typing");
          textEl.textContent = t(MESSAGES[state.shown]);
          box.classList.add("is-open");
          if (!prefersReducedMotion()) chime();
          state.shown += 1;
          if (state.shown < MESSAGES.length) {
            // distance between this milestone and the next one in the timeline
            const gap = c.milestones[state.shown] - c.milestones[state.shown - 1];
            state.nextAt = Date.now() + Math.max(0, gap);
          } else {
            state.nextAt = null;
            state.done = true;
          }
          saveState(state);
          if (!state.done) schedule(); // arm the next message
        }, prefersReducedMotion() ? 0 : c.typing)
      );
    });
  };

  const schedule = () => {
    const remaining = state.nextAt - Date.now();
    if (remaining <= 0) reveal();
    else timers.push(setTimeout(reveal, remaining));
  };

  schedule();

  const close = box.querySelector(".wa-teaser-close");
  if (close && !close.dataset.bound) {
    close.dataset.bound = "1";
    close.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      clearTimers();
      box.classList.remove("is-open");
      timers.push(setTimeout(() => { box.hidden = true; }, 300));
      if (state.shown < MESSAGES.length) {
        // Not a refusal — just "later". The remaining messages still arrive.
        state.nextAt = Date.now() + c.snooze;
        saveState(state);
        schedule();
      } else {
        state.done = true;
        saveState(state);
      }
    });
  }

  unlockAudioOnce();
}

/** Used by the suite to start from a clean session. */
export function resetWaTeaser() {
  clearTimers();
  try {
    sessionStorage.removeItem(STATE_KEY);
  } catch (e) {
    /* ignore */
  }
}
