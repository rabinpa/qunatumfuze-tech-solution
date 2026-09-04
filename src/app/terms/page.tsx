import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Terms of Service | QuantumFuze Tech Solutions',
  description: 'Terms and conditions for using QuantumFuze Tech Solutions services.',
  openGraph: {
    title: 'Terms of Service | QuantumFuze Tech Solutions',
    description: 'The terms and conditions that govern our services.',
    url: 'https://quantumfuze.com/terms',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <Container className="py-24">
      <SectionHeading
        title="Terms of Service"
        subtitle="The terms and conditions that govern our services."
      />
    </Container>
  );
}
