// Theme Management
let currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update theme toggle icons (sun in dark mode, moon in light mode)
    const iconName = theme === 'dark' ? 'sun' : 'moon';
    const themeToggles = document.querySelectorAll('.theme-btn');
    themeToggles.forEach(btn => {
        btn.innerHTML = `<i data-lucide="${iconName}"></i>`;
    });

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Refresh particle effects
    if (window.nameEffect && typeof window.nameEffect.refreshColors === 'function') {
        window.nameEffect.refreshColors();
    }
    if (typeof window.refreshBgParticles === 'function') {
        window.refreshBgParticles();
    }
}

function toggleTheme() {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
}

// Main Initialization and Event Binding
document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject Reusable Components (Navbar, Hero, Profile, etc.)
    if (typeof injectComponents === 'function') {
        injectComponents();
    }

    // 2. Initialize Theme
    applyTheme(currentTheme);

    // 3. Initialize Language (Requires injected DOM)
    if (typeof switchLanguage === 'function') switchLanguage(currentLang);

    // 4. Update Footer Year
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 5. Bind Language Toggle Buttons
    const langToggles = document.querySelectorAll('.lang-btn');
    langToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetLang = currentLang === 'en' ? 'zh' : 'en';
            if (typeof switchLanguage === 'function') switchLanguage(targetLang);
        });
    });

    // 6. Bind Theme Toggle Buttons
    const themeToggles = document.querySelectorAll('.theme-btn');
    themeToggles.forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });

    // 7. Initialize AntiGravity Particles (if canvas exists)
    if (typeof initParticles === 'function') initParticles();

    // 8. Bind Interactive Glow Tracking for cards
    bindGlowTracking();

    // 9. Initialize Hero Name Particle Effect
    initHeroEffect();

    // 10. Bind Timeline Card Click Flip (supports mobile/touch)
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
