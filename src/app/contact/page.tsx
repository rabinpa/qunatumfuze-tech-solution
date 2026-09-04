import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with QuantumFuze to discuss your next project.',
};

export default function ContactPage() {
  return (
    <Container className="py-24">
      <SectionHeading
        title="Get in Touch"
        subtitle="Have an idea worth building? We'd love to hear about it."
      />
    </Container>
  );
}
