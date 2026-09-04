import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using our services.',
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
