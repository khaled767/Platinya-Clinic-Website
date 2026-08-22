// Legal Disclaimer — Licensing statement, shown in the CURRENT language only.
import { t } from "../../i18n";

export default function legalDisclaimer() {
  return `
    <section class="section-legal-disclaimer">
      <div class="container">
        <h3 class="legal-title">${t("legal.title")}</h3>
        <p class="legal-statement">${t("legal.statement")}</p>
      </div>
    </section>
  `;
}
