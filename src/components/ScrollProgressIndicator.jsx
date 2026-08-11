import React from "react";
import { motion } from "framer-motion";

export default function ScrollProgressIndicator({
  sections,
  activeSection,
  scrollProgress = 0,
}) {
  const activeIndex = sections.findIndex((item) => item.id === activeSection);
  const filledCount = Math.min(
    sections.length,
    Math.max(0, Math.floor((scrollProgress / 100) * sections.length)),
  );

  return (
    <div className="scroll-progress-indicator hidden lg:flex flex-col items-center gap-4 fixed right-6 top-[34%] z-40 text-[10px] font-mono uppercase tracking-[0.28em] text-silver">
      <div className="relative flex items-center justify-center w-1 h-full">
        <div className="absolute inset-0 w-1 rounded-full bg-white/10" />
        <div
          className="absolute bottom-0 w-1 rounded-full bg-gold-champagne/40"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {sections.map((item, index) => {
        const isCompleted = index < filledCount || index === activeIndex;
        return (
          <div key={item.id} className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full transition-all ${isCompleted ? "bg-gold-champagne" : "bg-white/10"}`}
            />
            <span
              className={`${isCompleted ? "text-gold-champagne font-semibold" : "text-silver"}`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        );
      })}

      <motion.div
        layout
        className="mt-4 w-1 h-14 rounded-full bg-white/10"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
    </div>
  );
}
