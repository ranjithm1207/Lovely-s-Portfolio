import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

function useCountUp(target: number) {
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { damping: 120, stiffness: 90 });

  useEffect(() => {
    mv.set(target);
  }, [mv, target]);

  return spring;
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#050814]/40 p-3">
      <div className="text-xs text-slate-400">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-white shadow-neon">{value}</div>
    </div>
  );
}

export default function CyberStats() {
  // Spec: premium dashboard-like stats UI (values approximated)
  const threats = useCountUp(32);
  const checks = useCountUp(118);

  return (
    <section className="mx-auto max-w-6xl px-4 pt-10">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-[0_0_90px_rgba(0,255,153,.08)] backdrop-blur"
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-mono text-xs tracking-widest text-slate-300">LIVE CYBER DASHBOARD</div>
            <div className="mt-1 font-mono text-[11px] text-cyberGreen/90">Monitoring threats & integrity in real time</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyberGreen shadow-[0_0_18px_rgba(0,255,153,.6)]" />
            <div className="font-mono text-xs text-cyberGreen">CONNECTED</div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          <motion.div className="rounded-2xl border border-white/10 bg-[#050814]/40 p-3">
            <div className="text-xs text-slate-400">THREATS MONITORED</div>
            <motion.div className="mt-1 text-2xl font-semibold text-white shadow-neon">
              <motion.span>
                {''}
                {/* Keep static render-friendly; Framer count could be added with transform */}
              </motion.span>
              {/**/}
              32
            </motion.div>
          </motion.div>

          <div className="rounded-2xl border border-white/10 bg-[#050814]/40 p-3">
            <div className="text-xs text-slate-400">SECURE CHECKS</div>
            <div className="mt-1 text-2xl font-semibold text-white shadow-neon">118</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#050814]/40 p-3">
            <div className="text-xs text-slate-400">UPTIME</div>
            <div className="mt-1 text-2xl font-semibold text-white shadow-neon">99.9%</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#050814]/40 p-3">
            <div className="text-xs text-slate-400">INCIDENTS</div>
            <div className="mt-1 text-2xl font-semibold text-white shadow-neon">0</div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#050814]/40 p-3">
            <div className="flex items-center justify-between">
              <div className="font-mono text-xs text-slate-300">SYSTEM INTEGRITY</div>
              <div className="flex items-center gap-2 font-mono text-xs text-cyberGreen">
                <span className="h-2 w-2 rounded-full bg-cyberGreen shadow-[0_0_18px_rgba(0,255,153,.6)]" />
                VERIFIED
              </div>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[72%] bg-gradient-to-r from-cyberGreen to-cyberBlue shadow-neon" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#050814]/40 p-3">
            <div className="font-mono text-xs text-slate-300">TERMINAL // LIVE OUTPUT</div>
            <div className="mt-2 font-mono text-[12px] leading-6 text-cyberGreen">
              <span className="opacity-80">$</span> scan -r --quick
              <br />
              [OK] signature graph loaded
              <br />
              [OK] analyzing services
              <br />
              [OK] no critical exposures found
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

