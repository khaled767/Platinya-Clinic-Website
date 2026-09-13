// Footer Component (High-Fidelity)
import { icons } from "../icons";
import legalDisclaimer from "../legal-disclaimer";
import { t } from "../../i18n";

export default function footer() {
  return `
    <footer class="site-footer">
      <div class="container footer-container">
        <div class="footer-grid">
          
          <!-- Column 1: Brand & Concierge Statement -->
          <div class="footer-col footer-brand">
            <a href="/" data-route class="logo-link">
              <img src="./assets/images/logo.png" alt="Platinya Clinic Agency Logo" class="brand-logo-img-footer" />
            </a>
            <p class="brand-description">
              Curating premier medical journeys for European patients with end-to-end luxury hospitality, medical expertise, and dedicated personal coordinators.
            </p>
          </div>

          <!-- Column 2: Navigation Links -->
          <div class="footer-col">
            <h4 class="footer-heading">${t("footer.nav")}</h4>
            <ul class="footer-links">
              <li><a href="/" data-route>${t("nav.home")}</a></li>
              <li><a href="/about" data-route>${t("nav.about")}</a></li>
              <li><a href="/hospitals" data-route>${t("nav.hospitals")}</a></li>
              <li><a href="/testimonials" data-route>${t("footer.journeys")}</a></li>
              <li><a href="/contact" data-route>${t("contact.vip")}</a></li>
            </ul>
          </div>

          <!-- Column 3: Medical Services — every link goes to the /services page,
               which lists all treatments stacked vertically (client's chosen behaviour). -->
          <div class="footer-col">
            <h4 class="footer-heading">${t("footer.specHead")}</h4>
            <ul class="footer-links">
              <li><a href="/services" data-route>${t("footer.svcHair")}</a></li>
              <li><a href="/services" data-route>${t("footer.svcDental")}</a></li>
              <li><a href="/services" data-route>${t("footer.svcFace")}</a></li>
              <li><a href="/services" data-route>${t("footer.svcBody")}</a></li>
              <li><a href="/services" data-route>${t("footer.svcBariatric")}</a></li>
              <li><a href="/services" data-route>${t("footer.svcAesthetics")}</a></li>
            </ul>
          </div>

          <!-- Column 4: Contact & Concierge Line -->
          <div class="footer-col">
            <h4 class="footer-heading">${t("footer.concierge")}</h4>
            <div class="contact-info">
              <p class="contact-item">
                <span class="contact-label">${t("footer.vipLine")}:</span>
                <a href="tel:+905****9487" class="contact-link">+90 530 079 9487</a>
                <a href="https://wa.me/905300799487" target="_blank" rel="noopener" class="footer-whatsapp contact-link">
                  <span class="whatsapp-badge">${icons.whatsapp}</span>
                  <span>WhatsApp</span>
                </a>
              </p>
              <p class="contact-item">
                <span class="contact-label">${t("footer.emailHelp")}:</span>
                <a href="mailto:info@platinyaclinic.com" class="contact-link">info@platinyaclinic.com</a>
                <a href="mailto:info@skyistgroup.com" class="contact-link">info@skyistgroup.com</a>
              </p>
              <p class="contact-item">
                <span class="contact-label">${t("footer.hq")}:</span>
                <span class="contact-text">Zafer Mah. 185 Sk. Babacan Premium B1 Daire 319, Esenyurt / İstanbul</span>
              </p>
            </div>
        </div>

        </div><!-- /footer-grid -->

        <!-- Legal disclaimer (all languages) -->
        ${legalDisclaimer()}

        <!-- Footer Bottom Bar -->
        <div class="footer-bottom">
          <p class="copyright">&copy; ${new Date().getFullYear()} Platinya Clinic Agency. All rights reserved. International Medical Concierge Services.</p>
          <div class="legal-links">
            <a href="/privacy-policy" data-route>Privacy Policy</a>
            <span class="divider">•</span>
            <a href="/terms" data-route>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
