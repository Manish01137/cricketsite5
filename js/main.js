// ===== Mobile menu =====
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".mobile-toggle");
  const menu = document.querySelector(".menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => menu.classList.toggle("open"));
  }

  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (id.length > 1) {
        const el = document.querySelector(id);
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth" }); }
      }
    });
  });

  // Live score ticker — duplicate content for seamless loop
  document.querySelectorAll(".ticker").forEach(t => {
    t.innerHTML += t.innerHTML;
  });

  // Lazy signup stub (no backend — just demo)
  const form = document.querySelector(".id-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const n = form.querySelector('[name="name"]').value.trim();
      const p = form.querySelector('[name="phone"]').value.trim();
      if (!n || p.length < 10) { alert("Please enter a valid name and phone."); return; }
      const msg = encodeURIComponent(`Hi, I want a new cricket ID. Name: ${n}. Phone: ${p}. Please share details.`);
      window.location.href = `https://wa.me/919000000000?text=${msg}`;
    });
  }

  // Countdown for next match hero (demo only)
  const cd = document.querySelector("[data-countdown]");
  if (cd) {
    const target = new Date(cd.dataset.countdown).getTime();
    const tick = () => {
      const now = Date.now();
      const d = Math.max(0, target - now);
      const h = String(Math.floor(d / 3.6e6)).padStart(2,"0");
      const m = String(Math.floor((d % 3.6e6) / 6e4)).padStart(2,"0");
      const s = String(Math.floor((d % 6e4) / 1000)).padStart(2,"0");
      cd.textContent = `${h}:${m}:${s}`;
    };
    tick();
    setInterval(tick, 1000);
  }
});
