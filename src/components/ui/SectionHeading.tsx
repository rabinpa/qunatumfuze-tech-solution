import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  titleClassName?: string;
  subtitleClassName?: string;
  className?: string;
}

/**
 * Consistent section headline + optional subhead pattern.
 * Title uses Fraunces (display), subtitle uses Inter (body).
 */
export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  titleClassName,
  subtitleClassName,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      <h2
        className={cn(
          'font-display text-h2 text-navy-primary text-balance',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-body-lg text-neutral-secondary leading-relaxed',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
