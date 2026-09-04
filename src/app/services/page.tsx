import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Services',
  description: 'Explore our range of technology services designed to help your business grow.',
};

export default function ServicesPage() {
  return (
    <Container className="py-24">
      <SectionHeading
        title="Our Services"
        subtitle="We build intelligent digital solutions that help organizations operate better, move faster, and create measurable impact."
      />
    </Container>
  );
}
