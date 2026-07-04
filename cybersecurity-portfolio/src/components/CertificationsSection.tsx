import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const certs = [
  'Appium Selenium Mobile Automation Testing',
  'Cybersecurity Fundamentals',
  'Web Development Internship',
  'Ethical Hacking Basics',
];

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl px-4 py-12 scroll-mt-24"
    >
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="font-mono text-xs tracking-widest text-cyberGreen">CERTIFICATIONS</h2>
          <div className="mt-3 text-3xl font-semibold">Validated learning pathways</div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        {certs.map((c, i) => (
          <motion.div
            key={c}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_80px_rgba(0,255,153,.06)] backdrop-blur"
          >
            <GlassCard className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-xs tracking-widest text-slate-300">CERTIFICATE</div>
                  <div className="mt-2 text-sm font-semibold text-white">{c}</div>
                </div>
                <div className="h-10 w-10 rounded-2xl border border-white/10 bg-[#050814]/45 shadow-neon" />
              </div>
              <div className="mt-4 font-mono text-[11px] text-cyberGreen/90">NEON VERIFICATION PASS</div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

