"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Box, Check, Cpu, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SparkleCaseStudy() {
  const capabilities = [
    "RFID-enabled inventory management",
    "Handheld RFID scanning",
    "Smart inventory counting",
    "RFID tags & Smart trays",
    "Security solutions",
    "Movement visibility",
    "Integrated software and device workflows"
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs tracking-widest uppercase mb-6">
              Technology Applied to Real Industries
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Sparkle RFID
            </h2>
            <p className="text-xl text-blue-400 font-semibold mb-8">
              A LoyalString Technology Solution
            </p>
            
            <p className="text-lg text-slate-400 leading-[1.8] mb-8">
              Sparkle RFID demonstrates how LoyalString combines enterprise software, RFID technology, connected devices and industry knowledge to solve complex real-world challenges. With specialised applications for the jewellery sector, Sparkle RFID helps businesses create greater visibility and control across inventory and operations.
            </p>

            <div className="mb-10 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Key Capabilities</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="text-blue-500 shrink-0 mt-0.5" size={16} />
                    <span className="text-slate-300 text-sm font-medium">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 border-l-2 border-slate-700 mb-10">
              <p className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-1">Strategic Message</p>
              <p className="text-slate-500 italic">
                "Develop strong core technologies, understand an industry's unique challenges, and transform those technologies into specialised solutions."
              </p>
            </div>

            <Link 
              href="https://sparklerfid.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
            >
              Explore Sparkle RFID <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 flex items-center justify-center p-8"
          >
            {/* Abstract visual background for the device */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>
            
            <div className="relative z-10 w-full max-w-[400px] aspect-square rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shadow-2xl overflow-hidden group">
               {/* Decorative tech rings */}
               <div className="absolute inset-4 rounded-full border border-slate-700 border-dashed animate-[spin_60s_linear_infinite]"></div>
               <div className="absolute inset-12 rounded-full border border-slate-700/50"></div>
               
               {/* Core representation */}
               <div className="relative z-20 w-48 h-48 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-900/50 group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-2 rounded-full bg-slate-900 flex items-center justify-center">
                    <Tag size={48} className="text-blue-400" />
                  </div>
               </div>

               {/* Nodes */}
               <div className="absolute top-1/2 left-4 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
               <div className="absolute top-1/2 right-4 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
               <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-400"></div>
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-400"></div>
            </div>
            
            {/* If we have an image, we could place it here instead. The docs said "One premium Sparkle RFID device/product image + subtle industry visual." 
                We'll use a polished abstract representation that fits the tech company vibe since specific product photos weren't guaranteed. */}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
