// Footer Component (High-Fidelity)

export default function footer() {
  return `
    <footer class="site-footer">
      <div class="container footer-container">
        <div class="footer-grid">
          
          <!-- Column 1: Brand & Concierge Statement -->
          <div class="footer-col footer-brand">
            <a href="/" data-route class="logo-link">
              <img src="./assets/images/logo.png" alt="Platinya Clinic Logo" class="brand-logo-img-footer" />
            </a>
            <p class="brand-description">
              Curating premier medical journeys for European patients with end-to-end luxury hospitality, medical expertise, and dedicated personal coordinators.
            </p>
          </div>

          <!-- Column 2: Navigation Links -->
          <div class="footer-col">
            <h4 class="footer-heading">Navigation</h4>
            <ul class="footer-links">
              <li><a href="/" data-route>Home</a></li>
              <li><a href="/about" data-route>About Our Agency</a></li>
              <li><a href="/hospitals" data-route>المستشفيات المتعاقد معها</a></li>
              <li><a href="/testimonials" data-route>Patient Journeys</a></li>
              <li><a href="/contact" data-route>VIP Consultation</a></li>
            </ul>
          </div>

          <!-- Column 3: Medical Services -->
          <div class="footer-col">
            <h4 class="footer-heading">Medical Specialties</h4>
            <ul class="footer-links">
              <li><a href="/services" data-route>Hair Transplantation</a></li>
              <li><a href="/services" data-route>Aesthetic Dentistry</a></li>
              <li><a href="/services" data-route>Plastic & Reconstructive Surgery</a></li>
              <li><a href="/services" data-route>Bariatric & Metabolic Surgery</a></li>
              <li><a href="/services" data-route>Medical Aesthetics</a></li>
            </ul>
          </div>

          <!-- Column 4: Contact & Concierge Line -->
          <div class="footer-col">
            <h4 class="footer-heading">Direct Concierge</h4>
            <div class="contact-info">
              <p class="contact-item">
                <span class="contact-label">24/7 European VIP Line:</span>
                <a href="tel:+905****0000" class="contact-link">+90 555 000 0000</a>
              </p>
              <p class="contact-item">
                <span class="contact-label">Email Assistance:</span>
                <a href="mailto:concierge@platinyaclinic.com" class="contact-link">concierge@platinyaclinic.com</a>
              </p>
              <p class="contact-item">
                <span class="contact-label">Headquarters:</span>
                <span class="contact-text">Istanbul & European Patient Relations</span>
              </p>
            </div>
          </div>

        </div>

        <!-- Footer Bottom Bar -->
        <div class="footer-bottom">
          <p class="copyright">&copy; ${new Date().getFullYear()} Platinya Clinic. All rights reserved. International Medical Concierge Services.</p>
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
