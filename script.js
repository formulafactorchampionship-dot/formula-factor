/* =========================================
FORMULA FACTOR CHAMPIONSHIP
COUNTDOWN — ROUND 10
========================================= */

const raceDate = new Date("2026-09-20T16:30:00+02:00").getTime();

function updateCountdown() {

```
const now = new Date().getTime();
const distance = raceDate - now;

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");

if (!days || !hours || !mins || !secs) {
    return;
}

if (distance <= 0) {

    days.textContent = "00";
    hours.textContent = "00";
    mins.textContent = "00";
    secs.textContent = "00";

    return;
}

const d = Math.floor(distance / (1000 * 60 * 60 * 24));
const h = Math.floor(
    (distance / (1000 * 60 * 60)) % 24
);
const m = Math.floor(
    (distance / (1000 * 60)) % 60
);
const s = Math.floor(
    (distance / 1000) % 60
);

days.textContent = String(d).padStart(2, "0");
hours.textContent = String(h).padStart(2, "0");
mins.textContent = String(m).padStart(2, "0");
secs.textContent = String(s).padStart(2, "0");
```

}

/* Actualizar inmediatamente */

updateCountdown();

/* Actualizar cada segundo */

setInterval(updateCountdown, 1000);

/* =========================================
NAVBAR — SCROLL EFFECT
========================================= */

const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {

```
if (!navbar) {
    return;
}

if (window.scrollY > 30) {

    navbar.style.background =
        "rgba(5, 7, 10, 0.98)";

} else {

    navbar.style.background =
        "rgba(7, 9, 13, 0.94)";
}
```

});

/* =========================================
REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
".section, .race-card, .result-box, .info-banner"
);

const revealObserver = new IntersectionObserver(
(entries) => {

```
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

        }

    });

},
{
    threshold: 0.08
}
```

);

revealElements.forEach((element) => {

```
element.classList.add("reveal");

revealObserver.observe(element);
```

});
