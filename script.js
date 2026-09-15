/* =========================
   FFC COUNTDOWN
========================= */

/*
   Nürburgring GP
   20 September 2026
   16:30 CEST
*/

const raceDate = new Date(
    "2026-09-20T16:30:00+02:00"
).getTime();


function updateCountdown() {

    const now = Date.now();

    const difference = raceDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("mins").textContent = "00";
        document.getElementById("secs").textContent = "00";

        return;
    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("mins").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("secs").textContent =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
   NAVBAR SCROLL
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.background =
            "rgba(5, 7, 10, 0.98)";

    } else {

        navbar.style.background =
            "rgba(7, 9, 13, 0.94)";
    }

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-open");

    });

}


/* =========================
   REVEAL ON SCROLL
========================= */

const revealElements = document.querySelectorAll(
    ".standings-block, .calendar-card, .race-feature, .info-banner, .stat"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal");

                requestAnimationFrame(() => {
                    entry.target.classList.add("visible");
                });

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.08
    }
);


revealElements.forEach((element) => {

    observer.observe(element);

});


/* =========================
   CLOSE MOBILE MENU
========================= */

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-open");

    });

});
