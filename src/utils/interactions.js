// UI Interactions Module (Routing, Mobile Menu, Language Switcher, header behaviours)
// Kept in a single-responsibility module so it can be reused everywhere.

import renderApp from "../renderApp";
import { setLang } from "../i18n";

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
