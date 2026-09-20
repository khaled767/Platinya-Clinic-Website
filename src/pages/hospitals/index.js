// Hospitals Page Module — Contracted Health Institutions (المستشفيات المتعاقد معها)
import partnerFacilities from "../../components/partner-facilities";
import legalDisclaimer from "../../components/legal-disclaimer";
import faqSection from "../../components/faq";
import { icons } from "../../components/icons";
import { t } from "../../i18n";

// How a hospital is chosen, in the order the decision happens.
const STEPS = [
  { icon: icons.shield, key: "s1" },
  { icon: icons.stethoscope, key: "s2" },
  { icon: icons.check, key: "s3" },
  { icon: icons.paperclip, key: "s4" },
];

export default function hospitalsPage() {
  return `
    <div class="page-hospitals">
      <!-- Internal Page Banner -->
      <section class="page-banner bg-dark-obsidian">
        <div class="container">
          <span class="section-subtitle text-gold">${t("hospitals.badge")}</span>
          <h1 class="page-title text-inverse">${t("hospitals.title")}</h1>
          <p class="page-description text-muted">
            ${t("hospitals.desc")}
          </p>
        </div>
      </section>

      <!-- How the hospital is chosen, step by step -->
      <section class="section-hotel-amenities bg-dark-obsidian">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-subtitle text-gold">${t("hospitals.howLbl")}</span>
            <h2 class="section-title text-inverse">${t("hospitals.howTitle")}</h2>
            <p class="section-description text-inverse">${t("hospitals.howDesc")}</p>
          </div>
          <div class="steps-grid">
            ${STEPS.map((s, i) => `
              <div class="amenity-card">
                <span class="amenity-icon">${s.icon}</span>
                <span class="journey-index-line">${String(i + 1).padStart(2, "0")}</span>
                <h4 class="amenity-title">${t("hospitals." + s.key)}</h4>
                <p class="amenity-desc">${t("hospitals." + s.key + "d")}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      ${faqSection("hospitals")}

      <!-- Partner hospitals & clinics -->
      ${partnerFacilities()}

      <!-- Legal disclaimer (licensing statement, all languages) -->
      ${legalDisclaimer()}
    </div>
  `;
}
