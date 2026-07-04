import { motion } from 'framer-motion';

export default function SocialIcon({
  kind,
}: {
  kind: 'github' | 'linkedin' | 'mail';
}) {
  const cfg =
    kind === 'github'
      ? { bg: 'bg-cyberGreen/10', border: 'border-cyberGreen/25', color: 'text-cyberGreen' }
      : kind === 'linkedin'
        ? { bg: 'bg-cyberBlue/10', border: 'border-cyberBlue/25', color: 'text-cyberBlue' }
        : { bg: 'bg-cyberRed/10', border: 'border-cyberRed/25', color: 'text-cyberRed' };

  const label = kind === 'github' ? 'GitHub' : kind === 'linkedin' ? 'LinkedIn' : 'Email';

  return (
    <motion.a
      href="#"
      whileHover={{ y: -2 }}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${cfg.border} ${cfg.bg} ${cfg.color} shadow-neon`}
      aria-label={label}
    >
      <span className="font-mono text-xs">{kind === 'mail' ? '@' : kind[0].toUpperCase()}</span>
    </motion.a>
  );
}

