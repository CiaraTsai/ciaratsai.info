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

    // 11. Initialize Transparent WebGL Hero Video Player
    if (typeof initHeroVideo === 'function') {
        initHeroVideo();
    }
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
    const nameContainer = document.getElementById("hero-name-container");
    if (!nameCanvas) return;

    const effect = new ParticleText("name-canvas", "hero-name-placeholder");
    const initialEffectName = i18nData[currentLang].profile.effectName;

    document.fonts.ready.then(() => {
        effect.setText(initialEffectName);
    });

    let isEffectActive = false;

    function activateHover() {
        if (isEffectActive) return;
        isEffectActive = true;
        const hoverName = i18nData[currentLang].profile.effectHoverName;
        effect.setText(hoverName);
    }

    function resetOriginal() {
        if (!isEffectActive) return;
        isEffectActive = false;
        const originalName = i18nData[currentLang].profile.effectName;
        effect.setText(originalName);
    }

    const container = nameContainer || nameCanvas;

    // 1. 電腦網頁版：滑鼠移過去變為 hoverName
    function handleMouseEnter() {
        activateHover();
    }

    function handleMouseLeave(e) {
        const nextTarget = e.relatedTarget;
        if (container && nextTarget && container.contains(nextTarget)) return;
        if (nameCanvas && nextTarget && nameCanvas.contains(nextTarget)) return;
        resetOriginal();
    }

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    nameCanvas.addEventListener("mouseenter", handleMouseEnter);
    nameCanvas.addEventListener("mouseleave", handleMouseLeave);

    // 2. 點擊名字：
    // 若尚未啟動，點擊變成 hoverName；
    // 若已經是 hoverName，點擊不做任何反應！
    function handleNameClick(e) {
        e.stopPropagation();
        if (!isEffectActive) {
            activateHover();
        }
        // 如果已經顯示 hoverName，再點擊不做任何反應
    }

    container.addEventListener("click", handleNameClick);
    nameCanvas.addEventListener("click", handleNameClick);

    // 3. 在旁邊空白處點擊：才回到原始名字
    document.addEventListener("click", (e) => {
        if (!isEffectActive) return;
        if (container.contains(e.target) || e.target === nameCanvas) return;
        resetOriginal();
    });

    effect.resetState = () => {
        isEffectActive = false;
    };

    window.nameEffect = effect;
}
