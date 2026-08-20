import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function EASIndustryPage() {
  return (
    <div className="pt-8 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <Link href="/industries/retailer" className="inline-flex items-center text-slate-500 font-semibold hover:text-slate-900 mb-8 transition-colors">
          <ArrowRight className="rotate-180 mr-2" size={20} />
          Back to Retailer Solutions
        </Link>
        
        <div className="bg-white rounded-[2.5rem] p-8 lg:p-16 shadow-sm border border-slate-100 mb-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                EAS Loss Prevention
              </h1>
              <p className="text-xl text-blue-600 font-bold mb-8">
                Advanced security gates and hard tags to eliminate retail shrinkage.
              </p>
              <p className="text-slate-600 text-[1.1rem] leading-[1.8] mb-8">
                Retail shrinkage is a multi-billion dollar problem. Our Electronic Article Surveillance (EAS) solutions provide high-visibility deterrents and virtually invisible detection zones. Seamlessly integrate anti-theft measures without sacrificing the aesthetics of your storefront or the customer experience.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Over 99% detection rates with ultra-low false alarms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Sleek, transparent gates that blend into modern store designs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Reusable hard tags that reduce long-term security costs.</span>
                </li>
              </ul>
              
              <div className="flex gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Contact Sales
                </button>
                <button className="bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-bold py-4 px-10 rounded-xl transition-all">
                  Request Demo
                </button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl relative aspect-[4/3] bg-slate-100">
                <img src="/images/retail_rfid.png" alt="EAS Loss Prevention" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
