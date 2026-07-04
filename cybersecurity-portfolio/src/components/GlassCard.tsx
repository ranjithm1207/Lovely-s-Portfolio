import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: '0 0 60px rgba(0,255,153,.10)' }}
      transition={{ duration: 0.25 }}
      className={`rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_80px_rgba(0,255,153,.06)] backdrop-blur ${className}`}
    >
      {children}
    </motion.div>
  );
}

