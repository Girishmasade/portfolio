import React, { useEffect, useRef, useState } from "react";

export default function ExplorationIndicator() {
  const [seconds, setSeconds] = useState(0);
  const startedRef = useRef(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleStart = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      intervalRef.current = window.setInterval(() => {
        setSeconds((value) => value + 1);
      }, 1000);
    };

    window.addEventListener("scroll", handleStart, {
      once: true,
      passive: true,
    });
    window.addEventListener("pointermove", handleStart, {
      once: true,
      passive: true,
    });
    window.addEventListener("touchstart", handleStart, {
      once: true,
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleStart);
      window.removeEventListener("pointermove", handleStart);
      window.removeEventListener("touchstart", handleStart);
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remainder = String(seconds % 60).padStart(2, "0");

  return (
    <div className="exploration-indicator hidden xl:flex flex-col gap-1 fixed right-6 bottom-8 z-40 rounded-3xl border border-gold-antique/30 bg-obsidian/90 p-4 text-right shadow-[0_20px_80px_-48px_rgba(226,189,122,0.55)]">
      <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold-champagne/80">
        SYSTEM EXPLORATION
      </span>
      <span className="font-display font-semibold text-sm text-ivory">
        {minutes}:{remainder}
      </span>
    </div>
  );
}
