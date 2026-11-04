import React, { useRef, useState, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  strength?: number; // Divisor for transform distance, default 3.5
  padding?: number; // Proximity trigger threshold beyond element bounds
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  strength = 3.5,
  padding = 50,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      const withinX = Math.abs(distX) < rect.width / 2 + padding;
      const withinY = Math.abs(distY) < rect.height / 2 + padding;

      if (withinX && withinY) {
        setIsHovered(true);
        setPosition({
          x: distX / strength,
          y: distY / strength,
        });
      } else if (isHovered) {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered, padding, strength]);

  const style: React.CSSProperties = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: isHovered
      ? 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      : 'transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)',
    willChange: 'transform',
    display: 'inline-block',
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};
