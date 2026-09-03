const CONTACT_HTML = `
<section id="contact" class="section section-wrapper">
  <div class="container" style="width: 100%;">
    <h2 class="section-title" data-i18n="sectionTitles.contact">Contact Me</h2>
    <div class="contact-wrapper terminal-window glass-card">
      <div class="terminal-header">
        <div class="terminal-buttons">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
        <div class="terminal-title">bash — contact</div>
      </div>
      <div class="terminal-body contact-terminal-body">
        <div class="terminal-prompt-line">
          <span class="terminal-prompt">user@ciara:~$ ./get-contacts.sh --all</span>
        </div>
        <div class="contact-header-info">
          <h3 data-i18n="contact.title">Let's work together!</h3>
          <p data-i18n="contact.subtitle" class="contact-subtitle">Looking for a seasoned developer? Feel free to reach out through any of the channels below.</p>
        </div>
        <div class="contact-cards-grid" id="contact-methods-container">
          <!-- Populated by JS -->
        </div>
      </div>
    </div>
  </div>
</section>
`;
