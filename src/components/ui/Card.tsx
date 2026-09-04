import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

/**
 * Base card component with optional hover lift effect.
 * Hover: lifts 3-4px, soft shadow, gradient sliver reveal.
 */
export function Card({ children, className, hover = false, padding = 'md' }: CardProps) {
  const paddingStyles = {
    sm: 'p-4 md:p-5',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-10',
  };

  return (
    <div
      className={cn(
        'relative rounded-md border border-neutral-border bg-neutral-white overflow-hidden',
        paddingStyles[padding],
        hover && [
          'transition-all duration-300 ease-out-soft',
          'hover:-translate-y-1 hover:shadow-card',
          'before:absolute before:top-0 before:left-0 before:w-full before:h-[3px]',
          'before:bg-gradient-to-r before:from-sky-primary before:to-green-primary',
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
