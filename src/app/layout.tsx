import type { Metadata } from 'next';
import { geistSans, geistMono } from '@/lib/fonts';
import { PageShell } from '@/components/layout/PageShell';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://quantumfuze.com'),
  title: {
    default: 'QuantumFuze Tech Solutions | Technology that moves ideas forward',
    template: '%s | QuantumFuze Tech Solutions',
  },
  description:
    'QuantumFuze builds intelligent digital solutions that help organizations operate better, move faster, and create measurable impact.',
  keywords: [
    'technology solutions',
    'AI automation',
    'software development',
    'product design',
    'business solutions',
    'IT consulting',
    'digital transformation',
  ],
  authors: [{ name: 'QuantumFuze Tech Solutions' }],
  creator: 'QuantumFuze Tech Solutions',
  publisher: 'QuantumFuze Tech Solutions',
  category: 'Technology',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'QuantumFuze Tech Solutions',
    title: 'QuantumFuze Tech Solutions | Technology that moves ideas forward',
    description:
      'QuantumFuze builds intelligent digital solutions that help organizations operate better, move faster, and create measurable impact.',
    url: 'https://quantumfuze.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuantumFuze Tech Solutions',
    description:
      'QuantumFuze builds intelligent digital solutions that help organizations operate better, move faster, and create measurable impact.',
    images: ['https://quantumfuze.com/og-image.jpg'],
  },
    robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://quantumfuze.com',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'QuantumFuze Tech Solutions',
  description:
    'QuantumFuze builds intelligent digital solutions that help organizations operate better, move faster, and create measurable impact.',
  url: 'https://quantumfuze.com',
  logo: 'https://quantumfuze.com/og-image.jpg',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@quantumfuze.com',
    contactType: 'sales',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://twitter.com/quantumfuze',
    'https://linkedin.com/company/quantumfuze',
    'https://github.com/quantumfuze',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}

