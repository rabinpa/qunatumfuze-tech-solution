'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { Input, Textarea, Select } from '@/components/ui/Input';
import { TurnstileWidget } from '@/components/forms/TurnstileWidget';
import { contactSchema, type ContactFormData } from '@/lib/validation';

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const projectTypeOptions = [
  { value: '', label: 'Select a service' },
  { value: 'ai_automation', label: 'AI & Automation' },
  { value: 'software_development', label: 'Software Development' },
  { value: 'product_design', label: 'Product Design' },
  { value: 'business_solutions', label: 'Business Solutions' },
  { value: 'it_consulting', label: 'IT Consulting' },
  { value: 'multiple', label: 'More than one' },
];

const budgetRangeOptions = [
  { value: '', label: 'Select a range' },
  { value: 'under_5k', label: 'Under $5,000' },
  { value: '5k_15k', label: '$5,000 - $15,000' },
  { value: '15k_50k', label: '$15,000 - $50,000' },
  { value: '50k_plus', label: '$50,000+' },
];

const timelineOptions = [
  { value: '', label: 'Select a timeline' },
  { value: 'urgent', label: 'Urgent (ASAP)' },
  { value: '1_3_months', label: '1-3 Months' },
  { value: '3_6_months', label: '3-6 Months' },
  { value: '6_plus', label: '6+ Months' },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const formStartedAt = useMemo(() => Date.now(), []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          turnstileToken: turnstileToken || undefined,
          honeypot: '',
          formStartedAt,
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || 'Submission failed. Please try again.');
      }

      setIsSuccess(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-neutral-white p-8 sm:p-10 rounded-md border border-green-soft text-center" role="status">
        <div className="mx-auto w-14 h-14 rounded-full bg-green-soft flex items-center justify-center mb-4" aria-hidden="true">
          <svg className="w-7 h-7 text-green-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-display font-semibold text-navy mb-2">Thank you!</h2>
        <p className="text-neutral-secondary mb-6">
          Your project inquiry has been received. We'll respond within 1-2 business days.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-sky text-navy font-medium rounded-sm transition-colors duration-200 hover:bg-sky-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company-website">Leave this field empty</label>
        <input id="company-website" type="text" tabIndex={-1} autoComplete="off" {...register('honeypot')} />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <Input label="Full Name *" id="name" autoComplete="name" error={errors.name?.message} {...register('name')} />
        <Input
          label="Email Address *"
          id="email"
          type="email"
          autoComplete="email"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <Input label="Company" id="company" autoComplete="organization" error={errors.company?.message} {...register('company')} />

      <div className="grid sm:grid-cols-2 gap-6">
        <Select
          label="Project Type *"
          id="projectType"
          options={projectTypeOptions}
          error={errors.projectType?.message}
          {...register('projectType')}
        />
        <Select
          label="Budget Range"
          id="budgetRange"
          options={budgetRangeOptions}
          error={errors.budgetRange?.message}
          {...register('budgetRange')}
        />
      </div>

      <Select
        label="Timeline"
        id="timeline"
        options={timelineOptions}
        error={errors.timeline?.message}
        {...register('timeline')}
      />

      <Textarea
        label="Project Description *"
        id="description"
        rows={5}
        placeholder="Tell us about your project, goals, and what you'd like to achieve..."
        error={errors.description?.message}
        {...register('description')}
      />

      <div>
        <TurnstileWidget
          siteKey={turnstileSiteKey}
          onVerify={setTurnstileToken}
          onExpire={() => setTurnstileToken('')}
          onError={() => setError('Security verification failed. Please try again.')}
        />
      </div>

      {error && (
        <div className="bg-rose-50 border border-rose-200 text-rose-700 p-3 rounded-sm" role="alert">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center px-8 py-4 bg-sky text-navy font-medium rounded-sm text-body-lg transition-all duration-200 ease-out-soft hover:bg-sky-bright hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Send Project Inquiry'}
      </button>

      <p className="text-sm text-neutral-secondary text-center">
        We respect your privacy. Your information will only be used to respond to your inquiry.
      </p>
    </form>
  );
}
