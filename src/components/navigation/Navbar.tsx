'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MobileMenu } from './MobileMenu';
import { navLinks } from '@/config/navigation';
import { useScroll } from '@/hooks/useScroll';
import { cn } from '@/lib/cn';

/**
 * Global navigation bar with scroll behavior.
 * Transparent over hero, transitions to navy on scroll.
 */
export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScroll(60);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-navy-deep/86 backdrop-blur-[14px] border-b border-white/[0.08]'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav
        className="mx-auto max-w-content px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-semibold text-neutral-white flex items-center gap-2"
            aria-label="QuantumFuze home"
          >
            <span>QuantumFuze</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-sm font-medium transition-colors duration-200 py-2',
                  pathname === link.href
                    ? 'text-sky'
                    : 'text-neutral-white/80 hover:text-neutral-white'
                )}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
                {/* Animated underline */}
                <span
                  className={cn(
                    'absolute bottom-0 left-0 w-full h-0.5 bg-sky origin-left transition-transform duration-200',
                    pathname === link.href ? 'scale-x-100' : 'scale-x-0'
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-sky text-navy font-medium rounded-sm text-sm transition-all duration-200 ease-out-soft hover:bg-sky-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onToggle={toggleMobileMenu}
            onClose={closeMobileMenu}
          />
        </div>
      </nav>
    </header>
  );
}
