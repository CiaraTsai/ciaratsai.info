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
      <a href="#" id="github-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
      <a href="#" id="gitlab-link" target="_blank" rel="noopener noreferrer" aria-label="GitLab">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gitlab">
          <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
        </svg>
      </a>
      <a href="#" id="linkedin-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>
      <a href="#" id="email-link" aria-label="Email"><i data-lucide="mail"></i></a>
    </div>
  </div>
</header>
`;
