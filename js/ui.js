/* ============================================================
   ui.js — Cursor, Progress Bar, Nav scroll state,
           Hamburger menu, Back to top, Nav active links
   ============================================================ */

// ── Custom Cursor ────────────────────────────────────────────
const cur  = document.getElementById('cur');
const cRing = document.getElementById('cur-ring');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cur.style.left = mouseX + 'px';
  cur.style.top  = mouseY + 'px';
});

// Smooth ring follow
(function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cRing.style.left = ringX + 'px';
  cRing.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
})();

// Hover states
document.querySelectorAll('a, button, .proj-item, .ach-card, .chip, .skill-cat, .journey-item, .journey-filter-btn').forEach(el => {
  el.addEventListener('mouseenter', () => { cur.classList.add('on');  cRing.classList.add('on'); });
  el.addEventListener('mouseleave', () => { cur.classList.remove('on'); cRing.classList.remove('on'); });
});

// Hide on keyboard navigation (Tab key)
document.addEventListener('keydown', e => {
  if (e.key === 'Tab') {
    cur.style.display   = 'none';
    cRing.style.display = 'none';
  }
});
document.addEventListener('mousemove', () => {
  cur.style.display   = 'block';
  cRing.style.display = 'block';
});


// ── Reading Progress Bar ─────────────────────────────────────
const progressBar = document.getElementById('pbar');

function updateProgress() {
  const scrolled = window.scrollY;
  const total    = document.body.scrollHeight - window.innerHeight;
  progressBar.style.width = ((scrolled / total) * 100) + '%';
}

window.addEventListener('scroll', updateProgress, { passive: true });


// ── Back to Top ──────────────────────────────────────────────
const btt = document.getElementById('btt');

window.addEventListener('scroll', () => {
  btt.classList.toggle('show', window.scrollY > 500);
}, { passive: true });

btt.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ── Navbar Scroll State ──────────────────────────────────────
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });


// ── Mobile Hamburger / Drawer ────────────────────────────────
const ham    = document.getElementById('ham');
const drawer = document.getElementById('drawer');

function closeDrawer() {
  ham.classList.remove('open');
  drawer.classList.remove('open');
  ham.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

ham.addEventListener('click', () => {
  const isOpen = drawer.classList.toggle('open');
  ham.classList.toggle('open');
  ham.setAttribute('aria-expanded', isOpen);
  // Prevent body scroll when drawer is open
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDrawer();
});

// Expose globally so onclick="closeDrawer()" in HTML works
window.closeD = closeDrawer;


// ── Active Nav Link on Scroll ────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

function updateActiveLink() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 200) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('act', link.getAttribute('href') === '#' + current);
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink(); // Run once on load
