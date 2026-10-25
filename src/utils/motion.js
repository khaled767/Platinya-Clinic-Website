// Motion layer — scroll reveals, hero cascade, reading progress.
//
// Deliberately dependency-free: no GSAP, no AOS, no extra bytes. The whole
// effect is one IntersectionObserver plus the CSS in styles/layout/motion.css.
//
// Three hard rules this module respects:
//   1. Never hide content without JavaScript. `data-reveal` and the
//      `motion-ready` class are only added at runtime, so the pre-rendered
//      HTML Google indexes and no-JS visitors always see the full page.
//   2. Never run inside jsdom. The pre-renderer executes the real bundle, and
//      jsdom has no IntersectionObserver — the guard below keeps the build
//      output identical to the browser output.
//   3. Never fight the existing hover states. The CSS animates `translate` and
//      `scale`, the components animate `transform`; they compose instead of
//      overriding each other.

const REVEAL_SELECTOR = [
  // hero — a single cascade, top to bottom
  ".hero-badge",
  ".hero-title",
  ".hero-description",
  ".hero-actions",
  ".hero-trust-bar",
  ".hero-media",
  // section headers
  ".section-header",
  ".page-banner .container > *",
  // cards and repeated blocks
  ".card-luxury",
  ".amenity-card",
  ".testimonial-card-luxury",
  ".why-us-card",
  ".faq-item",
  ".partner-card",
  ".step-card",
  ".gallery-item",
  ".legal-statement",
  // editorial two-column rows
  ".hotel-intro-text",
  ".hotel-intro-img",
  ".hotel-hero-content",
  ".dental-row",
  ".hair-row",
  // about + licences + carousel + contact
  ".about-content",
  ".about-highlights",
  ".license-card",
  ".services-carousel",
  ".contact-channels",
  // forms
  ".contact-form",
  ".contact-info",
].join(",");

const IMAGE_SELECTOR = ".hero-media, .hotel-intro-img";

let observer = null;
let progressBound = false;

export function isRealBrowser() {
  if (typeof window === "undefined" || typeof document === "undefined") return false;
  // The single reliable signal: jsdom (the pre-renderer) has no
  // IntersectionObserver, and neither does any browser old enough to matter.
  // Bailing here keeps the pre-rendered HTML byte-identical to the browser DOM,
  // so nothing is ever hidden from a crawler.
  return "IntersectionObserver" in window;
}

export function prefersReducedMotion() {
  return Boolean(
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

// A 2px gold hairline across the top of the viewport that fills as you read.
// Created in JS so it never appears in the pre-rendered HTML.
function initProgress() {
  if (progressBound) return;
  progressBound = true;

  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  bar.setAttribute("aria-hidden", "true");
  const fill = document.createElement("div");
  fill.className = "scroll-progress__fill";
  bar.appendChild(fill);
  document.body.appendChild(bar);

  let frame = 0;
  const update = () => {
    frame = 0;
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    fill.style.transform = `scaleX(${ratio.toFixed(4)})`;
  };
  const onScroll = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  update();
}

export function initMotion() {
  if (!isRealBrowser()) return;

  // Respect the visitor's system setting: show the finished page, no motion.
  if (prefersReducedMotion()) return;

  document.documentElement.classList.add("motion-ready");

  if (observer) observer.disconnect();

  const nodes = Array.from(document.querySelectorAll(REVEAL_SELECTOR));

  // Stagger: elements that share a parent enter one after another, so a row of
  // three cards reads as a sequence instead of a single flash.
  const byParent = new Map();
  nodes.forEach((el) => {
    el.setAttribute("data-reveal", el.matches(IMAGE_SELECTOR) ? "image" : "");
    const parent = el.parentElement || document.body;
    if (!byParent.has(parent)) byParent.set(parent, []);
    byParent.get(parent).push(el);
  });

  byParent.forEach((siblings) => {
    // The hero is the one place the cascade should be felt: a slower, deliberate
    // entrance, then the rest of the page moves at a normal reading pace.
    const isHero = Boolean(siblings[0].closest(".hero-section"));
    const step = isHero ? 150 : siblings.length <= 3 ? 110 : 85;
    siblings.forEach((el, i) => {
      el.style.setProperty("--reveal-delay", `${Math.min(i, 6) * step}ms`);
    });
  });

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    // threshold 0 + a bottom margin: tall blocks (a whole form) reveal as soon
    // as their top edge is on screen. The negative 12% margin delays the trigger
    // until the block is already 12% into the viewport, so the visitor watches it
    // arrive instead of finding it already finished.
    { threshold: 0, rootMargin: "0px 0px -12% 0px" }
  );

  nodes.forEach((el) => observer.observe(el));

  initProgress();
}
