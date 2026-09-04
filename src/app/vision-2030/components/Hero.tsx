"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code, Cpu, Database, Network } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[95vh] flex items-center justify-center overflow-hidden bg-white pt-12 pb-16 lg:pt-16 lg:pb-16 border-b border-slate-100">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* Subtle glowing orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] bg-blue-100/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[60%] bg-indigo-50/50 rounded-full blur-[120px]" />
        
        {/* Abstract network nodes using SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>

        {/* Floating tech icons */}
        <div className="hidden lg:block">
          <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[15%] text-slate-800"
          >
            <Network size={48} strokeWidth={1} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[25%] right-[25%] text-slate-800"
          >
            <Database size={56} strokeWidth={1} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, -15, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[30%] left-[10%] text-slate-400"
          >
            <Cpu size={40} strokeWidth={1} />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 min-w-0">
        {/* Left Content */}
        <div className="w-full lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex max-w-full px-3 sm:px-4 py-1.5 rounded-full bg-slate-900 text-white font-bold text-[11px] sm:text-[13px] tracking-[0.08em] sm:tracking-[0.15em] uppercase mb-8 shadow-sm break-words">
              LOYALSTRING VISION 2030
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-8 break-words"
          >
            Engineering Technology for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-900">Smarter, Connected</span> World.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-slate-600 leading-[1.7] max-w-3xl mb-10"
          >
            At LoyalString, we believe the next generation of businesses will be built on intelligent software, connected systems, robotics and automation, and data. Vision 2030 is our roadmap to evolve LoyalString into a globally recognised technology organisation—building scalable digital platforms and intelligent solutions that help businesses operate smarter, move faster and make better decisions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
          >
            <a 
              href="#pillars" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 hover:-translate-y-1 transition-all shadow-xl shadow-slate-900/20 w-full sm:w-auto"
            >
              Explore Vision 2030 <ArrowDown size={18} />
            </a>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-semibold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all w-full sm:w-auto"
            >
              Discover Our Technology
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500 uppercase tracking-wide sm:tracking-widest min-w-0"
          >
            <Code size={16} className="text-slate-400 shrink-0" />
            <span className="min-w-0 break-words">Software. Intelligence. Robotics and Automation. Connectivity.</span>
          </motion.div>
        </div>

        {/* Right Visual Area (Abstract Tech Connection) */}
        <div className="hidden lg:flex w-full lg:w-2/5 justify-end relative">
           <div className="w-[400px] h-[400px] xl:w-[500px] xl:h-[500px] rounded-full border border-slate-200/60 relative animate-[spin_60s_linear_infinite]">
              {/* Outer track nodes */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-800 rounded-full shadow-[0_0_15px_rgba(30,41,59,0.3)]"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-slate-600 rounded-full shadow-[0_0_15px_rgba(71,85,105,0.3)]"></div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-slate-400 rounded-full"></div>
              
              {/* Inner track */}
              <div className="absolute inset-16 rounded-full border border-slate-200 border-dashed animate-[spin_40s_linear_infinite_reverse]">
                 <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-slate-500 rounded-full"></div>
                 <div className="absolute top-8 left-8 w-2 h-2 bg-slate-300 rounded-full"></div>
              </div>

              {/* Core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-slate-50 rounded-full shadow-inner flex items-center justify-center border border-slate-100 animate-[spin_20s_linear_infinite_reverse]">
                 <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-xl shadow-slate-900/20">
                    <Network size={24} />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
