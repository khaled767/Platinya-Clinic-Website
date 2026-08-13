// UI Interactions Module (Mobile Menu, Language Switcher, header behaviours)
// Kept in a single-responsibility module so it can be reused everywhere.

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

  // Prevent the button toggling when hovering (hover opens, click keeps open on touch)
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    switcher.classList.toggle("is-open");
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
