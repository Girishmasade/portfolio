import React from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight, ShieldCheck, Cpu, Database, Server, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-obsidian/90 backdrop-blur-2xl overflow-y-auto"
    >
      <div className="relative w-full max-w-5xl bg-graphite border border-gold-antique/50 rounded-3xl p-6 md:p-10 text-ivory shadow-2xl my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full bg-steel border border-steelgray/50 text-silver hover:text-gold-champagne hover:border-gold-antique transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8 border-b border-steelgray/40 pb-6">
          <span className="px-3 py-1 bg-gold-bronze/40 text-gold-champagne rounded font-mono text-xs font-bold uppercase tracking-wider">
            PROJECT CASE STUDY — {project.num}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-ivory mt-3 mb-2">
            {project.title}
          </h2>
          <p className="text-gold-champagne font-mono text-sm font-semibold">
            {project.subtitle}
          </p>
        </div>

        {/* Modal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h4 className="font-mono text-xs font-bold text-gold-champagne uppercase tracking-widest mb-2">
              OVERVIEW & PROBLEM
            </h4>
            <p className="text-silver text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <h4 className="font-mono text-xs font-bold text-gold-champagne uppercase tracking-widest mb-2">
              ENGINEERING SOLUTION
            </h4>
            <p className="text-silver text-sm leading-relaxed mb-6">
              Designed as a high-scalability production platform with multi-layer caching, vector similarity indexes, and robust background queues to guarantee responsive user sessions under high loads.
            </p>

            <h4 className="font-mono text-xs font-bold text-gold-champagne uppercase tracking-widest mb-2">
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
          <div className="glass-panel p-6 rounded-2xl border border-steelgray/50 flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-xs font-bold text-gold-champagne uppercase tracking-widest mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4" /> LIVE SYSTEM ARCHITECTURE MAP
              </h4>
              
              <div className="flex flex-col gap-3 font-mono text-xs">
                <div className="p-3 bg-steel rounded-lg border border-steelgray/50 text-center font-bold text-ivory">
                  REACT FRONTEND INTERFACE
                </div>
                <ArrowRight className="w-4 h-4 text-gold-champagne self-center rotate-90" />
                <div className="p-3 bg-steel rounded-lg border border-steelgray/50 text-center font-bold text-ivory">
                  EXPRESS API GATEWAY & AUTH GUARDS
                </div>
                <ArrowRight className="w-4 h-4 text-gold-champagne self-center rotate-90" />
                <div className="p-3 bg-gold-bronze/30 border border-gold-antique text-gold-champagne rounded-lg text-center font-bold">
                  SERVICE LAYER + REDIS CACHE
                </div>
                <ArrowRight className="w-4 h-4 text-gold-champagne self-center rotate-90" />
                <div className="p-3 bg-steel rounded-lg border border-steelgray/50 text-center font-bold text-ivory">
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
        <div className="flex items-center justify-end gap-4 border-t border-steelgray/40 pt-6">
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-gold-gradient text-obsidian font-display font-bold text-sm tracking-wider shadow-gold-glow hover:brightness-110"
          >
            CLOSE CASE STUDY
          </button>
        </div>

      </div>
    </motion.div>
  );
}
