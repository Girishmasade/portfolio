import React from "react";
import { motion } from "framer-motion";

export default function ProfilePortrait({ src }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="profile-portrait absolute top-16 right-6 md:top-20 md:right-12 lg:top-24 lg:right-20 z-20 pointer-events-none"
    >
      <div className="relative w-[260px] max-w-[90vw] rounded-[36px] border border-gold-antique/20 bg-white/5 shadow-[0_40px_120px_-65px_rgba(226,189,122,0.4)] backdrop-blur-2xl overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(226,189,122,0.18),transparent_45%)] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 w-[70%] h-24 -translate-x-1/2 rounded-full bg-gold-champagne/10 blur-3xl" />
        <div className="relative overflow-hidden p-4">
          <div className="absolute inset-0 rounded-[30px] border border-white/10 pointer-events-none" />
          <img
            src={src}
            alt="Profile"
            className="relative z-10 w-full h-[360px] min-h-[360px] object-cover rounded-[30px] bg-[#0b0d11]"
          />
        </div>
      </div>
      <div className="mt-4 text-right">
        <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-gold-champagne">
          <span className="w-2 h-2 rounded-full bg-gold-champagne animate-pulse" />
          Portrait System
        </div>
      </div>
    </motion.div>
  );
}
