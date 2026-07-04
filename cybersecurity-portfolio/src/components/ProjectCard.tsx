import { motion } from 'framer-motion';
import NeonButton from './NeonButton';

export default function ProjectCard({
  title,
  desc,
  stack,
  github,
  live,
  banner,
}: {
  title: string;
  desc: string;
  stack: string[];
  github: string;
  live: string;
  banner: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_80px_rgba(0,255,153,.06)] backdrop-blur"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-b ${banner}`}
        style={{ opacity: 0.9 }}
      />
      <div className="relative">
        <div className="h-28 rounded-2xl border border-white/10 bg-[#050814]/45 p-4 shadow-neon">
          <div className="font-mono text-xs tracking-widest text-slate-300">CYBER BANNER</div>
          <div className="mt-2 text-sm font-semibold text-white">{title}</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {stack.slice(0, 3).map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-[#050814]/40 px-2 py-1 text-[11px] text-cyberGreen/90">
                {t}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-300">{desc}</p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href={github} className="flex-1">
            <NeonButton variant="green">GitHub</NeonButton>
          </a>
          <a href={live} className="flex-1">
            <NeonButton variant="blue">Live Demo</NeonButton>
          </a>
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
          <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-cyberGreen/15 blur-2xl" />
          <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-cyberBlue/15 blur-2xl" />
        </div>
      </div>
    </motion.div>
  );
}

