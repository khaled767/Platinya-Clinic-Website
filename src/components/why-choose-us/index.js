// Why Choose Us Component (High-Fidelity)
import { t } from "../../i18n";

export default function whyChooseUs() {
  const pillars = [
    { icon: "⚜", key: "f1" },
    { icon: "🛡", key: "f2" },
    { icon: "💎", key: "f3" },
    { icon: "🤝", key: "f4" },
  ];

  return `
    <section class="section-why-us bg-dark-obsidian">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle text-gold">${t("why.sub")}</span>
          <h2 class="section-title text-inverse">${t("why.title")}</h2>
          <p class="section-description text-muted">${t("why.desc")}</p>
        </div>

        <div class="why-us-grid">
          ${pillars.map((p) => `
            <div class="why-us-card">
              <div class="why-icon">${p.icon}</div>
              <h3 class="why-title">${t("why." + p.key)}</h3>
              <p class="why-desc">${t("why." + p.key + ".d")}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
