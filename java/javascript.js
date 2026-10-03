const modal = document.querySelector(".video-modal");
const video = document.querySelector(".video-container video");
const closeBtn = document.querySelector(".close-video");

const playButtons = document.querySelectorAll(
    ".play-btn, .featured-play"
);


// Open video
playButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const videoPath = button.getAttribute("data-video");

        if (videoPath) {

            video.src = videoPath;

            modal.classList.add("active");

            video.play();

        }

    });

});


// Close video
closeBtn.addEventListener("click", function () {

    video.pause();

    video.src = "";

    modal.classList.remove("active");

});


// Close when clicking outside
modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        video.pause();

        video.src = "";

        modal.classList.remove("active");

    }

});


// Close with ESC
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        video.pause();

        video.src = "";

        modal.classList.remove("active");

    }

});

// ================================
// SCROLL REVEAL
// ================================

const revealElements = document.querySelectorAll(
    ".videos-section, .featured-section, .highlights-section, .about-section, .contact-section"
);

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});

// =================================
// NAVBAR
// =================================

const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelectorAll(".navbar a");


// Mobile menu

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("show");

    });

}


// Close mobile menu after clicking a link

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbar) {
            navbar.classList.remove("show");
        }

    });

});


// Navbar background on scroll

window.addEventListener("scroll", function () {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// =================================
// ACTIVE NAV LINK
// =================================

const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {

    let currentSection = "home";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveLink);

updateActiveLink();