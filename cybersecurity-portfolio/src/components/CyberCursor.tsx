import { useEffect, useRef } from 'react';

export default function CyberCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const c = cursorRef.current;
    const g = glowRef.current;
    if (!c || !g) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const prefersCoarse = window.matchMedia('(pointer: coarse)').matches;
    if (prefersCoarse) {
      c.style.display = 'none';
      g.style.display = 'none';
      return;
    }

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    window.addEventListener('mousemove', onMove);

    let raf = 0;
    const tick = () => {
      x += (tx - x) * 0.14;
      y += (ty - y) * 0.14;
      c.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      g.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyberGreen/10 blur-2xl"
      />
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[61] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyberGreen/70 bg-cyberGreen/10 shadow-[0_0_18px_rgba(0,255,153,.55)]"
      />
    </>
  );
}

