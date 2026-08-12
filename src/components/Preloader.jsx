import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast cinematic loading timer target: ~1.2s total
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 250);
          return 100;
        }
        return prev + 5;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian select-none overflow-hidden"
    >
      {/* Top Split Panel */}
      <motion.div
        exit={{ y: '-100%' }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 w-full h-1/2 bg-obsidian border-b border-steelgray/30 z-10"
      />
      {/* Bottom Split Panel */}
      <motion.div
        exit={{ y: '100%' }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-obsidian border-t border-steelgray/30 z-10"
      />

      <div className="relative z-20 flex flex-col items-center">
        {/* Favicon Logo container with gold shimmer sweep */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative mb-6 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-2xl bg-graphite border border-gold-antique/50 shadow-gold-glow overflow-hidden"
        >
          <img
            src="/favicon.png"
            alt="devCoder Logo"
            className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-xl"
          />
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-gold-champagne/30 to-transparent transform -skew-x-12"
          />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-xs text-gold-champagne font-bold uppercase tracking-widest mb-2"
        >
          WELCOME
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-xl md:text-2xl font-black tracking-wider text-ivory mb-6"
        >
          GIRISH MASADE <span className="text-metallic-gold">PORTFOLIO</span>
        </motion.h2>

        {/* Progress Bar */}
        <div className="w-56 md:w-64 h-1 bg-graphite rounded-full overflow-hidden border border-steelgray/40 relative">
          <motion.div
            className="h-full bg-gold-gradient shadow-gold-glow"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-3 flex items-center justify-between w-56 md:w-64 font-mono text-[11px] text-silver">
          <span>LOADING EXPERIENCE</span>
          <span className="text-gold-champagne font-bold">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}

