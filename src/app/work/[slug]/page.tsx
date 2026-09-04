import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getProjectBySlug } from '@/data/projects';

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const slugs = ['elevate-ecommerce', 'bloom-skincare', 'pulsefit'];
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Container className="py-24">
      <SectionHeading
        title={project.title}
        subtitle={project.summary}
        align="left"
      />
    </Container>
  );
}
