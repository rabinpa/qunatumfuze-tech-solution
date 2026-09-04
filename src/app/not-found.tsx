import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-white px-6">
      <div className="text-center max-w-md">
        <p className="text-sm font-medium text-sky-bright uppercase tracking-wider">
          404
        </p>
        <h1 className="mt-2 font-display text-h2 text-navy-primary">
          Page not found
        </h1>
        <p className="mt-4 text-body text-neutral-secondary">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-sky-primary text-navy-primary font-medium rounded-sm transition-colors duration-200 hover:bg-sky-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-primary"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
