// =========================================================
// PORTFOLIO JAVASCRIPT
// =========================================================


// =========================================================
// MOBILE NAVIGATION
// =========================================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        // Change menu icon
        if (navMenu.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });


    // Close menu when a navigation link is clicked

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuBtn.textContent = "☰";

        });

    });

}


// =========================================================
// CURRENT YEAR
// =========================================================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// =========================================================
// ACTIVE NAVIGATION LINK
// =========================================================

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-menu a");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();


// =========================================================
// NAVBAR SCROLL EFFECT
// =========================================================

const navbar = document.querySelector(".navbar");

function updateNavbar() {

    if (!navbar) return;

    if (window.scrollY > 30) {

        navbar.style.background = "rgba(8, 9, 12, 0.92)";

    } else {

        navbar.style.background = "rgba(8, 9, 12, 0.75)";

    }

}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


// =========================================================
// SCROLL REVEAL
// =========================================================

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-text, " +
    ".info-card, " +
    ".skill-card, " +
    ".project-card, " +
    ".certificate-card, " +
    ".contact-text, " +
    ".contact-item"
);


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// =========================================================
// PROJECT LINKS
// =========================================================

const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach(link => {

    link.addEventListener("click", event => {

        const target = link.getAttribute("href");

        // Ignore empty placeholder links
        if (!target || target === "#") {

            event.preventDefault();

            console.log("Project link not added yet.");

        }

    });

});


// =========================================================
// ESC KEY — CLOSE MOBILE MENU
// =========================================================

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }

    }

});


// =========================================================
// CLOSE MENU WHEN CLICKING OUTSIDE
// =========================================================

document.addEventListener("click", event => {

    if (!navMenu || !menuBtn) return;

    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedMenuButton = menuBtn.contains(event.target);

    if (
        navMenu.classList.contains("active") &&
        !clickedInsideMenu &&
        !clickedMenuButton
    ) {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

    }

});


// =========================================================
// CONSOLE MESSAGE
// =========================================================

console.log(
    "%c Muhad M Portfolio ",
    "background:#7c5cff;color:white;padding:8px 12px;border-radius:5px;font-weight:bold;"
);

console.log(
    "Portfolio loaded successfully."
);