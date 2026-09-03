const PORTFOLIO_HTML = `
<!-- Projects Section (Hidden) -->
<section id="projects" class="section section-wrapper" style="display: none;">
  <div class="container" style="width: 100%;">
    <h2 class="section-title" data-i18n="sectionTitles.projects">Software Projects</h2>
    <div class="projects-grid" id="projects-container">
      <!-- Populated by JS -->
    </div>
  </div>
</section>

<!-- Contest Section -->
<section id="contest" class="section section-wrapper">
  <div class="container" style="width: 100%;">
    <h2 class="section-title" data-i18n="sectionTitles.contest">Contest</h2>
    <div class="projects-grid" id="contest-container">
      <!-- Populated by JS -->
    </div>
  </div>
</section>

<!-- Books Section -->
<section id="books" class="section section-wrapper light">
  <div class="container" style="width: 100%;">
    <h2 class="section-title" data-i18n="sectionTitles.books">Publications & Books</h2>
    <div class="projects-grid" id="books-container">
      <!-- Populated by JS -->
    </div>
  </div>
</section>

<!-- Donate Section (Hidden) -->
<section id="donate" class="section section-wrapper" style="display: none;">
  <div class="container" style="width: 100%;">
    <div style="text-align: center; margin-bottom: 20px;">
      <h2 class="section-title" data-i18n="sectionTitles.donate" style="margin-bottom: 24px;">Support My Work</h2>
      <p data-i18n="donate.subtitle" style="max-width: 600px; margin: 0 auto; font-size: 1.1rem;">If you find my
        open-source projects or articles helpful, consider supporting my work to help me keep building!</p>
    </div>
    <div class="donate-grid">
      <div class="donate-card glass-card">
        <div class="donate-icon-wrapper">
          <i data-lucide="coffee"></i>
        </div>
        <h3 data-i18n="donate.coffee.title">Buy Me A Coffee</h3>
        <p data-i18n="donate.coffee.desc">Fuel my late-night coding sessions with a cup of coffee.</p>
        <a href="https://buymeacoffee.com/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <span data-i18n="donate.coffee.btn">Support Me</span>
        </a>
      </div>
      <div class="donate-card glass-card">
        <div class="donate-icon-wrapper">
          <i data-lucide="github"></i>
        </div>
        <h3 data-i18n="donate.github.title">GitHub Sponsors</h3>
        <p data-i18n="donate.github.desc">Sponsor me directly on GitHub.</p>
        <a href="https://github.com/sponsors/CiaraTsai" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <span data-i18n="donate.github.btn">Become a Sponsor</span>
        </a>
      </div>
      <div class="donate-card glass-card">
        <div class="donate-icon-wrapper">
          <i data-lucide="bitcoin"></i>
        </div>
        <h3 data-i18n="donate.crypto.title">Crypto (USDT / ETH)</h3>
        <p data-i18n="donate.crypto.desc">I also accept crypto donations.</p>
        <div class="crypto-address" onclick="copyCrypto(this, '0x0000000000000000000000000000000000000000')">
          0x00000000...00000000
        </div>
      </div>
    </div>
  </div>
</section>
`;
