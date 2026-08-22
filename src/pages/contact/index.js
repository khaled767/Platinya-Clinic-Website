// Contact Page Module (High-Fidelity)
import contactSection from "../../components/contact";
import { t } from "../../i18n";

export default function contactPage() {
  return `
    <div class="page-contact">
      <section class="page-banner bg-dark-obsidian">
        <div class="container">
          <span class="section-subtitle text-gold">${t("contact.desk")}</span>
          <h1 class="page-title text-inverse">${t("contact.pageTitle")}</h1>
          <p class="page-description text-muted">${t("contact.desc")}</p>
        </div>
      </section>

      ${contactSection()}

      <!-- Health Türkiye / Ministry of Health auth — below the consultation
           section, above the footer -->
      <section class="section-health-turkiye">
        <div class="container health-turkiye-wrap">
          <img
            src="./assets/images/health-turkiye-logo.png"
            alt="Health Türkiye — Turkish Ministry of Health"
            class="health-turkiye-logo"
            loading="lazy"
          />
          <p class="health-turkiye-badge">✓</p>
          <h2 class="health-turkiye-title">
            ${t("moh.title")}
          </h2>
          <p class="health-turkiye-text">
            ${t("moh.sub")}
          </p>
        </div>
      </section>
    </div>
  `;
}
