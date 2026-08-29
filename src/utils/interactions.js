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
      initServicesCarousel();
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

// Services 3D infinite ring carousel — the ring rotates continuously, each card
// counter-rotates to stay readable, and hovering pauses the rotation.
export function initServicesCarousel() {
  const ring = document.querySelector("#carousel-ring");
  if (!ring) return;

  const cards = Array.from(ring.querySelectorAll(".carousel-card"));
  const n = cards.length;
  if (n < 2) return;

  const radius = getRadius();
  const step = Math.round(360 / n);
  let rotY = 0;
  let raf = null;
  let paused = false;

  function getRadius() {
    const w = ring.clientWidth || 320;
    return Math.round(w * 1.6); // orbit radius
  }

  // Position cards around the ring on a circle, counter-rotated to face the viewer
  function layout(angle) {
    cards.forEach((card, i) => {
      const y = (angle + i * step) % 360;
      // counter-rotate each card so its front is always readable
      card.style.transform = `rotateY(${-y}deg) translateZ(${radius}px)`;
      // fade cards that are at the back (facing away)
      const facing = Math.cos(((y + 180) % 360) * Math.PI / 180); // -1..1
      const back = Math.min(0, facing); // negative when facing away
      card.style.opacity = back === 0 ? "1" : String(0.35);
      card.style.zIndex = back === 0 ? "3" : "1";
    });
  }

  let last = null;
  function tick(ts) {
    if (!last) last = ts;
    const dt = ts - last;
    last = ts;
    if (!paused) {
      rotY -= dt * 0.07; // smooth continuous rate (deg per ms); ~25s per full loop
      layout(rotY);
    }
    raf = requestAnimationFrame(tick);
  }

  // Hover to pause
  const carousel = document.querySelector("#services-carousel");
  if (carousel) {
    carousel.addEventListener("mouseenter", () => { paused = true; });
    carousel.addEventListener("mouseleave", () => { paused = false; });
  }

  layout(0);
  raf = requestAnimationFrame(tick);
}
