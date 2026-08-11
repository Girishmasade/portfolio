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
    <section id="about" className="relative py-28 bg-graphite border-t border-steelgray/40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-steel border border-steelgray/50 text-gold-champagne font-mono text-xs mb-4"
          >
            SYSTEM ARCHITECTURE & PHILOSOPHY
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
            className="text-silver text-sm sm:text-base leading-relaxed"
          >
            I build products across the complete development lifecycle — from interactive frontend experiences to scalable backend services, intelligent AI workflows, databases, caching, authentication, and real-time communication.
          </motion.p>
        </div>

        {/* 3D Layered Architecture Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Layer Controls */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {layersData.map((layer, idx) => {
              const Icon = layer.icon;
              const isSelected = activeLayer === idx;
              return (
                <motion.button
                  key={layer.num}
                  onClick={() => setActiveLayer(idx)}
                  whileHover={{ x: 6 }}
                  className={`p-4 rounded-xl text-left transition-all duration-300 flex items-center gap-4 ${
                    isSelected
                      ? 'bg-steel border-2 border-gold-antique shadow-gold-glow'
                      : 'bg-obsidian/60 border border-steelgray/40 hover:border-steelgray'
                  }`}
                >
                  <span className={`font-mono text-sm font-bold ${isSelected ? 'text-gold-champagne' : 'text-silver'}`}>
                    {layer.num}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-graphite flex items-center justify-center border border-steelgray/50">
                    <Icon className={`w-5 h-5 ${isSelected ? 'text-gold-champagne' : 'text-silver'}`} />
                  </div>
                  <div>
                    <h4 className={`font-display font-bold text-sm ${isSelected ? 'text-ivory' : 'text-silver'}`}>
                      {layer.title}
                    </h4>
                    <p className="text-xs text-silver/70 line-clamp-1">
                      {layer.desc}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Active Layer Details & 3D Layer Visual */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeLayer}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="glass-panel-gold p-8 rounded-2xl relative overflow-hidden"
            >
              {/* Background watermark number */}
              <span className="absolute right-4 bottom-2 text-9xl font-black font-display text-steelgray/10 select-none">
                {layersData[activeLayer].num}
              </span>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gold-bronze/30 text-gold-champagne font-mono text-xs font-semibold">
                    LAYER {layersData[activeLayer].num} ACTIVE
                  </div>
                  <span className="font-mono text-xs text-silver">RECONNECTING ARCHITECTURE</span>
                </div>

                <h3 className="font-display font-bold text-2xl md:text-3xl text-ivory mb-4">
                  {layersData[activeLayer].title}
                </h3>

                <p className="text-silver text-sm md:text-base leading-relaxed mb-6">
                  {layersData[activeLayer].desc}
                </p>

                <h5 className="font-mono text-xs text-gold-champagne tracking-wider uppercase mb-3">
                  Key Technologies & Standards
                </h5>
                <div className="flex flex-wrap gap-2">
                  {layersData[activeLayer].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg bg-obsidian/80 border border-steelgray/60 text-ivory font-mono text-xs"
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
