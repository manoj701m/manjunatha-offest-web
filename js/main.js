/* ============================================================
   Manjunatha Offset Printers — Main JavaScript
   ============================================================ */

// ── Mobile menu toggle ──────────────────────────────────────
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

// Close mobile menu when any nav link inside it is clicked
document.querySelectorAll('#mobile-menu a').forEach(a =>
  a.addEventListener('click', () =>
    document.getElementById('mobile-menu').classList.remove('open')
  )
);

// ── Scroll-triggered fade-in (IntersectionObserver) ─────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));