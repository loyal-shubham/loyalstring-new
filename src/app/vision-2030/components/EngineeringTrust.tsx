"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Server, ArrowRight, Layers, Lock, Cpu, Globe } from "lucide-react";

export default function EngineeringTrust() {
  const processSteps = [
    "Designed", "Developed", "Tested", "Secured", "Deployed", "Monitored", "Improved"
  ];

  const engineeringTopics = [
    "Scalable architecture", "Product reliability", "Software quality", "Security", 
    "Documentation", "Automated testing", "CI/CD", "Release discipline", "Performance", "Maintainability"
  ];

  const securityTopics = [
    "Secure architecture", "Role-based access", "Authentication", "Authorisation", 
    "Auditability", "Data protection", "Secure integrations", "Backup and recovery", "Monitoring", "Business continuity"
  ];

  const industries = [
    "Retail", "Manufacturing", "Jewellery", "Inventory-intensive businesses", 
    "Distribution", "Enterprise Operations", "Future Verticals"
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-24 lg:space-y-32">
        
        {/* Section 10: Engineering, Security & Trust */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Engineering & Security
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineering for the Enterprise
            </h2>
          </div>

          {/* Process Line */}
          <div className="mb-20 overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex items-center justify-between min-w-[800px] max-w-5xl mx-auto">
              {processSteps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center gap-3 group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-blue-500 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all shadow-sm">
                      <span className="font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">{step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="flex-1 h-[2px] bg-slate-200 mx-4 relative">
                      <div className="absolute inset-y-0 left-0 bg-blue-500 w-0 group-hover:w-full transition-all duration-500"></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Engineering Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-8">
                <Server className="text-slate-600" size={28} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Engineering Discipline</h3>
              <ul className="flex flex-col gap-3">
                {engineeringTopics.map((topic, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                    <span className="text-slate-600 font-medium">{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Security Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900 p-8 lg:p-10 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <ShieldCheck size={120} className="text-white" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-8 border border-slate-700">
                  <Lock className="text-emerald-400" size={28} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Innovation Built on Trust</h3>
                <p className="text-slate-400 text-sm mb-6 pb-6 border-b border-slate-800">
                  "Technology earns adoption through innovation. It earns longevity through trust."
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                  {securityTopics.map((topic, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                      <span className="text-slate-300 font-medium text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section 11: Core Technology, Multiple Industries */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Scalable Solutions
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Core Technology. Industry-Specific Intelligence.
            </h2>
            <p className="text-lg text-slate-600 leading-[1.8]">
              LoyalString develops reusable technology foundations, then combines them with domain knowledge to create specialised solutions for different industries.
            </p>
          </div>

          {/* Visual Hierarchy Diagram */}
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            {/* Level 1: Core Company */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-extrabold text-2xl shadow-xl z-10 relative"
            >
              LOYALSTRING
            </motion.div>
            
            {/* Connector */}
            <div className="w-0.5 h-10 bg-gradient-to-b from-slate-900 to-blue-500"></div>

            {/* Level 2: Tech Foundation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-2xl border border-blue-100 shadow-md w-full z-10 relative"
            >
              <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
                {['Software', 'AI', 'Cloud', 'RFID', 'IoT', 'Automation', 'Data'].map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg font-bold text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Connectors to Industries */}
            <div className="flex justify-center w-full max-w-4xl px-8 relative h-10">
               {/* Just visual lines spreading down */}
               <div className="absolute top-0 w-[80%] h-full border-t-0 border-l-[2px] border-r-[2px] border-b-[2px] border-slate-200 rounded-b-xl z-0"></div>
               <div className="w-0.5 h-full bg-slate-200 z-0 absolute top-0 left-1/2 -translate-x-1/2"></div>
            </div>

            {/* Level 3: Industries */}
            <div className="w-full relative z-10">
               <div className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-4xl mx-auto">
                 {industries.map((industry, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 + (i * 0.05) }}
                     className="px-5 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-semibold shadow-sm flex items-center gap-2"
                   >
                     {industry === "Jewellery" ? (
                       <span className="flex items-center gap-2">
                         {industry} 
                         <span className="text-[10px] px-2 py-0.5 bg-slate-900 text-white rounded uppercase tracking-wider ml-1">
                           Sparkle RFID
                         </span>
                       </span>
                     ) : industry}
                   </motion.div>
                 ))}
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
