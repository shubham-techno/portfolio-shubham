import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const LivingPortrait: React.FC = () => {
  useEffect(() => {
    // Ensure WebGL living portrait engine kicks off once the element mounts
    if (typeof window !== 'undefined' && (window as unknown as { __initLivingPortrait?: () => void }).__initLivingPortrait) {
      (window as unknown as { __initLivingPortrait?: () => void }).__initLivingPortrait?.();
    }
  }, []);

  return (
    <div
      className="hero-portrait-wrap pointer-events-auto"
      id="magnetWrap"
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        touchAction: 'pan-y',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="hero-portrait-inner"
        id="magnetInner"
        style={{ '--fade-y': '30px', position: 'relative' } as React.CSSProperties}
        data-delay="600"
      >
        <img
          id="faceFallback"
          src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261031_040619_2f6f349e-a4a7-40db-8e9b-03b6acd8b99a.png&w=1024&q=92"
          alt="Portrait of Mina"
          crossOrigin="anonymous"
        />
        <canvas id="faceGl" aria-hidden="true" />
        <div id="faceProps" aria-hidden="true">
          <svg id="faceFly" viewBox="0 0 32 32">
            <path
              className="wing"
              d="M15 15C12 9.500 4.500 8.500 2 13c2.500 4.500 10 4.500 13 2z"
            />
            <path
              className="wing r"
              d="M17 15c3-5.500 10.500-6.500 13-2-2.500 4.500-10 4.500-13 2z"
            />
            <ellipse cx="16" cy="19.500" rx="4" ry="6.500" />
            <circle cx="16" cy="11.500" r="3.300" />
          </svg>
          <svg id="faceHand" viewBox="0 0 32 32">
            <path
              className="open"
              d="M10.500 16.500V8.200a1.800 1.800 0 0 1 3.600 0V14v-8a1.800 1.800 0 0 1 3.600 0V14 7a1.800 1.800 0 0 1 3.600 0v8-5a1.800 1.800 0 0 1 3.600 0v10.500c0 5-3.400 8.500-8.400 8.500-3.600 0-5.700-1.600-7.600-4.600l-3.500-5.600c-.6-1 .1-2.200 1.200-2.400 1-.2 1.900.2 2.600 1z"
            />
            <path
              className="grab"
              d="M10.500 17v-3.300a1.800 1.800 0 0 1 3.600 0V14v-1.800a1.800 1.800 0 0 1 3.600 0V14v-1.300a1.800 1.800 0 0 1 3.600 0V14v-.3a1.800 1.800 0 0 1 3.600 0v6.800c0 5-3.400 8.500-8.400 8.500-3.600 0-5.700-1.600-7.600-4.600l-2.300-3.700c-.6-1 .1-2.200 1.200-2.400 1-.2 1.900.2 2.700 1z"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};
