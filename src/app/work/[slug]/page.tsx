import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { CaseStudyHero } from '@/components/work/CaseStudyHero';
import { CaseStudySection } from '@/components/work/CaseStudySection';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export function generateStaticParams() {
  // projectflow has a dedicated static page, exclude it here
  return projects
    .filter((project) => project.slug !== 'projectflow')
    .map((project) => ({
      slug: project.slug,
    }));
}

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <CaseStudyHero
        title={project.title}
        category={project.category}
        tags={project.tags}
        description={project.description}
      />

      <CaseStudySection title="The Problem">
        <p>{project.problem}</p>
      </CaseStudySection>

      <CaseStudySection title="The Approach" className="bg-neutral-offwhite">
        <p>{project.approach}</p>
      </CaseStudySection>

      <CaseStudySection title="The Solution">
        <p>{project.solution}</p>
      </CaseStudySection>

      <CaseStudySection title="The Impact" className="bg-neutral-offwhite">
        <p>{project.impact}</p>
      </CaseStudySection>

      {/* CTA Section */}
      <section className="py-24 bg-navy text-neutral-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-medium mb-4">
              Ready to build your next project?
            </h2>
            <p className="text-lg text-neutral-white/70 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you build something great.
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
