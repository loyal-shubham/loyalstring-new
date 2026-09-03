"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  AppWindow, 
  BrainCircuit, 
  CloudCog, 
  Radio, 
  BarChart4, 
  Bot, 
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
      title: "Robotics and Automation",
      desc: "Deploy industrial robotics and software automation for repetitive workflows, material handling, approvals, reconciliation, alerts, reporting and rule execution.",
      vision: "Let robotics handle repetition. Empower human judgement.",
      icon: Bot,
      color: "bg-emerald-500",
      textColor: "text-emerald-500",
      bgColor: "bg-emerald-50"
    },
    {
      id: "04",
      title: "RFID & IoT",
      desc: "Connect physical assets, devices and operational events to software systems for visibility and real-time action.",
      vision: "Make physical activity become meaningful digital information in real time.",
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
    <section id="pillars" className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
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
          className="mb-16 lg:mb-32 p-5 sm:p-8 lg:p-12 bg-white rounded-3xl shadow-lg border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 relative overflow-hidden"
        >
           {/* Abstract Background pattern */}
           <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

           <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 z-10 w-full lg:w-3/5">
              {['Enterprise Software', 'AI', 'Cloud', 'RFID & IoT', 'Robotics and Automation', 'Data & Analytics', 'Mobile Tech', 'Digital Infrastructure'].map((item, i) => (
                <React.Fragment key={i}>
                  <div className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-semibold text-xs sm:text-sm shadow-sm">
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
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            Strategic Pillars
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            The Foundation of Vision 2030
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Seven technology directions that work together as one connected system—not isolated products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isLast = index === pillars.length - 1;

            return (
              <motion.article
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_-24px_rgba(15,23,42,0.25)] ${
                  isLast ? "md:col-span-2 xl:col-span-3 xl:flex-row xl:items-stretch xl:gap-12" : ""
                }`}
              >
                <div className={`flex flex-col ${isLast ? "xl:w-2/5 xl:justify-center" : ""}`}>
                  <div className="mb-5 flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${pillar.bgColor} ${pillar.textColor}`}>
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <span className="text-xs font-bold tracking-[0.2em] text-slate-400">
                      PILLAR {pillar.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className={`text-[0.95rem] leading-[1.7] text-slate-600 ${isLast ? "xl:mb-0" : "mb-6"}`}>
                    {pillar.desc}
                  </p>
                </div>

                <div className={`mt-auto rounded-xl bg-slate-50 px-5 py-4 ${isLast ? "xl:mt-0 xl:w-3/5 xl:flex xl:flex-col xl:justify-center" : ""}`}>
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-2">
                    Vision 2030
                  </div>
                  <p className="text-sm leading-[1.65] text-slate-700 font-medium">
                    {pillar.vision}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
