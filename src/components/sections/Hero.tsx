'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { LogoShowcase } from '@/components/animations/LogoShowcase';

/**
 * Hero section with animated background, headline, and CTAs.
 */
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy via-navy-surface to-navy-deep">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky/20 rounded-full blur-3xl animate-glow-pulse" />

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-medium text-neutral-white leading-tight">
              Your growth partner for{' '}
              <span className="text-sky">everything digital</span>.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-white/70 max-w-xl">
              QuantumFuze builds websites, runs marketing campaigns that convert, designs visuals
              people remember, and ships mobile apps — all under one roof.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-sky text-navy font-medium rounded-sm text-body-lg transition-all duration-200 ease-out-soft hover:bg-sky-bright hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
              >
                Start a Project
                <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-8 py-4 border border-neutral-white/20 text-neutral-white font-medium rounded-sm text-body-lg transition-all duration-200 ease-out-soft hover:border-sky hover:text-sky focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
              >
                Explore Our Work
              </Link>
            </div>
          </motion.div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <LogoShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
