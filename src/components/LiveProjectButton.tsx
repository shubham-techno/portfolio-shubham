import React from 'react';
import { Magnet } from './Magnet';
import { ExternalLink } from 'lucide-react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
  useMagnet?: boolean;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  onClick,
  className = '',
  useMagnet = true,
}) => {
  const buttonElement = (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer select-none active:scale-95 ${className}`}
    >
      <span>Live Project</span>
      <ExternalLink className="w-4 h-4 opacity-70" />
    </button>
  );

  if (useMagnet) {
    return <Magnet strength={3}>{buttonElement}</Magnet>;
  }

  return buttonElement;
};
