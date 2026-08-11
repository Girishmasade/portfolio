import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'tech-ecosystem', label: 'Stack' },
    { id: 'projects', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-40 w-[92%] max-w-6xl transition-all duration-300 ${
        scrolled
          ? 'bg-graphite/85 backdrop-blur-xl border border-steelgray/50 shadow-2xl py-3 px-6 rounded-2xl'
          : 'bg-transparent py-4 px-6'
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Brand Logo & Signature */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-steel/80 border border-gold-antique/40 p-1 flex items-center justify-center group-hover:border-gold-champagne transition-all duration-300">
            <img src="/gm_logo.png" alt="GM Monogram" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display font-bold text-sm tracking-wider text-ivory group-hover:text-gold-champagne transition-colors">
              GIRISH MASADE
            </span>
            <span className="text-[10px] font-mono tracking-widest text-gold-antique">
              GM DEVELOPER
            </span>
          </div>
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-obsidian/60 p-1.5 rounded-xl border border-steelgray/40">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'text-gold-champagne font-semibold'
                    : 'text-silver hover:text-ivory'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-steel border border-gold-antique/50 rounded-lg -z-10 shadow-sm shadow-gold-antique/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Contact CTA */}
        <button
          onClick={() => scrollToSection('contact')}
          className="px-4 py-2 rounded-xl text-xs font-mono tracking-wider bg-gold-gradient text-obsidian font-bold shadow-gold-glow hover:brightness-110 hover:scale-105 transition-all duration-300"
        >
          LET'S TALK
        </button>
      </div>
    </motion.header>
  );
}
