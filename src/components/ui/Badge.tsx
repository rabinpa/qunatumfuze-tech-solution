import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface BadgeProps {
  children: ReactNode;
  variant?: 'sky' | 'green' | 'navy' | 'gray';
  size?: 'sm' | 'md';
  className?: string;
}

/**
 * Small badge/tag component for labels and status indicators.
 * Pill-shaped with rounded corners.
 */
export function Badge({
  children,
  variant = 'gray',
  size = 'sm',
  className,
}: BadgeProps) {
  const variants = {
    sky: 'bg-sky-pale text-sky-bright',
    green: 'bg-green-soft text-green-deep',
    navy: 'bg-navy-surface text-sky',
    gray: 'bg-neutral-lightgray text-neutral-secondary',
  };

  const sizes = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-small',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
