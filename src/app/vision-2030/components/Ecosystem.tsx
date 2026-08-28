"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  AppWindow, 
  BrainCircuit, 
  CloudCog, 
  Radio, 
  BarChart4, 
  Workflow, 
  PlugZap,
  ArrowRight
} from "lucide-react";

export default function Ecosystem() {
  const pillars = [
    {
      id: "01",
      title: "Enterprise Software Platforms",
      desc: "Build connected enterprise platforms that digitise operations, standardise workflows, improve visibility and scale across locations.",
      vision: "Move from traditional business software toward intelligent, modular and connected enterprise platforms.",
      icon: AppWindow,
      color: "bg-blue-500",
      textColor: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      id: "02",
      title: "Artificial Intelligence",
      desc: "Use AI for decision support, intelligent search, predictive analytics, anomaly detection, document intelligence and business assistance.",
      vision: "Transform enterprise applications from systems of record into systems of intelligence.",
      icon: BrainCircuit,
      color: "bg-purple-500",
      textColor: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      id: "03",
      title: "Automation",
      desc: "Automate repetitive workflows, approvals, reconciliation, alerts, reporting and rule execution.",
      vision: "Automate repetition. Empower human judgement.",
      icon: Workflow,
      color: "bg-emerald-500",
      textColor: "text-emerald-500",
      bgColor: "bg-emerald-50"
    },
    {
      id: "04",
      title: "RFID & IoT",
      desc: "Connect physical assets, devices and operational events to software systems for visibility and real-time action.",
      vision: "Make physical activity automatically become meaningful digital information.",
      icon: Radio,
      color: "bg-indigo-500",
      textColor: "text-indigo-500",
      bgColor: "bg-indigo-50"
    },
    {
      id: "05",
      title: "Data & Business Intelligence",
      desc: "Turn operational data into dashboards, insight, prediction and action.",
      vision: "Move from data to insight to intelligent decisions.",
      icon: BarChart4,
      color: "bg-amber-500",
      textColor: "text-amber-500",
      bgColor: "bg-amber-50"
    },
    {
      id: "06",
      title: "Cloud & Digital Infrastructure",
      desc: "Design for scalability, reliability, security, performance, monitoring and recovery.",
      vision: "Build infrastructure capable of supporting enterprise scale and global growth.",
      icon: CloudCog,
      color: "bg-cyan-500",
      textColor: "text-cyan-500",
      bgColor: "bg-cyan-50"
    },
    {
      id: "07",
      title: "Integration & Connected Systems",
      desc: "Connect enterprise applications, mobile apps, devices, financial systems and third-party platforms through APIs and integration patterns.",
      vision: "Create connected environments where data moves securely without unnecessary duplication.",
      icon: PlugZap,
      color: "bg-rose-500",
      textColor: "text-rose-500",
      bgColor: "bg-rose-50"
    }
  ];

  return (
    <section id="pillars" className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section 04: Connected Technology Ecosystem */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"
          >
            From Software Products to a Connected Technology Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-slate-600 leading-[1.7]"
          >
            The future of LoyalString is not defined by one software product, one industry or one technology.
          </motion.p>
        </div>

        {/* Visual Formula / Diagram */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-32 p-8 lg:p-12 bg-white rounded-3xl shadow-lg border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
           {/* Abstract Background pattern */}
           <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

           <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 z-10 w-full lg:w-3/5">
              {['Enterprise Software', 'AI', 'Cloud', 'RFID & IoT', 'Automation', 'Data & Analytics', 'Mobile Tech', 'Digital Infrastructure'].map((item, i) => (
                <React.Fragment key={i}>
                  <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-semibold text-sm shadow-sm whitespace-nowrap">
                    {item}
                  </div>
                  {i < 7 && <span className="text-slate-300 font-bold hidden sm:block">+</span>}
                </React.Fragment>
              ))}
           </div>

           <div className="hidden lg:flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full shrink-0 z-10">
              <ArrowRight className="text-slate-400" />
           </div>

           <div className="w-full lg:w-1/3 bg-slate-900 p-8 rounded-2xl text-center z-10 shadow-xl">
             <div className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-2">The Result</div>
             <div className="text-2xl font-bold text-white leading-tight">Intelligent Business Transformation</div>
           </div>
        </motion.div>

        {/* Section 05: Strategic Technology Pillars */}
        <div className="mb-16 text-center">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            Strategic Pillars
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Foundation of Vision 2030
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            // Make the 7th item span full width or center it to balance the grid
            const isLastOdd = index === pillars.length - 1 && pillars.length % 2 !== 0 && pillars.length % 3 !== 0;
            const spanClass = isLastOdd ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : "";

            return (
              <motion.div 
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] transition-all group ${spanClass}`}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl ${pillar.bgColor} flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className={pillar.textColor} strokeWidth={2} />
                  </div>
                  <div className="text-4xl font-extrabold text-slate-100 group-hover:text-slate-200 transition-colors">
                    {pillar.id}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                <p className="text-slate-600 leading-[1.6] mb-8 font-medium">
                  {pillar.desc}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Vision 2030 Statement</div>
                  <p className="text-sm text-slate-700 italic leading-[1.6] font-medium border-l-2 border-blue-500 pl-4 py-1">
                    "{pillar.vision}"
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
