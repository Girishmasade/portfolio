import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowUpRight, Code, Globe, X, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending message
    setIsModalOpen(false);
    setShowToast(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    // Auto dismiss toast
    setTimeout(() => {
      setShowToast(false);
    }, 4500);
  };

  return (
    <footer id="contact" className="relative py-28 bg-obsidian text-ivory border-t border-steelgray/40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main CTA Container */}
        <div className="glass-panel-gold p-10 md:p-16 rounded-3xl text-center relative overflow-hidden mb-20">
          
          {/* Subtle background monogram watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <img src="/gm_logo.png" alt="Watermark Logo" className="w-96 h-96 object-contain" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs font-bold text-gold-champagne uppercase tracking-widest block mb-4"
            >
              START A CONVERSATION
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-6xl text-ivory tracking-tight leading-tight mb-6"
            >
              HAVE A PRODUCT <br />
              <span className="text-metallic-gold">WORTH BUILDING?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-silver text-sm sm:text-base leading-relaxed mb-6"
            >
              Let's turn complex ideas into scalable, intelligent, high-performance digital products.
            </motion.p>

            {/* Email display pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-obsidian border border-gold-antique/50 text-gold-champagne font-mono text-xs mb-10"
            >
              <Mail className="w-4 h-4 text-gold-champagne" />
              <span>girishmasade26@gmail.com</span>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold-gradient text-obsidian font-display font-bold text-sm tracking-wider shadow-gold-glow hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" /> START A CONVERSATION
              </button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-steel border border-steelgray text-ivory font-display font-semibold text-sm tracking-wider hover:border-gold-antique hover:text-gold-champagne transition-all flex items-center justify-center gap-2"
              >
                <Code className="w-4 h-4" /> GITHUB <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-steel border border-steelgray text-ivory font-display font-semibold text-sm tracking-wider hover:border-gold-antique hover:text-gold-champagne transition-all flex items-center justify-center gap-2"
              >
                <Globe className="w-4 h-4" /> LINKEDIN <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Footer Brand Signature */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-steelgray/40 pt-8 text-center sm:text-left">
          
          <div className="flex items-center gap-3">
            <img src="/gm_logo.png" alt="GM Developer Logo" className="w-10 h-10 object-contain" />
            <div>
              <h4 className="font-display font-bold text-sm text-ivory">GIRISH MASADE</h4>
              <p className="font-mono text-[10px] text-gold-champagne tracking-widest">
                girishmasade26@gmail.com
              </p>
            </div>
          </div>

          <div className="font-mono text-xs text-silver">
            MERN × AI × SAAS × REAL-TIME
          </div>

          <div className="font-mono text-xs text-silver/70">
            © 2026 GM DEVELOPER. ALL RIGHTS RESERVED.
          </div>

        </div>

      </div>

      {/* ---------------------------------------------------- */}
      {/* INTERACTIVE CONTACT FORM MODAL */}
      {/* ---------------------------------------------------- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/90 backdrop-blur-xl overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-graphite border border-gold-antique/60 rounded-3xl p-6 sm:p-10 text-ivory shadow-2xl my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-steel border border-steelgray/50 text-silver hover:text-gold-champagne hover:border-gold-antique transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="font-mono text-xs text-gold-champagne font-bold uppercase tracking-wider block mb-1">
                  DIRECT MESSAGE TO GIRISH MASADE
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-ivory">
                  START A CONVERSATION
                </h3>
                <p className="text-silver text-xs mt-1">
                  Send your product ideas or project requirements directly to <span className="text-gold-champagne font-mono">girishmasade26@gmail.com</span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* First & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-silver mb-1 font-semibold">
                      FIRST NAME *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Girish"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian border border-steelgray/60 text-ivory font-sans text-sm focus:outline-none focus:border-gold-antique transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-silver mb-1 font-semibold">
                      LAST NAME *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Masade"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian border border-steelgray/60 text-ivory font-sans text-sm focus:outline-none focus:border-gold-antique transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-silver mb-1 font-semibold">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian border border-steelgray/60 text-ivory font-sans text-sm focus:outline-none focus:border-gold-antique transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-silver mb-1 font-semibold">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian border border-steelgray/60 text-ivory font-sans text-sm focus:outline-none focus:border-gold-antique transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block font-mono text-xs text-silver mb-1 font-semibold">
                    SUBJECT *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="New SaaS Project / System Architecture Consultation"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian border border-steelgray/60 text-ivory font-sans text-sm focus:outline-none focus:border-gold-antique transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-xs text-silver mb-1 font-semibold">
                    PROJECT DETAILS / MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your product goals, timeline, and key technical requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-obsidian border border-steelgray/60 text-ivory font-sans text-sm focus:outline-none focus:border-gold-antique transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-2 w-full py-4 rounded-xl bg-gold-gradient text-obsidian font-display font-bold text-sm tracking-wider shadow-gold-glow hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> SEND MESSAGE NOW
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------------------------------------------------- */}
      {/* TOAST NOTIFICATION */}
      {/* ---------------------------------------------------- */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-4 bg-steel border-2 border-gold-antique p-5 rounded-2xl shadow-2xl max-w-md text-ivory"
          >
            <div className="w-10 h-10 rounded-xl bg-gold-bronze/40 border border-gold-champagne flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6 text-gold-champagne" />
            </div>
            <div>
              <h5 className="font-display font-bold text-sm text-ivory">
                MESSAGE SENT SUCCESSFULLY!
              </h5>
              <p className="font-mono text-xs text-silver mt-0.5">
                Thank you! Girish will review your request and get back to <span className="text-gold-champagne font-semibold">girishmasade26@gmail.com</span> shortly.
              </p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="text-silver hover:text-ivory ml-auto"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
