import type { NavItem } from '@/types';

/**
 * Primary navigation links for the navbar.
 */
export const navLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Footer navigation links.
 */
export const footerNavLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
];

/**
 * Footer service links.
 */
export const footerServiceLinks: NavItem[] = [
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
  { label: 'Graphic Designing', href: '/services/graphic-design' },
  { label: 'Mobile App Development', href: '/services/mobile-app-development' },
];

/**
 * Social media links for footer.
 */
export const socialLinks: { label: string; href: string; icon: 'twitter' | 'linkedin' | 'github' | 'email' }[] = [
  { label: 'Twitter', href: '#', icon: 'twitter' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'GitHub', href: '#', icon: 'github' },
  { label: 'Email', href: 'mailto:hello@quantumfuze.com', icon: 'email' },
];
