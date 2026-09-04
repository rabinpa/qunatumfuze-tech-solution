'use client';

import { type ReactNode } from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from './Footer';

interface PageShellProps {
  children: ReactNode;
}

/**
 * Global page shell wrapping all pages.
 * Includes Navbar, main content area, and Footer.
 * Provides skip-to-content link for accessibility.
 */
export function PageShell({ children }: PageShellProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip to content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sky focus:text-navy focus:rounded-sm focus:font-medium"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1" role="main" aria-label="Main content">
        {children}
      </main>

      <Footer />
    </div>
  );
}
