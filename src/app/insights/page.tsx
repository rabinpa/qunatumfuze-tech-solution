import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Insights',
  description: 'Thoughts on technology, design, and digital transformation.',
};

export default function InsightsPage() {
  return (
    <Container className="py-24">
      <SectionHeading
        title="Insights"
        subtitle="Perspectives on technology, design, and building digital products that matter."
      />
    </Container>
  );
}
