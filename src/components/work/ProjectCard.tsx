'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

/**
 * Project card component for the work overview page.
 */
export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/work/${project.slug}`} className="block h-full group">
        <Card className="h-full overflow-hidden hover:shadow-card-hover transition-all duration-300" padding="none">
          <div className="aspect-video bg-gradient-to-br from-sky-pale to-sky-soft relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky/10 to-transparent" />
            <div className="absolute top-2 left-2">
              <Badge variant="sky">{project.category}</Badge>
            </div>
            <div className="absolute bottom-2 right-2 flex flex-wrap gap-1">
              {project.tags.slice(1, 3).map((tag) => (
                <Badge key={tag} variant="gray" size="sm">
                  {tag}
                </Badge>
              ))}
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
  );
}
