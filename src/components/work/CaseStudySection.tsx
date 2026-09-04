import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface CaseStudySectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

/**
 * Reusable content section for case study pages.
 */
export function CaseStudySection({ title, children, className }: CaseStudySectionProps) {
  return (
    <section className={cn('py-12', className)}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-navy mb-6">{title}</h2>
        <div className="max-w-none text-neutral-secondary">
          {children}
        </div>
      </div>
    </section>
  );
}
