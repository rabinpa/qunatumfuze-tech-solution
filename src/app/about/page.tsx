import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'About Us',
  description: 'Learn about QuantumFuze, our philosophy, and how we work with clients.',
};

export default function AboutPage() {
  return (
    <Container className="py-24">
      <SectionHeading
        title="About QuantumFuze"
        subtitle="We believe great digital presence shouldn't take four different agencies."
      />
    </Container>
  );
}
