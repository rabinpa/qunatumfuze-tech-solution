import { type ReactNode, type ElementType } from 'react';
import { cn } from '@/lib/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  maxWidth?: 'default' | 'narrow' | 'wide' | 'full';
}

/**
 * Responsive container component with max-width constraints.
 * Default max-width: 1280px with responsive padding.
 */
export function Container({
  children,
  className,
  as: Component = 'div',
  maxWidth = 'default',
}: ContainerProps) {
  const maxWidthStyles = {
    default: 'max-w-content',
    narrow: 'max-w-prose',
    wide: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  return (
    <Component
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        maxWidthStyles[maxWidth],
        className
      )}
    >
      {children}
    </Component>
  );
}
