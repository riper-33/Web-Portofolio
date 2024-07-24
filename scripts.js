// scripts.js

// Smooth scrolling for anchor links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle active class in the navigation menu
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});

// Optional: Show or hide the social bar on scroll
const socialBar = document.querySelector('.social');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        socialBar.style.display = 'flex';
    } else {
        socialBar.style.display = 'none';
    }
});
