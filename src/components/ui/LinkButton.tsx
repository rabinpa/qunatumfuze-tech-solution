import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';

interface LinkButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  showArrow?: boolean;
  children: ReactNode;
}

/**
 * Link component styled as a button.
 * Uses Next.js Link for client-side navigation.
 */
const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      href,
      variant = 'primary',
      size = 'md',
      iconLeft: IconLeft,
      iconRight: IconRight,
      showArrow = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-sm transition-all duration-200 ease-out-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky';

    const variants = {
      primary:
        'bg-sky text-navy hover:bg-sky-bright hover:shadow-card',
      secondary:
        'bg-transparent border border-neutral-border text-neutral hover:border-sky hover:text-sky-bright',
      ghost:
        'bg-transparent text-neutral hover:bg-neutral-lightgray',
      outline:
        'bg-transparent border border-neutral-secondary text-neutral hover:border-sky hover:text-sky-bright',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-1.5',
      md: 'px-6 py-3 text-body gap-2',
      lg: 'px-8 py-4 text-body-lg gap-2.5',
    };

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {IconLeft && <IconLeft className="w-4 h-4" />}
        <span>{children}</span>
        {IconRight && <IconRight className="w-4 h-4" />}
        {showArrow && (
          <ArrowRight
            className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
            strokeWidth={2}
          />
        )}
      </Link>
    );
  }
);

LinkButton.displayName = 'LinkButton';

export { LinkButton };
