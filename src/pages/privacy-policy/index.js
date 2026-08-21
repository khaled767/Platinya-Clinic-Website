// Privacy Policy Page Module (High-Fidelity)
import { t } from "../../i18n";

const sections = [
  {
    h: "Information We Collect",
    p:
      "Platinya Clinic Agency collects personal information you provide when using our concierge medical-tourism services, including your name, contact details, medical history relevant to your requested treatment, passport and travel details, and any other information you choose to share during your consultation.",
  },
  {
    h: "How We Use Your Information",
    p:
      "We use your information solely to arrange your medical journey — coordinating with our contracted healthcare institutions, booking your VIP logistics, and providing personalised aftercare. We do not sell your personal data. Your medical data is shared only with the contracted healthcare institutions directly involved in your treatment, with your consent.",
  },
  {
    h: "Data Security",
    p:
      "Your personal and medical information is stored on secure systems and is accessible only to authorised members of Platinya Clinic Agency and the contracted institutions responsible for your care. We apply industry-standard safeguards to protect your data against unauthorised access or disclosure.",
  },
  {
    h: "Your Rights",
    p:
      "You have the right to access, correct, or request deletion of the personal information we hold about you. You may withdraw your consent for data processing at any time by contacting our concierge team. Where you reside in the EEA, your data is processed in accordance with the General Data Protection Regulation (GDPR).",
  },
  {
    h: "Cookies & Analytics",
    p:
      "Our website may use essential cookies for functionality and anonymous analytics to improve your experience. You may disable cookies in your browser settings; this may affect some site features.",
  },
  {
    h: "Contact Us",
    p:
      "If you have any questions about this Privacy Policy or your personal data, please contact us at concierge@platinyaclinic.com — our European Patient Relations team will assist you promptly.",
  },
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
                <h2 class="legal-heading">${s.h}</h2>
                <p class="legal-paragraph">${s.p}</p>
              </div>
            </article>
          `).join("")}
          <p class="legal-updated">Last updated: ${new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}</p>
        </div>
      </section>
    </div>
  `;
}
