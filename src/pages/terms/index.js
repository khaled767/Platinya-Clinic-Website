// Terms of Service Page Module (High-Fidelity) — fully translated
import { t } from "../../i18n";

const sections = [
  { h: "tos.s1h", p: "tos.s1p" },
  { h: "tos.s2h", p: "tos.s2p" },
  { h: "tos.s3h", p: "tos.s3p" },
  { h: "tos.s4h", p: "tos.s4p" },
  { h: "tos.s5h", p: "tos.s5p" },
  { h: "tos.s6h", p: "tos.s6p" },
];

export default function termsPage() {
  return `
    <div class="page-legal">
      <section class="page-banner bg-dark-obsidian">
        <div class="container">
          <span class="section-subtitle text-gold">Legal</span>
          <h1 class="page-title text-inverse">${t("tos.title")}</h1>
          <p class="page-description text-muted">${t("tos.sub")}</p>
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
        </div>
      </section>
    </div>
  `;
}
