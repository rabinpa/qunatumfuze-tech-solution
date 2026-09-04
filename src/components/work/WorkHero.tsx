'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface WorkHeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

/**
 * Hero section for the work overview page.
 */
export function WorkHero({
  title = 'Our Work',
  subtitle = "See how we've helped businesses transform their digital presence and achieve real results.",
  ctaText = 'Start a Project',
  ctaLink = '/contact',
}: WorkHeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy via-navy-surface to-navy-deep overflow-hidden text-neutral-white">
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium">
            {title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-white/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="mt-8">
            <Link
              href={ctaLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky text-navy font-medium rounded-sm text-body-lg transition-all duration-200 ease-out-soft hover:bg-sky-bright hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
            >
              {ctaText}
              <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
