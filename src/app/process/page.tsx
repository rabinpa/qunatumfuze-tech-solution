import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Our Process',
  description: 'Discover our proven approach to delivering exceptional results.',
};

export default function ProcessPage() {
  return (
    <Container className="py-24">
      <SectionHeading
        title="Our Process"
        subtitle="A better way to build. Five stages that ensure clarity, quality, and results."
      />
    </Container>
  );
}
