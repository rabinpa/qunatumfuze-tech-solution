'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import type { ProcessStage } from '@/data/process';

interface ProcessStageItemProps {
  stage: ProcessStage;
  index: number;
}

/**
 * Individual process stage card with details.
 */
export function ProcessStageItem({ stage, index }: ProcessStageItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-24 flex-shrink-0">
          <div className="flex items-center gap-4 md:block">
            <div className="w-12 h-12 rounded-full bg-sky text-navy flex items-center justify-center font-bold text-lg">
              {stage.number}
            </div>
            <div className="md:hidden">
              <h3 className="text-lg font-semibold text-navy">{stage.title}</h3>
              <p className="text-sm text-neutral-secondary">{stage.duration}</p>
            </div>
          </div>
        </div>

        <Card className="flex-1" padding="lg">
          <div className="hidden md:block mb-2">
            <h3 className="text-xl font-semibold text-navy">{stage.title}</h3>
            <p className="text-sm text-neutral-secondary">{stage.duration}</p>
          </div>
          <p className="text-neutral-secondary mb-4">{stage.description}</p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <h4 className="text-xs font-semibold text-sky-bright uppercase tracking-wide mb-1">Objective</h4>
              <p className="text-sm text-neutral-secondary">{stage.objective}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-sky-bright uppercase tracking-wide mb-1">You Experience</h4>
              <p className="text-sm text-neutral-secondary">{stage.clientExperience}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-sky-bright uppercase tracking-wide mb-1">We Deliver</h4>
              <p className="text-sm text-neutral-secondary">{stage.teamDelivers}</p>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}
