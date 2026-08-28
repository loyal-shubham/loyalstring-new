"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Target, CheckCircle2 } from "lucide-react";

export default function IntroMission() {
  const techList = [
    "Enterprise Software",
    "Artificial Intelligence",
    "Cloud Platforms",
    "Automation",
    "RFID & IoT",
    "Data Intelligence",
    "Mobile Technologies",
    "System Integration",
    "Digital Transformation",
  ];

  const missionBullets = [
    "Enterprise technology",
    "Process simplification",
    "Automation",
    "Physical-digital connectivity",
    "Actionable intelligence",
    "Secure and scalable platforms",
    "Practical AI",
    "Industry-specific solutions",
    "Continuous research and innovation",
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section 02: Technology Without Boundaries */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Direction
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-8">
              Technology Without Boundaries
            </h2>
            <p className="text-2xl lg:text-3xl text-slate-800 font-medium leading-[1.4] mb-8">
              "Technology should solve real business problems—not create additional complexity."
            </p>
            <p className="text-lg text-slate-600 leading-[1.8] mb-12">
              As industries evolve, organisations are moving from disconnected applications and manual processes toward intelligent, connected and automated digital ecosystems. Our Vision 2030 is to position LoyalString at the centre of this transformation.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {techList.map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Section 03: Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-slate-950 rounded-[2rem] p-10 lg:p-12 relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Compass size={120} className="text-white" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-8 border border-blue-500/30">
                <Compass className="text-blue-400" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-xl text-slate-300 leading-[1.7]">
                To build LoyalString into a globally trusted technology company that creates intelligent, connected and scalable digital solutions capable of transforming businesses and industries.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-50 rounded-[2rem] p-10 lg:p-12 border border-slate-200 shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center mb-8 border border-indigo-200">
              <Target className="text-indigo-600" size={28} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
            <p className="text-lg text-slate-700 leading-[1.7] mb-8">
              Combine technology, engineering and business understanding to solve complex operational challenges through simple, practical and scalable solutions.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {missionBullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-indigo-600 shrink-0 mt-0.5" size={18} />
                  <span className="text-slate-600 text-[0.95rem] font-medium leading-[1.4]">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
