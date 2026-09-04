import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import type { Service } from '@/data/services';
import { Cpu, Code2, Palette, Briefcase, Users } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Cpu,
  Code2,
  Palette,
  Briefcase,
  Users,
};

interface ServiceCardProps {
  service: Service;
}

/**
 * Service card component for the services overview page.
 */
export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <Link href={`/services/${service.slug}`} className="block h-full group">
      <Card className="h-full hover:shadow-card-hover transition-all duration-300" padding="lg">
        <div className="flex flex-col h-full">
          <div className="w-14 h-14 rounded-xl bg-sky-pale flex items-center justify-center text-sky-bright mb-4 group-hover:scale-105 transition-transform duration-300">
            {Icon && <Icon size={28} strokeWidth={1.5} />}
          </div>
          <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-sky-bright transition-colors">
            {service.title}
          </h3>
          <p className="text-neutral-secondary flex-1">{service.description}</p>
          <div className="mt-4 text-sky-bright font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Learn more
            <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
