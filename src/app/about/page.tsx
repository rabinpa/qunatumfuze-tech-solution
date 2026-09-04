import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { companyStory, values, workingPrinciples } from '@/data/about';
import { ValueCard, PrincipleCard } from '@/components/about';

export const metadata = {
  title: 'About Us | QuantumFuze Tech Solutions',
  description: 'Learn about QuantumFuze Tech Solutions — your growth partner for everything digital. One team, one mission.',
  openGraph: {
    title: 'About Us | QuantumFuze Tech Solutions',
    description: 'Your growth partner for everything digital. One team, one mission.',
    url: 'https://quantumfuze.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
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
          <h1 className="text-4xl sm:text-5xl font-display font-medium">About QuantumFuze</h1>
          <p className="mt-4 text-lg text-neutral-white/70 max-w-2xl mx-auto">
            Your growth partner for everything digital. One team, one mission.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-neutral-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading title={companyStory.title} align="left" className="mb-8" />
            <div className="space-y-4 text-neutral-secondary leading-relaxed">
              {companyStory.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 bg-neutral-offwhite">
        <Container>
          <SectionHeading
            title="Our Values"
            subtitle="What guides everything we do."
            className="mb-12"
          />
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ValueCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Working Principles */}
      <section className="py-16 bg-neutral-white">
        <Container>
          <SectionHeading
            title="How We Work"
            subtitle="Five principles that define our approach."
            className="mb-12"
          />
          <div className="max-w-4xl mx-auto space-y-6">
            {workingPrinciples.map((principle, index) => (
              <PrincipleCard key={principle.title} principle={principle} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-neutral-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-medium mb-4">
              Ready to work with us?
            </h2>
            <p className="text-lg text-neutral-white/70 mb-8">
              Let&apos;s build something meaningful together.
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
