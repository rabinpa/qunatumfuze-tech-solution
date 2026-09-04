'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { howWeThinkStages } from '@/data/howWeThink';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Target, Search, Map, Palette, Code, TrendingUp } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Target,
  Search,
  Map,
  Palette,
  Code,
  TrendingUp,
};

/**
 * How We Think section with scroll-activated SVG connection line
 * and pulsing active icons.
 */
export function HowWeThink() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const reducedMotion = useReducedMotion();

  const progress = activeIndex >= 0
    ? ((activeIndex + 1) / howWeThinkStages.length) * 100
    : 0;

  return (
    <section className="py-24 bg-neutral-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="We don't start with a template. We start with your goal."
          className="mb-16"
        />

        <div ref={containerRef} className="relative max-w-3xl mx-auto">
          {/* SVG Connection Line */}
          <svg
            className="absolute left-8 top-0 bottom-0"
            width="6"
            viewBox="0 0 6 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="howWeThinkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#22C55E" />
              </linearGradient>
            </defs>
            {/* Track (background) */}
            <rect x="2" y="0" width="2" height="100%" fill="#E2E8F0" opacity="0.5" />
            {/* Progress fill (Sky Blue → Green) */}
            <rect
              x="2"
              y="0"
              width="2"
              height={`${Math.max(0.5, progress)}%`}
              fill="url(#howWeThinkGradient)"
              style={{ transition: 'height 0.8s cubic-bezier(0.22, 1, 0.36, 1)' }}
            />
            {/* Glow behind the progress line */}
            {!reducedMotion && (
              <rect
                x="0"
                y="0"
                width="6"
                height={`${Math.max(0.5, progress)}%`}
                fill="url(#howWeThinkGradient)"
                opacity="0.25"
                filter="blur(2px)"
                style={{ transition: 'height 0.8s cubic-bezier(0.22, 1, 0.36, 1)' }}
              />
            )}
          </svg>

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
                  reducedMotion={reducedMotion}
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
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }> | undefined;
  isActive: boolean;
  reducedMotion: boolean;
  onActive: () => void;
}

function StageItem({ stage, Icon, isActive, reducedMotion, onActive }: StageItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  useEffect(() => {
    if (isInView) {
      onActive();
    }
  }, [isInView, onActive]);

  return (
    <div ref={ref} className="relative pl-20">
      {/* Circle with active pulse */}
      <motion.div
        className="absolute left-0 top-0 w-16 h-16 rounded-full flex items-center justify-center"
        animate={{
          borderColor: isActive ? '#38BDF8' : '#E2E8F0',
          scale: isActive && !reducedMotion ? 1.05 : 1,
        }}
        transition={{ duration: 0.4 }}
        style={{ borderWidth: 2 }}
      >
        <motion.div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          animate={{
            backgroundColor: isActive ? '#38BDF8' : '#F1F5F9',
            scale: isActive && !reducedMotion ? [1, 1.08, 1] : 1,
          }}
          transition={{
            backgroundColor: { duration: 0.4 },
            scale: isActive && !reducedMotion
              ? { duration: 2, repeat: Infinity, ease: 'easeInOut' }
              : { duration: 0.3 },
          }}
        >
          {Icon && (
            <Icon
              size={20}
              strokeWidth={1.5}
              className={isActive ? 'text-neutral-white' : 'text-neutral-secondary'}
            />
          )}
        </motion.div>
      </motion.div>

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
