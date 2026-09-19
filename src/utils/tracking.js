// Google Analytics 4 events for the enquiry funnel.
//
// The client wants to SEE what happens around the contact form, not just the
// finished submissions, so the funnel is reported as four steps:
//
//   lead_form_start    — the visitor touched the form (first focus, keystroke or
//                        dropdown change). Someone who starts typing is a very
//                        different lead from an anonymous pageview.
//   lead_form_attempt  — the visitor pressed send but validation stopped them
//                        (missing/invalid field, or an attachment over the limit).
//                        These are the people worth calling back.
//   generate_lead      — the form passed validation and was actually submitted.
//   page_engaged_3min  — the visitor spent 3+ minutes of ACTIVE time on one page
//                        (time while the tab is visible; a background tab is not
//                        engagement). Fires once per page.
//
// Privacy: only the page, the chosen treatment, a duration and — for attempts —
// the reason are sent. Never a name, e-mail, phone number or attached file. The
// site states that medical data is handled under GDPR, so nothing identifying may
// leave the page.

const ACTIVE_THRESHOLD_MS = 3 * 60 * 1000;
const TICK_MS = 1000;

let dwellBooted = false;
let dwellTimer = null;
let dwellAccumulated = 0;
let dwellLastTick = 0;
let dwellPage = "";
let dwellFiredFor = "";

// Page identity for "once per page" rules: route + query (so /hair/ and
// /hair/?lang=ar count separately, exactly as GA4 sees them).
function pageKey() {
  try {
    return window.location.pathname + window.location.search;
  } catch (e) {
    return "/";
  }
}

// Send one GA4 event. Never throws: analytics must not be able to break the page.
export function track(name, params) {
  try {
    if (typeof window.gtag !== "function") return;
    window.gtag(
      "event",
      name,
      Object.assign(
        {
          page_path: pageKey(),
          page_title: document.title,
        },
        params || {}
      )
    );
  } catch (err) {
    /* ignore */
  }
}

// Seconds of ACTIVE time the visitor has spent on the current page.
export function activeSecondsOnPage() {
  return Math.round((dwellAccumulated + (document.hidden ? 0 : Date.now() - dwellLastTick)) / 1000);
}

// ---------------------------------------------------------------------------
// Form funnel. Call after every render: the router and the language switcher
// replace the form's markup, so the listeners must be re-bound each time.
// ---------------------------------------------------------------------------
let formStartedFor = "";
let formAttemptedFor = "";

export function initLeadFormTracking() {
  const form = document.querySelector("#assessment-form");
  if (!form) return;

  const key = pageKey();

  // 1) First real interaction with the form -> lead_form_start (once per page,
  //    even if a language switch re-renders the form).
  const onFirstTouch = () => {
    form.removeEventListener("input", onFirstTouch, true);
    form.removeEventListener("focusin", onFirstTouch, true);
    form.removeEventListener("change", onFirstTouch, true);
    if (formStartedFor === key) return;
    formStartedFor = key;
    track("lead_form_start", { form_id: "assessment" });
  };
  form.addEventListener("input", onFirstTouch, true);
  form.addEventListener("focusin", onFirstTouch, true);
  form.addEventListener("change", onFirstTouch, true);

  // 2) Browser-level validation refused the send (required/format/pattern).
  //    The submit event never fires in that case, only `invalid` per field.
  form.addEventListener(
    "invalid",
    () => {
      if (formAttemptedFor === key) return;
      formAttemptedFor = key;
      track("lead_form_attempt", { form_id: "assessment", reason: "validation" });
    },
    true
  );
}

// Called from the submit guard when the visitor's own attachment breaks a limit:
// that is a send attempt the visitor believes went through.
export function trackSubmitBlocked(reason) {
  const key = pageKey();
  if (formAttemptedFor === key) return;
  formAttemptedFor = key;
  track("lead_form_attempt", { form_id: "assessment", reason: reason || "blocked" });
}

// ---------------------------------------------------------------------------
// Dwell time: 3 minutes of ACTIVE time on one page.
// ---------------------------------------------------------------------------
export function initDwellTracking() {
  if (dwellBooted) return;
  dwellBooted = true;

  dwellPage = pageKey();
  dwellLastTick = Date.now();
  dwellAccumulated = 0;

  document.addEventListener("visibilitychange", tickDwell);
  window.addEventListener("pagehide", () => {
    tickDwell();
    if (dwellTimer) clearInterval(dwellTimer);
    dwellTimer = null;
  });

  dwellTimer = setInterval(tickDwell, TICK_MS);
}

function tickDwell() {
  const now = Date.now();
  const key = pageKey();

  // A client-side route change starts a new page: reset the clock.
  if (key !== dwellPage) {
    dwellPage = key;
    dwellAccumulated = 0;
    dwellLastTick = now;
    return;
  }

  if (document.hidden) {
    // Hidden tab: stop counting, but keep the clock honest for the next tick.
    dwellLastTick = now;
  } else {
    dwellAccumulated += now - dwellLastTick;
    dwellLastTick = now;
  }

  if (dwellFiredFor !== key && dwellAccumulated >= ACTIVE_THRESHOLD_MS) {
    dwellFiredFor = key;
    track("page_engaged_3min", { seconds_on_page: Math.round(dwellAccumulated / 1000) });
  }
}
