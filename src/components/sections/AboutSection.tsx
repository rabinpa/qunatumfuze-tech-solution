'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { philosophyPrinciples } from '@/data/philosophy';
import { Users, Heart, BarChart } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Users,
  Heart,
  BarChart,
};

/**
 * About/Philosophy section with company values.
 */
export function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-navy-deep via-navy to-sky-bright/20 text-neutral-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Great digital presence shouldn't take four different agencies."
          className="mb-16"
          titleClassName="text-neutral-white"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {philosophyPrinciples.map((principle, index) => {
            const Icon = iconMap[principle.icon];
            return (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="navy-surface" className="h-full text-center" padding="lg">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-sky/10 flex items-center justify-center text-sky mb-4">
                    {Icon && <Icon size={28} strokeWidth={1.5} />}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-white mb-2">{principle.title}</h3>
                  <p className="text-neutral-white/70 text-sm">{principle.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
