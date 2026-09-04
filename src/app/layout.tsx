import type { Metadata } from 'next';
import { inter, fraunces } from '@/lib/fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://quantumfuze.com'),
  title: {
    default: 'QuantumFuze Tech Solutions | Your growth partner for everything digital',
    template: '%s | QuantumFuze Tech Solutions',
  },
  description:
    'QuantumFuze builds websites, runs marketing campaigns that convert, designs visuals people remember, and ships mobile apps — all under one roof.',
  keywords: [
    'web development company',
    'digital marketing agency',
    'graphic design services',
    'mobile app development',
    'small business website',
    'brand identity design',
  ],
  authors: [{ name: 'QuantumFuze Tech Solutions' }],
  creator: 'QuantumFuze Tech Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'QuantumFuze Tech Solutions',
    title: 'QuantumFuze Tech Solutions | Your growth partner for everything digital',
    description:
      'QuantumFuze builds websites, runs marketing campaigns that convert, designs visuals people remember, and ships mobile apps — all under one roof.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuantumFuze Tech Solutions',
    description:
      'QuantumFuze builds websites, runs marketing campaigns that convert, designs visuals people remember, and ships mobile apps — all under one roof.',
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
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

