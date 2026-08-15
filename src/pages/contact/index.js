// Contact Page Module (High-Fidelity)

import contactSection from "../../components/contact";

export default function contactPage() {
  return `
    <div class="page-contact">
      <section class="page-banner bg-dark-obsidian">
        <div class="container">
          <span class="section-subtitle text-gold">24/7 VIP Concierge Desk</span>
          <h1 class="page-title text-inverse">Start Your Private Consultation</h1>
          <p class="page-description text-muted">
            Request a confidential medical evaluation and custom itinerary from our European patient coordinators.
          </p>
        </div>
      </section>

      ${contactSection()}
    </div>
  `;
}
