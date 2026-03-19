/* ============================================================
   scroll.js — Scroll reveal, skill bar animation,
               GitHub contribution grid generator
   ============================================================ */

// ── Scroll Reveal (IntersectionObserver) ─────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('vis');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

window.observeRevealElements = function observeRevealElements(root = document) {
  root.querySelectorAll('.reveal, .reveal-l').forEach(el => {
    if (el.dataset.revealObserved === 'true') return;
    el.dataset.revealObserved = 'true';
    revealObserver.observe(el);
  });
};

window.observeRevealElements();


// ── Skill Bars Animation ──────────────────────────────────────
// Bars fill when their category scrolls into view
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.w + '%';
        });
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.skill-cat').forEach(el => {
  skillObserver.observe(el);
});


// ── GitHub Contribution Grid ──────────────────────────────────
// Generates a realistic-looking contribution heatmap
(function buildContribGrid() {
  const grid = document.getElementById('cGrid');
  if (!grid) return;

  const CELLS = 78; // 6 rows × 13 columns

  for (let i = 0; i < CELLS; i++) {
    const cell = document.createElement('div');
    cell.className = 'c-cell';

    const rand = Math.random();
    if      (rand > 0.88) cell.classList.add('l4');
    else if (rand > 0.74) cell.classList.add('l3');
    else if (rand > 0.58) cell.classList.add('l2');
    else if (rand > 0.42) cell.classList.add('l1');

    grid.appendChild(cell);
  }
})();
