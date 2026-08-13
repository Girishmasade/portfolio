import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, Cpu, Database, Sparkles, Radio, ShieldCheck, Wrench, 
  ArrowRight, CheckCircle2, Server, Key, Repeat, CpuIcon, Workflow
} from 'lucide-react';
import { TECH_NODES } from './techData';

export default function TechEcosystem() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeNode, setActiveNode] = useState(null);
  const [activeDiagram, setActiveDiagram] = useState('frontend');

  const categories = [
    'FRONTEND',
    'BACKEND',
    'DATABASE & CACHING',
    'AI & INTELLIGENCE',
    'REAL-TIME',
    'AUTHENTICATION & SECURITY',
    'DEVELOPER TOOLS & DEPLOYMENT',
  ];

  const projectsFilter = [
    { id: 'all', name: 'ALL SYSTEM PACKAGES' },
    { id: 'gochat', name: 'GOCHAT AI' },
    { id: 'moonchat', name: 'MOONCHAT AI' },
  ];

  const filteredNodes = TECH_NODES.filter((node) => {
    if (selectedFilter === 'all') return true;
    return node.projects.includes(selectedFilter);
  });

  const isRelated = (nodeId) => {
    if (!activeNode) return false;
    if (activeNode.id === nodeId) return true;
    return activeNode.related.includes(nodeId);
  };

  return (
    <section id="tech-ecosystem" className="relative py-28 bg-obsidian text-ivory">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="anime-reveal text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-graphite border border-gold-antique/40 font-mono text-xs text-gold-champagne mb-4">
            <Workflow className="w-3.5 h-3.5 text-gold-champagne" />
            ENGINEERING ECOSYSTEM & INFRASTRUCTURE
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
            THE TECHNOLOGY <br />
            <span className="text-metallic-gold">BEHIND THE SYSTEMS.</span>
          </h2>

          <p className="text-silver text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            An interactive engineering network. Explore how frontend components, backend services, vector search engines, AI models, caches, and real-time sockets connect as one unified architecture.
          </p>

          {/* Project Usage Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-mono text-silver mr-2">PACKAGE FILTER:</span>
            {projectsFilter.map((proj) => (
              <button
                key={proj.id}
                onClick={() => setSelectedFilter(proj.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 ${
                  selectedFilter === proj.id
                    ? 'bg-gold-gradient text-obsidian font-bold shadow-gold-glow'
                    : 'bg-graphite border border-steelgray text-silver hover:border-gold-antique/50 hover:text-ivory'
                }`}
              >
                {proj.name}
              </button>
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* INTERACTIVE TECH NODE CONSTELLATION */}
        {/* ---------------------------------------------------- */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-bold text-xl text-ivory flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-champagne animate-pulse" />
              Interactive Technology Network
            </h3>
            <span className="text-xs font-mono text-silver hidden sm:inline">
              HOVER NODE TO SEE SYSTEM ROLE & CONNECTIONS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const catNodes = filteredNodes.filter((n) => n.category === category);
              if (catNodes.length === 0) return null;

              return (
                <motion.div
                  key={category}
                  whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                  transition={{ duration: 0.3 }}
                  style={{ perspective: 1200 }}
                  className="anime-reveal glass-panel p-5 rounded-2xl border border-steelgray/40 hover:border-gold-antique/60 hover:shadow-gold-glow relative overflow-hidden transition-colors"
                >
                  <div className="flex items-center justify-between mb-4 border-b border-steelgray/40 pb-2">
                    <h4 className="font-mono text-xs font-bold text-gold-champagne tracking-widest uppercase">
                      {category}
                    </h4>
                    <span className="font-mono text-[10px] text-silver bg-obsidian/80 px-2 py-0.5 rounded">
                      {catNodes.length} PACKAGES
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {catNodes.map((node) => {
                      const isActive = activeNode?.id === node.id;
                      const related = isRelated(node.id);
                      const isMuted = activeNode && !isActive && !related;

                      return (
                        <motion.button
                          key={node.id}
                          onClick={() => setActiveNode((curr) => (curr?.id === node.id ? null : node))}
                          onMouseEnter={() => setActiveNode(node)}
                          onMouseLeave={() => setActiveNode(null)}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className={`relative px-3 py-2 rounded-xl text-xs font-mono transition-all duration-300 text-left cursor-pointer ${
                            isActive
                              ? 'bg-gold-gradient text-obsidian font-bold shadow-gold-glow z-20'
                              : related
                              ? 'bg-graphite border-2 border-gold-champagne text-gold-champagne shadow-gold-glow z-10'
                              : isMuted
                              ? 'bg-obsidian/40 text-silver/30 border border-steelgray/10'
                              : 'bg-steel border border-steelgray/50 text-ivory hover:border-gold-antique'
                          }`}
                        >
                          {node.name}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Active Hover / Tap Detail Info Card */}
          <div className="mt-6 min-h-[110px]">
            <AnimatePresence mode="wait">
              {activeNode ? (
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="glass-panel-gold p-5 sm:p-6 rounded-2xl border border-gold-antique/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded bg-gold-bronze/40 text-gold-champagne font-mono text-[10px] font-bold uppercase tracking-wider">
                        {activeNode.category}
                      </span>
                      <h4 className="font-display font-bold text-lg sm:text-xl text-ivory">
                        {activeNode.name}
                      </h4>
                    </div>
                    <p className="text-gold-champagne font-mono text-xs font-semibold mb-1">
                      ROLE: {activeNode.role}
                    </p>
                    <p className="text-silver text-xs leading-relaxed max-w-3xl font-sans">
                      {activeNode.usedFor}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 border-t md:border-t-0 md:border-l border-steelgray/50 pt-3 md:pt-0 md:pl-6 w-full md:w-auto">
                    <span className="font-mono text-[10px] text-gold-antique uppercase font-bold">
                      CONNECTED TECHNOLOGIES:
                    </span>
                    <div className="flex flex-wrap gap-1 max-w-xs">
                      {activeNode.related.map((relId) => {
                        const relNode = TECH_NODES.find((n) => n.id === relId);
                        return relNode ? (
                          <span
                            key={relId}
                            className="px-2 py-0.5 bg-obsidian text-silver rounded font-mono text-[10px] border border-steelgray/40"
                          >
                            {relNode.name}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="p-5 sm:p-6 rounded-2xl bg-graphite/40 border border-steelgray/30 text-center text-silver font-mono text-xs">
                  Tap or hover over any technology node above to highlight its role and active connections across the stack.
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* DEDICATED ARCHITECTURE VISUALIZATIONS */}
        {/* ---------------------------------------------------- */}
        <div className="border-t border-steelgray/40 pt-16 sm:pt-20">
          <div className="anime-reveal text-center mb-10 sm:mb-12">
            <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-ivory mb-3 sm:mb-4">
              SYSTEM ARCHITECTURE FLOWS
            </h3>
            <p className="text-silver text-xs sm:text-sm max-w-xl mx-auto font-sans">
              Select a specialized engineering subsystem below to inspect data movement and visual connections.
            </p>

            {/* Diagram Switcher Tabs with touch-friendly horizontal scroll */}
            <div className="mt-6 sm:mt-8 flex overflow-x-auto pb-3 gap-2 scrollbar-none sm:flex-wrap sm:justify-center px-2">
              {[
                { id: 'frontend', label: 'FRONTEND ARCHITECTURE' },
                { id: 'backend', label: 'BACKEND CONTROLLER PIPELINE' },
                { id: 'database', label: 'REDIS CACHE & VECTOR RAG' },
                { id: 'ai', label: 'MULTI-PROVIDER AI ROUTER' },
                { id: 'realtime', label: 'SOCKET.IO & WEBRTC P2P' },
                { id: 'auth', label: 'JWT & OAUTH SECURITY' },
                { id: 'bullmq', label: 'BULLMQ BACKGROUND JOBS' },
                { id: 'deploy', label: 'DEPLOYMENT PIPELINE' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveDiagram(tab.id)}
                  className={`px-3.5 sm:px-4 py-2.5 sm:py-2 rounded-xl font-mono text-xs tracking-wider transition-all duration-300 shrink-0 ${
                    activeDiagram === tab.id
                      ? 'bg-steel border-2 border-gold-antique text-gold-champagne font-bold shadow-gold-glow'
                      : 'bg-graphite border border-steelgray/40 text-silver hover:border-steelgray'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Diagram Display Container */}
          <div className="glass-panel-gold p-5 sm:p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              
              {/* FRONTEND ARCHITECTURE */}
              {activeDiagram === 'frontend' && (
                <motion.div
                  key="frontend"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-10"
                >
                  <div className="border-b border-steelgray/40 pb-4">
                    <h4 className="font-display font-bold text-xl text-ivory">
                      Frontend Core & Interaction Flow
                    </h4>
                    <p className="text-silver text-xs">
                      Visualizing data fetching, state management, and 3D animation choreography.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    
                    {/* Flow 1 */}
                    <div className="p-6 bg-obsidian/80 rounded-2xl border border-steelgray/40 flex flex-col items-center">
                      <span className="font-mono text-[10px] text-gold-champagne uppercase font-bold mb-3">API DATA FLOW</span>
                      <div className="flex flex-col items-center gap-2 font-mono text-xs text-ivory">
                        <span className="px-3 py-1.5 bg-steel rounded-lg border border-steelgray/60 w-full text-center font-bold">React.js</span>
                        <ArrowRight className="w-4 h-4 text-gold-champagne rotate-90" />
                        <span className="px-3 py-1.5 bg-steel rounded-lg border border-steelgray/60 w-full text-center">React Router DOM</span>
                        <ArrowRight className="w-4 h-4 text-gold-champagne rotate-90" />
                        <span className="px-3 py-1.5 bg-steel rounded-lg border border-steelgray/60 w-full text-center">Redux Toolkit / Context</span>
                        <ArrowRight className="w-4 h-4 text-gold-champagne rotate-90" />
                        <span className="px-3 py-1.5 bg-steel rounded-lg border border-steelgray/60 w-full text-center">Axios</span>
                        <ArrowRight className="w-4 h-4 text-gold-champagne rotate-90" />
                        <span className="px-3 py-1.5 bg-gold-bronze/40 text-gold-champagne rounded-lg border border-gold-antique/50 w-full text-center font-bold">Backend REST APIs</span>
                      </div>
                    </div>

                    {/* Flow 2 */}
                    <div className="p-6 bg-obsidian/80 rounded-2xl border border-steelgray/40 flex flex-col items-center">
                      <span className="font-mono text-[10px] text-gold-champagne uppercase font-bold mb-3">ANIMATION FLOW</span>
                      <div className="flex flex-col items-center gap-2 font-mono text-xs text-ivory">
                        <span className="px-3 py-1.5 bg-steel rounded-lg border border-steelgray/60 w-full text-center font-bold">React.js</span>
                        <ArrowRight className="w-4 h-4 text-gold-champagne rotate-90" />
                        <span className="px-3 py-1.5 bg-steel rounded-lg border border-steelgray/60 w-full text-center">Framer Motion</span>
                        <ArrowRight className="w-4 h-4 text-gold-champagne rotate-90" />
                        <span className="px-3 py-1.5 bg-steel rounded-lg border border-steelgray/60 w-full text-center">GSAP</span>
                        <ArrowRight className="w-4 h-4 text-gold-champagne rotate-90" />
                        <span className="px-3 py-1.5 bg-steel rounded-lg border border-steelgray/60 w-full text-center">ScrollTrigger</span>
                        <ArrowRight className="w-4 h-4 text-gold-champagne rotate-90" />
                        <span className="px-3 py-1.5 bg-gold-bronze/40 text-gold-champagne rounded-lg border border-gold-antique/50 w-full text-center font-bold">Lenis Smooth Scroll</span>
                      </div>
                    </div>

                    {/* Flow 3 */}
                    <div className="p-6 bg-obsidian/80 rounded-2xl border border-steelgray/40 flex flex-col items-center">
                      <span className="font-mono text-[10px] text-gold-champagne uppercase font-bold mb-3">IMMERSIVE 3D EXPERIENCE</span>
                      <div className="flex flex-col items-center gap-2 font-mono text-xs text-ivory">
                        <span className="px-3 py-1.5 bg-steel rounded-lg border border-steelgray/60 w-full text-center font-bold">React.js</span>
                        <ArrowRight className="w-4 h-4 text-gold-champagne rotate-90" />
                        <span className="px-3 py-1.5 bg-steel rounded-lg border border-steelgray/60 w-full text-center">React Three Fiber</span>
                        <ArrowRight className="w-4 h-4 text-gold-champagne rotate-90" />
                        <span className="px-3 py-1.5 bg-steel rounded-lg border border-steelgray/60 w-full text-center">Three.js Core</span>
                        <ArrowRight className="w-4 h-4 text-gold-champagne rotate-90" />
                        <span className="px-3 py-1.5 bg-gold-bronze/40 text-gold-champagne rounded-lg border border-gold-antique/50 w-full text-center font-bold">Drei Utilities</span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}

              {/* BACKEND PIPELINE */}
              {activeDiagram === 'backend' && (
                <motion.div
                  key="backend"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-6"
                >
                  <div className="border-b border-steelgray/40 pb-4">
                    <h4 className="font-display font-bold text-xl text-ivory">
                      Backend Layered Processing Pipeline
                    </h4>
                    <p className="text-silver text-xs">
                      Client request lifecycle through Express middleware, auth guards, controllers, and services.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 text-center">
                    {[
                      { title: 'CLIENT REQUEST', sub: 'Browser / App' },
                      { title: 'EXPRESS API', sub: 'Routing Guard' },
                      { title: 'MIDDLEWARE LAYER', sub: 'CORS, Helmet, Limiter' },
                      { title: 'AUTH & SECURITY', sub: 'JWT / OAuth Check' },
                      { title: 'CONTROLLER LAYER', sub: 'Input Validation (Joi/Zod)' },
                      { title: 'SERVICE LAYER', sub: 'Business Logic' },
                      { title: 'INFRASTRUCTURE', sub: 'DB / Cache / AI / Services' },
                    ].map((step, i, arr) => (
                      <React.Fragment key={step.title}>
                        <div className="flex-1 min-w-[140px] p-4 bg-obsidian rounded-xl border border-steelgray/50 flex flex-col items-center">
                          <span className="font-mono text-xs font-bold text-gold-champagne mb-1">{step.title}</span>
                          <span className="text-[10px] text-silver font-mono">{step.sub}</span>
                        </div>
                        {i < arr.length - 1 && (
                          <ArrowRight className="w-5 h-5 text-gold-champagne hidden md:block" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* DATABASE & CACHING */}
              {activeDiagram === 'database' && (
                <motion.div
                  key="database"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-8"
                >
                  <div className="border-b border-steelgray/40 pb-4">
                    <h4 className="font-display font-bold text-xl text-ivory">
                      MongoDB + Mongoose + Redis Cache & Vector Search Flow
                    </h4>
                    <p className="text-silver text-xs">
                      Cache hit vs miss strategies paired with vector similarity context retrieval.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Redis Cache Strategy */}
                    <div className="p-6 bg-obsidian/90 rounded-2xl border border-steelgray/50">
                      <h5 className="font-mono text-xs font-bold text-gold-champagne mb-4 flex items-center gap-2">
                        <Database className="w-4 h-4" /> REDIS CACHE LOOKUP
                      </h5>
                      <div className="flex flex-col gap-3 font-mono text-xs">
                        <div className="p-3 bg-steel rounded-lg border border-steelgray/40">APPLICATION REQUEST</div>
                        <ArrowRight className="w-4 h-4 text-gold-champagne self-center rotate-90" />
                        <div className="p-3 bg-gold-bronze/30 border border-gold-antique text-gold-champagne rounded-lg font-bold">REDIS CACHE CHECK</div>
                        <div className="grid grid-cols-2 gap-3 mt-2">
                          <div className="p-3 bg-steel border border-green-500/50 text-green-400 rounded-lg">
                            <span className="block font-bold">CACHE HIT</span>
                            Return immediate response (&lt;5ms)
                          </div>
                          <div className="p-3 bg-steel border border-amber-500/50 text-amber-300 rounded-lg">
                            <span className="block font-bold">CACHE MISS</span>
                            Query MongoDB -&gt; Store in Redis -&gt; Return
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Vector Search RAG */}
                    <div className="p-6 bg-obsidian/90 rounded-2xl border border-steelgray/50">
                      <h5 className="font-mono text-xs font-bold text-gold-champagne mb-4 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" /> MONGODB VECTOR RAG FLOW
                      </h5>
                      <div className="flex flex-col gap-2 font-mono text-xs">
                        <div className="p-2 bg-steel rounded text-center">DOCUMENT INGESTION</div>
                        <ArrowRight className="w-3 h-3 text-gold-champagne self-center rotate-90" />
                        <div className="p-2 bg-steel rounded text-center">TEXT CHUNKING</div>
                        <ArrowRight className="w-3 h-3 text-gold-champagne self-center rotate-90" />
                        <div className="p-2 bg-steel rounded text-center">EMBEDDING MODEL (OpenAI / Gemini)</div>
                        <ArrowRight className="w-3 h-3 text-gold-champagne self-center rotate-90" />
                        <div className="p-2 bg-gold-bronze/30 border border-gold-antique text-gold-champagne rounded text-center font-bold">MONGODB VECTOR STORAGE</div>
                        <ArrowRight className="w-3 h-3 text-gold-champagne self-center rotate-90" />
                        <div className="p-2 bg-steel rounded text-center">SEMANTIC SEARCH & LLM RESPONSE</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* AI MULTI-PROVIDER ROUTER */}
              {activeDiagram === 'ai' && (
                <motion.div
                  key="ai"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-8"
                >
                  <div className="border-b border-steelgray/40 pb-4">
                    <h4 className="font-display font-bold text-xl text-ivory">
                      Generative AI & Model Provider Router
                    </h4>
                    <p className="text-silver text-xs">
                      Intelligent query routing between OpenAI, Google Gemini, and custom RAG context builders.
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-4 text-center font-mono text-xs">
                    <div className="w-64 p-3 bg-obsidian rounded-xl border border-steelgray/50 text-ivory font-bold">USER AI REQUEST</div>
                    <ArrowRight className="w-4 h-4 text-gold-champagne rotate-90" />
                    <div className="w-80 p-3 bg-gold-bronze/30 border border-gold-antique text-gold-champagne rounded-xl font-bold">CONTEXT ANALYSIS & VECTOR RAG</div>
                    <ArrowRight className="w-4 h-4 text-gold-champagne rotate-90" />
                    
                    {/* Providers Grid */}
                    <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 bg-obsidian rounded-xl border border-steelgray/50 flex flex-col items-center">
                        <span className="text-gold-champagne font-bold">OPENAI API</span>
                        <span className="text-[10px] text-silver">GPT-4o / Embeddings</span>
                      </div>
                      <div className="p-4 bg-obsidian rounded-xl border border-steelgray/50 flex flex-col items-center">
                        <span className="text-gold-champagne font-bold">GOOGLE GEMINI</span>
                        <span className="text-[10px] text-silver">Gemini 1.5 Pro / Flash</span>
                      </div>
                      <div className="p-4 bg-obsidian rounded-xl border border-steelgray/50 flex flex-col items-center">
                        <span className="text-gold-champagne font-bold">FALLBACK ROUTER</span>
                        <span className="text-[10px] text-silver">Cost & SLA Optimization</span>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-gold-champagne rotate-90" />
                    <div className="w-80 p-3 bg-steel rounded-xl border border-steelgray/50 text-ivory">RESPONSE NORMALIZATION & CACHING</div>
                  </div>
                </motion.div>
              )}

              {/* REAL-TIME */}
              {activeDiagram === 'realtime' && (
                <motion.div
                  key="realtime"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-8"
                >
                  <div className="border-b border-steelgray/40 pb-4">
                    <h4 className="font-display font-bold text-xl text-ivory">
                      Socket.IO Events & WebRTC Peer-to-Peer Communication
                    </h4>
                    <p className="text-silver text-xs">
                      Low latency sub-100ms websocket event broadcaster paired with direct audio/video WebRTC streams.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center font-mono text-xs">
                    <div className="p-6 bg-obsidian rounded-2xl border border-steelgray/50 flex flex-col items-center gap-3">
                      <span className="text-gold-champagne font-bold uppercase">SOCKET.IO ROOM BROADCAST</span>
                      <div className="flex items-center justify-center gap-4 w-full">
                        <span className="p-3 bg-steel rounded-lg border border-steelgray/40">USER A</span>
                        <Repeat className="w-5 h-5 text-gold-champagne" />
                        <span className="p-3 bg-gold-bronze/40 border border-gold-antique text-gold-champagne rounded-lg font-bold">SOCKET SERVER</span>
                        <Repeat className="w-5 h-5 text-gold-champagne" />
                        <span className="p-3 bg-steel rounded-lg border border-steelgray/40">USER B</span>
                      </div>
                      <span className="text-[10px] text-silver mt-2">ROOM BROADCAST • LIVE TYPING • EVENT EMITTER</span>
                    </div>

                    <div className="p-6 bg-obsidian rounded-2xl border border-steelgray/50 flex flex-col items-center gap-3">
                      <span className="text-gold-champagne font-bold uppercase">WEBRTC PEER CONNECTION</span>
                      <div className="flex items-center justify-center gap-4 w-full">
                        <span className="p-3 bg-steel rounded-lg border border-steelgray/40">PEER A</span>
                        <ArrowRight className="w-4 h-4 text-gold-champagne" />
                        <span className="p-2 bg-steel text-[10px] rounded">SIGNALING</span>
                        <ArrowRight className="w-4 h-4 text-gold-champagne" />
                        <span className="p-3 bg-steel rounded-lg border border-steelgray/40">PEER B</span>
                      </div>
                      <div className="w-full p-2 bg-gold-bronze/30 border border-gold-antique text-gold-champagne rounded-lg mt-2 font-bold">
                        DIRECT P2P MEDIA MESH (AUDIO/VIDEO)
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* AUTH & SECURITY */}
              {activeDiagram === 'auth' && (
                <motion.div
                  key="auth"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-6"
                >
                  <div className="border-b border-steelgray/40 pb-4">
                    <h4 className="font-display font-bold text-xl text-ivory">
                      Authentication, JWT Tokens & Security Shield
                    </h4>
                    <p className="text-silver text-xs">
                      Password hashing with bcryptjs, OAuth strategies, HTTP-Only cookies, and RBAC guards.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono text-xs">
                    <div className="p-4 bg-obsidian rounded-xl border border-steelgray/50 flex flex-col items-center">
                      <Key className="w-5 h-5 text-gold-champagne mb-2" />
                      <span className="font-bold text-ivory">IDENTITY</span>
                      <span className="text-[10px] text-silver mt-1">Google OAuth / GitHub / Passport.js</span>
                    </div>

                    <div className="p-4 bg-obsidian rounded-xl border border-steelgray/50 flex flex-col items-center">
                      <ShieldCheck className="w-5 h-5 text-gold-champagne mb-2" />
                      <span className="font-bold text-ivory">PASSWORD HASH</span>
                      <span className="text-[10px] text-silver mt-1">bcryptjs 12 Rounds Salt</span>
                    </div>

                    <div className="p-4 bg-obsidian rounded-xl border border-steelgray/50 flex flex-col items-center">
                      <Repeat className="w-5 h-5 text-gold-champagne mb-2" />
                      <span className="font-bold text-ivory">DUAL TOKENS</span>
                      <span className="text-[10px] text-silver mt-1">Access Token + Refresh Cookie</span>
                    </div>

                    <div className="p-4 bg-obsidian rounded-xl border border-steelgray/50 flex flex-col items-center">
                      <Server className="w-5 h-5 text-gold-champagne mb-2" />
                      <span className="font-bold text-ivory">RBAC PROTECTION</span>
                      <span className="text-[10px] text-silver mt-1">Role & Permission Check</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* BULLMQ BACKGROUND JOBS */}
              {activeDiagram === 'bullmq' && (
                <motion.div
                  key="bullmq"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-6"
                >
                  <div className="border-b border-steelgray/40 pb-4">
                    <h4 className="font-display font-bold text-xl text-ivory">
                      BullMQ Queues & Asynchronous Background Workers
                    </h4>
                    <p className="text-silver text-xs">
                      Decoupling heavy AI generation and document analytics from fast client API response threads.
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-center">
                    <div className="p-4 bg-obsidian rounded-xl border border-steelgray/50 flex-1 w-full">
                      <span className="block font-bold text-ivory mb-1">FAST API RESPONSE</span>
                      <span className="text-[10px] text-silver">Return 202 Accepted (&lt;15ms)</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gold-champagne" />
                    <div className="p-4 bg-gold-bronze/40 border border-gold-antique text-gold-champagne font-bold rounded-xl flex-1 w-full">
                      BULLMQ REDIS QUEUE
                    </div>
                    <ArrowRight className="w-5 h-5 text-gold-champagne" />
                    <div className="p-4 bg-obsidian rounded-xl border border-steelgray/50 flex-1 w-full">
                      <span className="block font-bold text-ivory mb-1">BACKGROUND WORKER</span>
                      <span className="text-[10px] text-silver">Heavy AI / PDF Processing</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* DEPLOYMENT PIPELINE */}
              {activeDiagram === 'deploy' && (
                <motion.div
                  key="deploy"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-6"
                >
                  <div className="border-b border-steelgray/40 pb-4">
                    <h4 className="font-display font-bold text-xl text-ivory">
                      CI / CD & Deployment Pipeline Architecture
                    </h4>
                    <p className="text-silver text-xs">
                      Automated build pipeline connecting Git repositories to cloud servers, databases, and CDNs.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-around gap-4 font-mono text-xs text-center">
                    {['LOCAL DEV', 'GIT & GITHUB', 'CI/CD PIPELINE', 'RENDER / VERCEL', 'CLOUD SERVICES'].map((step, i, arr) => (
                      <React.Fragment key={step}>
                        <div className="p-4 bg-obsidian rounded-xl border border-steelgray/50 min-w-[120px]">
                          <span className="text-gold-champagne font-bold">{step}</span>
                        </div>
                        {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-gold-champagne" />}
                      </React.Fragment>
                    ))}
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
