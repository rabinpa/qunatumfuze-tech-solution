import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { footerNavLinks, footerServiceLinks, socialLinks } from '@/config/navigation';
import { cn } from '@/lib/cn';

const iconMap = {
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
  email: Mail,
};

/**
 * Global footer with 4-column layout.
 * Brand, navigation, services, and contact/newsletter.
 */
export function Footer() {
  return (
    <footer className="bg-navy-deep text-neutral-white" role="contentinfo">
      {/* Animated gradient line at top */}
      <div className="h-[1px] bg-gradient-to-r from-sky via-green to-sky" />

      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-display text-2xl font-semibold">
              QuantumFuze
            </Link>
            <p className="mt-4 text-neutral-white/60 text-body">
              Your growth partner for everything digital.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-neutral-white/60 hover:text-sky transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h3 className="font-medium text-neutral-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-white/60 hover:text-neutral-white transition-colors duration-200 text-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="font-medium text-neutral-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-white/60 hover:text-neutral-white transition-colors duration-200 text-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-medium text-neutral-white mb-4">Contact</h3>
            <p className="text-neutral-white/60 text-body mb-4">
              Have a project in mind? Let&apos;s talk.
            </p>
            <a
              href="mailto:hello@quantumfuze.com"
              className="text-sky hover:text-sky-bright transition-colors duration-200 text-body"
            >
              hello@quantumfuze.com
            </a>
            {/* Newsletter placeholder */}
            <div className="mt-6">
              <p className="text-neutral-white/45 text-small mb-3">Stay updated</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Email for newsletter"
                  className={cn(
                    'flex-1 px-3 py-2 bg-navy-surface border border-white/10 rounded-sm',
                    'text-neutral-white placeholder:text-neutral-white/40 text-small',
                    'focus:outline-none focus:border-sky'
                  )}
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-sky text-navy font-medium rounded-sm text-small hover:bg-sky-bright transition-colors duration-200"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-white/45 text-small">
            &copy; {new Date().getFullYear()} QuantumFuze. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-neutral-white/45 hover:text-neutral-white text-small transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-neutral-white/45 hover:text-neutral-white text-small transition-colors duration-200"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
