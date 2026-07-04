import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setShow(false), 1200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050814]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-2xl border border-cyberGreen/30 bg-cyberGreen/5 shadow-cyber animate-pulse" />
            <div className="mt-4 font-mono text-cyberGreen animate-pulse">
              INITIALIZING // SECURE MODE
            </div>
            <div className="mt-2 text-xs text-slate-300">
              boot sequence • decrypting • calibrating radar
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}


