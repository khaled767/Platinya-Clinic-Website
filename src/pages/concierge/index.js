// Personal Concierge Manager page
import { icons } from "../../components/icons";
import { t } from "../../i18n";
import faqSection from "../../components/faq";

// The concierge day, in the order the patient lives it.
const STEPS = [
  { icon: icons.whatsapp, key: "s1" },
  { icon: icons.shield, key: "s2" },
  { icon: icons.mapPin, key: "s3" },
  { icon: icons.phone, key: "s4" },
];

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

      <!-- How the concierge works, step by step -->
      <section class="section-hotel-amenities bg-dark-obsidian">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-subtitle text-gold">${t("concierge.howLbl")}</span>
            <h2 class="section-title text-inverse">${t("concierge.howTitle")}</h2>
            <p class="section-description text-inverse">${t("concierge.howDesc")}</p>
          </div>
          <div class="steps-grid">
            ${STEPS.map((s, i) => `
              <div class="amenity-card">
                <span class="amenity-icon">${s.icon}</span>
                <span class="journey-index-line">${String(i + 1).padStart(2, "0")}</span>
                <h4 class="amenity-title">${t("concierge." + s.key)}</h4>
                <p class="amenity-desc">${t("concierge." + s.key + "d")}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      ${faqSection("concierge")}

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

      <!-- Closing CTA -->
      <section class="section-hotel-intro">
        <div class="container text-center">
          <p class="section-description">${t("concierge.sub")}</p>
          <a href="/contact" data-route class="btn-luxury-gold"><span>${t("cta.vip")}</span></a>
        </div>
      </section>
    </div>
  `;
}
