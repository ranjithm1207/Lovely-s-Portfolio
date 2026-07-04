import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroTyping() {
  const phrases = useMemo(
    () => ['Securing Digital Systems Against Modern Threats'],
    []
  );

  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    let t: number | undefined;
    const phrase = phrases[idx];
    let i = 0;

    const tick = () => {
      i++;
      setText(phrase.slice(0, i));
      if (i < phrase.length) {
        t = window.setTimeout(tick, 26);
      } else {
        // brief pause, then restart (single phrase for spec)
        t = window.setTimeout(() => {
          setText('');
          setIdx(0);
        }, 900);
      }
    };

    t = window.setTimeout(tick, 450);
    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [idx, phrases]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-1 flex items-center gap-2"
    >
      <div className="font-mono text-sm tracking-wide text-slate-300">
        <span className="text-cyberGreen">{'>'}</span> {text}
      </div>
      <span className="h-4 w-px bg-cyberGreen shadow-[0_0_18px_rgba(0,255,153,.6)] animate-pulse" />
    </motion.div>
  );
}

