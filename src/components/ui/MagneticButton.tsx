'use client';

import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Primary CTA button with magnetic hover effect.
 * The button subtly moves toward the cursor on hover.
 * Respects prefers-reduced-motion.
 */
export function MagneticButton({ children, className, onClick }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (reducedMotion || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-sky-primary text-navy-primary font-medium rounded-sm',
        'transition-all duration-200 ease-out',
        'hover:bg-sky-bright hover:shadow-card',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-primary',
        className
      )}
      style={{
        transform: reducedMotion ? 'none' : `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <span>{children}</span>
      <ArrowRight
        className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
        strokeWidth={2}
      />
    </button>
  );
}
