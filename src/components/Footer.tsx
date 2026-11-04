import React from 'react';
import { Sparkles, ArrowUp, Smile } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface FooterProps {
  onOpenContact: () => void;
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0C0C0C] text-[#D7E2EA] border-t border-white/10 pt-16 pb-12 px-6 sm:px-10 select-none">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Living Portrait interaction guide ribbon */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#B600A8]/20 flex items-center justify-center text-[#B600A8] shrink-0">
              <Smile className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
                Interactive Living Portrait Hints
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </h4>
              <p className="text-xs text-white/60 mt-0.5 leading-relaxed">
                Eyes follow cursor · Tap face or nose to sneeze · Tap hair to cycle colors (Pink, Blue, Blonde) · Grab &amp; pull cheek to stretch skin like dough!
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D7E2EA] hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full cursor-pointer shrink-0"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Main CTA banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-6">
          <div className="max-w-xl">
            <h3 className="hero-heading font-black uppercase text-3xl sm:text-5xl md:text-6xl leading-none">
              Have a vision in mind?
            </h3>
            <p className="text-sm sm:text-base text-[#D7E2EA]/70 mt-3 font-light leading-relaxed">
              Let&apos;s build memorable 3D visuals, motion identity systems, and interactive digital experiences.
            </p>
          </div>

          <div className="shrink-0">
            <ContactButton onClick={onOpenContact} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-xs text-white/40 uppercase tracking-widest">
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Services &amp; Price
            </button>
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Projects
            </button>
          </div>

          <p>© {new Date().getFullYear()} Mina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
