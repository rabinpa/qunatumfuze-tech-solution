'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';

interface CaseStudyHeroProps {
  title: string;
  category: string;
  tags: string[];
  description: string;
}

/**
 * Hero section for case study detail pages.
 */
export function CaseStudyHero({ title, category, tags, description }: CaseStudyHeroProps) {
  return (
    <section className="relative pt-32 pb-16 bg-gradient-to-br from-navy via-navy-surface to-navy-deep overflow-hidden text-neutral-white">
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="sky">{category}</Badge>
            {tags.slice(1).map((tag) => (
              <Badge key={tag} variant="gray">{tag}</Badge>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-neutral-white">
            {title}
          </h1>
          <p className="mt-4 text-lg text-neutral-white/70 max-w-2xl">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
