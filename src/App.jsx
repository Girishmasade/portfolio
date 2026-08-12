import React, { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechEcosystem from "./components/TechEcosystem/TechEcosystem";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience";
import Philosophy from "./components/Philosophy";
import Contact from "./components/Contact";
import ScrollProgressIndicator from "./components/ScrollProgressIndicator";
import { useAnimeScroll } from "./hooks/useAnimeScroll";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "tech-ecosystem", label: "Stack" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id || "hero");
          }
        });
      },
      { threshold: 0.35 },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frameId = 0;
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        maxScroll > 0 ? Math.min(Math.max(scrollTop / maxScroll, 0), 1) : 0;
      setScrollProgress((current) => {
        const next = Math.round(progress * 100);
        return current === next ? current : next;
      });
      frameId = 0;
    };

    const handleScroll = () => {
      if (frameId) return;
      frameId = requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  // Trigger anime.js scroll-driven Intersection Observer animations
  useAnimeScroll();

  return (
    <>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <div className="relative min-h-screen bg-obsidian text-ivory font-sans selection:bg-gold-antique selection:text-obsidian overflow-x-hidden">
          <ScrollProgressIndicator
            sections={sections}
            activeSection={activeSection}
            scrollProgress={scrollProgress}
          />
          <Navbar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          <main>
            <Hero />
            <About />
            <TechEcosystem />
            <Projects />
            <Experience />
            <Philosophy />
            <Contact />
          </main>
        </div>
      )}
    </>
  );
}

