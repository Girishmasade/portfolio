import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { animate, createTimeline } from "animejs";
import HeroCanvas from "./3D/HeroCanvas";
import ProfilePortrait from "./ProfilePortrait";
import MagneticButton from "./ui/MagneticButton";

export default function Hero() {
  const titleRef = useRef(null);
  const heroRef = useRef(null);
  const heroSceneRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroTimelineRef = useRef(null);

  useEffect(() => {
    animate(".anime-hero-badge", {
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 800,
      delay: 400,
      easing: "easeOutExpo",
    });

    animate(".anime-hero-title span", {
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1000,
      delay: (el, i) => 600 + i * 150,
      easing: "easeOutExpo",
    });

    animate(".anime-hero-desc", {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay: 900,
      easing: "easeOutExpo",
    });

    animate(".anime-hero-tag", {
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 700,
      delay: (el, i) => 1100 + i * 100,
      easing: "easeOutExpo",
    });

    animate(".anime-hero-cta", {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay: 1400,
      easing: "easeOutExpo",
    });

    if (!heroSceneRef.current || !heroContentRef.current) return;

    const heroTimeline = createTimeline({ autoplay: false });
    heroTimeline
      .add({
        targets: heroSceneRef.current,
        translateY: [0, -28],
        rotateX: [0, -2],
        rotateY: [0, 10],
        scale: [1, 1.04],
        duration: 700,
        easing: "linear",
      })
      .add({
        targets: heroSceneRef.current,
        translateY: [-28, -68],
        translateX: [0, 16],
        translateZ: [0, 26],
        rotateX: [-2, -3.5],
        rotateY: [10, 20],
        rotateZ: [0, 8],
        scale: [1.04, 1.08],
        duration: 900,
        easing: "linear",
      })
      .add({
        targets: heroSceneRef.current,
        translateY: [-68, -220],
        translateX: [16, 92],
        translateZ: [26, 110],
        rotateX: [-3.5, -5],
        rotateY: [20, 28],
        rotateZ: [8, 12],
        opacity: [1, 0.12],
        scale: [1.08, 1.14],
        duration: 900,
        easing: "linear",
      });

    heroTimeline.add({
      targets: heroContentRef.current,
      opacity: [1, 0.14],
      translateY: [0, -32],
      duration: 1400,
      easing: "linear",
      offset: 350,
    });

    heroTimelineRef.current = heroTimeline;

    const handleScroll = () => {
      const heroEl = heroRef.current;
      if (!heroEl || !heroTimelineRef.current) return;
      const progress = Math.min(
        Math.max(window.scrollY / heroEl.offsetHeight, 0),
        1,
      );
      const duration = heroTimelineRef.current.duration;
      heroTimelineRef.current.seek(progress * duration);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToStack = () => {
    document
      .getElementById("tech-ecosystem")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-screen pt-32 sm:pt-36 lg:pt-36 pb-20 sm:pb-24 lg:pb-24 flex items-center justify-center bg-obsidian overflow-hidden"
      style={{ perspective: 1700 }}
    >
      {/* Background 3D Scene */}
      <div ref={heroSceneRef} className="absolute inset-0 overflow-hidden">
        <HeroCanvas />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col justify-center">
        <div className="grid w-full grid-cols-1 gap-8 md:gap-10 lg:gap-12 md:grid-cols-[1.4fr_1fr] items-start">
          {/* Main Hero Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="anime-hero-badge opacity-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-graphite/80 border border-gold-antique/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-gold-champagne animate-pulse" />
              <span className="font-mono text-[11px] sm:text-xs text-gold-champagne tracking-widest uppercase">
                FULL-STACK & AI SYSTEMS ENGINEER
              </span>
            </div>

            <h1 className="anime-hero-title font-display font-black text-3xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-ivory leading-tight max-w-3xl break-words">
              <span className="inline-block opacity-0">I BUILD</span>
              <br className="hidden sm:block" />{" "}
              <span className="inline-block opacity-0 text-metallic-gold">
                DIGITAL SYSTEMS
              </span>
              <br />
              <span className="inline-block opacity-0">THAT SCALE.</span>
            </h1>

            {/* Profile Portrait displayed right under title on Mobile */}
            <div className="md:hidden py-2 flex justify-center">
              <ProfilePortrait src="/dev.png" />
            </div>

            <p className="anime-hero-desc opacity-0 text-silver text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-sans">
              Full-Stack Developer crafting high-performance AI products, SaaS
              platforms, real-time applications, and resilient backend
              architectures.
            </p>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs text-gold-antique/90">
              <span className="anime-hero-tag opacity-0 px-2.5 sm:px-3 py-1 bg-steel/60 border border-steelgray/40 rounded-lg">
                MERN
              </span>
              <span className="text-silver font-bold">×</span>
              <span className="anime-hero-tag opacity-0 px-2.5 sm:px-3 py-1 bg-steel/60 border border-steelgray/40 rounded-lg">
                AI ARCHITECTURE
              </span>
              <span className="text-silver font-bold">×</span>
              <span className="anime-hero-tag opacity-0 px-2.5 sm:px-3 py-1 bg-steel/60 border border-steelgray/40 rounded-lg">
                SAAS
              </span>
              <span className="text-silver font-bold">×</span>
              <span className="anime-hero-tag opacity-0 px-2.5 sm:px-3 py-1 bg-steel/60 border border-steelgray/40 rounded-lg">
                REAL-TIME
              </span>
            </div>

            <div className="anime-hero-cta opacity-0 flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 pt-2">
              <MagneticButton
                onClick={scrollToWork}
                maxOffset={10}
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl bg-gold-gradient text-obsidian font-display font-bold text-sm tracking-wider shadow-gold-glow hover:brightness-110 transition-all duration-300 text-center"
              >
                EXPLORE MY WORK
              </MagneticButton>
              <MagneticButton
                onClick={scrollToStack}
                maxOffset={10}
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl bg-graphite border border-steelgray text-ivory font-display font-semibold text-sm tracking-wider hover:border-gold-antique hover:text-gold-champagne transition-all duration-300 text-center"
              >
                VIEW TECH STACK
              </MagneticButton>
            </div>
          </div>

          {/* Profile Portrait displayed aligned at Top Right on Laptop & Desktop */}
          <div className="hidden md:flex justify-end self-start pt-2">
            <ProfilePortrait src="/dev.png" />
          </div>
        </div>
      </div>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-obsidian/70 via-transparent to-obsidian pointer-events-none z-10" />

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer pointer-events-auto"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="font-mono text-[10px] tracking-widest text-silver uppercase">
          SCROLL DOWN
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-gold-champagne" />
        </motion.div>
      </div>
    </section>
  );
}
