'use client';

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', showArrow = false, className, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-sm transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-primary disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary:
        'bg-sky-primary text-navy-primary hover:bg-sky-bright hover:shadow-card',
      secondary:
        'bg-transparent border border-neutral-border text-neutral-text hover:border-sky-primary hover:text-sky-bright',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-1.5',
      md: 'px-6 py-3 text-body gap-2',
      lg: 'px-8 py-4 text-body-lg gap-2.5',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span>{children}</span>
        {showArrow && (
          <ArrowRight
            className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
            strokeWidth={2}
          />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
