import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'elevate-ecommerce',
    title: 'Elevate E-Commerce',
    summary: 'A complete storefront rebuild that doubled conversion rates in 90 days.',
    serviceCategory: 'web-development',
    tags: ['Web Development', 'E-Commerce', 'Performance'],
    problem:
      'Elevate was losing over 60% of mobile visitors before checkout. Their existing site was slow, the checkout flow had five unnecessary steps, and the brand looked identical to three competitors in their space.',
    approach:
      'We started with a two-week discovery phase mapping every friction point in the customer journey. Then we rebuilt the storefront from scratch — simplified checkout to two steps, optimized every image and script for sub-two-second loads, and gave the brand a distinct visual identity that set it apart.',
    solution:
      'A fully responsive storefront with a streamlined two-step checkout, performance budget enforced at every stage, and a refreshed visual identity. We also set up analytics tracking so Elevate could see exactly where conversions were happening — and where they were dropping off.',
    impact:
      'Mobile conversion rate doubled within 90 days. Average page load time dropped from 4.2s to 1.6s. Cart abandonment decreased by 35%. The client now has a platform they can iterate on without starting over.',
    publishedAt: '2025-11-15',
  },
  {
    slug: 'bloom-skincare',
    title: 'Bloom Skincare Growth Campaign',
    summary: 'SEO and paid strategy that grew organic traffic 3x in six months.',
    serviceCategory: 'digital-marketing',
    tags: ['Digital Marketing', 'SEO', 'Paid Media'],
    problem:
      'Bloom Skincare had a great product but almost no online visibility. They were spending on ads with no clear strategy, their site wasn\'t ranking for any relevant searches, and they had no content engine to build long-term authority.',
    approach:
      'We audited their entire digital presence, then built a dual-track strategy: a content-driven SEO play for sustainable organic growth, and a tightly targeted paid campaign to drive immediate revenue while the SEO matured.',
    solution:
      'A 12-month content calendar targeting high-intent keywords, a rebuilt site architecture for crawl efficiency, and a paid media funnel with clear stage-by-stage KPIs. Monthly reporting tied every dollar spent to a measurable outcome.',
    impact:
      'Organic traffic grew 3x in six months. Cost per acquisition on paid campaigns dropped 40% as we optimized. The content engine now brings in qualified leads without ongoing ad spend on those terms.',
    publishedAt: '2025-09-20',
  },
  {
    slug: 'pulsefit',
    title: 'PulseFit Mobile App',
    summary: 'A cross-platform fitness app from concept to App Store in four months.',
    serviceCategory: 'mobile-app-development',
    tags: ['Mobile App', 'iOS', 'Android'],
    problem:
      'PulseFit had a loyal community but no digital product. They wanted a mobile app for habit tracking and workout plans but didn\'t have an in-house development team — and couldn\'t afford the 8-figure price tag of a traditional agency build.',
    approach:
      'We mapped the core user journey in a one-week sprint, then built iteratively — shipping a testable MVP in eight weeks and iterating based on real user feedback from their existing community.',
    solution:
      'A cross-platform iOS and Android app with habit tracking, personalized workout plans, and a clean onboarding flow. Built with a single codebase for faster iteration, submitted to both app stores with optimized listings.',
    impact:
      'Launched to both app stores in four months. 4.7-star average rating in the first month. 60% of users returned within the first week — well above the fitness app category average.',
    publishedAt: '2025-07-10',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(
  category: Project['serviceCategory']
): Project[] {
  return projects.filter((project) => project.serviceCategory === category);
}
