// Terms of Service Page Module (High-Fidelity)

const sections = [
  {
    h: "Service Description",
    p:
      "Platinya Clinic Agency acts as an international medical-tourism facilitator. We organise medical treatment at our contracted healthcare institutions and provide concierge services including travel logistics, VIP accommodation, translation, and aftercare coordination. We are not ourselves a hospital or a direct provider of medical treatment.",
  },
  {
    h: "Booking & Payments",
    p:
      "Treatment bookings and concierge packages are confirmed upon agreement with the relevant contracted healthcare institution. Payment terms are provided at the time of quotation. Cancellation and refund policies follow the terms of each contracted institution and the specific package agreed.",
  },
  {
    h: "Medical Advice Disclaimer",
    p:
      "Our role is facilitation and coordination only. Medical advice, diagnosis, and treatment are provided exclusively by the licensed healthcare professionals and institutions that we collaborate with. Decisions regarding your treatment must be made in consultation with those qualified medical professionals.",
  },
  {
    h: "Liability",
    p:
      "Platinya Clinic Agency facilitates services between you and our contracted healthcare institutions. While we exercise diligence in selecting our partners, clinical outcomes remain the responsibility of the treating medical institution. We are not liable for clinical results, which are subject to medical factors beyond our control.",
  },
  {
    h: "Governing Law",
    p:
      "These terms are governed by the laws of the Republic of Turkey. Any disputes arising in connection with our facilitation services shall be subject to the jurisdiction of the courts of Istanbul.",
  },
  {
    h: "Contact",
    p:
      "For any questions regarding these Terms of Service, please contact our concierge team at concierge@platinyaclinic.com.",
  },
];

export default function termsPage() {
  return `
    <div class="page-legal">
      <section class="page-banner bg-dark-obsidian">
        <div class="container">
          <span class="section-subtitle text-gold">Legal</span>
          <h1 class="page-title text-inverse">Terms of Service</h1>
          <p class="page-description text-muted">The terms governing Platinya Clinic Agency's international medical-tourism facilitation services.</p>
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
        </div>
      </section>
    </div>
  `;
}
