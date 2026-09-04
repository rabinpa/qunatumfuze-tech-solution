'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { services } from '@/data/services';
import { Globe, TrendingUp, Palette, Smartphone } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Globe,
  TrendingUp,
  Palette,
  Smartphone,
};

/**
 * Solutions section showcasing service offerings.
 */
export function SolutionsSection() {
  return (
    <section className="py-24 bg-neutral-offwhite">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What we do." className="mb-16" />

        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/services/${service.slug}`} className="block h-full group">
                  <Card className="h-full hover:shadow-card-hover transition-all duration-300" padding="lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-sky-pale flex items-center justify-center text-sky-bright group-hover:scale-105 transition-transform duration-300">
                        {Icon && <Icon size={28} strokeWidth={1.5} />}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-sky-bright transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-neutral-secondary">{service.description}</p>
                        <div className="mt-4 text-sky-bright font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          Learn more
                          <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
