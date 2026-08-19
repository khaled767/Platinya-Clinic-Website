// Hospitals Page Module — Contracted Health Institutions (المستشفيات المتعاقد معها)
import partnerFacilities from "../../components/partner-facilities";
import legalDisclaimer from "../../components/legal-disclaimer";

export default function hospitalsPage() {
  return `
    <div class="page-hospitals">
      <!-- Internal Page Banner -->
      <section class="page-banner bg-dark-obsidian">
        <div class="container">
          <span class="section-subtitle text-gold">Official Partners</span>
          <h1 class="page-title text-inverse">Contracted Health Institutions</h1>
          <p class="page-description text-muted">
            We operate exclusively with licensed and accredited private hospitals and specialist clinics in Istanbul — delivering treatment within world-class medical environments.
          </p>
        </div>
      </section>

      <!-- Partner hospitals & clinics -->
      ${partnerFacilities()}

      <!-- Legal disclaimer (licensing statement, all languages) -->
      ${legalDisclaimer()}
    </div>
  `;
}
