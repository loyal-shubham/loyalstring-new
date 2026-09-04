"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Code,
  Code2,
  Cpu,
  Link2,
  Mail,
  MapPin,
  Megaphone,
  Network,
  Radio,
  RefreshCcw,
  Rocket,
  Search,
  Share2,
  Smartphone,
  Target,
} from "lucide-react";
import Link from "next/link";
import CatalogMedia from "@/components/CatalogMedia";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    slug: "software-development",
    title: "Software Development",
    subtitle: "Enterprise apps, RFID middleware, and mobile tools",
    image: "/images/services/software-development.jpg",
    overview:
      "We design enterprise applications, mobile tools, and RFID/IoT software for retailers, warehouses, and textile businesses. The same team that builds your platform also understands the guns, tags, and portals it has to run with—so inventory, receiving, and floor operations stay in one connected stack.",
    tags: ["Retail", "Warehouse", "Textile", "RFID / IoT", "Cloud", "Mobile"],
    highlights: [
      { title: "Operations & inventory platforms", detail: "Custom ERP, WMS, and store systems for retail, textile, and warehouse teams.", icon: Boxes },
      { title: "RFID middleware & device software", detail: "Interfaces that turn reads from guns, tags, and portals into live business data.", icon: Radio },
      { title: "Mobile apps for the floor", detail: "iOS and Android tools for cycle counts, receiving, and on-the-go operations.", icon: Smartphone },
      { title: "Cloud, APIs & ERP integration", detail: "Secure AWS/Azure architecture that connects software, hardware, and existing systems.", icon: Link2 },
    ],
    offerings: [
      "Enterprise Web Applications",
      "Mobile App Development",
      "Artificial Intelligence & ML",
      "Cloud & Microservices",
      "Database Architecture",
      "IoT Solutions",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Demand generation for RFID, software, and hardware brands",
    image: "/images/services/digital-marketing.jpg",
    overview:
      "We run campaigns for RFID, EAS, and enterprise software businesses that need qualified buyers—retailers, warehouses, and textile operators—not vanity traffic. Creative, media, and landing pages stay aligned with the products you actually sell: readers, tags, portals, and connected platforms.",
    tags: ["Retail", "RFID / EAS", "B2B", "Lead gen", "Social", "PPC"],
    highlights: [
      { title: "Performance media (PPC)", detail: "Google, LinkedIn, and Meta ads aimed at procurement, ops, and retail decision-makers.", icon: Target },
      { title: "Social & brand presence", detail: "Channel plans that explain hardware and software clearly to a B2B audience.", icon: Share2 },
      { title: "Content for technical buyers", detail: "Case-led assets on inventory accuracy, cycle counts, and dock-door automation.", icon: Megaphone },
      { title: "Conversion & nurture", detail: "Landing pages and email sequences that turn inquiries into sales conversations.", icon: Mail },
    ],
    offerings: [
      "Social Media Strategy",
      "Performance Marketing (PPC)",
      "Content Marketing",
      "Email Marketing Campaigns",
      "Conversion Optimization",
      "Campaign analytics",
    ],
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    subtitle: "Organic visibility for RFID, hardware, and software buyers",
    image: "/images/services/seo.jpg",
    overview:
      "LoyalString SEO focuses on the searches your customers actually make: RFID readers, tags, EAS systems, textile tracking, and enterprise software. We fix technical foundations, structure product pages, and build authority so procurement and operations teams can find you instead of a competitor.",
    tags: ["Technical SEO", "Product pages", "Local", "RFID", "B2B", "Content"],
    highlights: [
      { title: "Technical SEO audits", detail: "Crawlability, speed, indexation, and structured data for product and industry pages.", icon: Code2 },
      { title: "On-page & catalog SEO", detail: "Titles, internal links, and copy that match RFID, EAS, and software search intent.", icon: Search },
      { title: "Authority & link building", detail: "Relevant mentions from industry and partner sites that strengthen domain trust.", icon: Link2 },
      { title: "Local & market SEO", detail: "Google Business Profile and location pages for showrooms, service, and regional buyers.", icon: MapPin },
    ],
    offerings: [
      "Technical SEO Audits",
      "On-Page Optimization",
      "Link Building Strategies",
      "Local SEO",
      "Keyword Research & Tracking",
      "Content & search intent",
    ],
  },
  {
    slug: "business-consulting",
    title: "Business Consulting",
    subtitle: "Roadmaps that connect software, RFID, and operations",
    image: "/images/services/business-consulting.jpg",
    overview:
      "We help leadership teams decide where RFID, software, and robotics and automation should sit in the business—before a rollout stalls. Engagements cover process design, technology selection, and go-to-market so retail, warehouse, and textile operations get a practical roadmap, not a slide deck that never ships.",
    tags: ["RFID / IoT", "Software", "Operations", "Retail", "Warehouse", "Textile"],
    highlights: [
      { title: "Digital transformation", detail: "From manual counts and siloed tools to a connected inventory and operations model.", icon: RefreshCcw },
      { title: "Workflow & automation", detail: "Map receiving, floor, and dock processes, then place RFID and robotics where they pay back.", icon: Network },
      { title: "Technology stack assessment", detail: "Evaluate ERP, WMS, and device software so new hardware does not create another island.", icon: Cpu },
      { title: "Go-to-market & rollout", detail: "Phased pilots, change management, and launch plans for product or site expansions.", icon: Rocket },
    ],
    offerings: [
      "Digital Transformation",
      "Workflow Optimization",
      "Technology Stack Assessment",
      "Go-to-Market Strategy",
      "Robotics and Automation",
      "Risk & Compliance",
    ],
  },
];

