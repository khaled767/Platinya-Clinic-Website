// Component entry point

export default function navigation() {
  return `
    <nav>
      <ul>
        <li>
          <a data-route href="/">Home</a>
        </li>

        <li>
          <a data-route href="/about">About</a>
        </li>
      </ul>
    </nav>
  `;
}