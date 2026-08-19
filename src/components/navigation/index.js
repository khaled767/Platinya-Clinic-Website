// Navigation Component — i18n aware
import { t } from "../../i18n";

export default function navigation() {
  return `
    <nav class="main-nav">
      <ul class="nav-list">
        <li class="nav-item">
          <a data-route href="/" class="nav-link">${t("nav.home")}</a>
        </li>
        <li class="nav-item">
          <a data-route href="/services" class="nav-link">${t("nav.services")}</a>
        </li>
        <li class="nav-item">
          <a data-route href="/about" class="nav-link">${t("nav.about")}</a>
        </li>
        <li class="nav-item">
          <a data-route href="/hospitals" class="nav-link">${t("nav.hospitals")}</a>
        </li>
        <li class="nav-item">
          <a data-route href="/testimonials" class="nav-link">${t("nav.experiences")}</a>
        </li>
        <li class="nav-item">
          <a data-route href="/contact" class="nav-link">${t("nav.contact")}</a>
        </li>
      </ul>
    </nav>
  `;
}
