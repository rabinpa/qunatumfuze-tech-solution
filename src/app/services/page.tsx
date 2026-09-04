import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ServiceCard } from '@/components/services/ServiceCard';
import { services } from '@/data/services';

export const metadata = {
  title: 'Services',
  description: 'Explore our range of technology services designed to help your business grow.',
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-navy via-navy-surface to-navy-deep text-neutral-white">
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
        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-neutral-white">
            Our Services
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-white/70 max-w-2xl mx-auto">
            We build intelligent digital solutions that help organizations operate better, move faster,
            and create measurable impact.
          </p>
        </div>
      </section>

      {/* Service Grid */}
      <section className="py-24 bg-neutral-offwhite">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy text-neutral-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-medium mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-neutral-white/70 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our services can help your business grow.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky text-navy font-medium rounded-sm text-body-lg transition-all duration-200 ease-out-soft hover:bg-sky-bright hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
            >
              Start a Project
              <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
