import { motion } from 'framer-motion';
import NeonButton from './NeonButton';
import HeroTyping from './HeroTyping';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24"
      aria-label="Hero"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 pb-10 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-2 shadow-neon">
              <span className="h-2 w-2 rounded-full bg-cyberGreen shadow-[0_0_18px_rgba(0,255,153,.6)]" />
              <span className="font-mono text-xs tracking-widest text-slate-200">
                ACTIVE // SECURE INTERFACE
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              <span className="text-white">Ranjith M</span>
              <span className="block bg-gradient-to-r from-cyberGreen via-cyberBlue to-cyberRed bg-clip-text text-transparent">
                Cybersecurity Enthusiast
              </span>
            </h1>

            <p className="font-mono text-sm tracking-widest text-slate-300">
              Cybersecurity Enthusiast | Ethical Hacking Learner | IT Student
            </p>

            <div className="pt-2">
              <HeroTyping />
            </div>

            <div className="flex flex-col gap-3 pt-5 sm:flex-row sm:items-center">
              <NeonButton
                variant="green"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Projects
              </NeonButton>

              <NeonButton
                variant="blue"
                onClick={() => {
                  const el = document.createElement('a');
                  el.href = '/resume.pdf';
                  el.download = 'Ranjith_M_Resume.pdf';
                  document.body.appendChild(el);
                  el.click();
                  el.remove();
                }}
              >
                Download Resume
              </NeonButton>

              <NeonButton
                variant="red"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </NeonButton>
            </div>

            <div className="pt-6 text-xs text-slate-400">
              Scroll for skills, projects, certifications, experience, and cyber stats.
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_80px_rgba(0,255,153,.07)] backdrop-blur"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cyberGreen/10 via-cyberBlue/5 to-transparent" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="font-mono text-xs tracking-widest text-slate-300">
                  CYBER DASHBOARD
                </div>
                <div className="font-mono text-xs text-cyberGreen">
                  ONLINE
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-[#050814]/40 p-3">
                  <div className="text-xs text-slate-400">THREATS MONITORED</div>
                  <div className="mt-1 text-2xl font-semibold text-white shadow-neon">32</div>
                </div>
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

              <div className="mt-4 rounded-2xl border border-white/10 bg-[#050814]/40 p-3">
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

              <div className="mt-4 rounded-2xl border border-white/10 bg-[#050814]/40 p-3">
                <div className="font-mono text-xs text-slate-300">TERMINAL // LIVE OUTPUT</div>
                <div className="mt-2">
                  <div className="font-mono text-[12px] leading-6 text-cyberGreen">
                    <span className="opacity-80">$</span> boot-secure --mode=ethics
                    <br />
                    [OK] parsing policies…
                    <br />
                    [OK] validating signatures…
                    <br />
                    [OK] ready for analysis.
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyberGreen/10 blur-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

