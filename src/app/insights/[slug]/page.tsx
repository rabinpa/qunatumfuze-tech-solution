import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface InsightDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function InsightDetailPage({ params }: InsightDetailPageProps) {
  const { slug } = await params;

  // Placeholder - insights data will be added in Phase 8
  if (!slug) {
    notFound();
  }

  return (
    <Container className="py-24">
      <SectionHeading
        title="Article"
        subtitle="Coming soon."
        align="left"
      />
    </Container>
  );
}
