"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Globe2, Search, Settings, Truck, Check, MonitorSmartphone, TrendingUp, BarChart, Briefcase, Cpu, Radio } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useEffect, useRef } from "react";
import "./page.css";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => console.error("Autoplay prevented:", e));
    }
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero hero-with-bg">
        <video
          ref={videoRef}
          className="hero-bg-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/heroSection.mp4" type="video/mp4" />
        </video>
        <div className="hero-bg-overlay"></div>

        <div className="container hero-container text-center relative-z">
          <motion.div
            className="hero-content mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-subtitle">
              WELCOME TO LOYAL STRING
            </div>
            <h1 className="heading-1 hero-title text-white">
              Comprehensive Technology &<br className="hidden lg:block" />Business Solutions
            </h1>
            <p className="text-lead hero-desc mx-auto text-light">
              Empowering global growth through Software Development, Digital Marketing, Strategic Consulting, and Industry-Leading Hardware Solutions.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-white relative border-t border-slate-100 pb-20 lg:pb-32">
        <div className="py-20 lg:py-32 text-center max-w-3xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Industries We Serve
          </h2>
          <p className="text-slate-600 text-[1.1rem] leading-[1.8]">
            Delivering customized technology and hardware solutions across diverse sectors to streamline operations and accelerate growth.
          </p>
        </div>

        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8">
          {/* Row 1: Retailer */}
          <div className="flex flex-col lg:flex-row w-full bg-slate-50 border-t border-slate-200 lg:min-h-[75vh]">
            <div className="w-full lg:w-1/2 px-8 py-16 lg:px-20 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">RFID Solutions for Retailers</h2>
              <p className="text-slate-600 mb-10 leading-relaxed text-[1.05rem]">
                Enable <strong>automated inventory tracking, loss prevention, and seamless customer experiences</strong> across retail operations. Support end-to-end processes including <strong>supply chain visibility, fast checkout, and high-security anti-theft tags</strong> to achieve intelligent optimization.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-full bg-blue-50 relative text-blue-600 mb-3">
                    <Check size={20} className="stroke-current absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Jewellery</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Precision item-level tracking, real-time audit capabilities, and high-end security.</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-full bg-blue-50 relative text-blue-600 mb-3">
                    <Check size={20} className="stroke-current absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Garments</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Fast bulk scanning, dynamic stock optimization, and smooth omnichannel fulfillment.</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 sm:col-span-2">
                  <div className="w-10 h-10 rounded-full bg-blue-50 relative text-blue-600 mb-3">
                    <Check size={20} className="stroke-current absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">EAS (Electronic Article Surveillance)</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Advanced loss prevention gates and hard tags tailored for high-traffic retail environments.</p>
                </div>
              </div>

              <div>
                <Link href="/industries/retailer" className="inline-flex bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-blue-600/20">
                  View Solutions
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2 min-h-[400px] relative">
              <img src="/images/retail_rfid.png" alt="Retail Solutions" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Row 2: Warehousing */}
          <div className="flex flex-col lg:flex-row-reverse w-full bg-white border-t border-slate-200 lg:min-h-[75vh]">
            <div className="w-full lg:w-1/2 px-8 py-16 lg:px-20 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Smart Warehousing & Logistics</h2>
              <p className="text-slate-600 mb-10 leading-relaxed text-[1.05rem]">
                Enable <strong>real-time cargo tracking, automated data capture, and end-to-end supply chain visibility</strong>. Optimize operations from freight sorting to last-mile delivery with 99.9% accuracy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-full bg-purple-100 relative text-purple-600 mb-3">
                    <Check size={20} className="stroke-current absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Cross-Dock Transfers</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Automatically log cargo quantity and destination, reducing manual errors by 40%.</p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-full bg-purple-100 relative text-purple-600 mb-3">
                    <Check size={20} className="stroke-current absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Production Lines</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Component tracking, workflow automation, and quality compliance for defect tracing.</p>
                </div>
              </div>

              <div>
                <Link href="/industries/warehousing" className="inline-flex bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-blue-600/20">
                  View Solutions
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2 min-h-[400px] relative">
              <img src="/images/warehouse_rfid.png" alt="Warehouse Solutions" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Row 3: Medical */}
          <div className="flex flex-col lg:flex-row w-full bg-slate-50 border-t border-slate-200 lg:min-h-[75vh]">
            <div className="w-full lg:w-1/2 px-8 py-16 lg:px-20 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Medical Asset Tracking</h2>
              <p className="text-slate-600 mb-10 leading-relaxed text-[1.05rem]">
                Deploy <strong>medical-grade tracking systems</strong> for critical hospital assets. Ensure patient safety through <strong>real-time localization, automated inventory management, and strict compliance monitoring</strong>.
              </p>

              <div className="grid grid-cols-1 gap-4 mb-12">
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-full bg-pink-50 relative text-pink-600 mb-3">
                    <Check size={20} className="stroke-current absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Equipment Localization</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Instantly locate high-value medical devices and reduce time wasted searching for critical equipment.</p>
                </div>
              </div>

              <div>
                <Link href="/industries/medical" className="inline-flex bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-blue-600/20">
                  View Solutions
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2 min-h-[400px] relative">
              <img src="/images/medical_rfid.png" alt="Medical Solutions" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Row 4: Library */}
          <div className="flex flex-col lg:flex-row-reverse w-full bg-white border-t border-slate-200 lg:min-h-[75vh]">
            <div className="w-full lg:w-1/2 px-8 py-16 lg:px-20 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Intelligent Library Systems</h2>
              <p className="text-slate-600 mb-10 leading-relaxed text-[1.05rem]">
                Transform traditional libraries with <strong>automated cataloging and self-checkout kiosks</strong>. Provide an intuitive patron experience while maintaining <strong>airtight security and inventory control</strong>.
              </p>

              <div className="grid grid-cols-1 gap-4 mb-12">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 relative text-indigo-600 mb-3">
                    <Check size={20} className="stroke-current absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Automated Checkout</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Allow patrons to borrow multiple books instantly, reducing queues and staff workload.</p>
                </div>
              </div>

              <div>
                <Link href="/industries/library" className="inline-flex bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-blue-600/20">
                  View Solutions
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2 min-h-[400px] relative">
              <img src="/images/library_rfid.png" alt="Library Solutions" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 lg:py-32 bg-slate-50 relative text-slate-900 overflow-hidden border-t border-slate-200">

        {/* Decorative RFID/Tech Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="rfid-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="60" cy="60" r="35" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="60" cy="60" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
                <rect x="55" y="55" width="10" height="10" fill="currentColor" rx="2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#rfid-pattern)" />
          </svg>
        </div>

        <div className="absolute top-20 left-10 text-slate-400 opacity-[0.07] pointer-events-none animate-pulse">
          <Cpu size={180} strokeWidth={1} />
        </div>
        <div className="absolute bottom-20 right-10 text-slate-400 opacity-[0.07] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}>
          <Radio size={220} strokeWidth={1} />
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 lg:mb-24 gap-8 text-center lg:text-left">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
              </h2>
              <p className="text-slate-600 text-[1.1rem] leading-[1.8]">
                Beyond hardware, we provide full-stack digital solutions to elevate your brand, optimize your workflow, and drive meaningful revenue.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Software Dev */}
            <Link href="/services/software-development" className="flex flex-col sm:flex-row gap-6 group">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:bg-purple-100/50">
                  <MonitorSmartphone size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900 transition-colors duration-300 group-hover:text-purple-600">Software Development</h3>
                <p className="text-slate-600 leading-relaxed text-[1.05rem]">
                  Custom enterprise software, robust web applications, and seamless mobile experiences engineered for performance and scalability.
                </p>
              </div>
            </Link>

            {/* Digital Marketing */}
            <Link href="/services/digital-marketing" className="flex flex-col sm:flex-row gap-6 group">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:bg-blue-100/50">
                  <TrendingUp size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900 transition-colors duration-300 group-hover:text-blue-600">Digital Marketing</h3>
                <p className="text-slate-600 leading-relaxed text-[1.05rem]">
                  Data-driven marketing campaigns, social media management, and targeted advertising to connect with your ideal audience.
                </p>
              </div>
            </Link>

            {/* SEO */}
            <Link href="/services/seo" className="flex flex-col sm:flex-row gap-6 group">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600 border border-pink-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:bg-pink-100/50">
                  <BarChart size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900 transition-colors duration-300 group-hover:text-pink-600">Search Engine Optimization</h3>
                <p className="text-slate-600 leading-relaxed text-[1.05rem]">
                  Technical, on-page, and off-page SEO strategies to dominate search rankings and drive high-intent organic traffic to your business.
                </p>
              </div>
            </Link>

            {/* Consulting */}
            <Link href="/services/business-consulting" className="flex flex-col sm:flex-row gap-6 group">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:bg-indigo-100/50">
                  <Briefcase size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900 transition-colors duration-300 group-hover:text-indigo-600">Business Consulting</h3>
                <p className="text-slate-600 leading-relaxed text-[1.05rem]">
                  Expert strategic guidance to streamline your operations, integrate new technologies, and formulate long-term growth roadmaps.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-32 bg-slate-50 relative overflow-hidden lg:min-h-screen lg:flex lg:items-center">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left Side Content */}
          <div className="relative z-10 lg:pr-8">
            {/* <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-bold text-xs tracking-widest uppercase mb-8 shadow-sm">
              Why Choose Loyal String
            </div> */}
            <h2 className="text-4xl lg:text-5xl mb-8 leading-[1.15] font-extrabold text-slate-900 tracking-tight">
              Why Choose <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Loyal String?</span>
            </h2>
            <p className="text-slate-600 text-[1.1rem] leading-[1.8] mb-10">
              What makes Loyal String different is our end-to-end expertise. From custom enterprise software to in-house manufacturing of high-performance RFID hardware, a dedicated project manager oversees your entire solution to ensure absolute perfection.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <Check size={18} style={{ color: '#7c3aed' }} strokeWidth={2.5} />
                </div>
                <span className="font-semibold text-[1.05rem] text-slate-800">Upto 60% better rates than the Market</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <Check size={18} style={{ color: '#7c3aed' }} strokeWidth={2.5} />
                </div>
                <span className="font-semibold text-[1.05rem] text-slate-800">Dedicated Project Manager for each Order</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <Check size={18} style={{ color: '#7c3aed' }} strokeWidth={2.5} />
                </div>
                <span className="font-semibold text-[1.05rem] text-slate-800">Multi-tier Quality Control System</span>
              </li>
            </ul>
            <div className="mt-10">
              <Link href="/contact" className="inline-flex items-center gap-2 font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-full py-4 px-8 transition-all hover:-translate-y-1 shadow-xl shadow-slate-900/20">
                Chat with Our Team <ArrowUpRight size={20} />
              </Link>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="relative z-10 w-full">
            {/* Elegant glowing background orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-purple-200/60 via-blue-100/60 to-pink-100/60 blur-[80px] -z-10 rounded-full"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 relative z-10 sm:pb-12">
              {/* Card 1 (Left column, lower) */}
              <div className="bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 sm:translate-y-12 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)]">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 border border-blue-100/50">
                  <Search size={28} color="#2563eb" strokeWidth={2.5} />
                </div>
                <h4 className="text-[1.15rem] mb-3 text-slate-900 font-bold tracking-tight">End-to-End Solutions</h4>
                <p className="text-[0.95rem] text-slate-500 leading-relaxed">From software architecture to the robust engineering of our RFID hardware, our integrated approach ensures absolute perfection.</p>
              </div>

              {/* Card 2 (Right column, higher) */}
              <div className="bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)]">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 border border-purple-100/50">
                  <Settings size={28} color="#9333ea" strokeWidth={2.5} />
                </div>
                <h4 className="text-[1.15rem] mb-3 text-slate-900 font-bold tracking-tight">Custom Digital & Hardware</h4>
                <p className="text-[0.95rem] text-slate-500 leading-relaxed">We offer vast customization, whether it's bespoke software development, targeted marketing campaigns, or unique RFID form factors.</p>
              </div>

              {/* Card 3 (Left column, lower) */}
              <div className="bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 sm:translate-y-12 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)]">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 border border-blue-100/50">
                  <Truck size={28} color="#2563eb" strokeWidth={2.5} />
                </div>
                <h4 className="text-[1.15rem] mb-3 text-slate-900 font-bold tracking-tight">Agile Deployment</h4>
                <p className="text-[0.95rem] text-slate-500 leading-relaxed">Multi-level management and agile methodologies are used for rapid deployment of software and fast manufacturing of bulk hardware orders.</p>
              </div>

              {/* Card 4 (Right column, higher) */}
              <div className="bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)]">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 border border-purple-100/50">
                  <Globe2 size={28} color="#9333ea" strokeWidth={2.5} />
                </div>
                <h4 className="text-[1.15rem] mb-3 text-slate-900 font-bold tracking-tight">Dedicated Support</h4>
                <p className="text-[0.95rem] text-slate-500 leading-relaxed">Your assigned project manager will keep you updated about all phases of design, manufacturing & shipment for your RFID hardware.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <motion.div
            className="glass-card cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2">Ready to transform your tracking?</h2>
            <p className="text-lead mb-4">Join hundreds of global businesses using Loyal String.</p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get a Quote Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
