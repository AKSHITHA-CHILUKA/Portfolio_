/* ============================================================
   background.js — Three.js animated hero background
   Particles + wireframe geometry + camera mouse parallax
   ============================================================ */

(function initBackground() {
  if (typeof THREE === 'undefined') {
    console.warn('Three.js not loaded — skipping background');
    return;
  }

  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  // ── Renderer ──────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  // ── Scene & Camera ────────────────────────────────────────
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    200
  );
  camera.position.set(0, 0, 9);

  // ── Particles — gold, warm white, dim grey ────────────────
  const PARTICLE_COUNT = 1800;
  const pGeo  = new THREE.BufferGeometry();
  const pPos  = new Float32Array(PARTICLE_COUNT * 3);
  const pCol  = new Float32Array(PARTICLE_COUNT * 3);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    pPos[i * 3]     = (Math.random() - 0.5) * 28;
    pPos[i * 3 + 1] = (Math.random() - 0.5) * 20;
    pPos[i * 3 + 2] = (Math.random() - 0.5) * 14 - 2;

    const t = Math.random();
    if (t < 0.45) {
      // gold
      pCol[i * 3] = 0.83; pCol[i * 3 + 1] = 0.66; pCol[i * 3 + 2] = 0.33;
    } else if (t < 0.75) {
      // warm white
      pCol[i * 3] = 0.92; pCol[i * 3 + 1] = 0.90; pCol[i * 3 + 2] = 0.88;
    } else {
      // dim grey
      pCol[i * 3] = 0.35; pCol[i * 3 + 1] = 0.33; pCol[i * 3 + 2] = 0.30;
    }
  }

  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  pGeo.setAttribute('color',    new THREE.BufferAttribute(pCol, 3));

  const particles = new THREE.Points(
    pGeo,
    new THREE.PointsMaterial({ size: 0.028, vertexColors: true, transparent: true, opacity: 0.7 })
  );
  scene.add(particles);

  // ── Orbit rings — thin, gold-tinted ───────────────────────
  const ring1 = new THREE.Mesh(
    new THREE.TorusGeometry(3.8, 0.012, 8, 120),
    new THREE.MeshBasicMaterial({ color: 0xd4a853, transparent: true, opacity: 0.1 })
  );
  ring1.rotation.x = Math.PI / 2.4;
  scene.add(ring1);

  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(5.5, 0.008, 8, 140),
    new THREE.MeshBasicMaterial({ color: 0xe8c07a, transparent: true, opacity: 0.06 })
  );
  ring2.rotation.x = Math.PI / 3;
  ring2.rotation.z = Math.PI / 6;
  scene.add(ring2);

  // ── Floating wireframe icosahedra ─────────────────────────
  const icoData = [
    { x:  6,    y:  1,   z: -3, color: 0x8b7355, opacity: 0.07 },
    { x: -5.5,  y: -1,   z: -4, color: 0xd4a853, opacity: 0.06 },
    { x:  0,    y: -4,   z: -1, color: 0xa8a29e, opacity: 0.05 },
  ];

  const icos = icoData.map(d => {
    const mesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.8, 1),
      new THREE.MeshBasicMaterial({ color: d.color, wireframe: true, transparent: true, opacity: d.opacity })
    );
    mesh.position.set(d.x, d.y, d.z);
    scene.add(mesh);
    return mesh;
  });

  // ── Mouse parallax ────────────────────────────────────────
  let targetMX = 0, targetMY = 0;
  let cameraMX = 0, cameraMY = 0;

  document.addEventListener('mousemove', e => {
    targetMX =  (e.clientX / window.innerWidth  - 0.5) * 1.2;
    targetMY = -(e.clientY / window.innerHeight - 0.5) * 0.8;
  });

  // ── Animation Loop ────────────────────────────────────────
  function animate() {
    requestAnimationFrame(animate);

    particles.rotation.y += 0.0002;
    particles.rotation.x += 0.00008;

    ring1.rotation.z += 0.002;
    ring2.rotation.z -= 0.0015;

    icos.forEach((ico, i) => {
      ico.rotation.x += 0.003 + i * 0.001;
      ico.rotation.y += 0.002 + i * 0.0015;
    });

    // Smooth camera drift with mouse
    cameraMX += (targetMX - cameraMX) * 0.03;
    cameraMY += (targetMY - cameraMY) * 0.03;
    camera.position.x = cameraMX * 0.3;
    camera.position.y = cameraMY * 0.2;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  animate();

  // ── Resize Handler ────────────────────────────────────────
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

})();
