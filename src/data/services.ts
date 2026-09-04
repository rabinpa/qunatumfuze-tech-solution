import type { Service } from '@/types';

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    shortDescription: 'Fast, responsive websites built to convert visitors into customers.',
    description:
      'We build fast, responsive websites that work. From marketing sites to full e-commerce platforms, every build is optimized for performance, accessibility, and conversion — not just looks.',
    icon: 'Globe',
    capabilities: [
      'Custom responsive builds tailored to your brand and goals',
      'E-commerce integration with secure checkout flows',
      'Performance optimization for fast load times and strong Core Web Vitals',
      'Ongoing maintenance, hosting support, and iteration',
    ],
    outcomes: [
      'A website that loads in under two seconds on mobile',
      'Clear conversion paths that turn visitors into leads or sales',
      'A maintainable codebase your team can build on',
    ],
    caseStudySlug: 'elevate-ecommerce',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'SEO, paid campaigns, and content that drives measurable growth.',
    description:
      'We run marketing campaigns that convert. SEO that ranks, paid ads that deliver ROI, and content that builds trust — all tied to measurable business outcomes, not vanity metrics.',
    icon: 'TrendingUp',
    capabilities: [
      'Search engine optimization for sustainable organic growth',
      'Paid media campaigns (Google, Meta) with clear ROI tracking',
      'Content strategy and creation that builds authority',
      'Analytics setup and monthly performance reporting',
    ],
    outcomes: [
      'Consistent month-over-month growth in qualified traffic',
      'Lower cost per acquisition through optimized campaigns',
      'Clear reporting that shows exactly where leads come from',
    ],
    caseStudySlug: 'bloom-skincare',
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Designing',
    shortDescription: 'Visual identity and design assets that make your brand memorable.',
    description:
      'We design visuals people remember. From complete brand identities to marketing collateral, every asset is crafted to communicate clearly and stand out in a crowded market.',
    icon: 'Palette',
    capabilities: [
      'Logo and visual identity systems',
      'Marketing collateral — social graphics, presentations, print',
      'Brand guidelines for consistent application across teams',
      'UI/UX design for web and mobile products',
    ],
    outcomes: [
      'A cohesive visual identity across every customer touchpoint',
      'Design assets your team can use without a designer on speed-dial',
      'A brand that looks as good as the product behind it',
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDescription: 'Launch-ready iOS and Android apps without hiring in-house.',
    description:
      'We ship mobile apps that people actually use. From concept to App Store, we handle design, development, and launch — so you get a polished product without the overhead of an in-house team.',
    icon: 'Smartphone',
    capabilities: [
      'Cross-platform iOS and Android development',
      'User onboarding and engagement flow design',
      'App Store and Google Play submission and optimization',
      'Post-launch iteration based on real user data',
    ],
    outcomes: [
      'A launch-ready app in the App Store and Google Play',
      'Smooth onboarding that drives user retention',
      'A product roadmap informed by real usage data',
    ],
    caseStudySlug: 'pulsefit',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
