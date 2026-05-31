// Scroll Reveal Animation using IntersectionObserver
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// Scroll Progress Bar
const progressBar = document.querySelector('.scroll-progress');

// Typing Effect
const textElement = document.getElementById('typing-text');
const words = ["Israel", "Un entusiasta de la tecnología", "Un desarrollador de scripts y automatizaciones", "Usuario de Linux Intermedio"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

const type = () => {
    const currentWord = words[wordIndex];
    const displayedText = isDeleting
        ? currentWord.substring(0, charIndex - 1)
        : currentWord.substring(0, charIndex + 1);

    textElement.textContent = displayedText;

    if (!isDeleting) {
        charIndex++;
        typeSpeed = 100;
    } else {
        charIndex--;
        typeSpeed = 50;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 1500; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
};

document.addEventListener('DOMContentLoaded', () => {
    if (textElement) type();
});

// Cursor Glow with smooth lag
const cursor = document.querySelector('.cursor-glow');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

const animateCursor = () => {
    // Smooth interpolation (lerp)
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
};
animateCursor();

// Navbar change on scroll + Scroll Progress Bar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar && docHeight > 0) {
        progressBar.style.width = (scrollTop / docHeight) * 100 + '%';
    }
});

// Mobile Menu Toggle (Simplified)
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Add logic for mobile menu display if needed
});

// Form Submission (Demo)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Gracias por tu mensaje. ¡Esta es una demostración!');
        contactForm.reset();
    });
}
