// Phase 2 motion layer — the "expensive feel", still without shipping markup
// that depends on it.
//
// Four additions:
//   1. Smooth scrolling with Lenis (loaded on demand, browsers only).
//   2. Numbers that count up (the hero's 100%).
//   3. A slow parallax drift on the hero photo.
//   4. The services carousel can be dragged / swiped, and driven by arrow keys.
//
// Every piece bails out when `prefers-reduced-motion` is on, and nothing here
// runs inside jsdom, so `npm run build:full` keeps producing static HTML that
// looks finished before a single line of this executes.
import { isRealBrowser, prefersReducedMotion } from "./motion";

let lenis = null;
let smoothScrollRequested = false;

/**
 * matchMedia is not guaranteed: the pre-renderer's DOM has no matchMedia, and a
 * thrown TypeError there would abort the rest of the boot. Every media query in
 * this file goes through here so a missing implementation reads as "no match".
 */
function media(query) {
  try {
    return window.matchMedia ? window.matchMedia(query) : { matches: false };
  } catch (e) {
    return { matches: false };
  }
}

/* ------------------------------------------------------------------ *
 * 1. Smooth scrolling
 * ------------------------------------------------------------------ */
function startSmoothScroll() {
  if (smoothScrollRequested || !isRealBrowser() || prefersReducedMotion()) return;
  smoothScrollRequested = true;

  // Dynamic import: webpack puts Lenis in its own chunk, so a crawler or jsdom
  // never downloads it, and the first paint is not blocked by it.
  import("lenis")
    .then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.6,
        // Never hijack the wheel on touch devices: the native momentum there is
        // already smoother than anything a script can imitate.
        smoothTouch: false,
      });

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
      document.documentElement.classList.add("has-smooth-scroll");
    })
    .catch(() => {
      // A missing chunk (offline, blocked) must never break the page: the
      // browser's own scrolling is the fallback.
      lenis = null;
    });
}

/** Called on SPA route changes so a new page starts at the top. */
export function resetScroll() {
  if (lenis) lenis.scrollTo(0, { immediate: true });
}

/* ------------------------------------------------------------------ *
 * 2. Count-up numbers
 * ------------------------------------------------------------------ */
function countUp(el) {
  const raw = el.textContent.trim();
  const match = raw.match(/^(\d+)(\D*)$/); // "100%" -> 100 + "%"
  if (!match) return; // "24/7" and friends are left alone on purpose
  const target = parseInt(match[1], 10);
  const suffix = match[2] || "";
  if (!Number.isFinite(target) || target <= 0) return;

  const duration = 1100;
  const start = performance.now();
  el.classList.add("is-counting");

  const tick = (now) => {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
    el.textContent = `${Math.round(target * eased)}${suffix}`;
    if (p < 1) requestAnimationFrame(tick);
    else {
      el.textContent = `${target}${suffix}`;
      el.classList.remove("is-counting");
    }
  };
  requestAnimationFrame(tick);
}

function initCounters() {
  if (!isRealBrowser() || prefersReducedMotion()) return;
  const nodes = document.querySelectorAll(".trust-value");
  if (!nodes.length || typeof IntersectionObserver === "undefined") return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        countUp(entry.target);
      });
    },
    { threshold: 0.6 }
  );
  nodes.forEach((n) => io.observe(n));
}

/* ------------------------------------------------------------------ *
 * 3. Hero parallax
 * ------------------------------------------------------------------ */
function initParallax() {
  if (!isRealBrowser() || prefersReducedMotion()) return;
  const img = document.querySelector(".hero-card-img");
  if (!img) return;
  if (media("(max-width: 760px)").matches) return; // wasted paint on phones

  let ticking = false;
  const apply = () => {
    const y = Math.max(-22, Math.min(22, window.scrollY * 0.06));
    img.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) scale(1.04)`;
    ticking = false;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    },
    { passive: true }
  );
}

/* ------------------------------------------------------------------ *
 * 4. Draggable carousel
 * ------------------------------------------------------------------ */
function initCarouselDrag() {
  if (!isRealBrowser()) return;
  const stage = document.querySelector("#carousel-stage");
  if (!stage) return;
  const nextBtn = document.querySelector("#carousel-next");
  const prevBtn = document.querySelector("#carousel-prev");
  if (!nextBtn && !prevBtn) return;

  let startX = 0;
  let startY = 0;
  let dragging = false;
  let decided = false;
  const THRESHOLD = 45; // px of horizontal travel that counts as a swipe

  stage.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    startX = e.clientX;
    startY = e.clientY;
    dragging = true;
    decided = false;
  });

  stage.addEventListener("pointermove", (e) => {
    if (!dragging || decided) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (Math.abs(dx) < 12 && Math.abs(dy) < 12) return;
    decided = true;
    // Vertical intent belongs to the page, not the carousel.
    if (Math.abs(dy) > Math.abs(dx)) {
      dragging = false;
      return;
    }
    stage.classList.add("is-dragging");
  });

  const end = (e) => {
    if (!dragging) return;
    dragging = false;
    stage.classList.remove("is-dragging");
    const dx = e.clientX - startX;
    if (Math.abs(dx) < THRESHOLD) return;
    const forward = dx < 0; // drag left -> next
    const btn = forward ? nextBtn : prevBtn;
    if (btn) btn.click();
  };
  stage.addEventListener("pointerup", end);
  stage.addEventListener("pointercancel", () => {
    dragging = false;
    stage.classList.remove("is-dragging");
  });

  stage.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && nextBtn) { e.preventDefault(); nextBtn.click(); }
    if (e.key === "ArrowLeft" && prevBtn) { e.preventDefault(); prevBtn.click(); }
  });
}

/* ------------------------------------------------------------------ */
export function initMotionPlus() {
  // Each feature stands alone: one unsupported API must not take the others —
  // or the rest of the page initialisation — down with it.
  [startSmoothScroll, initCounters, initParallax, initCarouselDrag].forEach((fn) => {
    try {
      fn();
    } catch (e) {
      /* motion is a bonus; never let it break the page */
    }
  });
}
