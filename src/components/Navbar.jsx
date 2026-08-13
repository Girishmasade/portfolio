import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

export default function Navbar({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-40 w-[92%] max-w-6xl transition-all duration-300 ${
          scrolled
            ? 'bg-graphite/85 backdrop-blur-xl border border-steelgray/50 shadow-2xl py-2.5 px-6 rounded-2xl'
            : 'bg-transparent py-4 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo & Signature */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-steel/80 border border-gold-antique/40 p-0.5 flex items-center justify-center group-hover:border-gold-champagne group-hover:scale-105 transition-all duration-300 overflow-hidden shadow-sm shadow-gold-antique/20">
              <img src="/favicon.png" alt="devCoder Logo" className="w-full h-full object-contain rounded-lg" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-sm tracking-wider text-ivory group-hover:text-gold-champagne transition-colors">
                GIRISH MASADE
              </span>
              <span className="text-[10px] font-mono tracking-widest text-gold-antique">
                devCoder
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-obsidian/70 p-1.5 rounded-xl border border-steelgray/40 backdrop-blur-md">
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

          <div className="flex items-center gap-3">
            {/* Desktop Contact CTA */}
            <div className="hidden sm:block">
              <MagneticButton
                onClick={() => scrollToSection('contact')}
                maxOffset={8}
                className="px-5 py-2 rounded-xl text-xs font-mono tracking-wider bg-gold-gradient text-obsidian font-bold shadow-gold-glow hover:brightness-110 transition-all duration-300"
              >
                LET'S TALK
              </MagneticButton>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-steel border border-steelgray/50 text-gold-champagne hover:border-gold-antique transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-obsidian/75 backdrop-blur-md z-40 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              className="fixed inset-x-4 top-20 z-50 md:hidden bg-graphite/95 backdrop-blur-2xl border border-gold-antique/50 rounded-3xl p-5 sm:p-6 shadow-2xl max-h-[80vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-2.5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-mono tracking-wider transition-all flex items-center justify-between min-h-[44px] ${
                        isActive
                          ? 'bg-steel border border-gold-antique text-gold-champagne font-bold shadow-sm'
                          : 'text-silver hover:bg-steel/50 hover:text-ivory'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-gold-champagne" />}
                    </button>
                  );
                })}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full mt-2 py-3.5 rounded-xl bg-gold-gradient text-obsidian font-display font-bold text-sm tracking-wider shadow-gold-glow text-center min-h-[44px]"
                >
                  LET'S TALK
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


