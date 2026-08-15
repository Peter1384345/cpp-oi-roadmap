/* ============================================================
   动态粒子网络特效
   - 粒子漂移 + 邻近连线（科技感网状结构）
   - 鼠标交互：靠近时粒子被吸引并高亮连线
   - 性能自适应：根据屏幕尺寸与设备像素比调整密度
   ============================================================ */
(function () {
  "use strict";

  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext && canvas.getContext("2d");
  if (!ctx) return; // 环境不支持时静默跳过

  let width, height, dpr, particles = [], mouse = { x: null, y: null, active: false };
  let animationId = null;

  const CONFIG = {
    density: 15000,
    linkDistance: 130,
    mouseRadius: 170,
    baseSpeed: 0.35,
    hueA: 190,
    hueB: 265
  };

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initParticles();
  }

  function initParticles() {
    const count = Math.min(Math.floor((width * height) / CONFIG.density), 260);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(createParticle(true));
    }
  }

  function createParticle(randomPos) {
    const angle = Math.random() * Math.PI * 2;
    const speed = CONFIG.baseSpeed * (0.4 + Math.random() * 0.8);
    return {
      x: randomPos ? Math.random() * width : width / 2,
      y: randomPos ? Math.random() * height : height / 2,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      r: 1 + Math.random() * 1.6,
      hue: CONFIG.hueA + Math.random() * (CONFIG.hueB - CONFIG.hueA)
    };
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20;
      if (p.y > height + 20) p.y = -20;
    }

    if (mouse.active && mouse.x != null) {
      for (const p of particles) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < CONFIG.mouseRadius * CONFIG.mouseRadius && d2 > 0.01) {
          const d = Math.sqrt(d2);
          const force = (1 - d / CONFIG.mouseRadius) * 0.35;
          p.vx += (dx / d) * force;
          p.vy += (dy / d) * force;
        }
      }
      for (const p of particles) {
        p.vx *= 0.985;
        p.vy *= 0.985;
      }
    }

    const maxDist2 = CONFIG.linkDistance * CONFIG.linkDistance;
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 > maxDist2) continue;
        const d = Math.sqrt(d2);
        const alpha = (1 - d / CONFIG.linkDistance) * 0.5;
        ctx.strokeStyle = "hsla(" + (a.hue + b.hue) / 2 + ", 85%, 62%, " + alpha.toFixed(3) + ")";
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "hsla(" + p.hue + ", 90%, 70%, 0.85)";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 2.4, 0, Math.PI * 2);
      ctx.fillStyle = "hsla(" + p.hue + ", 90%, 70%, 0.12)";
      ctx.fill();
    }

    if (mouse.active && mouse.x != null) {
      const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, CONFIG.mouseRadius);
      g.addColorStop(0, "hsla(190, 90%, 70%, 0.06)");
      g.addColorStop(1, "hsla(190, 90%, 70%, 0)");
      ctx.fillStyle = g;
      ctx.fillRect(mouse.x - CONFIG.mouseRadius, mouse.y - CONFIG.mouseRadius, CONFIG.mouseRadius * 2, CONFIG.mouseRadius * 2);
    }

    animationId = requestAnimationFrame(animate);
  }

  function onMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  }
  function onLeave() {
    mouse.active = false;
    mouse.x = null;
    mouse.y = null;
  }
  function onTouch(e) {
    if (e.touches.length > 0) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
      mouse.active = true;
    }
  }
  function onTouchEnd() { onLeave(); }

  let resizeTimer = null;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 200);
  }

  function start() {
    resize();
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    animate();
  }

  function stop() {
    if (animationId) cancelAnimationFrame(animationId);
    window.removeEventListener("resize", onResize);
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mouseout", onLeave);
    window.removeEventListener("touchstart", onTouch);
    window.removeEventListener("touchmove", onTouch);
    window.removeEventListener("touchend", onTouchEnd);
  }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop(); else start();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
