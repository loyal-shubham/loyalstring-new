"use client"; // Error boundaries must be Client Components

import { useEffect } from 'react';
import { AlertOctagon, RefreshCcw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[calc(100dvh-5.5rem)] items-center justify-center bg-slate-50 px-4 py-16 sm:px-6 lg:py-20">
      <div className="text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <AlertOctagon size={32} className="text-red-600" />
        </div>
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Something went wrong!</h1>
        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
          We encountered an unexpected error while trying to load this page. Our technical team has been notified.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          <RefreshCcw size={20} />
          Try Again
        </button>
      </div>
    </div>
  );
}
