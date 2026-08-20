// About Page Module (High-Fidelity)
import turkishLicenses from "../../components/turkish-licenses";
import { t } from "../../i18n";

export default function aboutPage() {
  return `
    <div class="page-about">
      <section class="page-banner bg-dark-obsidian">
        <div class="container">
          <span class="section-subtitle text-gold">${t("about.badge")}</span>
          <h1 class="page-title text-inverse">${t("about.title2")}</h1>
          <p class="page-description text-muted">${t("about.desc")}</p>
        </div>
      </section>

      <!-- Story & Values -->
      <section class="section-about-story">
        <div class="container">
          <div class="about-story-grid">
            <div class="story-content">
              <span class="section-subtitle">${t("about.h1")}</span>
              <h2 class="section-title">${t("about.h2")}</h2>
              <p class="section-description">${t("about.p1")}</p>
              <p class="section-description" style="margin-top: 1rem;">${t("about.p2")}</p>
            </div>
            <div class="story-stats-card card-luxury">
              <div class="stat-row">
                <span class="stat-num">15+</span>
                <span class="stat-text">${t("about.stat")}</span>
              </div>
              <div class="stat-row">
                <span class="stat-num">100%</span>
                <span class="stat-text">${t("hero.trust1")}</span>
              </div>
              <div class="stat-row">
                <span class="stat-num">50+</span>
                <span class="stat-text">${t("about.partnerStat")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Official Turkish Licenses -->
      ${turkishLicenses()}
    </div>
  `;
}
