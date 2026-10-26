// Turkish Licenses Section (Health Tourism + Trademark certifications)
//
// Every word here comes from the locale files: the section used to carry its
// copy inline in English, so the Arabic (and Turkish, French…) pages showed an
// English block in the middle of an Arabic page.
import { t } from "../../i18n";

export default function turkishLicenses() {
  return `
    <section class="section-licenses">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle text-gold">${t("lic.sub")}</span>
          <h2 class="section-title text-inverse">${t("lic.title")}</h2>
          <p class="section-description text-muted">${t("lic.desc")}</p>
        </div>

        <div class="licenses-grid">
          <!-- Health Tourism Authorization (Ministry of Health / Health Türkiye) -->
          <figure class="license-card">
            <div class="license-media">
              <button
                type="button"
                class="license-zoom"
                data-lightbox="/assets/images/certifications/health-tourism-cert.webp"
                aria-label="${t("lic.ariaHealth")}"
              >
                <img
                  src="/assets/images/certifications/health-tourism-cert-web.webp"
                  alt="${t("alt.certHealthTourism")}"
                  class="license-img"
                  loading="lazy"
                />
              </button>
            </div>
            <figcaption class="license-caption">
              <span class="license-badge">${t("lic.badgeHealth")}</span>
              <h3 class="license-title">${t("lic.tHealth")}</h3>
              <p class="license-desc">${t("lic.dHealth")}</p>
            </figcaption>
          </figure>

          <!-- Trademark Registration (TÜRKPATENT) -->
          <figure class="license-card">
            <div class="license-media">
              <button
                type="button"
                class="license-zoom"
                data-lightbox="/assets/images/certifications/trademark-cert-p1.webp"
                aria-label="${t("lic.ariaTmark")}"
              >
                <img
                  src="/assets/images/certifications/trademark-cert-p1-web.webp"
                  alt="${t("alt.certTrademark")}"
                  class="license-img"
                  loading="lazy"
                />
              </button>
            </div>
            <figcaption class="license-caption">
              <span class="license-badge">${t("lic.badgeTmark")}</span>
              <h3 class="license-title">${t("lic.tTmark")}</h3>
              <p class="license-desc">${t("lic.dTmark")}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  `;
}
