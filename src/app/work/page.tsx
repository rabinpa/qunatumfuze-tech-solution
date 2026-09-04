import { Container } from '@/components/ui/Container';
import { WorkHero } from '@/components/work/WorkHero';
import { ProjectCard } from '@/components/work/ProjectCard';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Our Work',
  description: "See how we've helped businesses transform their digital presence and achieve real results.",
};

export default function WorkPage() {
  return (
    <main>
      <WorkHero />

      <section className="py-16 bg-neutral-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
