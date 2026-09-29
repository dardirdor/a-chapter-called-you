
/* =========================
   1. OPENING BUTTON
========================= */

const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");
const bgMusic = document.getElementById("bgMusic");

bgMusic.volume = 0.4;

openBtn.addEventListener("click", function () {
    
    bgMusic.play().catch(function () {
    console.log("Musik belum bisa diputar.");
    });

    opening.style.opacity = "0";

    setTimeout(function () {
        opening.classList.add("hidden");
        mainContent.classList.remove("hidden");

        observeElements();

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }, 800);
});


/* =========================
   2. LETTER BUTTON
========================= */

const letterBtn = document.getElementById("letterBtn");
const letterPaper = document.getElementById("letterPaper");

const heartSVG = `
    <svg viewBox="0 0 24 24" width="16" height="16"
         fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>
    </svg>
`;

letterBtn.addEventListener("click", function () {
    letterPaper.classList.toggle("hidden");

    if (!letterPaper.classList.contains("hidden")) {
        letterBtn.innerHTML = "Close my letter ↑";

        setTimeout(function () {
            letterPaper.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 100);

    } else {
        letterBtn.innerHTML = "Read my letter " + heartSVG;
    }
});


/* =========================
   3. SCROLL REVEAL
========================= */

function observeElements() {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    elements.forEach(function (element) {
        observer.observe(element);
    });
}


/* =========================
   4. FINAL SURPRISE
========================= */

const celebrateBtn = document.getElementById("celebrateBtn");
const finalSurprise = document.getElementById("finalSurprise");

const starSVG = `
    <svg viewBox="0 0 24 24" width="16" height="16"
         fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12 2L14.5 9.5 22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z"/>
    </svg>
`;

celebrateBtn.addEventListener("click", function () {
    finalSurprise.classList.toggle("hidden");

    if (!finalSurprise.classList.contains("hidden")) {
        celebrateBtn.textContent = "You deserve the world";

        finalSurprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    } else {
        celebrateBtn.innerHTML = "One last thing " + starSVG;
    }
});


/* =========================
   5. START
========================= */

window.addEventListener("load", function () {
    window.scrollTo(0, 0);
});