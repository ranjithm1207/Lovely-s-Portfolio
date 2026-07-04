import GlassCard from './GlassCard';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Agentic AI Secure Access Control System',
    desc: 'Agentic AI-driven authorization workflow with policy checks and audit-ready outputs.',
    stack: ['Python', 'AI Security', 'Secure Policies'],
    github: '#',
    live: '#',
    banner: 'from-cyberGreen/20 via-cyberBlue/10 to-transparent',
  },
  {
    title: 'Cybersecurity Threat Detection Dashboard',
    desc: 'Threat signals visualization with anomaly scoring, detection rules, and incident timelines.',
    stack: ['JavaScript', 'Data Viz', 'Monitoring'],
    github: '#',
    live: '#',
    banner: 'from-cyberBlue/20 via-cyberGreen/10 to-transparent',
  },
  {
    title: 'Smart Restaurant Finder with Secure Authentication',
    desc: 'Secure login, session handling, and protected endpoints with a modern user experience.',
    stack: ['SQL', 'Auth', 'Secure APIs'],
    github: '#',
    live: '#',
    banner: 'from-cyberRed/20 via-cyberBlue/10 to-transparent',
  },
  {
    title: 'AI-Powered Security Monitoring System',
    desc: 'Realtime monitoring with AI-assisted alerts and fast triage for suspected security events.',
    stack: ['Python', 'ML', 'SecOps'],
    github: '#',
    live: '#',
    banner: 'from-cyberGreen/20 via-cyberRed/10 to-transparent',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-12 scroll-mt-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="font-mono text-xs tracking-widest text-cyberGreen">PROJECTS</h2>
          <div className="mt-3 text-3xl font-semibold">Premium builds, cyber-first design</div>
        </div>
        <div className="hidden text-xs text-slate-400 md:block">Hover to engage • Glow to validate • Deploy to secure</div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>

      <div className="mt-6">
        <GlassCard className="p-4">
          <div className="font-mono text-xs text-slate-300">Note</div>
          <div className="mt-2 text-sm text-slate-300">
            GitHub and live demo buttons are wired as placeholders—update the links with your real repos when available.
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

