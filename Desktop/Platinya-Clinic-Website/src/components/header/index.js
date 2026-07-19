import navigation from "../navigation";

export default function header() {
  return `
    <header>
      <div class="header-container">
        <div class="header-logo">
          <a href="/" data-route class="logo">
            PLATINYA CLINIC
          </a>
        </div>

        <div class="header-navigation">
          ${navigation()}
        </div>

        <div class="header-actions">
          <button type="button">
            Book Consultation
          </button>
        </div>
      </div>
    </header>
  `;
}