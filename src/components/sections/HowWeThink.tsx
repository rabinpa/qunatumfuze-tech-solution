'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { howWeThinkStages } from '@/data/howWeThink';
import { Target, Search, Map, Palette, Code, TrendingUp } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Target,
  Search,
  Map,
  Palette,
  Code,
  TrendingUp,
};

/**
 * How We Think section with scroll-activated progress line.
 */
export function HowWeThink() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <section className="py-24 bg-neutral-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="We don't start with a template. We start with your goal."
          className="mb-16"
        />

        <div ref={containerRef} className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-lightgray">
            <motion.div
              className="w-full bg-gradient-to-b from-sky to-green origin-top"
              style={{ height: `${Math.max(0, ((activeIndex + 1) / howWeThinkStages.length) * 100)}%` }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <div className="space-y-12">
            {howWeThinkStages.map((stage, index) => {
              const Icon = iconMap[stage.icon];
              const isActive = index <= activeIndex;

              return (
                <StageItem
                  key={stage.id}
                  stage={stage}
                  Icon={Icon}
                  isActive={isActive}
                  onActive={() => setActiveIndex(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

interface StageItemProps {
  stage: { id: string; title: string; description: string; icon: string };
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number }> | undefined;
  isActive: boolean;
  onActive: () => void;
}

function StageItem({ stage, Icon, isActive, onActive }: StageItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  useEffect(() => {
    if (isInView) {
      onActive();
    }
  }, [isInView, onActive]);

  return (
    <div ref={ref} className="relative pl-20">
      {/* Circle */}
      <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-neutral-white border-2 border-neutral-lightgray flex items-center justify-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            isActive ? 'bg-sky text-neutral-white' : 'bg-neutral-lightgray text-neutral-secondary'
          }`}
        >
          {Icon && <Icon size={20} strokeWidth={1.5} />}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h3 className={`text-xl font-semibold transition-colors ${isActive ? 'text-navy' : 'text-neutral-secondary'}`}>
          {stage.title}
        </h3>
        <p className={`mt-1 transition-colors ${isActive ? 'text-neutral-secondary' : 'text-neutral-lightgray'}`}>
          {stage.description}
        </p>
      </motion.div>
    </div>
  );
}
