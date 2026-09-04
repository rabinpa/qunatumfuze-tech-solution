'use client';

import { useState } from 'react';

/**
 * Newsletter signup form for the footer.
 * Submits to POST /api/newsletter with email validation + spam protection.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, honeypot: '' }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus('error');
        setMessage(result.error || 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      setMessage('Thanks for subscribing!');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-3">
      <div className="flex gap-2">
        <label className="sr-only" htmlFor="newsletter-email">
          Email for newsletter
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          disabled={status === 'submitting'}
          className="flex-1 px-3 py-2 bg-navy-surface border border-white/10 rounded-sm text-neutral-white placeholder:text-neutral-white/40 text-small focus:outline-none focus:border-sky disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="px-4 py-2 bg-sky text-navy font-medium rounded-sm text-small hover:bg-sky-bright transition-colors duration-200 disabled:opacity-50"
        >
          {status === 'submitting' ? 'Joining...' : 'Join'}
        </button>
      </div>
      {message && (
        <p
          className={`mt-2 text-small ${
            status === 'success' ? 'text-green' : 'text-sky'
          }`}
          role={status === 'error' ? 'alert' : 'status'}
        >
          {message}
        </p>
      )}
    </form>
  );
}