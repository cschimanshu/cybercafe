// ======================================
// HIMANSHU CYBER CAFE
// script.js - Part 1
// ======================================

// Smooth Scroll for Navigation

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});

// Active Menu on Scroll

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
// ======================================
// script.js - Part 2
// ======================================

// Scroll To Top Button

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.opacity = "1";
        scrollBtn.style.visibility = "visible";

    } else {

        scrollBtn.style.opacity = "0";
        scrollBtn.style.visibility = "hidden";

    }

});

scrollBtn.addEventListener("click", function (e) {

    e.preventDefault();

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// Header Shadow on Scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.18)";

    } else {

        header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.12)";

    }

});

// Floating WhatsApp Hover Effect

const whatsapp = document.querySelector(".floating-whatsapp");

if (whatsapp) {

    whatsapp.addEventListener("mouseenter", () => {

        whatsapp.style.transform = "scale(1.12)";

    });

    whatsapp.addEventListener("mouseleave", () => {

        whatsapp.style.transform = "scale(1)";

    });

}
// ======================================
// script.js - Part 3
// ======================================

// Fade Animation on Scroll

const cards = document.querySelectorAll(
".service-card, .about-text, .contact-box, .social-btn"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all .6s ease";

    observer.observe(card);

});

// Current Year Auto Update

const year = document.querySelector(".current-year");

if (year) {

    year.textContent = new Date().getFullYear();

}

// Welcome Message

console.log("%cWelcome to Himanshu Cyber Cafe",
"color:#0d6efd;font-size:18px;font-weight:bold;");

console.log("Website Developed using HTML, CSS & JavaScript");

// Disable Right Click (Optional)

document.addEventListener("contextmenu", function(e){

    e.preventDefault();

});

// Disable F12 / Ctrl+Shift+I / Ctrl+U (Optional)

document.addEventListener("keydown", function(e){

    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.key.toLowerCase() === "u")
    ){

        e.preventDefault();

    }

});

// Loading Complete

window.addEventListener("load", function(){

    document.body.style.opacity = "1";

});

console.log("Himanshu Cyber Cafe Website Loaded Successfully");