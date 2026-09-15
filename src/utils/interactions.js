// UI Interactions Module (Routing, Mobile Menu, Language Switcher, header behaviours)
// Kept in a single-responsibility module so it can be reused everywhere.

import renderApp from "../renderApp";
import { setLang } from "../i18n";
import { resolveCountry } from "./phoneCountries";

export function initMobileMenu() {
  const toggle = document.querySelector(".mobile-toggle");
  const nav = document.querySelector(".navbar-collapse");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the menu when a nav link is clicked
  nav.querySelectorAll("a[data-route]").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-active");
    });
  });
}

export function initLanguageSwitcher() {
  const switcher = document.querySelector(".lang-switcher");
  const btn = switcher ? switcher.querySelector(".lang-btn") : null;

  if (!switcher || !btn) return;

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!switcher.contains(e.target)) {
      switcher.classList.remove("is-open");
    }
  });

  // Hover opens; click keeps open on touch devices
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    switcher.classList.toggle("is-open");
  });

  // Perform the language switch
  switcher.querySelectorAll(".lang-option[data-lang]").forEach((opt) => {
    opt.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const lang = opt.getAttribute("data-lang");
      setLang(lang);
      // Re-render current route with the new language, then rebind UI
      renderApp();
      initMobileMenu();
      initLanguageSwitcher();
      initHeaderScroll();
      initServicesCarousel();
      initContactForm();
      document.dispatchEvent(new Event("langchange"));
    });
  });
}

