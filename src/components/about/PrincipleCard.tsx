'use client';

import { motion } from 'framer-motion';

interface Principle {
  title: string;
  description: string;
}

interface PrincipleCardProps {
  principle: Principle;
  index: number;
}

/**
 * Numbered working principle item for the about page.
 */
export function PrincipleCard({ principle, index }: PrincipleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-pale text-sky-bright flex items-center justify-center text-sm font-bold">
          {index + 1}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-navy">{principle.title}</h3>
          <p className="text-neutral-secondary">{principle.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
