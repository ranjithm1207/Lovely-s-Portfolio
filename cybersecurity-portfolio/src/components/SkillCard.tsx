import { motion } from 'framer-motion';

export default function SkillCard({
  label,
  color,
}: {
  label: string;
  color: 'green' | 'blue' | 'red';
}) {
  const cls =
    color === 'green'
      ? 'border-cyberGreen/25 bg-cyberGreen/5 text-cyberGreen shadow-[0_0_18px_rgba(0,255,153,.20)]'
      : color === 'blue'
        ? 'border-cyberBlue/25 bg-cyberBlue/5 text-cyberBlue shadow-[0_0_18px_rgba(0,163,255,.18)]'
        : 'border-cyberRed/25 bg-cyberRed/5 text-cyberRed shadow-[0_0_18px_rgba(255,59,107,.16)]';

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25 }}
      className={`rounded-2xl border px-4 py-3 text-xs font-mono tracking-widest ${cls}`}
    >
      {label}
    </motion.div>
  );
}

