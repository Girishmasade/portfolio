import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Sparkles, Cpu, Radio, Shield, LineChart, FolderKanban } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';
import MagneticButton from '../ui/MagneticButton';
import Scroll3DEffect from '../ui/Scroll3DEffect';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

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
    githubUrl: 'https://github.com/Girishmasade/Ai-chatBot-',
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
    githubUrl: 'https://github.com/Girishmasade/MoonChat-AI',
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
    githubUrl: 'https://github.com/Girishmasade/Ai-Finance-Management',
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
    githubUrl: 'https://github.com/Girishmasade/task-management-system',
  },
];

function ProjectCard({ project, idx, setSelectedProject }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, tx: 0, ty: 0 });
  const Icon = project.icon;

  const handlePointerMove = (e) => {
    if (e.pointerType !== 'mouse' || !cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTransform({
      rotateX: -y * 8,
      rotateY: x * 8,
      tx: x * 10,
      ty: y * 10,
    });
  };

  const handlePointerLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, tx: 0, ty: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: idx * 0.1 }}
      onClick={() => setSelectedProject(project)}
      style={{
        perspective: 1200,
      }}
      className="anime-reveal glass-panel-gold p-6 sm:p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:border-gold-champagne transition-all duration-300 cursor-pointer"
    >
      <motion.div
        animate={{
          rotateX: transform.rotateX,
          rotateY: transform.rotateY,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="preserve-3d"
      >
        {/* Layer 1: Background Project Number */}
        <span
          className="absolute top-4 right-6 sm:right-8 font-display font-black text-6xl sm:text-8xl md:text-9xl text-steelgray/10 group-hover:text-gold-antique/15 transition-colors pointer-events-none select-none"
          style={{ transform: `translate3d(${transform.tx * -0.5}px, ${transform.ty * -0.5}px, 0)` }}
        >
          {project.num}
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Project Info */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Layer 3: Title & Category */}
            <div
              style={{ transform: `translate3d(${transform.tx * 0.4}px, ${transform.ty * 0.4}px, 10px)` }}
              className="transition-transform duration-100"
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4 flex-wrap">
                <span className="px-3 py-1 bg-gold-bronze/40 text-gold-champagne rounded font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="font-mono text-xs text-silver">PROJECT {project.num}</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-ivory mb-2 group-hover:text-gold-champagne transition-colors">
                {project.title}
              </h3>
              <p className="text-gold-champagne font-mono text-xs sm:text-sm font-semibold mb-4">
                {project.subtitle}
              </p>
              <p className="text-silver text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-sans">
                {project.description}
              </p>
            </div>

            {/* Layer 4: Tech Metadata & Highlights */}
            <div
              style={{ transform: `translate3d(${transform.tx * 0.2}px, ${transform.ty * 0.2}px, 5px)` }}
              className="transition-transform duration-100"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 sm:mb-8">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 font-mono text-xs text-silver">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-champagne mt-1.5 shrink-0" />
                    {h}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                {project.stack.map((st) => (
                  <span key={st} className="px-2.5 sm:px-3 py-1 bg-obsidian/80 border border-steelgray/60 rounded-lg text-ivory font-mono text-[11px] sm:text-xs">
                    {st}
                  </span>
                ))}
              </div>
            </div>

            {/* Layer 5: Magnetic Action Buttons */}
            <div 
              style={{ transform: `translate3d(${transform.tx * 0.6}px, ${transform.ty * 0.6}px, 15px)` }}
              className="flex flex-wrap items-center gap-3"
            >
              <MagneticButton
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(project);
                }}
                maxOffset={10}
                className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-xl bg-steel border border-gold-antique/50 text-gold-champagne font-display font-bold text-xs tracking-wider shadow-gold-glow hover:bg-gold-gradient hover:text-obsidian transition-all duration-300 flex items-center justify-center gap-2"
              >
                EXPLORE CASE STUDY & ARCHITECTURE <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl bg-graphite border border-steelgray text-ivory font-mono font-bold text-xs tracking-wider hover:border-gold-antique hover:text-gold-champagne hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <GithubIcon className="w-4 h-4 text-gold-champagne" /> GITHUB
                </a>
              )}
            </div>
          </div>

          {/* Layer 2: Right 3D Visual Box with Image Hover Parallax */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div
              style={{ transform: `translate3d(${transform.tx * 0.8}px, ${transform.ty * 0.8}px, 20px)` }}
              className="w-full h-48 sm:h-64 md:h-80 rounded-2xl bg-obsidian border border-steelgray/50 relative overflow-hidden flex items-center justify-center p-6 group-hover:border-gold-antique/70 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-[radial-gradient(#363A42_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-steel border border-gold-antique/60 flex items-center justify-center mb-4 shadow-gold-glow group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
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
    </motion.div>
  );
}

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
          {projectsData.map((project, idx) => (
            <Scroll3DEffect key={project.id} rotateAmount={8}>
              <ProjectCard
                project={project}
                idx={idx}
                setSelectedProject={setSelectedProject}
              />
            </Scroll3DEffect>
          ))}
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

