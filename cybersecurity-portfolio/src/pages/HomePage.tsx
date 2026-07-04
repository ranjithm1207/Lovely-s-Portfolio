import { useEffect } from 'react';
import BackgroundMatrixRain from '../components/BackgroundMatrixRain';
import DigitalParticles from '../components/DigitalParticles';
import HeroSection from '../components/HeroSection';
import AboutSkills from '../components/AboutSkills';
import ProjectsSection from '../components/ProjectsSection';
import CertificationsSection from '../components/CertificationsSection';
import ExperienceAchievements from '../components/ExperienceAchievements';
import ContactSection from '../components/ContactSection';
import CyberStats from '../components/CyberStats';
import CyberCursor from '../components/CyberCursor';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function HomePage() {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') (document.activeElement as HTMLElement | null)?.blur?.();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-100">
      <BackgroundMatrixRain />
      <DigitalParticles />
      <CyberCursor />

      <header className="fixed left-0 top-0 z-40 w-full">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl border border-cyberBlue/30 bg-cyberBlue/5 shadow-neon" />
            <div className="leading-tight">
              <div className="font-sans text-sm tracking-widest text-slate-200">RANJITH M</div>
              <div className="font-mono text-[11px] text-cyberGreen/90">ETHICAL // LEARNING // SECURE</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-xs tracking-widest text-slate-300 hover:text-cyberGreen transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex rounded-xl border border-cyberGreen/25 bg-cyberGreen/5 px-4 py-2 text-xs font-mono text-cyberGreen shadow-cyber hover:bg-cyberGreen/10 transition"
          >
            SIGNAL ME
          </a>
        </div>
      </header>

      <main className="relative">
        <HeroSection />
        <CyberStats />
        <AboutSkills />
        <ProjectsSection />
        <CertificationsSection />
        <ExperienceAchievements />
        <ContactSection />

        <footer className="mx-auto max-w-6xl px-4 py-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Ranjith M — Built as a cyber-ready portfolio.
        </footer>
      </main>
    </div>
  );
}

