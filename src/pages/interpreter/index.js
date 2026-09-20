// Personal Medical Interpreter page
import { icons } from "../../components/icons";
import { t } from "../../i18n";
import faqSection from "../../components/faq";

// The interpreter's role, in the order the patient lives it.
const STEPS = [
  { icon: icons.translate, key: "s1" },
  { icon: icons.stethoscope, key: "s2" },
  { icon: icons.shield, key: "s3" },
  { icon: icons.phone, key: "s4" },
];

export default function interpreterPage() {
  return `
    <div class="page-hotel">

      <section class="hotel-hero">
        <img
          src="./assets/images/partner-services/interpreter/interpreter-hero.webp"
          alt="Personal medical interpreter"
          class="hotel-hero-bg"
        />
        <div class="hotel-hero-scrim"></div>
        <div class="container hotel-hero-content">
          <span class="hotel-hero-icon">${icons.translate}</span>
          <span class="hotel-hero-label">${t("interpreter.label")}</span>
          <h1 class="hotel-hero-title">${t("interpreter.title")}</h1>
          <p class="hotel-hero-sub">${t("interpreter.sub")}</p>
        </div>
      </section>

      <section class="section-hotel-intro">
        <div class="container hotel-intro-grid">
          <div class="hotel-intro-text">
            <span class="section-subtitle">${t("interpreter.introLbl")}</span>
            <h2 class="section-title">${t("interpreter.introTitle")}</h2>
            <p class="section-description">${t("interpreter.intro")}</p>
            <a href="/contact" data-route class="btn-luxury-gold"><span>${t("cta.vip")}</span></a>
          </div>
          <div class="hotel-intro-img">
            <img src="./assets/images/partner-services/interpreter/interpreter-desk.webp" alt="Interpreter assisting a consultation" loading="lazy" />
          </div>
        </div>
      </section>

      <!-- How the interpreting works, step by step -->
      <section class="section-hotel-amenities bg-dark-obsidian">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-subtitle text-gold">${t("interpreter.howLbl")}</span>
            <h2 class="section-title text-inverse">${t("interpreter.howTitle")}</h2>
            <p class="section-description text-inverse">${t("interpreter.howDesc")}</p>
          </div>
          <div class="steps-grid">
            ${STEPS.map((s, i) => `
              <div class="amenity-card">
                <span class="amenity-icon">${s.icon}</span>
                <span class="journey-index-line">${String(i + 1).padStart(2, "0")}</span>
                <h4 class="amenity-title">${t("interpreter." + s.key)}</h4>
                <p class="amenity-desc">${t("interpreter." + s.key + "d")}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      ${faqSection("interpreter")}

      <section class="section-hotel-amenities bg-dark-obsidian">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-subtitle text-gold">${t("interpreter.servLbl")}</span>
            <h2 class="section-title text-inverse">${t("interpreter.servTitle")}</h2>
          </div>
          <div class="hotel-amenities-grid">
            ${["1","2","3","4","5","6"].map((a) => `
              <div class="amenity-card">
                <span class="amenity-icon">${icons.check}</span>
                <h4 class="amenity-title">${t("interpreter.a" + a)}</h4>
                <p class="amenity-desc">${t("interpreter.a" + a + "d")}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Closing CTA -->
      <section class="section-hotel-intro">
        <div class="container text-center">
          <p class="section-description">${t("interpreter.sub")}</p>
          <a href="/contact" data-route class="btn-luxury-gold"><span>${t("cta.vip")}</span></a>
        </div>
      </section>
    </div>
  `;
}
