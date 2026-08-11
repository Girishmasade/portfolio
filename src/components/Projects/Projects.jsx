import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Sparkles, Cpu, Radio, Shield, LineChart, FolderKanban } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';

const projectsData = [
  {
    id: 'gochat',
    num: '01',
    title: 'GOCHAT AI',
    subtitle: 'Enterprise Generative AI Platform',
    category: 'AI & INTELLIGENCE ARCHITECTURE',
    description: 'Multi-service AI ecosystem featuring chat, image generation, business plan generator, and media production with RAG context grounding and multi-provider failover.',
    highlights: [
      'Multi-provider LLM routing (OpenAI GPT-4o & Google Gemini 1.5)',
      'MongoDB Vector Search RAG document knowledge grounding',
      'Redis sub-millisecond query response caching',
      'BullMQ asynchronous queue for long-running AI assets',
    ],
    stack: ['React', 'Redux Toolkit', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'Redis', 'BullMQ', 'RAG', 'OpenAI', 'Gemini'],
    icon: Sparkles,
  },
  {
    id: 'moonchat',
    num: '02',
    title: 'MOONCHAT AI',
    subtitle: 'Real-Time AI Communication Platform',
    category: 'REAL-TIME & WEBSOCKET SYSTEMS',
    description: 'Sub-100ms real-time messaging, AI assistant co-piloting, and direct WebRTC peer audio/video media mesh streaming.',
    highlights: [
      'Socket.IO WebSocket room broadcasting & live typing indicators',
      'WebRTC P2P signaling server connection',
      'Passport.js Google & GitHub OAuth 2.0 integration',
      'JWT token handshake security for active connections',
    ],
    stack: ['React', 'Ant Design', 'Socket.IO', 'WebRTC', 'Node.js', 'Express', 'JWT', 'Google OAuth', 'GitHub OAuth'],
    icon: Radio,
  },
  {
    id: 'finance',
    num: '03',
    title: 'FINANCE MANAGEMENT SYSTEM',
    subtitle: 'Scalable Financial Dashboard Ecosystem',
    category: 'ENTERPRISE SAAS DATA ENGINE',
    description: 'High throughput financial analytics engine tracking multi-currency spending, automated recurring subscriptions, and budget predictions.',
    highlights: [
      'Aggregated Mongo analytics pipeline with fast indexing',
      'Recharts interactive trend visualizations',
      'RBAC user privilege controls',
      'Exportable CSV and PDF financial statement workers',
    ],
    stack: ['React', 'Redux', 'Recharts', 'Node.js', 'Express', 'MongoDB', 'JWT', 'bcryptjs'],
    icon: LineChart,
  },
  {
    id: 'task-system',
    num: '04',
    title: 'TASK MANAGEMENT SYSTEM',
    subtitle: 'Enterprise Workflow & Operations Platform',
    category: 'WORKFLOW AUTOMATION & ROLES',
    description: 'Role-based task management with live status boards, team admin hierarchies, and real-time activity feeds.',
    highlights: [
      'Role-Based Access Control (Admin, Employee, Auditor)',
      'Socket.IO real-time kanban board synchronizer',
      'Cloudinary asset attachment uploads',
      'Rate-limited REST endpoints',
    ],
    stack: ['React', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Cloudinary'],
    icon: FolderKanban,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-28 bg-graphite border-t border-steelgray/40 text-ivory">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="anime-reveal text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-steel border border-steelgray/50 font-mono text-xs text-gold-champagne mb-4">
            ENGINEERING CASE STUDIES & PRODUCTS
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
            SELECTED <span className="text-metallic-gold">SYSTEMS WORK.</span>
          </h2>

          <p className="text-silver text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Detailed technical case studies showcasing scalable AI platforms, real-time socket engines, automated analytics, and robust cloud services.
          </p>
        </div>

        {/* Projects Showcase Stack */}
        <div className="flex flex-col gap-12">
          {projectsData.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="anime-reveal glass-panel-gold p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:border-gold-champagne/80 transition-all duration-500"
              >
                {/* Large Background Project Number */}
                <span className="absolute top-4 right-8 font-display font-black text-8xl md:text-9xl text-steelgray/10 group-hover:text-gold-antique/10 transition-colors pointer-events-none select-none">
                  {project.num}
                </span>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  
                  {/* Left Project Info */}
                  <div className="lg:col-span-7 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-gold-bronze/40 text-gold-champagne rounded font-mono text-xs font-bold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs text-silver">PROJECT {project.num}</span>
                    </div>

                    <h3 className="font-display font-black text-3xl md:text-4xl text-ivory mb-2 group-hover:text-gold-champagne transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gold-champagne font-mono text-sm font-semibold mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-silver text-sm md:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 font-mono text-xs text-silver">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-champagne mt-1.5 shrink-0" />
                          {h}
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.stack.map((st) => (
                        <span key={st} className="px-3 py-1 bg-obsidian/80 border border-steelgray/60 rounded-lg text-ivory font-mono text-xs">
                          {st}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="self-start px-6 py-3 rounded-xl bg-steel border border-gold-antique/50 text-gold-champagne font-display font-bold text-xs tracking-wider shadow-gold-glow hover:bg-gold-gradient hover:text-obsidian transition-all duration-300 flex items-center gap-2"
                    >
                      EXPLORE CASE STUDY & ARCHITECTURE <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Right Abstract 3D Architecture Visual Box */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="w-full h-64 md:h-80 rounded-2xl bg-obsidian border border-steelgray/50 relative overflow-hidden flex items-center justify-center p-6 group-hover:border-gold-antique/60 transition-colors">
                      {/* Grid background effect */}
                      <div className="absolute inset-0 bg-[radial-gradient(#363A42_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
                      
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-steel border border-gold-antique/60 flex items-center justify-center mb-4 shadow-gold-glow group-hover:scale-110 transition-transform">
                          <Icon className="w-8 h-8 text-gold-champagne" />
                        </div>
                        <span className="font-mono text-xs text-gold-champagne uppercase font-bold tracking-widest mb-1">
                          SYSTEM VISUALIZER
                        </span>
                        <span className="font-mono text-[10px] text-silver max-w-xs">
                          Connected microservice nodes & data pipeline
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
