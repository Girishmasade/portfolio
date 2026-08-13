import React from 'react';
import { motion } from 'framer-motion';

const statements = [
  { line1: 'PRETTY UI', line2: 'IS NOT ENOUGH.' },
  { line1: 'SYSTEMS', line2: 'MUST SCALE.' },
  { line1: 'AI INTELLIGENCE', line2: 'MUST BE MANAGED.' },
  { line1: 'DATA', line2: 'MUST MOVE FAST.' },
  { line1: 'REAL-TIME', line2: 'MUST FEEL INSTANT.' },
  { line1: 'EXPERIENCES', line2: 'MUST FEEL SIMPLE.' },
];

export default function Philosophy() {
  return (
    <section className="py-12 sm:py-32 bg-graphite border-t border-b border-steelgray/40 text-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-8 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] sm:text-xs text-gold-champagne font-bold tracking-widest uppercase bg-steel/60 px-3.5 sm:px-4 py-1.5 rounded-lg border border-steelgray/40 shadow-sm"
          >
            THE DIGITAL MANIFESTO & ENGINEERING CREED
          </motion.span>
        </div>

        <div className="flex flex-col gap-8 sm:gap-24 items-center justify-center">
          {statements.map((st, idx) => (
            <motion.div
              key={st.line1}
              initial={{ opacity: 0, scale: 0.94, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group w-full"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-display font-black text-2xl xs:text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight text-ivory group-hover:text-gold-light transition-colors duration-300 break-words"
              >
                {st.line1}
              </motion.h3>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-black text-2xl xs:text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight text-metallic-gold drop-shadow-lg break-words"
              >
                {st.line2}
              </motion.h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

