// Contact Component (High-Fidelity Concierge Form)
import { icons } from "../icons";
import { t } from "../../i18n";

export default function contact() {
  return `
    <section class="section-contact">
      <div class="container contact-container">
        
        <div class="contact-info-col">
          <span class="section-subtitle">${t("contact.sub")}</span>
          <h2 class="contact-title">${t("contact.title")}</h2>
          <p class="contact-description">${t("contact.desc")}</p>

          <div class="contact-channels">
            <div class="channel-card">
              <span class="channel-icon">${icons.phone}</span>
              <div>
                <span class="channel-label">${t("contact.hotline")}</span>
                <a href="tel:+905****0000" class="channel-value">+90 555 000 0000</a>
              </div>
            </div>

            <div class="channel-card">
              <span class="channel-icon">${icons.email}</span>
              <div>
                <span class="channel-label">${t("contact.desk")}</span>
                <a href="mailto:concierge@platinyaclinic.com" class="channel-value">concierge@platinyaclinic.com</a>
              </div>
            </div>

            <div class="channel-card">
              <span class="channel-icon">${icons.mapPin}</span>
              <div>
                <span class="channel-label">${t("contact.hq")}</span>
                <span class="channel-value">${t("contact.location")}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-col">
          <form class="luxury-form card-luxury" onsubmit="event.preventDefault();">
            <h3 class="form-title">${t("contact.formTitle")}</h3>
            <p class="form-subtitle">${t("contact.privacy")}</p>

            <div class="form-group">
              <label class="form-label" for="full-name">${t("contact.name")}</label>
              <input type="text" id="full-name" class="form-input" required />
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label" for="email">${t("contact.email")}</label>
                <input type="email" id="email" class="form-input" required />
              </div>
              <div class="form-group">
                <label class="form-label" for="phone">${t("contact.phone")}</label>
                <input type="tel" id="phone" class="form-input" required />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="specialty">${t("contact.treatment")}</label>
              <select id="specialty" class="form-select" required>
                <option value="" disabled selected>${t("contact.treatmentPlaceholder")}</option>
                <option value="hair">${t("sv.hair")}</option>
                <option value="dental">${t("sv.dental")}</option>
                <option value="plastic">${t("sv.plastic")} ${t("sv.surgery")}</option>
                <option value="bariatric">${t("sv.bariatric")} ${t("sv.surgery")}</option>
                <option value="aesthetics">${t("sv.aesth")}</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="message">${t("contact.message")}</label>
              <textarea id="message" class="form-textarea" rows="4"></textarea>
            </div>

            <button type="submit" class="btn-submit-luxury">
              <span>${t("contact.submit")}</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  `;
}
