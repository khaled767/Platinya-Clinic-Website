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
                <a href="tel:+905****9487" class="channel-value">+90 530 079 9487</a>
                <a href="https://wa.me/905300799487" target="_blank" rel="noopener" class="channel-whatsapp">
                  <span class="whatsapp-badge">${icons.whatsapp}</span>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div class="channel-card">
              <span class="channel-icon">${icons.email}</span>
              <div>
                <span class="channel-label">${t("contact.desk")}</span>
                <a href="mailto:info@platinyaclinic.com" class="channel-value">info@platinyaclinic.com</a>
                <a href="mailto:info@skyistgroup.com" class="channel-value channel-second">info@skyistgroup.com</a>
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
          <form
            id="assessment-form"
            class="luxury-form card-luxury"
            action="https://formsubmit.co/info@platinyaclinic.com"
            method="POST"
            enctype="multipart/form-data"
          >
            <h3 class="form-title">${t("contact.formTitle")}</h3>
            <p class="form-subtitle">${t("contact.privacy")}</p>

            <input type="hidden" name="_subject" value="New VIP Assessment Request — Platinya Clinic Agency" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div class="form-group">
              <label class="form-label" for="full-name">${t("contact.name")}</label>
              <input type="text" id="full-name" name="full_name" class="form-input" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="email">${t("contact.email")}</label>
              <input type="email" id="email" name="email" class="form-input" required />
            </div>

            <div class="form-group form-phone-row">
              <label class="form-label" for="country-code">${t("contact.phone")}</label>
              <div class="form-phone-fields">
                <div class="country-input" id="country-box">
                  <input
                    type="text"
                    id="country-code-input"
                    class="form-input country-key"
                    placeholder="+963 / Syria"
                    autocomplete="off"
                    maxlength="30"
                    aria-label="Country phone code or name"
                  />
                  <span class="country-preview flag-placeholder" id="country-preview">🇹🇷 +90</span>
                  <input type="hidden" name="country_code" id="country-code-hidden" value="+90" />
                </div>
                <input
                  type="tel"
                  id="phone-number"
                  class="form-input"
                  name="number_part"
                  inputmode="numeric"
                  pattern="[0-9 ]+"
                  placeholder="5xx xxx xxxx"
                  aria-label="Local phone number"
                  required
                />
                <input type="hidden" name="phone" id="phone-combined" />
              </div>
              <small class="form-hint" data-phone-hint></small>
            </div>

              <div class="form-group">
              <label class="form-label" for="specialty">${t("contact.treatment")}</label>
              <select id="specialty" name="treatment" class="form-select" required>
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
              <textarea id="message" name="message" class="form-textarea" rows="4"></textarea>
              </div>

              <!-- Optional photo upload → FormSubmit delivers as attachment to your inbox -->
              <div class="form-group form-upload-group">
              <label class="form-upload-btn" for="selfie-upload">
                <span class="form-upload-icon">${icons.paperclip}</span>
                <span>${t("contact.upload") || "Attach photos of your smile / condition"}</span>
              </label>
              <input
                type="file"
                id="selfie-upload"
                name="attachment"
                accept="image/*"
                multiple
                class="form-upload-input"
                hidden
              />
              <span class="form-upload-files" data-upload-files></span>
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
