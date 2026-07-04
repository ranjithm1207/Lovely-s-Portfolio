import GlassCard from './GlassCard';
import SkillCard from './SkillCard';

const skillsCyber = [
  'Ethical Hacking',
  'Network Security',
  'Vulnerability Assessment',
  'Secure Authentication',
  'OWASP Basics',
  'SOC Fundamentals',
];

const skillsProgramming = ['Python', 'JavaScript', 'SQL', 'Java'];

const tools = ['Wireshark', 'Burp Suite', 'Nmap', 'GitHub', 'VS Code', 'MongoDB'];

export default function AboutSkills() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <GlassCard>
            <h2 className="font-mono text-xs tracking-widest text-cyberGreen">ABOUT</h2>
            <div className="mt-3 text-3xl font-semibold">Problem-solving mindset with cyber focus</div>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              I’m <span className="text-white font-semibold">Ranjith M</span>, an aspiring Cybersecurity Engineer and B.Tech
              Information Technology student (GPA: <span className="text-cyberGreen">7.83</span>). I’m passionate about
              cybersecurity and ethical hacking—building the skills to understand modern threats and develop secure systems.
              <br />
              <br />
              My interests span <span className="text-white">network security</span>, <span className="text-white">penetration testing</span>,
              <span className="text-white"> AI security</span>, and practical secure system design. I’m driven by structured learning,
              hands-on labs, and strong analytical/problem-solving habits.
              <br />
              <br />
              My goal is to work in a top product-based cybersecurity company where I can contribute to real-world security impact.
            </p>
          </GlassCard>
        </div>

        <div className="md:col-span-7">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_70px_rgba(0,255,153,.06)] backdrop-blur">
              <h3 className="font-mono text-xs tracking-widest text-slate-300">SKILLS // CYBERSECURITY</h3>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {skillsCyber.map((s) => (
                  <SkillCard key={s} label={s} color="green" />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_70px_rgba(0,255,153,.06)] backdrop-blur">
              <h3 className="font-mono text-xs tracking-widest text-slate-300">PROGRAMMING</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {skillsProgramming.map((s) => (
                  <SkillCard key={s} label={s} color="blue" />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_70px_rgba(0,255,153,.06)] backdrop-blur">
              <h3 className="font-mono text-xs tracking-widest text-slate-300">TOOLS</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {tools.map((s) => (
                  <SkillCard key={s} label={s} color="red" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

