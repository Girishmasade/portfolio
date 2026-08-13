import React from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight, ShieldCheck, Cpu, Database, Server, Sparkles, CheckCircle2 } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-obsidian/90 backdrop-blur-2xl overflow-y-auto"
    >
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-graphite border border-gold-antique/50 rounded-3xl p-5 sm:p-8 md:p-10 text-ivory shadow-2xl my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 sm:p-3 rounded-full bg-steel border border-steelgray/50 text-silver hover:text-gold-champagne hover:border-gold-antique transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 sm:mb-8 border-b border-steelgray/40 pb-5 sm:pb-6 pr-10">
          <span className="px-3 py-1 bg-gold-bronze/40 text-gold-champagne rounded font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            PROJECT CASE STUDY — {project.num}
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-ivory mt-3 mb-2">
            {project.title}
          </h2>
          <p className="text-gold-champagne font-mono text-xs sm:text-sm font-semibold">
            {project.subtitle}
          </p>
        </div>

        {/* Modal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 sm:mb-10">
          <div>
            <h4 className="font-mono text-[11px] sm:text-xs font-bold text-gold-champagne uppercase tracking-widest mb-2">
              OVERVIEW & PROBLEM
            </h4>
            <p className="text-silver text-xs sm:text-sm leading-relaxed mb-6 font-sans">
              {project.description}
            </p>

            <h4 className="font-mono text-[11px] sm:text-xs font-bold text-gold-champagne uppercase tracking-widest mb-2">
              ENGINEERING SOLUTION
            </h4>
            <p className="text-silver text-xs sm:text-sm leading-relaxed mb-6 font-sans">
              Designed as a high-scalability production platform with multi-layer caching, vector similarity indexes, and robust background queues to guarantee responsive user sessions under high loads.
            </p>

            <h4 className="font-mono text-[11px] sm:text-xs font-bold text-gold-champagne uppercase tracking-widest mb-2">
              KEY HIGHLIGHTS & METRICS
            </h4>
            <ul className="flex flex-col gap-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2 font-mono text-xs text-ivory">
                  <CheckCircle2 className="w-4 h-4 text-gold-champagne shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Architecture Map */}
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-steelgray/50 flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-xs font-bold text-gold-champagne uppercase tracking-widest mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4" /> LIVE SYSTEM ARCHITECTURE MAP
              </h4>
              
              <div className="flex flex-col gap-2.5 font-mono text-xs">
                <div className="p-2.5 sm:p-3 bg-steel rounded-lg border border-steelgray/50 text-center font-bold text-ivory">
                  REACT FRONTEND INTERFACE
                </div>
                <ArrowRight className="w-4 h-4 text-gold-champagne self-center rotate-90" />
                <div className="p-2.5 sm:p-3 bg-steel rounded-lg border border-steelgray/50 text-center font-bold text-ivory">
                  EXPRESS API GATEWAY & AUTH GUARDS
                </div>
                <ArrowRight className="w-4 h-4 text-gold-champagne self-center rotate-90" />
                <div className="p-2.5 sm:p-3 bg-gold-bronze/30 border border-gold-antique text-gold-champagne rounded-lg text-center font-bold">
                  SERVICE LAYER + REDIS CACHE
                </div>
                <ArrowRight className="w-4 h-4 text-gold-champagne self-center rotate-90" />
                <div className="p-2.5 sm:p-3 bg-steel rounded-lg border border-steelgray/50 text-center font-bold text-ivory">
                  MONGODB VECTOR SEARCH & AI PROVIDERS
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-steelgray/40 pt-4">
              <span className="font-mono text-[10px] text-silver uppercase font-bold">RELEVANT STACK:</span>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.stack.map((st) => (
                  <span key={st} className="px-2.5 py-1 bg-obsidian border border-steelgray/60 rounded text-ivory font-mono text-xs">
                    {st}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 border-t border-steelgray/40 pt-5 sm:pt-6">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-steel border border-gold-antique/60 text-gold-champagne font-mono font-bold text-xs tracking-wider shadow-gold-glow hover:bg-gold-gradient hover:text-obsidian transition-all duration-300 flex items-center justify-center gap-2"
            >
              <GithubIcon className="w-4 h-4" /> VIEW GITHUB REPOSITORY
            </a>
          ) : <div />}

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gold-gradient text-obsidian font-display font-bold text-sm tracking-wider shadow-gold-glow hover:brightness-110 text-center"
          >
            CLOSE CASE STUDY
          </button>
        </div>

      </div>
    </motion.div>
  );
}
