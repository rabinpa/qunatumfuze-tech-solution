import Link from 'next/link';
import type { Service } from '@/data/services';

interface ServiceHeroProps {
  service: Service;
}

/**
 * Hero section for service detail pages.
 */
export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative py-32 bg-gradient-to-br from-navy via-navy-surface to-navy-deep text-neutral-white">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-neutral-white leading-tight">
            {service.title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-white/70">{service.description}</p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky text-navy font-medium rounded-sm text-body-lg transition-all duration-200 ease-out-soft hover:bg-sky-bright hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
            >
              Get Started
              <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
