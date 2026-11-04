import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Mail, Send, MapPin, Globe } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '3D Modeling',
    budget: '$5k - $15k',
    message: '',
  });

  const email = 'mina.3dcreator@portfolio.art';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#121212] border border-[#D7E2EA]/20 rounded-[32px] sm:rounded-[40px] shadow-2xl p-6 sm:p-8 md:p-10 z-10 my-auto text-[#D7E2EA]"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title */}
          <div className="mb-6">
            <span className="text-xs uppercase font-light tracking-widest text-[#D7E2EA]/60">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
              Let&apos;s Build Together
            </h2>
            <p className="text-sm text-[#D7E2EA]/70 mt-2 leading-relaxed">
              Available for select 3D direction, character/environment modeling, and brand commissions.
            </p>
          </div>

          {/* Quick email copy block */}
          <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#B600A8] to-[#7621B0] flex items-center justify-center text-white">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-white/50">Direct Email</span>
                <span className="text-sm font-medium text-white">{email}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center gap-3 bg-white/[0.02] rounded-2xl border border-white/5">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase">Message Dispatched!</h3>
              <p className="text-sm text-white/70 max-w-sm">
                Thank you! Mina reviews incoming inquiries within 24-48 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase font-medium tracking-wider text-white/70">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Chen"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#B600A8]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase font-medium tracking-wider text-white/70">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@studio.design"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#B600A8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase font-medium tracking-wider text-white/70">
                    Service Focus
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1e1e1e] border border-white/10 text-white text-sm focus:outline-none focus:border-[#B600A8]"
                  >
                    <option value="3D Modeling">01 · 3D Modeling</option>
                    <option value="Rendering">02 · Rendering</option>
                    <option value="Motion Design">03 · Motion Design</option>
                    <option value="Branding">04 · Branding</option>
                    <option value="Web Design">05 · Web Design</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase font-medium tracking-wider text-white/70">
                    Project Scale
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1e1e1e] border border-white/10 text-white text-sm focus:outline-none focus:border-[#B600A8]"
                  >
                    <option value="< $5k">&lt; $5,000</option>
                    <option value="$5k - $15k">$5,000 – $15,000</option>
                    <option value="$15k - $30k">$15,000 – $30,000</option>
                    <option value="$30k+">$30,000+</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase font-medium tracking-wider text-white/70">
                  Project Brief & Timeline
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your brand vision, target timeline, and references..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#B600A8] resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-3.5 rounded-full text-white font-medium uppercase tracking-widest text-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 active:scale-98"
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                  outline: '2px solid white',
                  outlineOffset: '-3px',
                }}
              >
                <span>Send Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Footer location notes */}
          <div className="flex items-center justify-between text-[11px] text-white/40 uppercase tracking-widest mt-6 pt-4 border-t border-white/5">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> Seoul, South Korea
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> Remote Worldwide · KST (UTC+9)
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
