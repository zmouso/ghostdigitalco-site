document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Menu Toggle
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    
    if (toggle) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('open');
        });
    }

    document.addEventListener('click', () => {
        if(menu) menu.classList.remove('open');
    });
});
