import type { Metadata } from 'next';
import { geistSans, geistMono } from '@/lib/fonts';
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
  ],
  authors: [{ name: 'QuantumFuze Tech Solutions' }],
  creator: 'QuantumFuze Tech Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'QuantumFuze Tech Solutions',
    title: 'QuantumFuze Tech Solutions | Technology that moves ideas forward',
    description:
      'QuantumFuze builds intelligent digital solutions that help organizations operate better, move faster, and create measurable impact.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuantumFuze Tech Solutions',
    description:
      'QuantumFuze builds intelligent digital solutions that help organizations operate better, move faster, and create measurable impact.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

