// ===============================================
// ÉLECTRICITÉ MARTIN - JAVASCRIPT
// ===============================================

// Navigation mobile
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Fermer le menu au clic sur un lien
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
}

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation au scroll (fade in)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les éléments avec animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .why-card, .testimonial-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Validation formulaire devis (utilisé sur devis.html)
const devisForm = document.getElementById('devisForm');
if (devisForm) {
    devisForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Récupérer les valeurs
        const formData = new FormData(devisForm);
        const data = Object.fromEntries(formData);

        // Validation simple
        if (!data.nom || !data.email || !data.telephone || !data.service) {
            alert('Veuillez remplir tous les champs obligatoires');
            return;
        }

        // Validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Veuillez entrer une adresse email valide');
            return;
        }

        // Validation téléphone (format français basique)
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        if (!phoneRegex.test(data.telephone)) {
            alert('Veuillez entrer un numéro de téléphone valide');
            return;
        }

        // Simuler l'envoi (en production, envoyer à un backend)
        console.log('Données du formulaire:', data);

        // Afficher un message de succès
        alert('Merci ! Votre demande de devis a été envoyée. Nous vous répondrons dans les 2 heures.');
        devisForm.reset();
    });
}

// Bouton urgence - tracking du clic (analytics)
const urgenceBtns = document.querySelectorAll('.urgence-sticky, a[href*="urgences.html"]');
urgenceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Clic bouton urgence - À tracker dans analytics');
    });
});

// Animation du circuit pattern
const circuitPattern = document.querySelector('.circuit-pattern');
if (circuitPattern) {
    let scrollY = 0;
    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
        circuitPattern.style.transform = `translateY(${scrollY * 0.5}px)`;
    });
}

// Navbar sticky effect
const navbar = document.querySelector('.navbar');
if (navbar) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(10, 36, 99, 0.15)';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(10, 36, 99, 0.1)';
        }

        lastScroll = currentScroll;
    });
}