import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Privacy Policy | QuantumFuze Tech Solutions',
  description: 'Our commitment to protecting your privacy at QuantumFuze Tech Solutions.',
  openGraph: {
    title: 'Privacy Policy | QuantumFuze Tech Solutions',
    description: 'Learn how we collect, use, and protect your information.',
    url: 'https://quantumfuze.com/privacy',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <Container className="py-24">
      <SectionHeading
        title="Privacy Policy"
        subtitle="Your privacy matters to us. Learn how we collect, use, and protect your information."
      />
    </Container>
  );
}
