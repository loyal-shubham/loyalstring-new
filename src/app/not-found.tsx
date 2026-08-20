import Link from 'next/link';
import { FileQuestion, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <FileQuestion size={48} className="text-blue-600" />
        </div>
        <h1 className="text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">404</h1>
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Page Not Found</h2>
        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
          Oops! The page you are looking for doesn't exist, has been moved, or is temporarily unavailable. Let's get you back on track.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Return to Homepage
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
