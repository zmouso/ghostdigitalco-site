document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal Elements on Scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 2. Dropdown Toggle logic
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('open');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('open');
    });
});
