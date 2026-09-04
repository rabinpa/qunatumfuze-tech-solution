import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getServiceBySlug } from '@/data/services';

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const services = ['web-development', 'digital-marketing', 'graphic-design', 'mobile-app-development'];
  return services.map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <Container className="py-24">
      <SectionHeading
        title={service.title}
        subtitle={service.shortDescription}
        align="left"
      />
    </Container>
  );
}
