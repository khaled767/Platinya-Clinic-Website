// Privacy & Confidentiality page
import { icons } from "../../components/icons";
import { t } from "../../i18n";

export default function privacyServicePage() {
  return `
    <div class="page-hotel">

      <section class="hotel-hero">
        <img
          src="./assets/images/partner-services/privacy/privacy-hero.webp"
          alt="Privacy and confidentiality"
          class="hotel-hero-bg"
        />
        <div class="hotel-hero-scrim"></div>
        <div class="container hotel-hero-content">
          <span class="hotel-hero-icon">${icons.shield}</span>
          <span class="hotel-hero-label">${t("pv.label")}</span>
          <h1 class="hotel-hero-title">${t("pv.title")}</h1>
          <p class="hotel-hero-sub">${t("pv.sub")}</p>
        </div>
      </section>

      <section class="section-hotel-intro">
        <div class="container hotel-intro-grid">
          <div class="hotel-intro-text">
            <span class="section-subtitle">${t("pv.introLbl")}</span>
            <h2 class="section-title">${t("pv.introTitle")}</h2>
            <p class="section-description">${t("pv.intro")}</p>
            <a href="/contact" data-route class="btn-luxury-gold"><span>${t("cta.vip")}</span></a>
          </div>
          <div class="hotel-intro-img">
            <img src="./assets/images/partner-services/privacy/privacy-hero.webp" alt="Private consultation" loading="lazy" />
          </div>
        </div>
      </section>

      <section class="section-hotel-amenities bg-dark-obsidian">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-subtitle text-gold">${t("pv.servLbl")}</span>
            <h2 class="section-title text-inverse">${t("pv.servTitle")}</h2>
          </div>
          <div class="hotel-amenities-grid">
            ${["1","2","3","4","5","6"].map((a) => `
              <div class="amenity-card">
                <span class="amenity-icon">${icons.check}</span>
                <h4 class="amenity-title">${t("pv.a" + a)}</h4>
                <p class="amenity-desc">${t("pv.a" + a + "d")}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}
