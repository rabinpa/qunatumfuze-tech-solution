'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { processStages } from '@/data/process';
import { Lightbulb, Target, PenTool as PenToolIcon, Code, TrendingUp } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Lightbulb,
  Target,
  PenTool: PenToolIcon,
  Code,
  TrendingUp,
};

/**
 * Process section showcasing the 5-stage workflow.
 */
export function ProcessSection() {
  return (
    <section className="py-24 bg-neutral-offwhite">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="A better way to build." className="mb-16" />

        <div className="grid md:grid-cols-5 gap-8">
          {processStages.map((step, index) => {
            // Use different icons based on step id
            const iconName = ['Lightbulb', 'Target', 'PenTool', 'Code', 'TrendingUp'][index] || 'Target';
            const Icon = iconMap[iconName];
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 mx-auto rounded-full bg-neutral-white border-2 border-sky-soft flex items-center justify-center mb-4 text-sky-bright">
                    {Icon && <Icon size={24} strokeWidth={1.5} />}
                  </div>
                  {index < processStages.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-sky-soft" />
                  )}
                </div>
                <div className="text-xs text-sky-bright font-semibold mb-1">{step.number}</div>
                <h3 className="text-base font-semibold text-navy mb-1">{step.title}</h3>
                <p className="text-sm text-neutral-secondary">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