export default function ServicesView() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <section className="relative w-full min-h-[250px] lg:min-h-[320px] flex flex-col justify-center items-center text-center overflow-hidden">
        <motion.img
          src="/images/services/software-development.jpg"
          alt="Loyal String services"
          initial={{ scale: 1.16 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-slate-900/75 z-10" />
        <div className="relative z-20 max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            {"Our Services".split(" ").map((word, i) => (
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
            Software, marketing, SEO, and consulting built around RFID and operations.
          </motion.p>
        </div>
      </section>

      <section className="relative overflow-hidden py-10 lg:py-12 bg-[#f4f6f8] border-b border-slate-200">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-[0.16em] uppercase text-blue-700">
              <Code size={14} /> Service catalog
            </span>
            <h2 className="text-3xl lg:text-[2.25rem] font-extrabold tracking-tight text-slate-900 mb-3 leading-tight">
              One team for software, demand, search, and rollout
            </h2>
            <p className="text-slate-600 text-[0.95rem] lg:text-base leading-relaxed">
              LoyalString is not a generic agency. These four practices sit next to in-house RFID and EAS hardware, so the software you launch, the campaigns you run, and the consulting you buy all speak the same language as your readers, tags, and portals.
            </p>
          </motion.div>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`py-12 lg:py-16 border-b border-slate-200 ${index % 2 === 0 ? "bg-white" : "bg-[#f4f6f8]"}`}
        >
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <CatalogMedia
                  src={service.image}
                  alt={service.title}
                  caption={service.title}
                  reverse={index % 2 === 1}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 1 ? -28 : 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700 mb-2">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
                  {service.title}
                </h2>
                <p className="text-slate-500 font-medium mb-4">{service.subtitle}</p>
                <p className="text-slate-600 text-[0.95rem] leading-relaxed mb-5">
                  {service.overview}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {service.highlights.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.li
                        key={item.title}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.08 + i * 0.06 }}
                        className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3"
                      >
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                          <Icon size={15} strokeWidth={2} />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-slate-900">{item.title}</span>
                          <span className="block text-xs text-slate-500 leading-relaxed mt-0.5">{item.detail}</span>
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>

                <div className="mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-2">
                    What we deliver
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {service.offerings.map((item) => (
                      <li
                        key={item}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-2.5 px-5 rounded-md hover:bg-blue-700 transition-colors text-sm"
                >
                  View {service.title}
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-12 lg:py-16 bg-[#0f172a]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-2">
              Need a combined software and RFID program?
            </h2>
            <p className="text-slate-300 text-[0.95rem] max-w-2xl">
              Talk to sales about development, marketing, SEO, or a consulting roadmap that matches your hardware stack.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-md hover:bg-blue-700 transition-colors text-sm"
            >
              Contact Sales
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-white/10 border border-white/20 text-white font-semibold py-2.5 px-6 rounded-md hover:bg-white/15 transition-colors text-sm"
            >
              View products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
