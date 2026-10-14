(() => {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const avatar = document.querySelector('.avatar-stack');
  avatar.addEventListener('click', () => {
    const revealed = avatar.classList.toggle('is-revealed');
    avatar.setAttribute('aria-pressed', String(revealed));
  });
  avatar.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      avatar.classList.remove('is-revealed');
      avatar.setAttribute('aria-pressed', 'false');
      avatar.blur();
    }
  });

  // All fireworks are local; the canvas never intercepts page interaction.
  const trigger = document.getElementById('fireworks-trigger');
  trigger.hidden = false;
  let stopFireworks = () => {};
  trigger.addEventListener('click', () => {
    if (trigger.disabled) return;
    trigger.disabled = true;
    const canvas = document.createElement('canvas');
    canvas.id = 'fireworks-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      canvas.remove();
      trigger.disabled = false;
      return;
    }
    const width = innerWidth;
    const height = innerHeight;
    const ratio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.scale(ratio, ratio);
    const origin = trigger.getBoundingClientRect();
    const colors = ['#b8924c', '#557faa', '#bc7086'];
    let frame;
    let started;
    let previous;
    let stopped = false;
    const cleanup = () => {
      if (stopped) return;
      stopped = true;
      cancelAnimationFrame(frame);
      canvas.remove();
      trigger.disabled = false;
      window.removeEventListener('resize', cleanup);
      stopFireworks = () => {};
    };
    stopFireworks = cleanup;
    window.addEventListener('resize', cleanup, { once: true });

    if (reducedMotion.matches) {
      // A stationary constellation replaces moving particles for this preference.
      for (let i = 0; i < 3; i++) {
        const x = width * (.28 + i * .22);
        const y = height * (.25 + (i % 2) * .12);
        ctx.strokeStyle = colors[i];
        ctx.beginPath();
        for (let ray = 0; ray < 8; ray++) {
          const angle = ray * Math.PI / 4;
          ctx.moveTo(x + Math.cos(angle) * 6, y + Math.sin(angle) * 6);
          ctx.lineTo(x + Math.cos(angle) * 18, y + Math.sin(angle) * 18);
        }
        ctx.stroke();
      }
      const timeout = setTimeout(cleanup, 1400);
      stopFireworks = () => { clearTimeout(timeout); cleanup(); };
      return;
    }

    const rockets = colors.map((color, index) => ({
      delay: index * .33, color, exploded: false,
      startX: origin.left + origin.width / 2,
      startY: Math.min(origin.top + origin.height / 2, height - 10),
      endX: width * (.26 + index * .23) + (Math.random() - .5) * width * .08,
      endY: height * (.19 + Math.random() * .18),
    }));
    const particles = [];
    const paint = (time) => {
      if (stopped) return;
      started ??= time;
      const elapsed = (time - started) / 1000;
      const dt = Math.min((time - (previous ?? time)) / 1000, .04);
      previous = time;
      ctx.clearRect(0, 0, width, height);
      for (const rocket of rockets) {
        const progress = (elapsed - rocket.delay) / .78;
        if (progress < 0) continue;
        if (progress < 1) {
          const eased = 1 - (1 - progress) ** 1.6;
          const trail = 1 - (1 - Math.max(0, progress - .065)) ** 1.6;
          ctx.strokeStyle = rocket.color;
          ctx.lineWidth = 1.7;
          ctx.beginPath();
          ctx.moveTo(rocket.startX + (rocket.endX - rocket.startX) * trail, rocket.startY + (rocket.endY - rocket.startY) * trail);
          ctx.lineTo(rocket.startX + (rocket.endX - rocket.startX) * eased, rocket.startY + (rocket.endY - rocket.startY) * eased);
          ctx.stroke();
        } else if (!rocket.exploded) {
          rocket.exploded = true;
          for (let i = 0; i < 95; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = (35 + Math.random() * 95) * Math.min(width / 650, 1);
            particles.push({ x: rocket.endX, y: rocket.endY, vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed, age: 0, life: 1.25 + Math.random() * .8, color: rocket.color });
          }
        }
      }
      for (const particle of particles) {
        particle.age += dt;
        if (particle.age > particle.life) continue;
        const x = particle.x;
        const y = particle.y;
        particle.vx *= Math.exp(-.75 * dt);
        particle.vy += 34 * dt;
        particle.x += particle.vx * dt;
        particle.y += particle.vy * dt;
        ctx.globalAlpha = (1 - particle.age / particle.life) ** 1.3;
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(particle.x + particle.vx * .025, particle.y + particle.vy * .025);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      if (elapsed > 3.7) cleanup();
      else frame = requestAnimationFrame(paint);
    };
    frame = requestAnimationFrame(paint);
  });

  const globeButton = document.getElementById('globe-button');
  const caption = document.getElementById('globe-caption');
  const widget = document.getElementById('visitor-widget');
  const canvas = document.getElementById('globe');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // This local globe marks Shanghai only. It does not invent visitor data.
  const radius = 73;
  const center = 90;
  let longitude = 110 * Math.PI / 180;
  const tilt = 18 * Math.PI / 180;
  const points = (window.GLOBE_LAND || []).map(([lat, lon]) => [lat * Math.PI / 180, lon * Math.PI / 180]);
  let frame = 0;
  let lastTime = 0;
  let visible = false;
  let dragging = null;
  let dragged = false;
  let greetingTimeout;

  function project(latitude, lon) {
    const relative = lon - longitude;
    const x = Math.cos(latitude) * Math.sin(relative);
    const y = Math.sin(latitude);
    const z = Math.cos(latitude) * Math.cos(relative);
    return { x: center + x * radius, y: center - (y * Math.cos(tilt) - z * Math.sin(tilt)) * radius,
      depth: y * Math.sin(tilt) + z * Math.cos(tilt) };
  }

  function draw() {
    const ratio = Math.min(devicePixelRatio || 1, 2);
    if (canvas.width !== Math.round(180 * ratio)) {
      canvas.width = canvas.height = Math.round(180 * ratio);
    }
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, 180, 180);
    const ocean = ctx.createRadialGradient(62, 52, 6, center, center, radius);
    ocean.addColorStop(0, '#fafcfd');
    ocean.addColorStop(.75, '#f0f4f7');
    ocean.addColorStop(1, '#e3ebf1');
    ctx.fillStyle = ocean;
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#d6e0e7';
    ctx.lineWidth = .65;
    ctx.stroke();
    // Latitude and longitude arcs, clipped naturally at the visible hemisphere.
    ctx.strokeStyle = '#dce5eb';
    for (let line = 0; line < 9; line++) {
      ctx.beginPath();
      let penDown = false;
      for (let step = 0; step <= 120; step++) {
        const parallel = line < 3;
        const lat = parallel ? (line - 1) * Math.PI / 6 : -Math.PI / 2 + step * Math.PI / 120;
        const lon = parallel ? -Math.PI + step * Math.PI / 60 : (line - 3) * Math.PI / 3;
        const p = project(lat, lon);
        if (p.depth > 0) {
          if (penDown) ctx.lineTo(p.x, p.y);
          else ctx.moveTo(p.x, p.y);
          penDown = true;
        } else penDown = false;
      }
      ctx.stroke();
    }
    for (const [lat, lon] of points) {
      const p = project(lat, lon);
      if (p.depth <= 0) continue;
      ctx.globalAlpha = .45 + p.depth * .5;
      ctx.fillStyle = '#58748a';
      ctx.beginPath();
      ctx.arc(p.x, p.y, .65 + p.depth * .35, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    const shanghai = project(31.2304 * Math.PI / 180, 121.4737 * Math.PI / 180);
    if (shanghai.depth > 0) {
      ctx.fillStyle = '#b78b48';
      ctx.beginPath(); ctx.arc(shanghai.x, shanghai.y, 2.5, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#b78b4880';
      ctx.beginPath(); ctx.arc(shanghai.x, shanghai.y, 5, 0, Math.PI * 2); ctx.stroke();
    }
  }

  function animate(time) {
    frame = 0;
    if (!visible || document.hidden || reducedMotion.matches) return;
    if (time - lastTime >= 32) {
      if (!dragging && lastTime) longitude += Math.min(time - lastTime, 80) * .000065;
      draw();
      lastTime = time;
    }
    frame = requestAnimationFrame(animate);
  }
  function syncAnimation() {
    cancelAnimationFrame(frame);
    frame = 0;
    lastTime = 0;
    draw();
    if (visible && !document.hidden && !reducedMotion.matches) frame = requestAnimationFrame(animate);
  }

  // A provider's real widget takes the local decorative globe's place.
  function syncWidget() {
    const connected = Boolean(widget.querySelector('.mmvst_outer')); // Wait for rendered markup, not just its script.
    globeButton.hidden = connected;
    caption.hidden = connected;
    if (connected) visible = false;
    else visible = globeButton.getBoundingClientRect().top < innerHeight && globeButton.getBoundingClientRect().bottom > 0;
    syncAnimation();
  }
  new MutationObserver(syncWidget).observe(widget, { childList: true, subtree: true });
  syncWidget();
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting && !globeButton.hidden;
    syncAnimation();
  }).observe(globeButton);

  globeButton.addEventListener('pointerdown', (event) => {
    if (!event.isPrimary || event.button !== 0) return;
    dragging = { id: event.pointerId, x: event.clientX };
    dragged = false;
    globeButton.classList.add('is-dragging');
    globeButton.setPointerCapture(event.pointerId);
  });
  globeButton.addEventListener('pointermove', (event) => {
    if (!dragging || dragging.id !== event.pointerId) return;
    const dx = event.clientX - dragging.x;
    if (!dragged && Math.abs(dx) < 5) return;
    dragged = true;
    longitude -= dx * .012;
    dragging.x = event.clientX;
    draw();
  });
  function endDrag() { dragging = null; globeButton.classList.remove('is-dragging'); }
  globeButton.addEventListener('pointerup', endDrag);
  globeButton.addEventListener('pointercancel', endDrag);
  globeButton.addEventListener('lostpointercapture', endDrag);
  globeButton.addEventListener('click', (event) => {
    if (dragged && event.detail !== 0) { dragged = false; return; }
    longitude = 110 * Math.PI / 180;
    draw();
    clearTimeout(greetingTimeout);
    caption.textContent = 'Hello from Shanghai. 你好，远方的朋友。';
    greetingTimeout = setTimeout(() => { caption.textContent = 'Shanghai · Hello from Shanghai.'; }, 4000);
  });
  reducedMotion.addEventListener('change', () => { stopFireworks(); syncAnimation(); });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { stopFireworks(); endDrag(); }
    syncAnimation();
  });
})();
