// Navigation Component (High-Fidelity)
export default function navigation() {
  return `
    <nav class="main-nav">
      <ul class="nav-list">
        <li class="nav-item">
          <a data-route href="/" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a data-route href="/services" class="nav-link">Services</a>
        </li>
        <li class="nav-item">
          <a data-route href="/about" class="nav-link">About Us</a>
        </li>
        <li class="nav-item">
          <a data-route href="/hospitals" class="nav-link">المستشفيات المتعاقد معها</a>
        </li>
        <li class="nav-item">
          <a data-route href="/testimonials" class="nav-link">Experiences</a>
        </li>
        <li class="nav-item">
          <a data-route href="/contact" class="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  `;
}
