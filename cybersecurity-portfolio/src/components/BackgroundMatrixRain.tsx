import { useEffect, useRef } from 'react';

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function BackgroundMatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let cols: number;
    let drops: number[] = [];
    let fontSize = 14;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      fontSize = window.innerWidth < 640 ? 12 : 14;
      cols = Math.floor(window.innerWidth / fontSize);
      drops = new Array(cols).fill(0).map(() => Math.floor(rand(-20, 0)));
    };

    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 8, 20, 0.08)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < cols; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const glyph = chars[Math.floor(Math.random() * chars.length)];

        // Neon mix (green dominance)
        const greenish = Math.random() > 0.65;
        ctx.fillStyle = greenish
          ? `rgba(0, 255, 153, ${rand(0.15, 0.55).toFixed(2)})`
          : `rgba(0, 163, 255, ${rand(0.08, 0.35).toFixed(2)})`;

        ctx.font = `${fontSize}px Roboto Mono, monospace`;
        ctx.fillText(glyph, x, y);

        if (y > window.innerHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      raf = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    raf = window.requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-10 opacity-70"
    />
  );
}

