// i18n logic
let currentLang = 'en';

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((o, i) => o ? o[i] : null, obj);
}

function updateStaticText() {
    const activeData = i18nData[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = getNestedTranslation(activeData, key);
        if (translation) {
            el.innerHTML = translation;
        }
    });

    // Update input placeholders if needed
    const nameInput = document.getElementById("name");
    if (nameInput) nameInput.placeholder = getNestedTranslation(activeData, "contact.namePlaceholder");

    const emailInput = document.getElementById("email");
    if (emailInput) emailInput.placeholder = getNestedTranslation(activeData, "contact.emailPlaceholder");

    const messageInput = document.getElementById("message");
    if (messageInput) messageInput.placeholder = getNestedTranslation(activeData, "contact.messagePlaceholder");
}

function switchLanguage(lang) {
    currentLang = lang;
    updateStaticText();
    if (typeof renderContent === 'function') renderContent();
    document.documentElement.lang = currentLang;

    if (window.nameEffect) {
        window.nameEffect.setText(i18nData[lang].profile.effectName);
    }
}
