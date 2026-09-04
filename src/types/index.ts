export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  capabilities: string[];
  outcomes: string[];
  caseStudySlug?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  serviceCategory: 'web-development' | 'digital-marketing' | 'graphic-design' | 'mobile-app' | 'mobile-app-development';
  tags: string[];
  problem: string;
  approach: string;
  solution: string;
  impact: string;
  publishedAt: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  objective: string;
  clientExperience: string;
  deliverables: string;
  duration: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: 'Web Development' | 'Digital Marketing' | 'Graphic Design' | 'Mobile App Development' | 'More than one';
  budgetRange: string;
  timeline: string;
  description: string;
}

export interface NewsletterFormData {
  email: string;
}
