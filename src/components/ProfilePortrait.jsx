import React from "react";
import { motion } from "framer-motion";

export default function ProfilePortrait({ src }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="profile-portrait absolute top-16 right-6 md:top-20 md:right-12 lg:top-24 lg:right-20 z-20 pointer-events-auto"
    >
      <div className="relative w-[260px] max-w-[90vw] rounded-[36px] border border-gold-antique/30 bg-graphite/80 shadow-[0_30px_100px_-40px_rgba(226,189,122,0.4)] backdrop-blur-2xl overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(226,189,122,0.18),transparent_45%)] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 w-[70%] h-24 -translate-x-1/2 rounded-full bg-gold-champagne/10 blur-3xl" />
        <div className="relative overflow-hidden p-4">
          <div className="absolute inset-0 rounded-[30px] border border-white/10 pointer-events-none" />
          <img
            src={src}
            alt="Girish Masade - Developer"
            className="relative z-10 w-full h-[360px] min-h-[360px] object-cover rounded-[30px] bg-[#0b0d11]"
          />
        </div>
      </div>

      {/* Visually clear AVAILABLE FOR PROJECTS status badge directly below the picture */}
      <div className="mt-4 flex justify-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-graphite/95 border-2 border-gold-antique shadow-gold-glow backdrop-blur-xl">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </span>
          <span className="font-mono text-xs font-extrabold text-gold-champagne tracking-wider uppercase">
            AVAILABLE FOR PROJECTS
          </span>
        </div>
      </div>
    </motion.div>
  );
}

