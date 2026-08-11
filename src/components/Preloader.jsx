import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-obsidian select-none"
    >
      <div className="relative flex flex-col items-center">
        {/* GM Logo container with subtle gold light sweep */}
        <div className="relative mb-8 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-2xl bg-graphite border border-steelgray/40 shadow-2xl overflow-hidden">
          <img
            src="/gm_logo.png"
            alt="GM Developer Logo"
            className="w-20 h-20 md:w-28 md:h-28 object-contain"
          />
          {/* Animated shimmer sweep */}
          <motion.div
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-gold-champagne/20 to-transparent transform -skew-x-12"
          />
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-xl md:text-2xl font-bold tracking-widest text-ivory mb-2"
        >
          GM <span className="text-gold-antique">DEVELOPER</span>
        </motion.h2>

        <p className="text-xs uppercase tracking-widest text-silver mb-8 font-mono">
          Full-Stack & Intelligent Systems
        </p>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-graphite rounded-full overflow-hidden border border-steelgray/30 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-gold-bronze via-gold-antique to-gold-champagne"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-3 font-mono text-xs text-silver">
          {progress}% ARCHITECTURE LOADING
        </div>
      </div>
    </motion.div>
  );
}
