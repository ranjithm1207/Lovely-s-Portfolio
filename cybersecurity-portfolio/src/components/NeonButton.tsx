import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Variant = 'green' | 'blue' | 'red';

const variantStyles: Record<Variant, string> = {
  green:
    'border-cyberGreen/30 bg-cyberGreen/5 text-cyberGreen shadow-[0_0_18px_rgba(0,255,153,.25)] hover:bg-cyberGreen/10',
  blue:
    'border-cyberBlue/30 bg-cyberBlue/5 text-cyberBlue shadow-[0_0_18px_rgba(0,163,255,.22)] hover:bg-cyberBlue/10',
  red:
    'border-cyberRed/30 bg-cyberRed/5 text-cyberRed shadow-[0_0_18px_rgba(255,59,107,.20)] hover:bg-cyberRed/10',
};

export default function NeonButton({
  children,
  onClick,
  variant,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant: Variant;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-xs font-mono tracking-widest transition-all ${variantStyles[variant]} relative overflow-hidden`}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,255,153,.0), rgba(0,255,153,.18), rgba(0,163,255,.12), rgba(255,59,107,.0))',
        }}
      />
      <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-40" />
    </motion.button>
  );
}