export function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 10);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// Lightbox — opens a fullscreen black viewer for certificate images.
export function initLightbox() {
  const close = () => {
    const el = document.querySelector(".lightbox");
    if (el) el.remove();
  };

  // Close on background click / close button / Escape
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-lightbox]");
    if (trigger) {
      e.preventDefault();
      const src = trigger.getAttribute("data-lightbox");
      const overlay = document.createElement("div");
      overlay.className = "lightbox";
      overlay.innerHTML = `
        <button type="button" class="lightbox-close" aria-label="Close">&times;</button>
        <img src="${src}" alt="Enlarged certificate" class="lightbox-img" />
      `;
      document.body.appendChild(overlay);
      document.body.classList.add("lightbox-open");
      return;
    }

    // Close when clicking the dark backdrop or the close button
    if (e.target.classList && (e.target.classList.contains("lightbox") || e.target.classList.contains("lightbox-close"))) {
      close();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

// Real-path SPA routing: intercept data-route clicks, push a clean URL via the
// History API, and re-render the app plus re-bind UI interactions after each
// view change. Legacy #/hash URLs keep working (see router/index.js).
export function initRouting() {
  const reloadApp = () => {
    renderApp();
    initMobileMenu();
    initLanguageSwitcher();
    initHeaderScroll();
    initServicesCarousel();
    initContactForm();
    // Always jump to the top on route change so the new page is visible immediately
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  // Delegate all data-route clicks
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a[data-route]");
    if (!link) return;

    // Let the browser handle new-tab / modified clicks natively
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

    e.preventDefault();
    const href = link.getAttribute("href") || "/";

    if (href === currentLocationPath()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Push the clean URL so the address bar shows /hair/ instead of #/hair
    try {
      window.history.pushState({}, "", href === "/" ? "/" : href + "/");
    } catch (err) {
      window.location.hash = href;
    }
    reloadApp();
  });

  // Handle browser back/forward
  window.addEventListener("popstate", reloadApp);
  // Handle any legacy hash links still in the wild
  window.addEventListener("hashchange", reloadApp);
}

// The path currently shown in the address bar (without a trailing slash).
function currentLocationPath() {
  const p = (window.location.pathname || "/").replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

// Services infinite carousel — reliable flat advancing loop.
// The active card stays centred; neighbours peek on the sides; auto-advances;
// hovering slows/pauses. Implemented as a simple flex track (no fragile 3D ring).
export function initServicesCarousel() {
  const stage = document.querySelector("#carousel-stage");
  if (!stage) return;
  const cards = Array.from(stage.querySelectorAll(".carousel-card"));
  const n = cards.length;
  if (n < 2) return;

  let current = 0;
  let timer = null;
  let isPaused = false; // true while the pointer hovers the carousel
  let isMobile = window.matchMedia("(max-width: 640px)").matches;

  function render() {
    cards.forEach((card, i) => {
      card.classList.remove("is-active", "is-peek-left", "is-peek-right");
      if (isMobile) { card.style.display = ""; return; } // on mobile show all stacked
      const isVisible =
        i === current ||
        i === (current + 1) % n ||
        i === (current + n - 1) % n;
      card.style.display = isVisible ? "" : "none";
      if (i === current) card.classList.add("is-active");
      else if (i === (current + 1) % n) card.classList.add("is-peek-right");
      else if (i === (current + n - 1) % n) card.classList.add("is-peek-left");
    });
  }

  function next() {
    current = (current + 1) % n; // always wraps -> never halts on the last card
    render();
  }

  function prev() {
    current = (current + n - 1) % n; // step backwards, wraps
    render();
  }

  // (Re)start the auto-advance timer — but never while the pointer is hovering.
  function restart() {
    if (timer) clearInterval(timer);
    if (isPaused) return;
    timer = setInterval(next, 2500);
  }

  // Stop the timer outright.
  function pause() {
    isPaused = true;
    if (timer) { clearInterval(timer); timer = null; }
  }

  const carousel = document.querySelector("#services-carousel");
  if (carousel) {
    // Pause on hover — including immediately after a manual arrow click.
    carousel.addEventListener("mouseenter", pause);
    carousel.addEventListener("mouseleave", () => { isPaused = false; restart(); });
  }

  // Manual arrow controls — step one card and reset the auto-advance timer
  const prevBtn = document.querySelector("#carousel-prev");
  const nextBtn = document.querySelector("#carousel-next");
  if (prevBtn) prevBtn.addEventListener("click", (e) => { e.preventDefault(); prev(); restart(); });
  if (nextBtn) nextBtn.addEventListener("click", (e) => { e.preventDefault(); next(); restart(); });

  window.matchMedia("(max-width: 640px)").addEventListener("change", (e) => {
    isMobile = e.matches;
    render();
  });

  render();
  restart();
}

// Assessment & contact form: validate phone is only digits, resolve the typed
// country (code or name → flag), combine with local number, show chosen files.
export function initContactForm() {
  const form = document.querySelector("#assessment-form");
  if (!form) return;

  const countryInput = document.getElementById("country-code-input");
  const preview = document.getElementById("country-preview");
  const codeHidden = document.getElementById("country-code-hidden");
  const numberInput = document.getElementById("phone-number");
  const combined = document.getElementById("phone-combined");
  const hint = form.querySelector("[data-phone-hint]");

  // Update the flag+code chip + hidden dial code from the typed box
  const resolveTyped = () => {
    if (!countryInput || !preview || !codeHidden) return;
    const empty = (countryInput.value || "").trim() === "";
    const c = empty ? null : resolveCountry(countryInput.value);
    if (empty) {
      preview.style.display = "none";
      codeHidden.value = "";
      countryInput.classList.remove("is-unknown");
    } else if (c) {
      preview.innerHTML = `<span class="flag">${c.flag}</span> ${c.dial}`;
      preview.style.display = "inline-flex";
      codeHidden.value = c.dial;
      countryInput.classList.remove("is-unknown");
    } else {
      preview.innerHTML = "?";
      preview.style.display = "inline-flex";
      codeHidden.value = "";
      countryInput.classList.add("is-unknown");
    }
    combinePhone();
  };

  const combinePhone = () => {
    if (!numberInput || !combined) return;
    const raw = numberInput.value;
    const cleaned = raw.replace(/[^0-9 ]/g, "");
    if (cleaned !== raw) numberInput.value = cleaned;
    const dial = ((codeHidden && codeHidden.value) || "").replace(/\D/g, "");
    const local = cleaned.replace(/[^0-9]/g, "");
    combined.value = dial && local ? `+${dial} ${local}` : "";
    const digits = cleaned.replace(/[^0-9]/g, "").length;
    if (hint) {
      hint.textContent =
        cleaned.trim() !== "" && digits !== 0 && digits < 7 ? window.__t_phoneHint || "" : "";
    }
  };

  if (countryInput) countryInput.addEventListener("input", resolveTyped);
  if (numberInput) numberInput.addEventListener("input", combinePhone);
  if (form) {
    form.addEventListener("submit", () => { resolveTyped(); combinePhone(); });
  }

  // Neutral initial state — no country preselected
  if (countryInput) {
    countryInput.value = "";
    resolveTyped();
  }

  // Photo attachments — enforce limits before the form can be submitted:
  //   · at most 4 images
  //   · 4 MB total across all attachments (≈1 MB each)
  // Keeps the inbox safe (FormSubmit forwards attachments by email) and gives
  // the visitor a clear, translated message when a file is rejected.
  const MAX_FILES = 4;
  const MAX_TOTAL_BYTES = 4 * 1024 * 1024; // 4 MB across all files
  const file = document.getElementById("selfie-upload");
  const filesEl = form.querySelector("[data-upload-files]");
  const fileErr = form.querySelector("[data-upload-error]");

  const msgTooMany = () => window.__t_uploadMax || "You can attach up to 4 photos (4 MB total).";
  const msgTooBig = () => window.__t_uploadSize || "Total size must be under 4 MB.";

  const showError = (text) => {
    if (!fileErr) return;
    fileErr.textContent = text || "";
    fileErr.style.display = text ? "block" : "none";
  };

  // Rebuild the input's FileList so it only holds the accepted files.
  const setFiles = (accepted) => {
    try {
      const dt = new DataTransfer();
      accepted.forEach((f) => dt.items.add(f));
      file.files = dt.files;
    } catch (e) {
      /* very old browsers keep the original list — validation still blocks submit */
    }
  };

  // Keep the newest files that fit inside the total budget.
  const fitToBudget = (files) => {
    const kept = [];
    let total = 0;
    for (const f of files) {
      if (total + f.size > MAX_TOTAL_BYTES) continue;
      kept.push(f);
      total += f.size;
    }
    return kept;
  };

  if (file && filesEl) {
    file.addEventListener("change", () => {
      let picked = Array.from(file.files || []);
      let error = "";

      // 1) too many files?
      if (picked.length > MAX_FILES) {
        error = msgTooMany();
        picked = picked.slice(0, MAX_FILES);
      }

      // 2) total size over the 4 MB budget?
      const totalBytes = picked.reduce((sum, f) => sum + f.size, 0);
      if (totalBytes > MAX_TOTAL_BYTES) {
        error = msgTooBig();
        picked = fitToBudget(picked);
      }

      setFiles(picked);
      showError(error);
      filesEl.textContent = picked.length ? picked.map((f) => f.name).join(" · ") : "";
    });
  }

  // Final guard: if a rejected file is somehow still attached, block submit.
  form.addEventListener("submit", (e) => {
    const picked = Array.from((file && file.files) || []);
    if (picked.length > MAX_FILES) {
      e.preventDefault();
      showError(msgTooMany());
      return;
    }
    const totalBytes = picked.reduce((sum, f) => sum + f.size, 0);
    if (totalBytes > MAX_TOTAL_BYTES) {
      e.preventDefault();
      showError(msgTooBig());
    }
  });
}
