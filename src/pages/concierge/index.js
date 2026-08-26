// Personal Concierge Manager page
import { icons } from "../../components/icons";
import { t } from "../../i18n";

export default function conciergePage() {
  return `
    <div class="page-hotel">

      <!-- Hero: concierge icon + "CONCIERGE" label over main photo -->
      <section class="hotel-hero">
        <img
          src="./assets/images/partner-services/concierge/concierge-hero.webp"
          alt="Personal concierge"
          class="hotel-hero-bg"
        />
        <div class="hotel-hero-scrim"></div>
        <div class="container hotel-hero-content">
          <span class="hotel-hero-icon">${icons.user}</span>
          <span class="hotel-hero-label">${t("concierge.label")}</span>
          <h1 class="hotel-hero-title">${t("concierge.title")}</h1>
          <p class="hotel-hero-sub">${t("concierge.sub")}</p>
        </div>
      </section>

      <!-- Intro -->
      <section class="section-hotel-intro">
        <div class="container hotel-intro-grid">
          <div class="hotel-intro-text">
            <span class="section-subtitle">${t("concierge.introLbl")}</span>
            <h2 class="section-title">${t("concierge.introTitle")}</h2>
            <p class="section-description">${t("concierge.intro")}</p>
            <a href="/contact" data-route class="btn-luxury-gold"><span>${t("cta.vip")}</span></a>
          </div>
          <div class="hotel-intro-img">
            <img src="./assets/images/partner-services/concierge/concierge-desk.webp" alt="Concierge arranging care" loading="lazy" />
          </div>
        </div>
      </section>

      <!-- Services -->
      <section class="section-hotel-amenities bg-dark-obsidian">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-subtitle text-gold">${t("concierge.servLbl")}</span>
            <h2 class="section-title text-inverse">${t("concierge.servTitle")}</h2>
          </div>
          <div class="hotel-amenities-grid">
            ${["1","2","3","4","5","6"].map((a) => `
              <div class="amenity-card">
                <span class="amenity-icon">${icons.check}</span>
                <h4 class="amenity-title">${t("concierge.a" + a)}</h4>
                <p class="amenity-desc">${t("concierge.a" + a + "d")}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}
