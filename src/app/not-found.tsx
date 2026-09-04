import Link from "next/link";
import { FileQuestion, ArrowRight, Radio, MonitorSmartphone } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100dvh-5.5rem)] items-center justify-center overflow-hidden bg-[#f4f6f8] px-4 py-16 sm:px-6 lg:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden>
        <svg className="h-full w-full text-slate-400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="not-found-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#not-found-grid)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-3xl text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
          <FileQuestion size={32} strokeWidth={2} />
        </div>
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Error 404</p>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
          This URL is not in our software, RFID, or services catalog. Head home or jump to a product area below.
        </p>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Return to Homepage
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
          >
            Contact Sales
          </Link>
        </div>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
          <Link
            href="/products/rfid"
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-left transition-colors hover:border-blue-200 hover:bg-blue-50/40"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-blue-600">
              <Radio size={16} />
            </span>
            <span>
              <span className="block text-sm font-semibold text-slate-900">RFID systems</span>
              <span className="block text-xs text-slate-500">Readers, tags, and portals</span>
            </span>
          </Link>
          <Link
            href="/services/software-development"
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-left transition-colors hover:border-blue-200 hover:bg-blue-50/40"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-blue-600">
              <MonitorSmartphone size={16} />
            </span>
            <span>
              <span className="block text-sm font-semibold text-slate-900">Software development</span>
              <span className="block text-xs text-slate-500">Enterprise apps and integrations</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
