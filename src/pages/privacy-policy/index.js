// Privacy Policy Page Module (High-Fidelity) — fully translated
import { t } from "../../i18n";

const sections = [
  { h: "pp.s1h", p: "pp.s1p" },
  { h: "pp.s2h", p: "pp.s2p" },
  { h: "pp.s3h", p: "pp.s3p" },
  { h: "pp.s4h", p: "pp.s4p" },
  { h: "pp.s5h", p: "pp.s5p" },
  { h: "pp.s6h", p: "pp.s6p" },
];

export default function privacyPolicyPage() {
  return `
    <div class="page-legal">
      <section class="page-banner bg-dark-obsidian">
        <div class="container">
          <span class="section-subtitle text-gold">Legal</span>
          <h1 class="page-title text-inverse">${t("pp.title")}</h1>
          <p class="page-description text-muted">${t("pp.sub")}</p>
        </div>
      </section>

      <section class="section-legal">
        <div class="container legal-wrap">
          ${sections.map((s, i) => `
            <article class="legal-block">
              <span class="legal-index">${String(i + 1).padStart(2, "0")}</span>
              <div class="legal-content">
                <h2 class="legal-heading">${t(s.h)}</h2>
                <p class="legal-paragraph">${t(s.p)}</p>
              </div>
            </article>
          `).join("")}
          <p class="legal-updated">${t("pp.updated")}: ${new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}</p>
        </div>
      </section>
    </div>
  `;
}
