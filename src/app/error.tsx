'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to monitoring service in production
    console.error('Application error:', error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-white px-6">
      <div className="text-center max-w-md">
        <h1 className="font-display text-h2 text-navy">
          Something went wrong
        </h1>
        <p className="mt-4 text-body text-neutral-secondary">
          An unexpected error has occurred. Please try again or contact support if the problem persists.
        </p>
        <button
          onClick={reset}
          className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-sky text-navy font-medium rounded-sm transition-colors duration-200 hover:bg-sky-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
