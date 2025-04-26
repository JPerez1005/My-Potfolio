// scrollRevealEffects.js
// import ScrollReveal from 'scrollreveal'; // Asegúrate de tener la librería ScrollReveal importada en tu HTML

export function initScrollRevealEffects() {
  ScrollReveal({
    distance: "90px",
    duration: 2000,
    delay: 200,
    // reset: true ,
  });

  ScrollReveal().reveal('.hero-info,.main-text,.proposal,.heading', { origin: "top" });
  ScrollReveal().reveal('.about-img,.fillter-buttons,.contact-info', { origin: "left" });
  ScrollReveal().reveal('.about-content,.skills', { origin: "right" });
  ScrollReveal().reveal('.allServices,.portfolio-gallery,.blog-box,footer,.img-hero', { origin: "bottom" });
}