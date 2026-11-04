import React from 'react';
import { Magnet } from './Magnet';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  useMagnet?: boolean;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  className = '',
  useMagnet = true,
}) => {
  const buttonElement = (
    <button
      type="button"
      onClick={onClick}
      className={`contact-btn btn-contact-custom inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base cursor-pointer select-none active:scale-95 transition-all duration-200 ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      <span>Contact Me</span>
    </button>
  );

  if (useMagnet) {
    return <Magnet strength={3}>{buttonElement}</Magnet>;
  }

  return buttonElement;
};
