"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Handshake, ChevronDown } from "lucide-react";

export default function RoadmapAndPeople() {
  const [activeYear, setActiveYear] = useState<number | null>(0);

  const cultureThemes = [
    "Curiosity", "Ownership", "Engineering excellence", "Collaboration", 
    "Continuous learning", "Customer understanding", "Experimentation", 
    "Accountability", "Leadership development"
  ];

  const partners = [
    "Customers", "Technology companies", "Hardware manufacturers", 
    "Cloud providers", "Integration partners", "Research organisations", 
    "Industry experts", "Channel partners", "International partners"
  ];

  const roadmapSteps = [
    {
      year: "2026",
      verb: "STRENGTHEN",
      title: "Build the Foundation",
      detail: "Core platforms, product quality, engineering processes, enterprise architecture, documentation, security, RFID technology, international foundations."
    },
    {
      year: "2027",
      verb: "CONNECT",
      title: "Build the Ecosystem",
      detail: "Platform integration, APIs, mobile technologies, connected devices, RFID/IoT integration, cloud connectivity, unified business data."
    },
    {
      year: "2028",
      verb: "ROBOTICS",
      title: "Reduce Operational Complexity",
      detail: "Industrial robotics and software automation for workflows, intelligent business processes, reconciliation, monitoring, notifications, operational analytics."
    },
    {
      year: "2029",
      verb: "INTELLIGENCE",
      title: "Make Technology Smarter",
      detail: "Enterprise AI, predictive analytics, intelligent assistants, natural-language interfaces, anomaly detection, business recommendations."
    },
    {
      year: "2030",
      verb: "TRANSFORM",
      title: "Global Intelligent Ecosystem",
      detail: "Software + AI + Cloud + Robotics and Automation + RFID/IoT + Data + connected technologies working seamlessly together."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-24 lg:space-y-32">
        
        {/* Section 12: People, Innovation & Partnerships */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-xs tracking-widest uppercase mb-8">
              <Users size={14} /> People & Innovation
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Technology Changes. Great People Keep Us Ahead.
            </h2>
            <p className="text-lg text-slate-600 leading-[1.8] mb-8 font-medium">
              Create an environment where developers become engineering leaders, engineers become architects, analysts become product leaders and innovative ideas become real products.
            </p>
            <div className="flex flex-wrap gap-2">
              {cultureThemes.map((theme, i) => (
                <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-md text-slate-600 text-sm font-semibold">
                  {theme}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-[2rem] p-8 lg:p-10 text-white relative overflow-hidden shadow-2xl"
          >
             <div className="absolute top-0 right-0 p-8 opacity-5">
               <Handshake size={120} />
             </div>
             <div className="relative z-10">
               <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Handshake className="text-blue-400" size={20} />
                  </div>
                  Innovation Happens Together
               </h3>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                 {partners.map((partner, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-300">
                     <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                     <span className="text-sm font-medium">{partner}</span>
                   </li>
                 ))}
               </ul>
             </div>
          </motion.div>
        </div>

        {/* Section 13: 2026 to 2030 Roadmap */}
        <div className="border-t border-slate-100 pt-24 lg:pt-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              2026 To 2030 Roadmap
            </span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              The Road to 2030
            </h2>
          </div>

          {/* Desktop Horizontal Timeline */}
          <div className="hidden lg:block relative max-w-6xl mx-auto pb-12">
            <div className="absolute top-[88px] left-0 right-0 h-1 bg-slate-100 z-0"></div>
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {roadmapSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col relative"
                  onMouseEnter={() => setActiveYear(i)}
                >
                  <div className={`text-6xl font-black mb-4 transition-colors ${activeYear === i ? 'text-blue-600' : 'text-slate-200'}`}>
                    {step.year}
                  </div>
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-slate-100 mb-6 mx-auto absolute top-[88px] left-1/2 -translate-x-1/2 -translate-y-1/2 transition-colors z-20 group-hover:border-blue-500" style={{ borderColor: activeYear === i ? '#3b82f6' : '' }}></div>
                  
                  <div className={`pt-12 transition-all ${activeYear === i ? 'opacity-100' : 'opacity-60'}`}>
                    <div className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-2">{step.verb}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Vertical Timeline */}
          <div className="block lg:hidden max-w-2xl mx-auto relative pl-8">
             <div className="absolute top-0 left-[11px] bottom-0 w-1 bg-slate-100 z-0"></div>
             
             <div className="space-y-12 relative z-10">
               {roadmapSteps.map((step, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   className="relative"
                 >
                   <div className="absolute top-1 -left-[37px] w-6 h-6 rounded-full bg-white border-4 border-blue-500 shadow-sm z-20"></div>
                   
                   <div className="text-4xl font-black text-slate-200 mb-2 leading-none">{step.year}</div>
                   <div className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-1">{step.verb}</div>
                   <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                   <p className="text-slate-600 text-sm leading-relaxed">{step.detail}</p>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
