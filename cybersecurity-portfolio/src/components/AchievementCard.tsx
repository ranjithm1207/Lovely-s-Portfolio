import { motion } from 'framer-motion';

export default function AchievementCard({ label, idx }: { label: string; idx: number }) {
  const accent = idx % 3 === 0 ? 'cyberGreen' : idx % 3 === 1 ? 'cyberBlue' : 'cyberRed';

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className={`rounded-2xl border bg-[#050814]/40 p-4 shadow-neon ${
        accent === 'cyberGreen'
          ? 'border-cyberGreen/20'
          : accent === 'cyberBlue'
            ? 'border-cyberBlue/20'
            : 'border-cyberRed/20'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="font-mono text-[11px] text-slate-300">SIGNAL</div>
        <div
          className={`h-2 w-2 rounded-full ${
            accent === 'cyberGreen'
              ? 'bg-cyberGreen'
              : accent === 'cyberBlue'
                ? 'bg-cyberBlue'
                : 'bg-cyberRed'
          } shadow-[0_0_18px_rgba(0,255,153,.55)]`}
        />
      </div>
      <div className="mt-2 text-sm font-semibold text-white">{label}</div>
      <div className="mt-2 font-mono text-[11px] text-slate-400">GLASS DISCIPLINE VERIFIED</div>
    </motion.div>
  );
}

