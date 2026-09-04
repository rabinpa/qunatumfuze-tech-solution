'use client';

import { motion } from 'framer-motion';

interface Value {
  title: string;
  description: string;
}

interface ValueCardProps {
  value: Value;
  index: number;
}

/**
 * Value card for the about page.
 */
export function ValueCard({ value, index }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="bg-neutral-white p-6 rounded-md border border-neutral-border h-full hover:shadow-card transition-shadow">
        <h3 className="text-lg font-semibold text-navy mb-2">{value.title}</h3>
        <p className="text-neutral-secondary">{value.description}</p>
      </div>
    </motion.div>
  );
}
