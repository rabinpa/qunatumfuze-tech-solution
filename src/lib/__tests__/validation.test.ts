import { describe, it, expect } from 'vitest';
import { contactSchema, newsletterSchema } from '../validation';

describe('contactSchema', () => {
  it('accepts a valid submission', () => {
    const result = contactSchema.safeParse({
      name: 'Jane Doe',
      email: 'jane@example.com',
      company: 'Acme',
      projectType: 'ai_automation',
      budgetRange: '15k_50k',
      timeline: '1_3_months',
      description: 'We want to automate our customer support workflows.',
      honeypot: '',
    });
    expect(result.success).toBe(true);
  });

  it('rejects a missing name', () => {
    const result = contactSchema.safeParse({
      name: '',
      email: 'jane@example.com',
      projectType: 'ai_automation',
      description: 'valid description here',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path[0]).toBe('name');
    }
  });

  it('rejects an invalid email', () => {
    const result = contactSchema.safeParse({
      name: 'Jane',
      email: 'not-an-email',
      projectType: 'ai_automation',
      description: 'valid description here',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path[0]).toBe('email');
    }
  });

  it('rejects a description that is too short', () => {
    const result = contactSchema.safeParse({
      name: 'Jane',
      email: 'jane@example.com',
      projectType: 'ai_automation',
      description: 'short',
    });
    expect(result.success).toBe(false);
  });

  it('rejects a honeypot that is filled in', () => {
    const result = contactSchema.safeParse({
      name: 'Jane',
      email: 'jane@example.com',
      projectType: 'ai_automation',
      description: 'This is a valid project description with enough length.',
      honeypot: 'I am a bot',
    });
    expect(result.success).toBe(false);
  });
});

describe('newsletterSchema', () => {
  it('accepts a valid email', () => {
    const result = newsletterSchema.safeParse({ email: 'user@example.com' });
    expect(result.success).toBe(true);
  });

  it('rejects an invalid email', () => {
    const result = newsletterSchema.safeParse({ email: 'not-valid' });
    expect(result.success).toBe(false);
  });
});