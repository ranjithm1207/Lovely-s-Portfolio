import { useEffect, useRef } from 'react';

const lines = [
  '$ boot-secure --mode=ethics',
  '[OK] parsing policies…',
  '[OK] validating signatures…',
  '[OK] ready for analysis.',
  '',
  '[RUN] starting SOC routines',
  '[RUN] probing network surface',
  '[RUN] evaluating OWASP attack paths',
  '[OK] no critical exposures found (sample)',
];

export default function TerminalAnimation() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    root.innerHTML = '';

    let lineIdx = 0;
    let charIdx = 0;

    const type = () => {
      const cur = lines[lineIdx] ?? '';
      const span = document.createElement('div');
      span.className = 'font-mono text-[12px] leading-6 text-cyberGreen/90';

      const start = window.setInterval(() => {
        const slice = cur.slice(0, charIdx);
        span.textContent = slice || '';

        charIdx++;
        if (charIdx > cur.length) {
          window.clearInterval(start);
          root.appendChild(span);
          lineIdx++;
          charIdx = 0;

          if (lineIdx >= lines.length) return;
          window.setTimeout(type, 110);
        }
      }, 18);
    };

    const first = window.setTimeout(type, 250);
    return () => window.clearTimeout(first);
  }, []);

  return (
    <div ref={ref} className="min-h-[180px]" aria-label="Hacker terminal" />
  );
}

