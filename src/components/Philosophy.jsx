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
    <section className="py-28 bg-graphite border-t border-b border-steelgray/40 text-ivory overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-gold-champagne tracking-widest uppercase">
            ENGINEERING CREED & STANDARDS
          </span>
        </div>

        <div className="flex flex-col gap-20 items-center justify-center">
          {statements.map((st, idx) => (
            <motion.div
              key={st.line1}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <h3 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none text-ivory">
                {st.line1}
              </h3>
              <h3 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none text-metallic-gold">
                {st.line2}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
