'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * Final CTA section prompting user action.
 */
export function FinalCTA() {
  return (
    <section className="py-24 bg-navy text-neutral-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium mb-4">
            Have an idea worth building?
          </h2>
          <p className="text-lg text-neutral-white/70 mb-8 max-w-2xl mx-auto">
            Let&apos;s turn it into a website, a campaign, a brand, or an app.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky text-navy font-medium rounded-sm text-body-lg transition-all duration-200 ease-out-soft hover:bg-sky-bright hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
            >
              Start a Project
              <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-neutral-white/20 text-neutral-white font-medium rounded-sm text-body-lg transition-all duration-200 ease-out-soft hover:border-sky hover:text-sky focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
            >
              Talk to Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
