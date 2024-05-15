// script.js
const reveals = document.querySelectorAll('.reveal');

function checkVisibility() {
    const windowHeight = window.innerHeight;
    reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150; // Valore per quando l'elemento diventa visibile

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility(); // Chiama la funzione per rivelare gli elementi visibili inizialmente
