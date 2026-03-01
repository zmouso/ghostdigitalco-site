(() => {
  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu
  const toggle = document.querySelector(".nav__toggle");
  const panel = document.querySelector(".nav__panel");

  if (toggle && panel) {
    const setState = (open) => {
      panel.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };

    toggle.addEventListener("click", () => {
      const open = !panel.classList.contains("is-open");
      setState(open);
    });

    // close when clicking a link
    panel.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => setState(false));
    });

    // close on outside click
    document.addEventListener("click", (e) => {
      if (!panel.classList.contains("is-open")) return;
      const clickedInside = panel.contains(e.target) || toggle.contains(e.target);
      if (!clickedInside) setState(false);
    });

    // close on escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setState(false);
    });
  }

  // Reveal on scroll
  const els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && els.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add("is-visible"));
  }
})();