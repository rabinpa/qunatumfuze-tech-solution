import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { processStages, processFAQs } from '@/data/process';
import { ProcessStageItem, ProcessFAQs } from '@/components/process';

export const metadata = {
  title: 'Our Process | QuantumFuze Tech Solutions',
  description: 'A better way to build — discover, define, design, build, and improve with our proven 5-stage process.',
  openGraph: {
    title: 'Our Process | QuantumFuze Tech Solutions',
    description: 'A proven 5-stage process for building digital solutions that deliver measurable results.',
    url: 'https://quantumfuze.com/process',
    type: 'website',
  },
};

export default function ProcessPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-navy via-navy-surface to-navy-deep overflow-hidden text-neutral-white">
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-medium">A better way to build.</h1>
          <p className="mt-4 text-lg text-neutral-white/70 max-w-2xl mx-auto">
            Our proven 5-stage process ensures every project is delivered with clarity, quality, and
            measurable results.
          </p>
        </div>
      </section>

      {/* Stages */}
      <section className="py-16 bg-neutral-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            {processStages.map((stage, index) => (
              <ProcessStageItem key={stage.id} stage={stage} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-neutral-offwhite">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading title="Frequently Asked Questions" className="mb-12" />
            <ProcessFAQs faqs={processFAQs} />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-neutral-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-medium mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-neutral-white/70 mb-8">
              Let&apos;s walk through our process together and build something great.
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
