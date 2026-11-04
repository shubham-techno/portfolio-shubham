import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

interface AboutSectionProps {
  onOpenContact?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden select-none"
    >
      {/* Corner 3D Decorative Assets */}
      {/* 1. Top-Left: Moon icon */}
      <div className="absolute top-[3%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-10">
        <FadeIn delay={0.1} duration={0.9} x={-80} y={0}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon Asset"
            loading="lazy"
            crossOrigin="anonymous"
            className="w-[70px] sm:w-[120px] md:w-[160px] lg:w-[210px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] filter brightness-95 hover:scale-105 transition-transform"
          />
        </FadeIn>
      </div>

      {/* 2. Bottom-Left: 3D Object */}
      <div className="absolute bottom-[4%] left-[2%] sm:left-[6%] md:left-[10%] pointer-events-none z-10">
        <FadeIn delay={0.25} duration={0.9} x={-80} y={0}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Sculpture Asset"
            loading="lazy"
            crossOrigin="anonymous"
            className="w-[60px] sm:w-[100px] md:w-[140px] lg:w-[180px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] filter brightness-95 hover:scale-105 transition-transform"
          />
        </FadeIn>
      </div>

      {/* 3. Top-Right: Lego icon */}
      <div className="absolute top-[3%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-10">
        <FadeIn delay={0.15} duration={0.9} x={80} y={0}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Asset"
            loading="lazy"
            crossOrigin="anonymous"
            className="w-[70px] sm:w-[120px] md:w-[160px] lg:w-[210px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] filter brightness-95 hover:scale-105 transition-transform"
          />
        </FadeIn>
      </div>

      {/* 4. Bottom-Right: 3D Group */}
      <div className="absolute bottom-[4%] right-[2%] sm:right-[6%] md:right-[10%] pointer-events-none z-10">
        <FadeIn delay={0.3} duration={0.9} x={80} y={0}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Shapes Asset"
            loading="lazy"
            crossOrigin="anonymous"
            className="w-[75px] sm:w-[130px] md:w-[170px] lg:w-[220px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] filter brightness-95 hover:scale-105 transition-transform"
          />
        </FadeIn>
      </div>

      {/* Main Centered Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading & text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="mt-10 sm:mt-14 md:mt-16">
          <AnimatedText text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!" />
        </div>

        {/* Gap between text block and button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.2} y={20}>
            <ContactButton onClick={onOpenContact} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
