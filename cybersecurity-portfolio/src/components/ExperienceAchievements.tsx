import GlassCard from './GlassCard';
import TimelineItem from './TimelineItem';
import AchievementCard from './AchievementCard';

const timeline = [
  { title: '5-Month Internship Experience', role: 'Cybersecurity-oriented IT intern', when: '2025', desc: 'Hands-on learning with security practices and deployment workflows.' },
  { title: 'Academic Projects', role: 'Security-focused coursework', when: 'B.Tech', desc: 'Built systems emphasizing authentication, monitoring, and secure design.' },
  { title: 'Web Development Training', role: 'Full-stack foundations', when: 'Ongoing', desc: 'Developing modern UI/UX while understanding secure API patterns.' },
];

const achievements = ['Quick Learner', 'Problem Solver', 'Team Collaboration', 'Communication Skills'];

export default function ExperienceAchievements() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-12 scroll-mt-24">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-7">
          <GlassCard>
            <h2 className="font-mono text-xs tracking-widest text-cyberGreen">EXPERIENCE</h2>
            <div className="mt-3 text-3xl font-semibold">Cyber-style timeline</div>

            <div className="mt-6 space-y-4">
              {timeline.map((t) => (
                <TimelineItem key={t.title} {...t} />
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="md:col-span-5">
          <GlassCard>
            <h2 className="font-mono text-xs tracking-widest text-cyberGreen">ACHIEVEMENTS</h2>
            <div className="mt-3 text-3xl font-semibold">Glowing performance signals</div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {achievements.map((a, i) => (
                <AchievementCard key={a} label={a} idx={i} />
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

