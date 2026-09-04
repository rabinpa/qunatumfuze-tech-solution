import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GradientBackgroundProps {
  children: ReactNode;
  variant?: 'navy' | 'premium' | 'growth';
  className?: string;
}

/**
 * Reusable gradient/noise backdrop for dark sections.
 */
export function GradientBackground({
  children,
  variant = 'navy',
  className,
}: GradientBackgroundProps) {
  const variants = {
    navy: 'bg-gradient-to-br from-navy-primary via-navy-surface to-navy-deep',
    premium: 'bg-gradient-to-br from-navy-deep via-navy-primary to-sky-bright/20',
    growth: 'bg-gradient-to-br from-sky-primary/10 via-neutral-white to-green-soft/30',
  };

  return (
    <div className={cn('relative overflow-hidden', variants[variant], className)}>
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      {children}
    </div>
  );
}
