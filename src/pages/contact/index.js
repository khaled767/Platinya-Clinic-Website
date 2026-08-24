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
    </div>
  `;
}
