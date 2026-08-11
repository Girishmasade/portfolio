import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Code, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: 'Full-Stack Developer & AI Systems Engineer',
    company: 'GM Developer / Freelance & SaaS Products',
    period: '2023 — PRESENT',
    desc: 'Architecting scalable MERN & AI microservices, RAG vector pipelines, and low latency WebSockets for enterprise clients and SaaS products.',
    highlights: [
      'Architected multi-provider AI model routing pipelines with sub-2s response latency',
      'Engineered Redis multi-tiered caching strategies reducing DB reads by 65%',
      'Built custom WebRTC signaling servers for peer-to-peer audio/video streaming',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'BullMQ', 'RAG', 'OpenAI', 'Socket.IO'],
  },
  {
    role: 'Backend & Database Systems Developer',
    company: 'Software Consultancy',
    period: '2022 — 2023',
    desc: 'Specialized in REST API development, authentication mechanisms, database modeling, and automated background queue workers.',
    highlights: [
      'Implemented JWT dual token rotation and HTTP-Only cookie security layers',
      'Designed BullMQ background worker queues processing over 50,000 daily jobs',
      'Integrated Passport.js Google & GitHub OAuth 2.0 social logins',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Passport.js', 'BullMQ', 'Cloudinary'],
  },
  {
    role: 'Frontend Engineering Specialist',
    company: 'Interactive Web Studio',
    period: '2021 — 2022',
    desc: 'Crafted interactive web applications using React, Redux Toolkit, Framer Motion, GSAP animations, and responsive design frameworks.',
    highlights: [
      'Built component libraries utilizing Tailwind CSS and Ant Design UI primitives',
      'Optimized Core Web Vitals to achieve top tier performance scores',
      'Integrated Three.js and React Three Fiber 3D visualizers',
    ],
    tech: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Three.js'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 bg-obsidian text-ivory">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-graphite border border-gold-antique/40 font-mono text-xs text-gold-champagne mb-4"
          >
            CAREER & ENGINEERING TRACK RECORD
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl text-ivory tracking-tight leading-tight mb-6"
          >
            CINEMATIC <span className="text-metallic-gold">EXPERIENCE TIMELINE.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-silver text-sm sm:text-base leading-relaxed"
          >
            A timeline of building production software across frontend, backend, AI integration, and real-time infrastructure.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-steelgray/40 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Node Ring */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-graphite border-2 border-gold-antique group-hover:border-gold-champagne group-hover:bg-gold-champagne transition-all shadow-gold-glow" />

              {/* Period Pill (Desktop floating left) */}
              <span className="hidden md:block absolute -left-36 top-1 font-mono text-xs font-bold text-gold-champagne bg-steel px-3 py-1 rounded border border-steelgray/50 text-right w-28">
                {exp.period}
              </span>

              <div className="glass-panel p-6 md:p-8 rounded-2xl border border-steelgray/50 group-hover:border-gold-antique/50 transition-all">
                <span className="md:hidden inline-block font-mono text-xs font-bold text-gold-champagne bg-steel px-2.5 py-0.5 rounded border border-steelgray/50 mb-3">
                  {exp.period}
                </span>

                <h3 className="font-display font-bold text-xl md:text-2xl text-ivory mb-1">
                  {exp.role}
                </h3>
                <h4 className="font-mono text-xs text-gold-champagne font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5" /> {exp.company}
                </h4>

                <p className="text-silver text-sm leading-relaxed mb-6">
                  {exp.desc}
                </p>

                <h5 className="font-mono text-[10px] text-gold-antique font-bold uppercase tracking-wider mb-2">
                  ENGINEERING ACHIEVEMENTS:
                </h5>
                <ul className="space-y-1.5 mb-6">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 font-mono text-xs text-silver">
                      <CheckCircle2 className="w-4 h-4 text-gold-champagne shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-obsidian border border-steelgray/40 rounded text-ivory font-mono text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
