export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  summary: string;
  description: string;
  problem: string;
  approach: string;
  solution: string;
  impact: string;
}

export const projects: Project[] = [
  {
    id: 'projectflow',
    slug: 'projectflow',
    title: 'ProjectFlow',
    category: 'Software Development',
    tags: ['Software Development', 'Web Application'],
    summary: 'A project management platform that helps teams ship faster.',
    description: 'ProjectFlow is a comprehensive project management platform designed for modern software teams. It combines task management, timeline tracking, and team collaboration in one intuitive interface.',
    problem: "Existing project management tools were either too complex or too simple. Teams needed a solution that balanced power with ease of use.",
    approach: 'We started with user research to understand what teams actually needed. We then designed and built a platform that focused on the most important workflows while keeping the interface clean and intuitive.',
    solution: 'A web-based project management platform with real-time collaboration, customizable views, and powerful reporting.',
    impact: 'Teams using ProjectFlow reported 40% faster project completion and improved team alignment.',
  },
  {
    id: 'elevate-ecommerce',
    slug: 'elevate-ecommerce',
    title: 'Elevate E-Commerce',
    category: 'Web Development',
    tags: ['Web Development', 'E-Commerce'],
    summary: 'A complete storefront rebuild that increased conversion rates by over 30%.',
    description: 'We rebuilt a struggling e-commerce store with a focus on performance, user experience, and conversion optimization.',
    problem: "The client's existing store was slow, difficult to navigate, and had a poor mobile experience.",
    approach: 'We conducted a comprehensive audit, redesigned the user experience, and rebuilt the frontend with performance as the primary focus.',
    solution: 'A fast, responsive e-commerce store with streamlined checkout and improved product discovery.',
    impact: 'Conversion rates increased by 30% and mobile engagement doubled.',
  },
  {
    id: 'bloom-skincare',
    slug: 'bloom-skincare',
    title: 'Bloom Skincare Growth Campaign',
    category: 'Digital Marketing',
    tags: ['Digital Marketing', 'SEO'],
    summary: 'A coordinated SEO and paid media strategy that grew organic traffic by 200%.',
    description: 'We developed and executed a comprehensive growth campaign that combined SEO, content marketing, and paid social.',
    problem: 'Bloom Skincare had a great product but struggled to get visibility in a crowded market.',
    approach: 'We created a content strategy targeting high-intent keywords, optimized their site architecture, and launched targeted paid campaigns.',
    solution: 'A coordinated marketing approach that drives both organic and paid traffic.',
    impact: 'Organic traffic grew 200% and revenue increased by 150% within 6 months.',
  },
  {
    id: 'pulsefit-mobile',
    slug: 'pulsefit-mobile',
    title: 'PulseFit Mobile App',
    category: 'Mobile App Development',
    tags: ['Mobile App Development', 'iOS', 'Android'],
    summary: 'A cross-platform fitness app with habit tracking and community features.',
    description: 'We built a full-featured mobile app that helps users track workouts, build habits, and connect with a community.',
    problem: 'Fitness app users wanted more than just workout tracking - they wanted motivation and community.',
    approach: 'We designed an app that combines habit tracking, social features, and gamification to keep users engaged.',
    solution: 'A cross-platform mobile app with a clean interface, habit tracking, and community challenges.',
    impact: 'Users achieved 2x their fitness goals and retention rates exceeded 80% after 3 months.',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => project.category === category);
}
