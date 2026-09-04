'use client';

import { useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { navLinks } from '@/config/navigation';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

/**
 * Full-screen mobile navigation overlay.
 * Features: ARIA attributes, focus management, keyboard support, scroll locking.
 */
export function MobileMenu({ isOpen, onToggle, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  // Focus trap and return focus on close
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }

      // Focus trap
      if (e.key === 'Tab' && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        ref={closeButtonRef}
        onClick={onToggle}
        className="inline-flex items-center justify-center p-2 text-neutral-white rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky md:hidden"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={cn(
          'fixed inset-0 z-40 flex flex-col bg-navy md:hidden',
          'transition-opacity duration-300 ease-out-soft',
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
          reducedMotion && !isOpen && 'transition-none'
        )}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between p-6">
          <span className="font-display text-xl text-neutral-white">QuantumFuze</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 flex flex-col items-center justify-center px-6" aria-label="Mobile navigation">
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={cn(
                  reducedMotion ? '' : 'animate-slide-up'
                )}
                style={
                  !reducedMotion
                    ? { animationDelay: `${index * 50}ms`, animationFillMode: 'both' }
                    : undefined
                }
              >
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className={cn(
                    'text-2xl font-medium transition-colors duration-200',
                    pathname === link.href
                      ? 'text-sky'
                      : 'text-neutral-white/80 hover:text-neutral-white'
                  )}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="p-6">
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="inline-flex items-center justify-center w-full px-8 py-4 bg-sky text-navy font-medium rounded-sm text-body-lg transition-all duration-200 ease-out-soft hover:bg-sky-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </>
  );
}
