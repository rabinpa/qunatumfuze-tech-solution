import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/data/services';
import { ServiceHero, ServiceCapabilities, ServiceFAQs } from '@/components/services';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const slugs = ['ai-automation', 'software-development', 'product-design', 'business-solutions', 'it-consulting'];
  return slugs.map((slug) => ({ slug }));
}

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Service Not Found | QuantumFuze Tech Solutions' };
  }

  return {
    title: `${service.title} | QuantumFuze Tech Solutions`,
    description: service.description,
    openGraph: {
      title: `${service.title} | QuantumFuze Tech Solutions`,
      description: service.description,
      url: `https://quantumfuze.com/services/${service.slug}`,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'QuantumFuze Tech Solutions',
      url: 'https://quantumfuze.com',
    },
    serviceType: service.title,
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        price: 'Custom',
      },
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <ServiceHero service={service} />

      {/* Problem Section */}
      <section className="py-24 bg-neutral-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-medium text-navy mb-6">
              What problem does this solve?
            </h2>
            <p className="text-neutral-secondary text-body-lg">{service.problem}</p>
          </div>
        </Container>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-neutral-offwhite">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-medium text-navy mb-6">
              How we approach it
            </h2>
            <ul className="space-y-4">
              {service.approach.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sky text-navy font-semibold flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <span className="text-neutral-secondary pt-1">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <ServiceCapabilities capabilities={service.capabilities} outcomes={service.outcomes} />

      <ServiceFAQs faqs={service.faqs} />

      {/* CTA Section */}
      <section className="py-24 bg-navy text-neutral-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-medium mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-neutral-white/70 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how {service.title} can help your business grow.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky text-navy font-medium rounded-sm text-body-lg transition-all duration-200 ease-out-soft hover:bg-sky-bright hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
            >
              Get Started
              <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
