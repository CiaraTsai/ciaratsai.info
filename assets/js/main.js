// Main Initialization and Event Binding

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject Reusable Components (Navbar, Hero, Profile, etc.)
    if (typeof injectComponents === 'function') {
        injectComponents();
    }

    // 2. Initialize Language (Requires injected DOM)
    if (typeof switchLanguage === 'function') switchLanguage(currentLang);

    // 3. Update Footer Year
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 4. Bind Language Toggle Buttons
    const langToggles = document.querySelectorAll('.lang-btn');
    langToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetLang = currentLang === 'en' ? 'zh' : 'en';
            if (typeof switchLanguage === 'function') switchLanguage(targetLang);
        });
    });

    // 5. Initialize AntiGravity Particles (if canvas exists)
    if (typeof initParticles === 'function') initParticles();

    // 6. Bind Interactive Glow Tracking for cards
    bindGlowTracking();

    // 7. Initialize Hero Name Particle Effect
    initHeroEffect();

    // 8. Bind Timeline Card Click Flip (supports mobile/touch)
    document.addEventListener('click', (e) => {
        const timelineContent = e.target.closest('.timeline-content');
        if (timelineContent) {
            timelineContent.classList.toggle('flipped');
        }
    });
});

function bindGlowTracking() {
    document.querySelectorAll('.glass-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

function initHeroEffect() {
    const nameCanvas = document.getElementById("name-canvas");
    if (!nameCanvas) return;

    const effect = new ParticleText("name-canvas", "hero-name-placeholder");
    const initialEffectName = i18nData[currentLang].profile.effectName;

    document.fonts.ready.then(() => {
        effect.setText(initialEffectName);
    });

    nameCanvas.addEventListener("mouseenter", () => {
        const hoverName = i18nData[currentLang].profile.effectHoverName;
        effect.setText(hoverName);
    });

    nameCanvas.addEventListener("mouseleave", () => {
        const originalName = i18nData[currentLang].profile.effectName;
        effect.setText(originalName);
    });

    window.nameEffect = effect;
}
