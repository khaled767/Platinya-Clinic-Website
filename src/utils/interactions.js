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

// Hash-based SPA routing: intercept data-route clicks, navigate via location.hash,
// and re-render the app plus re-bind UI interactions after each view change.
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
    e.preventDefault();
    const href = link.getAttribute("href") || "/";
    if ("#" + href === window.location.hash || (href === "/" && (window.location.hash === "" || window.location.hash === "#/"))) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.location.hash = href;
    reloadApp();
  });

  // Handle browser back/forward and manual hash changes
  window.addEventListener("hashchange", reloadApp);
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

  function restart() {
    if (timer) clearInterval(timer);
    timer = setInterval(next, 2500);
  }

  const carousel = document.querySelector("#services-carousel");
  if (carousel) {
    // pause on hover only while the pointer is inside
    carousel.addEventListener("mouseenter", () => { if (timer) clearInterval(timer); });
    carousel.addEventListener("mouseleave", restart);
  }

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
    const c = resolveCountry(countryInput.value);
    if (c) {
      preview.innerHTML = `<span class="flag">${c.flag}</span> ${c.dial}`;
      codeHidden.value = c.dial;
      countryInput.classList.remove("is-unknown");
    } else if (countryInput.value.trim() !== "") {
      preview.innerHTML = "?";
      codeHidden.value = "";
      countryInput.classList.add("is-unknown");
    } else {
      preview.innerHTML = `<span class="flag">🇸🇾</span> +963`;
      codeHidden.value = "+963";
      countryInput.classList.remove("is-unknown");
    }
    combinePhone();
  };

  const combinePhone = () => {
    if (!numberInput || !combined) return;
    const raw = numberInput.value;
    const cleaned = raw.replace(/[^0-9 ]/g, "");
    if (cleaned !== raw) numberInput.value = cleaned;
    const dial = (codeHidden && codeHidden.value || "").replace(/\D/g, "");
    const local = cleaned.replace(/[^0-9]/g, "");
    combined.value = local ? `+${dial} ${local}` : "";
    // hint only when digits present but too few to be real
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

  // Initialize preview
  if (countryInput) resolveTyped();

  // Show selected photo file names
  const file = document.getElementById("selfie-upload");
  const filesEl = form.querySelector("[data-upload-files]");
  if (file && filesEl) {
    file.addEventListener("change", () => {
      const names = Array.from(file.files || []).map((f) => f.name);
      filesEl.textContent = names.length ? names.join(" · ") : "";
    });
  }
}
