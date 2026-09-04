import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'sky' | 'green' | 'navy';
  className?: string;
}

/**
 * Small tag/badge component. Never fully pill-shaped per design system.
 */
export function Tag({ children, variant = 'default', className }: TagProps) {
  const variants = {
    default: 'bg-neutral-lightgray text-neutral-secondary',
    sky: 'bg-sky-pale text-sky-bright',
    green: 'bg-green-soft text-green-deep',
    navy: 'bg-navy-surface text-sky-primary',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-sm',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
