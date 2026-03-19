/* ============================================================
   hero.js — Hero entrance animations + avatar mouse parallax
   ============================================================ */

// ── Hero Entrance Animations ─────────────────────────────────
// Staggered fade-in for hero text elements on page load
window.addEventListener('load', () => {
  const elements = [
    { id: 'hl',   delay: 300  },   // left name block
    { id: 'hr',   delay: 550  },   // right role block
    { id: 'hs',   delay: 800  },   // social icons
    { id: 'hres', delay: 900  },   // resume link
  ];

  elements.forEach(({ id, delay }) => {
    const el = document.getElementById(id);
    if (!el) return;
    setTimeout(() => {
      el.style.transition = 'opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.opacity    = '1';
    }, delay);
  });
});


// ── Avatar Mouse Parallax ─────────────────────────────────────
// Gives the avatar a subtle 3D depth effect as cursor moves
(function initAvatarParallax() {
  const avatar = document.getElementById('hero-avatar');
  if (!avatar) return;

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  const STRENGTH_X = 14; // px horizontal movement
  const STRENGTH_Y = 8;  // px vertical movement
  const LERP = 0.055;    // smoothing factor (lower = smoother)

  document.addEventListener('mousemove', e => {
    targetX = (e.clientX / window.innerWidth  - 0.5) * STRENGTH_X;
    targetY = (e.clientY / window.innerHeight - 0.5) * STRENGTH_Y;
  });

  function animateParallax() {
    currentX += (targetX - currentX) * LERP;
    currentY += (targetY - currentY) * LERP;
    avatar.style.transform =
      `translateX(calc(-50% + ${currentX}px)) translateY(${currentY}px)`;
    requestAnimationFrame(animateParallax);
  }

  animateParallax();
})();
