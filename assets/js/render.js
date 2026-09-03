// Render logic for DOM elements
function renderContent() {
    const activeData = i18nData[currentLang];

    // Populate Hero (Only if elements exist)
    const navLogo = document.getElementById("nav-logo-name");
    if (navLogo) navLogo.textContent = activeData.profile.name;

    const heroName = document.getElementById("hero-name-placeholder");
    if (heroName) heroName.textContent = activeData.profile.name;

    const heroTitle = document.getElementById("hero-title-placeholder");
    if (heroTitle) heroTitle.textContent = activeData.profile.title;

    const heroSlogan = document.getElementById("hero-slogan-placeholder");
    if (heroSlogan) heroSlogan.textContent = activeData.profile.slogan;

    // Populate Hero Links
    const resumeLink = document.getElementById("resume-link");
    if (resumeLink) resumeLink.href = contactsData.resume;

    const githubLink = document.getElementById("github-link");
    if (githubLink) githubLink.href = contactsData.github;

    const linkedinLink = document.getElementById("linkedin-link");
    if (linkedinLink) linkedinLink.href = contactsData.linkedin;

    const emailLink = document.getElementById("email-link");
    if (emailLink) emailLink.href = `mailto:${contactsData.email}`;

    // Populate About Text
    const aboutTextContainer = document.getElementById("about-text-container");
    if (aboutTextContainer) {
        aboutTextContainer.innerHTML = '';
        activeData.profile.about.forEach(paragraph => {
            const p = document.createElement("p");
            p.textContent = paragraph;
            aboutTextContainer.appendChild(p);
        });
    }

    // Populate Education
    const educationContainer = document.getElementById("education-container");
    if (educationContainer) {
        educationContainer.innerHTML = '';
        activeData.education.forEach(edu => {
            const eduItem = document.createElement("div");
            eduItem.className = "stat-item";
            eduItem.innerHTML = `
                <h3>${edu.school}</h3>
                <p>${edu.major}</p>
                <span>${edu.period}</span>
            `;
            educationContainer.appendChild(eduItem);
        });
    }

    // Populate Skills
    const skillsContainer = document.getElementById("skills-container");
    if (skillsContainer) {
        skillsContainer.innerHTML = ''; // Clear existing
        activeData.skills.forEach(group => {
            const groupDiv = document.createElement("div");
            groupDiv.className = "skill-group glass-card";

            const title = document.createElement("h3");
            title.textContent = group.category;
            groupDiv.appendChild(title);

            const tagsContainer = document.createElement("div");
            tagsContainer.className = "skill-tags row gap";
            tagsContainer.style.flexWrap = "wrap";

            group.items.forEach(skillStr => {
                const tag = document.createElement("span");
                tag.className = "skill-tag";
                tag.textContent = skillStr;
                tagsContainer.appendChild(tag);
            });

            groupDiv.appendChild(tagsContainer);
            skillsContainer.appendChild(groupDiv);
        });
    }

    const timelineContainer = document.getElementById("timeline-container");
    if (timelineContainer) {
        timelineContainer.innerHTML = ''; // Clear existing
        activeData.experience.forEach(job => {
            const item = document.createElement("div");
            item.className = "timeline-item";

            const techList = job.technologies ? job.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('') : '';

            let descHtml = '';
            if (job.project) {
                const projectLabel = currentLang === 'zh' ? '專案' : 'Project';
                descHtml += `<div class="timeline-project"><strong>${projectLabel}:</strong> ${job.project}</div>`;
            }
            if (Array.isArray(job.description)) {
                descHtml += `<ul class="timeline-desc-list">${job.description.map(d => `<li>${d}</li>`).join('')}</ul>`;
            } else if (job.description) {
                descHtml += `<p>${job.description}</p>`;
            }

            const techTitle = currentLang === 'zh' ? '使用技術 (Technologies)' : 'Technologies Used';
            const flipHint = currentLang === 'zh' ? '懸停查看技術棧' : 'Hover to see tech stack';

            item.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <div class="timeline-card-inner">
                <div class="timeline-card-front glass-card">
                    <span class="timeline-date">${job.period}</span>
                    <h3>${job.role}</h3>
                    <h4>${job.company}</h4>
                    ${descHtml}
                    <div class="flip-hint"><i data-lucide="rotate-cw"></i> ${flipHint}</div>
                </div>
                <div class="timeline-card-back glass-card">
                    <h3>${techTitle}</h3>
                    <div class="tech-tags-grid">
                        ${techList}
                    </div>
                </div>
            </div>
        </div>
        `;
            timelineContainer.appendChild(item);
        });
    }

    // Populate Projects
    const projectsContainer = document.getElementById("projects-container");
    if (projectsContainer) {
        projectsContainer.innerHTML = ''; // Clear existing
        activeData.projects.filter(project => !project.hidden).forEach(project => {
            const card = document.createElement("div");
            card.className = "project-card";

            let descHtml = '';
            if (Array.isArray(project.description)) {
                descHtml = `<ul class="project-desc-list">${project.description.map(d => `<li>${d}</li>`).join('')}</ul>`;
            } else {
                descHtml = `<p>${project.description}</p>`;
            }

            card.innerHTML = `
        <span class="project-type">${project.type}</span>
        <h3>${project.title}</h3>
        ${descHtml}
        <div class="project-footer">
            ${project.linkHtml}
        </div>
        `;
            projectsContainer.appendChild(card);
        });
    }

    // Populate Contest
    const contestContainer = document.getElementById("contest-container");
    if (contestContainer && activeData.contest) {
        contestContainer.innerHTML = ''; // Clear existing
        activeData.contest.forEach(item => {
            const card = document.createElement("div");
            card.className = "project-card";

            let descHtml = '';
            if (Array.isArray(item.description)) {
                descHtml = `<ul class="project-desc-list">${item.description.map(d => `<li>${d}</li>`).join('')}</ul>`;
            } else {
                descHtml = `<p>${item.description}</p>`;
            }

            card.innerHTML = `
        <span class="project-type">${item.type}</span>
        <h3>${item.title}</h3>
        ${descHtml}
        <div class="project-footer">
            ${item.linkHtml}
        </div>
        `;
            contestContainer.appendChild(card);
        });
    }

    // Populate Books
    const booksContainer = document.getElementById("books-container");
    if (booksContainer) {
        booksContainer.innerHTML = ''; // Clear existing
        activeData.books.forEach(book => {
            const card = document.createElement("div");
            card.className = "project-card";

            let descHtml = '';
            if (Array.isArray(book.description)) {
                descHtml = `<ul class="project-desc-list">${book.description.map(d => `<li>${d}</li>`).join('')}</ul>`;
            } else {
                descHtml = `<p>${book.description}</p>`;
            }

            card.innerHTML = `
            <span class="project-type">${book.type}</span>
            <h3>${book.title}</h3>
            ${descHtml}
            <div class="project-footer">
                ${book.linkHtml}
            </div>
            `;
            booksContainer.appendChild(card);
        });
    }

    // Populate Contact Details
    const contactMethodsContainer = document.getElementById("contact-methods-container");
    if (contactMethodsContainer) {
        contactMethodsContainer.innerHTML = `
        <a href="mailto:${contactsData.email}" class="row gap" style="align-items: center">
        <i data-lucide="mail"></i> ${contactsData.email}
        </a>
        <a href="${contactsData.linkedin}" target="_blank" rel="noopener noreferrer" class="row gap" style="align-items: center">
        <i data-lucide="linkedin"></i> LinkedIn
        </a>
        <a href="${contactsData.github}" target="_blank" rel="noopener noreferrer" class="row gap" style="align-items: center">
        <i data-lucide="github"></i> GitHub
        </a>
    `;
    }

    // Re-run icons for newly injected DOM
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // Trigger Terminal Typing Effect
    initTerminalTyping();
}

function initTerminalTyping() {
    const prompts = document.querySelectorAll('.terminal-prompt');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                typeEffect(entry.target);
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });

    prompts.forEach(prompt => {
        // Store original text and clear it for typing
        prompt.setAttribute('data-full-text', prompt.textContent);
        prompt.textContent = '';
        observer.observe(prompt);
    });
}

function typeEffect(element) {
    const fullText = element.getAttribute('data-full-text');
    let i = 0;
    element.classList.add('typing');

    function type() {
        if (i < fullText.length) {
            element.textContent += fullText.charAt(i);
            i++;
            setTimeout(type, Math.random() * 50 + 50); // Randomized typing speed
        } else {
            element.classList.remove('typing');
        }
    }
    type();
}
