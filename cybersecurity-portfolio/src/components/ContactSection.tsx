import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import SocialIcon from './SocialIcon';

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12 scroll-mt-24">
      <GlassCard>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="font-mono text-xs tracking-widest text-cyberGreen">CONTACT</h2>
            <div className="mt-3 text-3xl font-semibold">Futuristic cyber panel</div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Reach out for collaborations, internships, and cybersecurity learning opportunities.
            </p>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-[#050814]/40 p-4">
                <div className="font-mono text-[11px] text-slate-400">LINKEDIN</div>
                <div className="mt-2 font-mono text-xs text-cyberGreen/90">linkedin.com/in/ranjith-m</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#050814]/40 p-4">
                <div className="font-mono text-[11px] text-slate-400">GITHUB</div>
                <div className="mt-2 font-mono text-xs text-cyberGreen/90">github.com/ranjith-m</div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-[#050814]/40 p-4">
                  <div className="font-mono text-[11px] text-slate-400">EMAIL</div>
                  <div className="mt-2 font-mono text-xs text-white">ranjithm@example.com</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#050814]/40 p-4">
                  <div className="font-mono text-[11px] text-slate-400">PHONE</div>
                  <div className="mt-2 font-mono text-xs text-white">+91 9XXXXXXXXX</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <SocialIcon kind="github" />
                <SocialIcon kind="linkedin" />
                <SocialIcon kind="mail" />
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur shadow-[0_0_90px_rgba(0,255,153,.06)]">
                <div className="font-mono text-xs tracking-widest text-slate-300">CONTACT FORM</div>
                <form
                  className="mt-4 grid grid-cols-1 gap-3"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <label className="block">
                    <div className="font-mono text-[11px] text-slate-400">NAME</div>
                    <input
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050814]/40 px-4 py-3 text-sm outline-none focus:border-cyberGreen/40"
                      placeholder="Your name"
                    />
                  </label>

                  <label className="block">
                    <div className="font-mono text-[11px] text-slate-400">EMAIL</div>
                    <input
                      type="email"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050814]/40 px-4 py-3 text-sm outline-none focus:border-cyberGreen/40"
                      placeholder="you@example.com"
                    />
                  </label>

                  <label className="block">
                    <div className="font-mono text-[11px] text-slate-400">MESSAGE</div>
                    <textarea
                      className="mt-2 min-h-32 w-full resize-none rounded-2xl border border-white/10 bg-[#050814]/40 px-4 py-3 text-sm outline-none focus:border-cyberGreen/40"
                      placeholder="Type your message…"
                    />
                  </label>

                  <button
                    type="submit"
                    className="mt-1 inline-flex items-center justify-center rounded-xl border border-cyberGreen/30 bg-cyberGreen/5 px-5 py-3 font-mono text-xs tracking-widest text-cyberGreen shadow-[0_0_18px_rgba(0,255,153,.25)] hover:bg-cyberGreen/10 transition"
                  >
                    SEND SIGNAL
                  </button>

                  <div className="pt-2 text-xs text-slate-400">
                    Form is UI-only for now—connect it to your backend or email service.
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </GlassCard>

      <div className="mt-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Ranjith M — Cyber-ready.
      </div>
    </section>
  );
}

