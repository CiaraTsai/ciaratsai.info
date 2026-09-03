const HERO_HTML = `
<header class="hero section container" id="home">
  <div class="hero-content">
    <h1 class="hero-title">Hello, I'm <span class="highlight-text" id="hero-name-container">
        <span id="hero-name-placeholder" class="hidden-text" data-i18n="profile.name">Ciara Tsai</span>
        <canvas id="name-canvas"></canvas>
      </span></h1>
    <h2 class="hero-subtitle" id="hero-title-placeholder">Senior Software Engineer</h2>
    <p class="hero-slogan" id="hero-slogan-placeholder"></p>

    <div class="hero-actions row gap">
      <a href="#contact" class="btn btn-primary" data-i18n="hero.contactBtn">Get In Touch</a>
      <a href="#" id="resume-link" target="_blank" rel="noopener noreferrer" class="btn btn-secondary row-center">
        <i data-lucide="download" style="margin-right: 8px;"></i> <span data-i18n="hero.resumeBtn">Resume</span>
      </a>
    </div>

    <div class="hero-social row gap">
      <a href="#" id="github-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i
          data-lucide="github"></i></a>
      <a href="#" id="linkedin-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i
          data-lucide="linkedin"></i></a>
      <a href="#" id="email-link" aria-label="Email"><i data-lucide="mail"></i></a>
    </div>
  </div>
</header>
`;
