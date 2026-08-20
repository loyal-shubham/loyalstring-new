"use client";

import { useState } from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

interface Solution {
  name: string;
  detail: string;
}

export default function InteractiveSolutions({ solutions }: { solutions: Solution[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-12 mb-16">
      {/* Sidebar Navigation */}
      <div className="w-full lg:w-2/5 flex flex-col gap-3">
        {solutions.map((sol, i) => (
          <button 
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`text-left p-5 rounded-xl flex items-center justify-between transition-all duration-300 ${
              activeIndex === i 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-[1.02]' 
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-100'
            }`}
          >
            <span className="font-semibold text-[1.05rem]">{sol.name}</span>
            <ChevronRight size={20} className={`transition-transform duration-300 ${activeIndex === i ? 'text-white translate-x-1' : 'text-slate-400'}`} />
          </button>
        ))}
      </div>
      
      {/* Detailed Content Pane */}
      <div className="w-full lg:w-3/5 bg-slate-50 border border-slate-100 p-8 lg:p-10 rounded-2xl flex flex-col justify-center transition-all duration-300">
        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
          <CheckCircle2 className="text-blue-600" size={32} />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">{solutions[activeIndex].name}</h3>
        <p className="text-slate-600 text-[1.1rem] leading-relaxed">
          {solutions[activeIndex].detail}
        </p>
      </div>
    </div>
  );
}
