'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { capabilities } from '@/data/capabilities';
import { Rocket, Users, DollarSign, LifeBuoy } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Rocket,
  Users,
  DollarSign,
  LifeBuoy,
};

/**
 * Capability section showcasing key differentiators.
 */
export function CapabilitySection() {
  return (
    <section className="py-24 bg-neutral-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="One team for your entire digital presence."
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = iconMap[capability.icon];
            return (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full" padding="lg">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-xl bg-sky-pale flex items-center justify-center text-sky-bright mb-4">
                      {Icon && <Icon size={28} strokeWidth={1.5} />}
                    </div>
                    <h3 className="text-lg font-semibold text-navy mb-2">{capability.title}</h3>
                    <p className="text-sm text-neutral-secondary">{capability.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
