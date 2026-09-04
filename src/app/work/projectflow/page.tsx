import { projects } from '@/data/projects';
import { CaseStudyHero } from '@/components/work/CaseStudyHero';
import { CaseStudySection } from '@/components/work/CaseStudySection';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export const metadata = {
  title: 'ProjectFlow Case Study',
  description: 'How we built a project management platform that helps teams ship faster.',
};

export default function ProjectFlowCaseStudy() {
  const project = projects.find((p) => p.slug === 'projectflow');

  if (!project) {
    return null;
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
        <p className="mt-4">
          Teams were spending more time managing tools than actually doing work. The existing
          solutions created friction instead of removing it.
        </p>
      </CaseStudySection>

      <CaseStudySection title="The Approach" className="bg-neutral-offwhite">
        <p>{project.approach}</p>
        <ul className="mt-6 space-y-3">
          {[
            'Conducted user research with team members across multiple organizations',
            'Identified key workflows and pain points in existing tools',
            'Designed a clean, focused interface around the most common tasks',
            'Built with scalability and real-time collaboration in mind',
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sky text-navy font-semibold flex items-center justify-center text-xs mt-0.5">
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection title="The Solution">
        <p>{project.solution}</p>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {[
            {
              title: 'Task Management',
              description: 'Visual boards and lists for any workflow',
            },
            {
              title: 'Timeline Tracking',
              description: 'Gantt-style project planning',
            },
            {
              title: 'Team Collaboration',
              description: 'Real-time updates and comments',
            },
          ].map((feature) => (
            <div key={feature.title} className="bg-neutral-white p-5 rounded-md border border-neutral-border">
              <h3 className="font-semibold text-navy mb-1">{feature.title}</h3>
              <p className="text-sm text-neutral-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
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
