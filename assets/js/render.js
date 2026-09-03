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

    const gitlabLink = document.getElementById("gitlab-link");
    if (gitlabLink) gitlabLink.href = contactsData.gitlab;

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
        const c = activeData.contact;
        contactMethodsContainer.innerHTML = `
        <div class="contact-card">
            <div class="contact-card-header">
                <div class="contact-card-icon">
                    <i data-lucide="mail"></i>
                </div>
                <div>
                    <div class="contact-card-title">${c.emailTitle}</div>
                    <div class="contact-card-desc">${c.emailDesc}</div>
                </div>
            </div>
            <div class="contact-card-value">${contactsData.email}</div>
            <div class="contact-card-actions">
                <a href="mailto:${contactsData.email}" class="btn btn-primary contact-action-btn">
                    <i data-lucide="send" style="width: 14px; height: 14px; margin-right: 6px;"></i> ${c.sendEmailBtn}
                </a>
                <button class="btn btn-secondary contact-action-btn copy-btn" onclick="copyContactText(this, '${contactsData.email}')" data-copied-text="${c.copiedBtn}">
                    <i data-lucide="copy" style="width: 14px; height: 14px; margin-right: 6px;"></i> <span class="btn-text">${c.copyBtn}</span>
                </button>
            </div>
        </div>

        <div class="contact-card">
            <div class="contact-card-header">
                <div class="contact-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </div>
                <div>
                    <div class="contact-card-title">${c.linkedinTitle}</div>
                    <div class="contact-card-desc">${c.linkedinDesc}</div>
                </div>
            </div>
            <div class="contact-card-value">linkedin.com/in/yen-ju-tsai-0544676b</div>
            <div class="contact-card-actions">
                <a href="${contactsData.linkedin}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary contact-action-btn">
                    <i data-lucide="external-link" style="width: 14px; height: 14px; margin-right: 6px;"></i> ${c.viewBtn}
                </a>
            </div>
        </div>

        <div class="contact-card">
            <div class="contact-card-header">
                <div class="contact-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </div>
                <div>
                    <div class="contact-card-title">${c.githubTitle}</div>
                    <div class="contact-card-desc">${c.githubDesc}</div>
                </div>
            </div>
            <div class="contact-card-value">github.com/CiaraTsai</div>
            <div class="contact-card-actions">
                <a href="${contactsData.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary contact-action-btn">
                    <i data-lucide="external-link" style="width: 14px; height: 14px; margin-right: 6px;"></i> ${c.viewRepoBtn}
                </a>
            </div>
        </div>

        <div class="contact-card">
            <div class="contact-card-header">
                <div class="contact-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gitlab">
                        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
                    </svg>
                </div>
                <div>
                    <div class="contact-card-title">${c.gitlabTitle}</div>
                    <div class="contact-card-desc">${c.gitlabDesc}</div>
                </div>
            </div>
            <div class="contact-card-value">gitlab.com/CiaraTsai</div>
            <div class="contact-card-actions">
                <a href="${contactsData.gitlab}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary contact-action-btn">
                    <i data-lucide="external-link" style="width: 14px; height: 14px; margin-right: 6px;"></i> ${c.viewRepoBtn}
                </a>
            </div>
        </div>

        <div class="contact-card">
            <div class="contact-card-header">
                <div class="contact-card-icon">
                    <i data-lucide="file-text"></i>
                </div>
                <div>
                    <div class="contact-card-title">${c.resumeTitle}</div>
                    <div class="contact-card-desc">${c.resumeDesc}</div>
                </div>
            </div>
            <div class="contact-card-value">Dropbox Online Resume (.docx)</div>
            <div class="contact-card-actions">
                <a href="${contactsData.resume}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary contact-action-btn">
                    <i data-lucide="download" style="width: 14px; height: 14px; margin-right: 6px;"></i> ${c.viewResumeBtn}
                </a>
            </div>
        </div>
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
