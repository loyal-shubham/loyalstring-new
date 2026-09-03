"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, ArrowRight, Handshake } from "lucide-react";
import Link from "next/link";

export default function LeadershipClosing() {
  return (
    <>
      {/* Section 14: Leadership Message */}
      <section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-10 lg:p-16 shadow-xl border border-slate-100 relative overflow-hidden">
             
             {/* Decorative element */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-slate-100 to-transparent rounded-bl-[100px] pointer-events-none"></div>
             
             <div className="relative z-10">
               <div className="flex justify-center mb-8">
                 <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                    <Quote className="text-blue-500" size={28} />
                 </div>
               </div>

               <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 text-center mb-8">
                 Building Beyond Today
               </h2>

               <div className="space-y-6 text-lg lg:text-xl text-slate-700 leading-[1.8] text-center font-medium">
                 <p>
                   "Vision 2030 represents the future we are building for LoyalString. Our ambition is not to be defined by one product, one technology or one industry. We want to build an organisation capable of continuously understanding complex business problems and solving them through technology."
                 </p>
                 <p>
                   "Enterprise software, artificial intelligence, robotics and automation, RFID, IoT, cloud and data intelligence are not independent technologies in our vision. Together, they form the foundation for the next generation of connected businesses."
                 </p>
                 <p className="text-base text-slate-500">
                   "Solutions such as Sparkle RFID demonstrate how this philosophy can be transformed into specialised technology for real industries."
                 </p>
               </div>

               <div className="mt-12 text-center">
                 <div className="w-12 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
                 <p className="font-bold text-slate-900 uppercase tracking-widest text-sm">Leadership Team</p>
                 <p className="text-slate-500 text-sm mt-1">LoyalString International Pvt. Ltd.</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 15: Closing Vision & CTA */}
      <section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
        
        {/* Subtle connected-system animation background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dot-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" className="text-blue-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot-pattern)" />
          </svg>

          {/* Simple animated lines */}
          <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent">
             <motion.div 
               className="w-full h-32 bg-gradient-to-b from-transparent via-blue-400 to-transparent"
               animate={{ y: ["-100vh", "100vh"] }}
               transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
             />
          </div>
          <div className="absolute top-0 bottom-0 right-1/4 w-px bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent">
             <motion.div 
               className="w-full h-32 bg-gradient-to-b from-transparent via-indigo-400 to-transparent"
               animate={{ y: ["-100vh", "100vh"] }}
               transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 2 }}
             />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-bold text-xs tracking-[0.2em] uppercase mb-8 border border-white/20 backdrop-blur-sm">
              Vision 2030
            </div>

            <h2 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight">
              Building Intelligence Into <br className="hidden sm:block" /> Everything We Create.
            </h2>
            
            <p className="text-xl lg:text-2xl text-blue-300 font-semibold mb-12">
              One Vision. Technology That Moves Businesses Forward.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 w-full sm:w-auto"
              >
                Explore Our Technology <ArrowRight size={18} />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 border border-white/20 transition-all backdrop-blur-sm w-full sm:w-auto"
              >
                Partner With LoyalString <Handshake size={18} />
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 sm:gap-4 text-[10px] sm:text-sm font-bold text-slate-400 uppercase tracking-wider sm:tracking-widest max-w-full mx-auto px-2">
              <span>Software</span>
              <span className="text-slate-700">•</span>
              <span>AI</span>
              <span className="text-slate-700">•</span>
              <span>Robotics and Automation</span>
              <span className="text-slate-700">•</span>
              <span>Cloud</span>
              <span className="text-slate-700">•</span>
              <span>RFID & IoT</span>
              <span className="text-slate-700">•</span>
              <span>Data</span>
              <span className="text-slate-700">•</span>
              <span className="text-white">Connected Technology</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
