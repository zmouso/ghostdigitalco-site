// Ridgeline HVAC (DEMO) JS
// Mobile menu + reveal animations + tiny UX polish

(function () {
  // Mobile menu toggle (supports #menuToggle + #navMenu pattern)
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when clicking a link (mobile)
    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu if you tap outside
    document.addEventListener("click", (e) => {
      const clickedInside = menu.contains(e.target) || toggle.contains(e.target);
      if (!clickedInside) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Reveal animations
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => obs.observe(el));
  }

  // Make tel links feel instant on iOS (no change needed, but this prevents double-tap delay in some cases)
  document.querySelectorAll('a[href^="tel:"]').forEach((a) => {
    a.addEventListener("touchstart", () => {}, { passive: true });
  });
})();