import { useEffect, useRef } from 'react';

type P = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: number;
  a: number;
};

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function DigitalParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;

    const particles: P[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.floor(window.innerWidth);
      h = Math.floor(window.innerHeight);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles.length = 0;
      const count = Math.round(Math.min(220, Math.max(80, (w * h) / 12000)));
      for (let i = 0; i < count; i++) {
        const hue = Math.random() > 0.6 ? 160 : Math.random() > 0.4 ? 200 : 350;
        particles.push({
          x: rand(0, w),
          y: rand(0, h),
          vx: rand(-0.25, 0.25),
          vy: rand(-0.15, 0.15),
          r: rand(1, 2.2),
          hue,
          a: rand(0.15, 0.65),
        });
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      // subtle glow backdrop
      ctx.fillStyle = 'rgba(0, 0, 0, 0)';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${p.a})`;
        ctx.shadowBlur = 14;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 60%, ${Math.min(0.85, p.a + 0.2)})`;
        ctx.fill();
      }

      // connect close particles
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.18;
            ctx.strokeStyle = `rgba(0, 255, 153, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = window.requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('resize', resize);
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-10 opacity-60"
    />
  );
}

