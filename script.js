// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const showOnScroll = () => {
    revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 50) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// Typing Effect
const textElement = document.getElementById('typing-text');
const words = ["Desarrollador Web", "Diseñador UI/UX", "Entusiasta de Python"];
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

// Cursor Glow
const cursor = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Navbar change on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
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
