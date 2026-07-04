import { motion } from 'framer-motion';

export default function TimelineItem({
  title,
  role,
  when,
  desc,
}: {
  title: string;
  role: string;
  when: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className="relative rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_70px_rgba(0,255,153,.05)] backdrop-blur"
    >
      <div className="absolute left-4 top-5 h-3 w-3 rounded-full bg-cyberGreen shadow-[0_0_18px_rgba(0,255,153,.55)]" />
      <div className="ml-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-mono text-xs tracking-widest text-cyberGreen">{when}</div>
            <div className="mt-1 text-lg font-semibold text-white">{title}</div>
          </div>
          <div className="font-mono text-xs text-slate-300">{role}</div>
        </div>
        <div className="mt-3 text-sm text-slate-300">{desc}</div>
      </div>
    </motion.div>
  );
}

