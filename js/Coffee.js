
/* ========================================
   1. MOBILE NAVIGATION MENU
======================================== */

const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navMenu = document.querySelector(".nav-menu");

if (menuOpenButton && navMenu) {
    menuOpenButton.addEventListener("click", () => {
        navMenu.classList.add("active");
    });
}

if (menuCloseButton && navMenu) {
    menuCloseButton.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
}

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-menu .nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu?.classList.remove("active");
    });
});


/* ========================================
   2. TESTIMONIALS SWIPER SLIDER
======================================== */

if (typeof Swiper !== "undefined") {
    const sliderContainer = document.querySelector(".slider-container");

    if (sliderContainer) {
        const swiper = new Swiper(".slider-container", {
            loop: true,
            grabCursor: true,
            spaceBetween: 25,
            slidesPerView: 1,
            speed: 600,

            // Pagination dots
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },

            // Previous and next buttons
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },

            // Responsive settings
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 25
                }
            }
        });
    }
} else {
    console.error("Swiper was not loaded. Check your Swiper script link.");
}


/* ========================================
   3. SMOOTH SCROLLING
======================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (targetId && targetId.length > 1) {
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});


/* ========================================
   4. CONTACT FORM VALIDATION
======================================== */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const nameInput = contactForm.querySelector(
            'input[type="text"]'
        );

        const emailInput = contactForm.querySelector(
            'input[type="email"]'
        );

        const messageInput = contactForm.querySelector("textarea");

        if (
            !nameInput?.value.trim() ||
            !emailInput?.value.trim() ||
            !messageInput?.value.trim()
        ) {
            alert("Please complete all fields.");
            return;
        }

        alert(
            "Thank you, " + nameInput.value.trim() +
            "! Your form has been validated."
        );

        contactForm.reset();
    });
}


/* ========================================
   5. FOOTER COPYRIGHT YEAR
======================================== */

const copyrightText = document.querySelector(".copyright-text");

if (copyrightText) {
    copyrightText.textContent =
        `© ${new Date().getFullYear()} Coffee Shop`;
}


/* ========================================
   6. ACTIVE NAVIGATION LINK
======================================== */

const currentSectionLinks = document.querySelectorAll(
    ".nav-menu .nav-link"
);

currentSectionLinks.forEach(link => {
    link.addEventListener("click", function () {
        currentSectionLinks.forEach(navLink => {
            navLink.classList.remove("active");
        });

        this.classList.add("active");
    });
});