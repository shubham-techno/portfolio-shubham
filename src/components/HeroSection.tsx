import React from 'react';
import { motion } from 'framer-motion';
import { LivingPortrait } from './LivingPortrait';
import { ContactButton } from './ContactButton';

interface HeroSectionProps {
  onOpenContact?: () => void;
  onNavigate?: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onNavigate,
}) => {
  const scrollTo = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative h-[100dvh] min-h-[560px] sm:min-h-[640px] w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* 1. Navbar: 4 links evenly spaced with justify-between */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex justify-between items-center px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-8 z-30"
        aria-label="Main Navigation"
      >
        <button
          type="button"
          onClick={() => scrollTo('about')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none p-0"
        >
          About
        </button>
        <button
          type="button"
          onClick={() => scrollTo('services')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none p-0"
        >
          Price
        </button>
        <button
          type="button"
          onClick={() => scrollTo('projects')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none p-0"
        >
          Projects
        </button>
        <button
          type="button"
          onClick={onOpenContact ? onOpenContact : () => scrollTo('contact')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none p-0"
        >
          Contact
        </button>
      </motion.nav>

      {/* 2. Hero Heading: Massive h1 "Hi, i'm mina" placed in the back behind the 3D model portrait */}
      <div className="w-full overflow-hidden text-center relative z-0 pointer-events-none px-2">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[13.5vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-4 sm:mt-4 md:-mt-5 select-none"
        >
          Hi, i&apos;m mina
        </motion.h1>
      </div>

      {/* 3. Hero Portrait: Centered both ways on top of the heading text (z-10) */}
      <LivingPortrait />

      {/* 4. Bottom bar: Left description paragraph & Right ContactButton (z-20) */}
      <div className="w-full flex justify-between items-end pb-5 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-10 z-20 gap-3">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[130px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.68rem,1.3vw,1.5rem)] text-left"
        >
          a 3d creator driven by crafting striking and unforgettable projects
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="shrink-0"
        >
          <ContactButton onClick={onOpenContact} />
        </motion.div>
      </div>
    </section>
  );
};
