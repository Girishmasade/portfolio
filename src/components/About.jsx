import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, Database, Sparkles, Radio } from 'lucide-react';

const layersData = [
  {
    num: '01',
    title: 'EXPERIENCE LAYER',
    icon: Layers,
    tags: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    desc: 'High-performance visual interfaces with crisp state synchronization and 60fps micro-animations.',
  },
  {
    num: '02',
    title: 'BACKEND SERVICES',
    icon: Cpu,
    tags: ['Node.js', 'Express.js', 'REST APIs', 'BullMQ Workers'],
    desc: 'Modular service architectures, scalable API controllers, rate-limited middleware, and isolated compute jobs.',
  },
  {
    num: '03',
    title: 'DATA ARCHITECTURE',
    icon: Database,
    tags: ['MongoDB', 'MongoDB Vector Search', 'Redis Cache', 'Mongoose'],
    desc: 'Optimized schema indexing, Redis multi-layer caching strategies, and ultra-fast vector retrieval.',
  },
  {
    num: '04',
    title: 'AI INTELLIGENCE',
    icon: Sparkles,
    tags: ['LLM Integration', 'RAG Retrieval', 'Prompt Engineering', 'Semantic Search'],
    desc: 'Retrieval-Augmented Generation workflows, context-aware embeddings, multi-provider model routing, and cost control.',
  },
  {
    num: '05',
    title: 'REAL-TIME NETWORK',
    icon: Radio,
    tags: ['Socket.IO', 'WebRTC', 'P2P Signaling', 'Event Broadcaster'],
    desc: 'Bi-directional low-latency websockets, room management, live events, and direct peer media streams.',
  },
];

export default function About() {
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <section id="about" className="relative py-24 bg-graphite border-t border-steelgray/40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-steel border border-steelgray/60 text-gold-champagne font-mono text-xs font-semibold mb-4"
          >
            ARCHITECTURE & ENGINEERING PHILOSOPHY
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl text-ivory tracking-tight leading-tight mb-6"
          >
            ONE DEVELOPER. <br />
            <span className="text-metallic-gold">MULTIPLE SYSTEMS.</span> <br />
            ONE ARCHITECTURE.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-silver text-sm sm:text-base leading-relaxed font-sans"
          >
            I build products across the complete development lifecycle — from interactive frontend experiences to scalable backend services, intelligent AI workflows, databases, caching, authentication, and real-time communication.
          </motion.p>
        </div>

        {/* Crisp, Sharp Layered Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Layer Controls */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {layersData.map((layer, idx) => {
              const Icon = layer.icon;
              const isSelected = activeLayer === idx;
              return (
                <button
                  key={layer.num}
                  type="button"
                  onClick={() => setActiveLayer(idx)}
                  className={`p-4 rounded-2xl text-left transition-all duration-200 flex items-center gap-4 cursor-pointer select-none relative z-10 ${
                    isSelected
                      ? 'bg-steel border-2 border-gold-antique shadow-gold-glow text-ivory scale-[1.02]'
                      : 'bg-obsidian border border-steelgray/60 hover:border-gold-antique/50 hover:bg-steel/40 text-silver'
                  }`}
                >
                  <span className={`font-mono text-sm font-bold ${isSelected ? 'text-gold-champagne' : 'text-gold-antique/70'}`}>
                    {layer.num}
                  </span>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-graphite border-gold-antique text-gold-champagne shadow-gold-glow'
                      : 'bg-graphite/80 border-steelgray/60 text-silver'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-display font-bold text-sm tracking-wide ${isSelected ? 'text-ivory font-extrabold' : 'text-silver'}`}>
                      {layer.title}
                    </h4>
                    <p className="text-xs text-silver/80 truncate font-sans mt-0.5">
                      {layer.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Layer Details & Crisp Visual Card */}
          <div className="lg:col-span-7 flex">
            <motion.div
              key={activeLayer}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-obsidian border-2 border-gold-antique/60 rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-between shadow-2xl"
            >
              {/* Background watermark number */}
              <span className="absolute right-6 bottom-4 text-9xl font-black font-display text-steelgray/15 select-none pointer-events-none">
                {layersData[activeLayer].num}
              </span>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-steelgray/50">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-bronze/40 border border-gold-antique/50 text-gold-champagne font-mono text-xs font-bold tracking-wider">
                    LAYER {layersData[activeLayer].num} ACTIVE
                  </div>
                  <span className="font-mono text-xs text-silver font-semibold">DEVCODER SYSTEM ARCHITECTURE</span>
                </div>

                <h3 className="font-display font-black text-2xl md:text-4xl text-ivory mb-4 tracking-tight">
                  {layersData[activeLayer].title}
                </h3>

                <p className="text-silver text-sm md:text-base leading-relaxed mb-8 font-sans">
                  {layersData[activeLayer].desc}
                </p>

                <h5 className="font-mono text-xs font-bold text-gold-champagne tracking-widest uppercase mb-4">
                  KEY TECHNOLOGIES & STANDARDS
                </h5>
                <div className="flex flex-wrap gap-2.5">
                  {layersData[activeLayer].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-2 rounded-xl bg-steel border border-steelgray text-ivory font-mono text-xs font-semibold tracking-wide shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}


