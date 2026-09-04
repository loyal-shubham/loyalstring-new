"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Database, Smartphone, Cloud, Cpu, Network, Code, Radio, Boxes, Link2 } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const overviewHighlights = [
  {
    title: "Operations & inventory platforms",
    detail: "Custom ERP, WMS, and store systems for retail, textile, and warehouse teams.",
    icon: Boxes,
  },
  {
    title: "RFID middleware & device software",
    detail: "Interfaces that turn reads from guns, tags, and portals into live business data.",
    icon: Radio,
  },
  {
    title: "Mobile apps for the floor",
    detail: "iOS and Android tools for cycle counts, receiving, and on-the-go operations.",
    icon: Smartphone,
  },
  {
    title: "Cloud, APIs & ERP integration",
    detail: "Secure AWS/Azure architecture that connects software, hardware, and existing systems.",
    icon: Link2,
  },
];

const theme = {
  bg: "bg-blue-50",
  text: "text-blue-600",
};

const capabilities = [
  {
    title: "Enterprise Web Applications",
    desc: "Scalable, secure web platforms built with React, Next.js, and robust Node.js/Python backends.",
    icon: MonitorSmartphone,
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
    icon: Smartphone,
  },
  {
    title: "Artificial Intelligence & ML",
    desc: "Integrating predictive analytics, NLP, and intelligent robotics and automation into your existing workflows.",
    icon: Cpu,
  },
  {
    title: "Cloud & Microservices",
    desc: "AWS/Azure cloud architecture, Docker/Kubernetes containerization, and DevOps CI/CD pipelines.",
    icon: Cloud,
  },
  {
    title: "Database Architecture",
    desc: "High-performance database design (PostgreSQL, MongoDB), optimization, and data migration.",
    icon: Database,
  },
  {
    title: "IoT Solutions",
    desc: "Connecting devices and sensors with robust backend systems for real-time data processing.",
    icon: Network,
  },
];

export default function SoftwareDevelopmentView() {
  const heroWords = ["Software", "Development"];

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <section className="relative w-full min-h-[250px] lg:min-h-[320px] flex flex-col justify-center items-center text-center overflow-hidden">
        <img
          src="/images/services/software-development.jpg"
          alt="Software Development"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-slate-900/75 z-10" />

        <div className="relative z-20 max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            {heroWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: [18, -6, 0] }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
                className="inline-block mr-[0.28em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-xl lg:text-2xl text-white/90 font-medium leading-relaxed"
          >
            Custom enterprise software and robust applications.
          </motion.p>
        </div>
      </section>

      <section className="relative overflow-hidden py-10 lg:py-12 bg-[#f4f6f8] border-b border-slate-200">
        <div className="pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden>
          <svg className="h-full w-full text-slate-400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="overview-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#overview-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
          >
            <div className="lg:col-span-7 flex flex-col justify-center rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8">
              <span className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-[0.16em] uppercase text-blue-700">
                <Code size={14} /> Service Overview
              </span>
              <h2 className="text-3xl lg:text-[2.25rem] font-extrabold tracking-tight text-slate-900 mb-3 leading-tight">
                Software that connects your operations to LoyalString hardware
              </h2>
              <p className="text-slate-600 text-[0.95rem] lg:text-base leading-relaxed mb-5 max-w-2xl">
                We design enterprise applications, mobile tools, and RFID/IoT software for retailers, warehouses, and textile businesses. The same team that builds your platform also understands the guns, tags, and portals it has to run with—so inventory, receiving, and floor operations stay in one connected stack.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Retail", "Warehouse", "Textile", "RFID / IoT", "Cloud", "Mobile"].map((tag) => (
                  <span key={tag} className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-md hover:bg-blue-700 transition-colors text-sm">
                  Contact Sales
                </Link>
                <button className="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-800 font-semibold py-2.5 px-6 rounded-md hover:bg-slate-50 transition-colors text-sm">
                  Download Brochure
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="h-full rounded-2xl bg-[#0f172a] p-5 sm:p-6 text-white shadow-[0_24px_50px_-28px_rgba(15,23,42,0.55)]">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-4">
                  What this service covers
                </p>
                <ul className="space-y-1">
                  {overviewHighlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.title} className="flex gap-3 rounded-xl px-2 py-2.5">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-blue-300 ring-1 ring-white/10">
                          <Icon size={16} strokeWidth={2} />
                        </span>
                        <span>
                          <span className="block font-semibold text-[0.92rem] leading-snug">{item.title}</span>
                          <span className="block text-[13px] text-slate-400 leading-relaxed mt-0.5">{item.detail}</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 relative bg-slate-50">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Technical Capabilities</h2>
              <p className="text-slate-600 text-lg max-w-3xl">
                Explore the specific technologies and solutions we deliver within our Software Development division.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <motion.article
                    key={cap.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                    className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_40px_-24px_rgba(37,99,235,0.35)]"
                  >
                    <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${theme.bg} ${theme.text} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon size={26} strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-slate-500 text-[0.95rem] leading-[1.7]">
                      {cap.desc}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
