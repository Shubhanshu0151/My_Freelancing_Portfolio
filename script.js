/* ==================== toggle icon navbar ===================*/
{/* <i class='bx bx-x'></i> */ }

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ==================== scroll Selection active linK ===================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('action');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /* ==================== sticky navbar ===================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window, scrollY > 100);

    /* ==================== remove toggle icon and navbar when click navbar link  ===================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ==================== Scroll Reveal  ===================*/
ScrollReveal({
    // reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-CSSContainerRule, .portfolio-BaseAudioContext, .contant form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// document.getElementById("themeToggle").addEventListener("click", function () {
//     document.body.classList.toggle("dark-mode");
// });

// document.getElementById("themeToggle").addEventListener("click", function () {
//     let body = document.body;
//     let button = this;

//     // Toggle dark mode class
//     body.classList.toggle("dark-mode");

//     // Change button text based on the theme
//     if (body.classList.contains("dark-mode")) {
//         button.textContent = "Switch to Light Mode";
//     } else {
//         button.textContent = "Switch to Dark Mode";
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    let body = document.body;
    let icon = document.getElementById("themeIcon");

    // Set initial dark mode
    body.classList.add("dark-mode"); // Default to dark mode
    icon.classList.replace("fa-moon", "fa-sun"); // Show Sun Icon for dark mode

    document.getElementById("themeToggle").addEventListener("click", function () {
        body.classList.toggle("light-mode");
        body.classList.toggle("dark-mode"); // Ensure dark mode toggles correctly

        // Toggle icons based on the theme
        if (body.classList.contains("light-mode")) {
            icon.classList.replace("fa-sun", "fa-moon"); // Light Mode
        } else {
            icon.classList.replace("fa-moon", "fa-sun"); // Dark Mode
        }
    });
});
