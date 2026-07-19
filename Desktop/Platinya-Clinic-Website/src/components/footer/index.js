export default function footer() {
    return `
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-brand">
                    <a href="/" data-route="/">Platinya Clinic</a>
                </div>

                <nav class="footer-navigation">
                    <a href="/" data-route="/">Home</a>
                    <a href="/about" data-route="/about">About</a>
                </nav>

                <div class="footer-contact">
                    <a href="tel:+900000000000">+90 000 000 00 00</a>
                    <a href="mailto:info@platinyaclinic.com">info@platinyaclinic.com</a>
                </div>

                <div class="footer-bottom">
                    <p>&copy; 2026 Platinya Clinic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;
}