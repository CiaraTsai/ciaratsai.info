// Reusable UI Component Injector (Script-based, No Fetch)
function injectComponents() {
  // 1. Inject Containers (Synchronous)
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer && typeof NAVBAR_HTML !== 'undefined') {
    navbarContainer.innerHTML = NAVBAR_HTML;
  }

  const heroContainer = document.getElementById('hero-container');
  if (heroContainer && typeof HERO_HTML !== 'undefined') {
    heroContainer.innerHTML = HERO_HTML;
  }

  const profileContainer = document.getElementById('profile-container');
  if (profileContainer && typeof PROFILE_HTML !== 'undefined') {
    profileContainer.innerHTML = PROFILE_HTML;
  }

  const portfolioContainer = document.getElementById('portfolio-container');
  if (portfolioContainer && typeof PORTFOLIO_HTML !== 'undefined') {
    portfolioContainer.innerHTML = PORTFOLIO_HTML;
  }

  const contactContainer = document.getElementById('contact-container');
  if (contactContainer && typeof CONTACT_HTML !== 'undefined') {
    contactContainer.innerHTML = CONTACT_HTML;
  }

  const footerContainer = document.getElementById('footer-container');
  if (footerContainer && typeof FOOTER_HTML !== 'undefined') {
    footerContainer.innerHTML = FOOTER_HTML;
  }

  // After injecting, bind UI logic
  bindNavbarLogic();
}

function bindNavbarLogic() {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileLinks = document.getElementById("mobile-links");

  if (mobileMenuBtn && mobileLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileLinks.classList.toggle("active");
    });

    Array.from(mobileLinks.querySelectorAll("a")).forEach(link => {
      link.addEventListener("click", () => {
        mobileLinks.classList.remove("active");
      });
    });
  }
}
