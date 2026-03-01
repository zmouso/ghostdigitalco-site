document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal Animation Logic
    const revealElements = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    // Run on scroll and on load
    window.addEventListener('scroll', revealElements);
    revealElements();

    // 2. Mobile Menu Toggle
    const toggleBtn = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('open');
        });
    }

    // Close menu if clicking outside
    document.addEventListener('click', () => {
        if (menu) menu.classList.remove('open');
    });
});
