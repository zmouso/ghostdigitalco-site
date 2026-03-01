(() => {
  // Set year
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Mobile menu toggle
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.style.display === "block";
      menu.style.display = open ? "none" : "block";
      toggle.setAttribute("aria-expanded", String(!open));
    });

    // Close menu when clicking a link (mobile)
    menu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 899px)").matches) {
          menu.style.display = "none";
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // Reveal on scroll
  const els = document.querySelectorAll(".reveal");
  if (els.length) {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
  }
})();