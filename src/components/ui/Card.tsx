import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'white' | 'navy-surface' | 'gradient';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * Base card component with optional hover lift effect.
 * Variants: white (default), navy-surface (dark), gradient (accent).
 * Hover: lifts 3-4px, soft shadow, gradient sliver reveal.
 */
export function Card({
  children,
  className,
  variant = 'white',
  hover = false,
  padding = 'md',
}: CardProps) {
  const paddingStyles = {
    none: '',
    sm: 'p-4 md:p-5',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-10',
  };

  const variantStyles = {
    white: 'bg-neutral-white border-neutral-border',
    'navy-surface': 'bg-navy-surface border-navy-surface text-neutral-white',
    gradient: 'bg-gradient-to-br from-sky-pale to-green-soft/30 border-transparent',
  };

  return (
    <div
      className={cn(
        'relative rounded-md border overflow-hidden',
        paddingStyles[padding],
        variantStyles[variant],
        hover && [
          'transition-all duration-300 ease-out-soft',
          'hover:-translate-y-1 hover:shadow-card',
          'before:absolute before:top-0 before:left-0 before:w-full before:h-[3px]',
          'before:bg-gradient-to-r before:from-sky before:to-green',
          'before:opacity-0 before:transition-opacity before:duration-300',
          'hover:before:opacity-100',
        ],
        className
      )}
    >
      {children}
    </div>
  );
}
