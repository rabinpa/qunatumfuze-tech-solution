import { z } from 'zod';

/**
 * Shared validation schemas used by both client-side forms
 * and server-side API routes.
 */

export const projectTypes = [
  'ai_automation',
  'software_development',
  'product_design',
  'business_solutions',
  'it_consulting',
  'multiple',
] as const;

export const budgetRanges = ['under_5k', '5k_15k', '15k_50k', '50k_plus'] as const;

export const timelines = ['urgent', '1_3_months', '3_6_months', '6_plus'] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(255, 'Name is too long'),
  email: z.string().trim().email('Invalid email address'),
  company: z.string().trim().max(255).optional().or(z.literal('')),
  projectType: z.enum(projectTypes, {
    errorMap: () => ({ message: 'Please select a project type' }),
  }),
  budgetRange: z.enum(budgetRanges).optional().or(z.literal('')),
  timeline: z.enum(timelines).optional().or(z.literal('')),
  description: z
    .string()
    .trim()
    .min(10, 'Please provide more details about your project (at least 10 characters)')
    .max(5000, 'Description is too long'),
  // Spam protection fields
  turnstileToken: z.string().optional(),
  honeypot: z.string().max(0, 'Spam detected').optional().or(z.literal('')),
  formStartedAt: z.number().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().trim().email('Invalid email address'),
  turnstileToken: z.string().optional(),
  honeypot: z.string().max(0, 'Spam detected').optional().or(z.literal('')),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;

/**
 * Server-side schema: turns optional client spam fields into required.
 */
export const contactServerSchema = contactSchema.extend({
  description: z.string().trim().min(10).max(5000),
});

/**
 * Human-readable labels for enum values (used in emails).
 */
export const projectTypeLabels: Record<(typeof projectTypes)[number], string> = {
  ai_automation: 'AI & Automation',
  software_development: 'Software Development',
  product_design: 'Product Design',
  business_solutions: 'Business Solutions',
  it_consulting: 'IT Consulting',
  multiple: 'More than one',
};

export const budgetRangeLabels: Record<(typeof budgetRanges)[number], string> = {
  under_5k: 'Under $5,000',
  '5k_15k': '$5,000 - $15,000',
  '15k_50k': '$15,000 - $50,000',
  '50k_plus': '$50,000+',
};

export const timelineLabels: Record<(typeof timelines)[number], string> = {
  urgent: 'Urgent (ASAP)',
  '1_3_months': '1-3 Months',
  '3_6_months': '3-6 Months',
  '6_plus': '6+ Months',
};
