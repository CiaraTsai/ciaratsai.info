const NAVBAR_HTML = `
  <nav class="navbar" id="navbar">
    <div class="nav-content row-between">
      <div class="nav-logo" id="nav-logo-name">Ciara Tsai</div>
      <div class="nav-links">
        <a href="#about" data-i18n="nav.about">About</a>
        <a href="#experience" data-i18n="nav.experience">Experience</a>
        <a href="#skills" data-i18n="nav.skills">Skills</a>
        <a href="#contest" data-i18n="nav.contest">Contest</a>
        <a href="#books" data-i18n="nav.books">Books</a>
        <a href="#contact" data-i18n="nav.contact">Contact</a>
        <button id="lang-toggle" class="btn btn-secondary lang-btn">EN / 中</button>
      </div>
      <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle Menu">
        <i data-lucide="menu"></i>
      </button>
    </div>
    <div class="mobile-links" id="mobile-links">
      <a href="#about" data-i18n="nav.about">About</a>
      <a href="#experience" data-i18n="nav.experience">Experience</a>
      <a href="#skills" data-i18n="nav.skills">Skills</a>
      <a href="#contest" data-i18n="nav.contest">Contest</a>
      <a href="#books" data-i18n="nav.books">Books</a>
      <a href="#contact" data-i18n="nav.contact">Contact</a>
      <button id="lang-toggle-mobile" class="btn btn-secondary lang-btn" style="margin-top: 10px;">EN / 中</button>
    </div>
  </nav>
`;

const FOOTER_HTML = `
  <footer class="footer">
    <p>&copy; <span id="current-year"></span> Ciara Tsai Personal Web Site. All rights reserved.</p>
  </footer>
`;
