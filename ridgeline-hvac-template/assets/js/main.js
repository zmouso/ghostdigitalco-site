// Ridgeline HVAC Demo — interactions (mobile menu + reveal on scroll)

(function(){
  const hamburger = document.querySelector('[data-hamburger]');
  const mobilePanel = document.querySelector('[data-mobile-panel]');

  if(hamburger && mobilePanel){
    hamburger.addEventListener('click', () => {
      const open = mobilePanel.getAttribute('data-open') === 'true';
      mobilePanel.setAttribute('data-open', (!open).toString());
      mobilePanel.style.display = open ? 'none' : 'block';
      hamburger.setAttribute('aria-expanded', (!open).toString());
    });

    // close on link click
    mobilePanel.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobilePanel.setAttribute('data-open','false');
        mobilePanel.style.display = 'none';
        hamburger.setAttribute('aria-expanded','false');
      });
    });

    // default hidden on mobile until opened
    mobilePanel.style.display = 'none';
    mobilePanel.setAttribute('data-open','false');
    hamburger.setAttribute('aria-expanded','false');
  }

  // reveal
  const els = document.querySelectorAll('[data-reveal]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('revealed');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => obs.observe(el));
})();
