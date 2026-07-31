// Contact Component (High-Fidelity Concierge Form)
import { icons } from "../icons";

export default function contact() {
  return `
    <section class="section-contact">
      <div class="container contact-container">
        
        <div class="contact-info-col">
          <span class="section-subtitle">Discreet & Confidential</span>
          <h2 class="contact-title">Begin Your Private Consultation</h2>
          <p class="contact-description">
            Connect directly with a dedicated European Patient Coordinator for a complimentary, zero-obligation medical evaluation and customized itinerary proposal.
          </p>

          <div class="contact-channels">
            <div class="channel-card">
              <span class="channel-icon">${icons.phone}</span>
              <div>
                <span class="channel-label">24/7 VIP Concierge Hotlines</span>
                <a href="tel:+905****0000" class="channel-value">+90 555 000 0000</a>
              </div>
            </div>

            <div class="channel-card">
              <span class="channel-icon">${icons.email}</span>
              <div>
                <span class="channel-label">Direct Coordinator Desk</span>
                <a href="mailto:concierge@platinyaclinic.com" class="channel-value">concierge@platinyaclinic.com</a>
              </div>
            </div>

            <div class="channel-card">
              <span class="channel-icon">${icons.mapPin}</span>
              <div>
                <span class="channel-label">International Relations HQ</span>
                <span class="channel-value">Nisantasi, Istanbul, Turkey</span>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-col">
          <form class="luxury-form card-luxury" onsubmit="event.preventDefault();">
            <h3 class="form-title">Request Private Assessment</h3>
            <p class="form-subtitle">Your medical details remain strictly confidential under GDPR standards.</p>

            <div class="form-group">
              <label class="form-label" for="full-name">Full Name</label>
              <input type="text" id="full-name" class="form-input" placeholder="e.g. Lord Alexander Wright" required />
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label" for="email">Email Address</label>
                <input type="email" id="email" class="form-input" placeholder="name@domain.com" required />
              </div>
              <div class="form-group">
                <label class="form-label" for="phone">Phone Number (with Country Code)</label>
                <input type="tel" id="phone" class="form-input" placeholder="+44 7000 000000" required />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="specialty">Interested Medical Specialty</label>
              <select id="specialty" class="form-select" required>
                <option value="" disabled selected>Select a treatment...</option>
                <option value="hair">Hair Transplantation</option>
                <option value="dental">Aesthetic Dentistry</option>
                <option value="plastic">Plastic & Reconstructive Surgery</option>
                <option value="bariatric">Bariatric & Metabolic Surgery</option>
                <option value="aesthetics">Medical Aesthetics</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="message">How can our concierge team assist you?</label>
              <textarea id="message" class="form-textarea" rows="4" placeholder="Mention preferred dates, medical history, or specific questions..."></textarea>
            </div>

            <button type="submit" class="btn-submit-luxury">
              <span>Submit Confidential Request</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  `;
}
