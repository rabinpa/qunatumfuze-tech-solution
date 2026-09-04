'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { projects } from '@/data/projects';

/**
 * Featured Work section showcasing case studies.
 */
export function FeaturedWork() {
  return (
    <section className="py-24 bg-neutral-offwhite">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Built to get real results."
          subtitle="See how we've helped businesses like yours grow."
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/work/${project.slug}`} className="block h-full group">
                <Card variant="white" className="h-full overflow-hidden hover:shadow-card-hover transition-all duration-300" padding="none">
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-sky-pale to-sky-soft relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-sky/10 to-transparent" />
                    <div className="absolute bottom-2 right-2">
                      <Badge variant="sky">{project.serviceCategory}</Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-sky-bright transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-secondary text-sm">{project.summary}</p>
                    <div className="mt-4 text-sky-bright font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      View case study
                      <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
