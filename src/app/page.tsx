"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe2, ShieldCheck, Zap, Search, Settings, Truck } from "lucide-react";
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
              <span className="dot-indicator"></span> WELCOME TO LOYAL STRING
            </div>
            <h1 className="heading-1 hero-title text-white">
              Building RFID solutions with<br />precision and excellence
            </h1>
            <p className="text-lead hero-desc mx-auto text-light">
              We specialize in turning business visions into reality with exceptional craftsmanship and meticulous attention to detail. With years of experience and a commitment to quality.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side Content */}
          <div className="pr-0 lg:pr-8 relative z-10">
            <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#af57a1] to-[#7a90ca] text-[0.85rem] tracking-[2px] uppercase mb-4 font-bold">WHY CHOOSE US</h4>
            <h2 className="text-4xl lg:text-[2.5rem] mb-6 leading-[1.2] font-bold text-slate-900">
              RFID Solutions: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#af57a1] to-[#7a90ca]">explore our<br/>full range!</span>
            </h2>
            <p className="text-slate-600 text-[0.95rem] leading-[1.6] mb-8">
              What makes Loyal String different is our customer support & instant service. A dedicated project manager is assigned to your project who oversees manufacturing & shipping to ensure all your requirements are met and your RFID products are delivered to your doorstep in time.
            </p>
            <ul className="list-none p-0 mb-10">
              <li className="flex items-start gap-2 mb-3 font-semibold text-[0.9rem] text-slate-900"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#af57a1] to-[#7a90ca]">-</span> Upto 60% better rates than the Market</li>
              <li className="flex items-start gap-2 mb-3 font-semibold text-[0.9rem] text-slate-900"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#af57a1] to-[#7a90ca]">-</span> Dedicated Project Manager for each Order</li>
              <li className="flex items-start gap-2 mb-3 font-semibold text-[0.9rem] text-slate-900"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#af57a1] to-[#7a90ca]">-</span> Multi-tier Quality Control System</li>
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 font-semibold bg-gradient-to-r from-[#af57a1] to-[#7a90ca] text-white rounded-full py-3 px-8 transition-transform hover:-translate-y-1 shadow-lg shadow-[#af57a1]/20 hover:shadow-[#7a90ca]/40">
              Chat with Our Team <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right Side Cards */}
          <div className="relative p-8 z-10">
            <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#af57a1]/40 to-transparent blur-[60px] -top-[10%] -left-[10%] -z-10"></div>
            <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#7a90ca]/40 to-transparent blur-[60px] -bottom-[10%] -right-[10%] -z-10"></div>
            <div className="absolute w-[250px] h-[250px] rounded-full bg-slate-200/60 blur-[60px] bottom-[20%] left-[20%] -z-10"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 items-start">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                <div className="w-[50px] h-[50px] rounded-full bg-slate-50 flex items-center justify-center mb-4"><Search size={24} color="#7a90ca" /></div>
                <h4 className="text-base mb-3 text-slate-900 font-semibold">Attention to details</h4>
                <p className="text-[0.8rem] text-slate-500 leading-relaxed">From custom printing to the fitting of your product, Latest Technology & Quality Control Tools are used to ensure perfection.</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] sm:mt-12">
                <div className="w-[50px] h-[50px] rounded-full bg-slate-50 flex items-center justify-center mb-4"><Settings size={24} color="#af57a1" /></div>
                <h4 className="text-base mb-3 text-slate-900 font-semibold">Customization options</h4>
                <p className="text-[0.8rem] text-slate-500 leading-relaxed">We offer a vast range of Customization Options including frequencies, memory sizes, printing. Every tag is completely customizable.</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                <div className="w-[50px] h-[50px] rounded-full bg-slate-50 flex items-center justify-center mb-4"><Truck size={24} color="#7a90ca" /></div>
                <h4 className="text-base mb-3 text-slate-900 font-semibold">Fast delivery</h4>
                <p className="text-[0.8rem] text-slate-500 leading-relaxed">Multi-level management & automated setup is used for fast manufacturing. Strict SOPs are followed for timely delivery.</p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] sm:mt-12">
                <div className="w-[50px] h-[50px] rounded-full bg-slate-50 flex items-center justify-center mb-4"><Globe2 size={24} color="#af57a1" /></div>
                <h4 className="text-base mb-3 text-slate-900 font-semibold">Live updates</h4>
                <p className="text-[0.8rem] text-slate-500 leading-relaxed">The dedicated project manager assigned to you would keep you updated about all phases of design, manufacturing & shipment.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Products Highlight Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">Our Product Range</h2>
            <Link href="/products" className="view-all-link">
              View full catalog <ArrowRight size={20} />
            </Link>
          </div>

          <div className="products-grid">
            <ProductCard
              title="Handheld RFID Guns"
              description="Ergonomic, high-range RFID readers for rapid inventory management and asset tracking."
              type="gun"
              delay={0.1}
            />
            <ProductCard
              title="Industrial RFID Tags"
              description="Rugged tags designed for metal surfaces and extreme environmental conditions."
              type="tag"
              delay={0.2}
            />
            <ProductCard
              title="Retail RFID Labels"
              description="Cost-effective, printable labels for retail apparel and fast-moving consumer goods."
              type="tag"
              delay={0.3}
            />
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
