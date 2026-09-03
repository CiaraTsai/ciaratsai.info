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
        <div class="terminal-title">bash — contact — 80x24</div>
      </div>
      <div class="terminal-body">
        <div class="contact-info">
          <h3 data-i18n="contact.title">Let's Connect</h3>
          <p data-i18n="contact.subtitle">I am always open to discussing product design work or partnership opportunities.</p>
          <div class="contact-methods col gap" id="contact-methods-container">
            <!-- Populated by JS -->
          </div>
        </div>
        <div class="contact-form-container">
          <form class="contact-form col gap" id="contact-form">
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
            <div class="form-group">
              <label for="name" class="form-label" data-i18n="contact.namePlaceholder">Name</label>
              <div class="input-wrapper">
                <span class="terminal-prompt">user@ciara:~$ ./name --set</span>
                <input type="text" id="name" name="name" class="form-control" placeholder="Your Name" required>
              </div>
            </div>
            <div class="form-group">
              <label for="email" class="form-label" data-i18n="contact.emailPlaceholder">Email</label>
              <div class="input-wrapper">
                <span class="terminal-prompt">user@ciara:~$ ./email --verify</span>
                <input type="email" id="email" name="email" class="form-control" placeholder="your.email@example.com" required>
              </div>
            </div>
            <div class="form-group">
              <label for="message" class="form-label" data-i18n="contact.messagePlaceholder">Message</label>
              <div class="input-wrapper">
                <span class="terminal-prompt">user@ciara:~$ ./msg --send --content</span>
                <textarea id="message" name="message" class="form-control" placeholder="How can I help you?" required></textarea>
              </div>
            </div>
            <div class="h-captcha" data-captcha="true"></div>
            <button type="submit" class="btn btn-primary" id="submit-btn"><span data-i18n="contact.submitBtn">Send Message</span></button>
            <div id="form-status" class="form-status" style="display: none;"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
`;
