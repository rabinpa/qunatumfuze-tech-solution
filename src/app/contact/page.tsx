import { Container } from '@/components/ui/Container';
import { ContactForm } from './ContactForm';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with QuantumFuze to discuss your next project.',
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-navy via-navy-surface to-navy-deep overflow-hidden text-neutral-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-medium">
            Let&apos;s build something meaningful
          </h1>
          <p className="mt-4 text-lg text-neutral-white/70">
            Tell us about your project and we&apos;ll get back to you within 1-2 business days.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-neutral-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
