import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Insights | QuantumFuze Tech Solutions',
  description: 'Thoughts on technology, design, and digital transformation from the QuantumFuze Strategy Team.',
  openGraph: {
    title: 'Insights | QuantumFuze Tech Solutions',
    description: 'Perspectives on technology, design, and building digital products that matter.',
    url: 'https://quantumfuze.com/insights',
    type: 'website',
  },
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
