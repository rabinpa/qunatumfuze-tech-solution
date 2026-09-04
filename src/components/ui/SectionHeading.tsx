import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  showLine?: boolean;
  titleClassName?: string;
  subtitleClassName?: string;
  className?: string;
}

/**
 * Consistent section headline + optional subhead pattern.
 * Title uses display font, subtitle uses body font.
 * Optional decorative line on left or center.
 */
export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  showLine = true,
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
      {showLine && (
        <div
          className={cn(
            'w-12 h-1 bg-gradient-to-r from-sky to-green rounded-full mb-4',
            align === 'center' && 'mx-auto'
          )}
        />
      )}
      <h2
        className={cn(
          'font-display text-h2 text-navy text-balance',
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
