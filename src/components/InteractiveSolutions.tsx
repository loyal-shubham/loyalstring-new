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
    <div className="flex flex-col lg:flex-row gap-12 mt-12">
      {/* Sidebar Navigation */}
      <div className="w-full lg:w-1/3 flex flex-col">
        {solutions.map((sol, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`text-left py-4 px-6 flex items-center justify-between transition-all duration-300 border-l-4 ${activeIndex === i
                ? 'border-blue-600 bg-blue-50/50 text-blue-700 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
          >
            <span className="text-[1.05rem]">{sol.name}</span>
            <ChevronRight size={18} className={`transition-transform duration-300 ${activeIndex === i ? 'text-blue-600 translate-x-1' : 'text-slate-300'}`} />
          </button>
        ))}
      </div>

      {/* Detailed Content Pane */}
      <div className="w-full lg:w-2/3 flex flex-col justify-center py-6 px-4 lg:px-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <CheckCircle2 className="text-blue-600" size={24} />
          </div>
          <h3 className="text-3xl font-bold text-slate-900">{solutions[activeIndex].name}</h3>
        </div>
        <p className="text-slate-600 text-[1.1rem] leading-relaxed max-w-3xl">
          {solutions[activeIndex].detail}
        </p>
      </div>
    </div>
  );
}
