// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close menu when tapping a link on mobile
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

reveals.forEach(el => obs.observe(el));

// FAQ accordion (supports multiple pages)
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    // toggle open by adding a class to the button and showing the next sibling
    btn.classList.toggle('faq-item-open');
    const symbol = btn.querySelector('span');
    if (symbol) symbol.textContent = btn.classList.contains('faq-item-open') ? '–' : '+';
  });
});

// Quote page demo submit -> success panel
const quoteForm = document.getElementById('quoteForm');
const successBox = document.getElementById('successBox');

if (quoteForm && successBox) {
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    quoteForm.hidden = true;
    successBox.hidden = false;
    successBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}