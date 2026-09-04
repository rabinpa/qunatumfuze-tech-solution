import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Our Work',
  description: 'Explore our portfolio of projects and case studies.',
};

export default function WorkPage() {
  return (
    <Container className="py-24">
      <SectionHeading
        title="Our Work"
        subtitle="A selection of projects that showcase our approach and capabilities."
      />
    </Container>
  );
}
