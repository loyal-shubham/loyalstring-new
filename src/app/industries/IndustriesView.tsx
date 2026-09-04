"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Building2,
  DoorOpen,
  Factory,
  HeartPulse,
  Package,
  Radio,
  Scan,
  ShieldAlert,
  Shirt,
  Stethoscope,
  Store,
  Tag,
  Truck,
  Warehouse,
} from "lucide-react";
import Link from "next/link";
import CatalogMedia from "@/components/CatalogMedia";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const industries = [
  {
    slug: "retailer",
    title: "Retailer",
    heading: "RFID Solutions for Retailers",
    subtitle: "Inventory, loss prevention, and checkout from DC to sales floor",
    image: "/images/retail_rfid.png",
    overview:
      "Retail solutions give complete visibility from the distribution center to the store. Robotics and automation, item-level RFID, and EAS work together so staff see live stock, shrink drops, and customers get a faster, more secure shopping experience.",
    tags: ["Jewellery", "Textile", "EAS", "Inventory", "Loss prevention"],
    highlights: [
      { title: "Jewellery Tracking", detail: "Item-level tracking, live audits, and high-end security for valuable assets.", icon: Tag },
      { title: "Textile Management", detail: "Bulk scanning, size-level stock, and omnichannel fulfillment for apparel floors.", icon: Shirt },
      { title: "EAS Loss Prevention", detail: "Gates and hard tags built for high-traffic stores to cut retail shrink.", icon: ShieldAlert },
      { title: "Store operations", detail: "Supply-chain visibility, fast checkout, and anti-theft tags in one stack.", icon: Store },
    ],
    offerings: [
      "Item-level RFID",
      "Cycle counts",
      "Omnichannel stock",
      "EAS gates & tags",
      "Jewellery security",
      "Textile tracking",
    ],
  },
  {
    slug: "library",
    title: "Library",
    heading: "Intelligent Library Systems",
    subtitle: "Self-checkout, returns, and collection security with RFID",
    image: "/images/library_rfid.png",
    overview:
      "RFID streamlines cataloging, borrowing, and security. Patrons check out multiple items in one scan, return bins check stock in automatically, and staff audit shelves in seconds instead of hours.",
    tags: ["Self-checkout", "Returns", "Security", "Inventory", "RFID"],
    highlights: [
      { title: "Self-Checkout Kiosks", detail: "Borrow multiple books in a single scan and cut queues and staff load.", icon: Scan },
      { title: "Smart Return Drops", detail: "Return bins that check items in and sort them for faster re-shelving.", icon: DoorOpen },
      { title: "Anti-theft Security Gates", detail: "Gates that detect unchecked items without constant false alarms.", icon: ShieldAlert },
      { title: "Handheld Inventory Scanners", detail: "Audit an entire shelf by waving a reader past the spines.", icon: BookOpen },
    ],
    offerings: [
      "Self-checkout",
      "Smart returns",
      "Security gates",
      "Shelf audits",
      "Collection control",
      "Patron flow",
    ],
  },
  {
    slug: "medical",
    title: "Medical",
    heading: "Medical Asset Tracking",
    subtitle: "Locate equipment, supplies, and patients without manual searches",
    image: "/images/medical_rfid.png",
    overview:
      "Hospitals waste hours hunting for devices. Medical-grade RFID localizes high-value equipment, tracks supplies and pharmaceuticals, and keeps sterilization and maintenance logs ready for compliance.",
    tags: ["Hospitals", "Assets", "Compliance", "Inventory", "Patient flow"],
    highlights: [
      { title: "Equipment Localization", detail: "Find high-value devices across wings so life-saving tools stay in reach.", icon: Stethoscope },
      { title: "Inventory Management", detail: "Track supplies, pharmaceuticals, and disposables to prevent stock-outs.", icon: Package },
      { title: "Compliance Monitoring", detail: "Electronic logs of sterilization cycles and maintenance for audits.", icon: HeartPulse },
      { title: "Patient Tracking", detail: "Secure wristbands that help monitor flow and reduce ER wait times.", icon: Radio },
    ],
    offerings: [
      "Device location",
      "Supply tracking",
      "Pharma inventory",
      "Sterilization logs",
      "Patient flow",
      "Audit trails",
    ],
  },
  {
    slug: "warehousing",
    title: "Warehousing",
    heading: "Smart Warehousing & Logistics",
    subtitle: "Dock-door reads, pallet location, and forklift tracking",
    image: "/images/warehouse_rfid.png",
    overview:
      "Robotics and RFID replace manual scans at the dock and on the floor. Cargo quantity and destination are logged automatically, forklifts update locations as they move, and pallets can be found without walking the aisle.",
    tags: ["Dock doors", "Pallets", "Forklifts", "Production", "Logistics"],
    highlights: [
      { title: "Cross-Dock Transfers", detail: "RFID logs quantity and destination at the door and cuts manual handling.", icon: Truck },
      { title: "Production Line Robotics", detail: "Component tracking and quality compliance for defect tracing on the line.", icon: Factory },
      { title: "Forklift Tracking", detail: "Readers on forklifts update stock locations as pallets are moved.", icon: Warehouse },
      { title: "Pallet Localization", detail: "Find a specific pallet in a large warehouse with zonal tracking.", icon: Boxes },
    ],
    offerings: [
      "Dock-door portals",
      "Cross-dock",
      "Forklift RFID",
      "Pallet location",
      "Line tracking",
      "99.9% accuracy",
    ],
  },
];

export default function IndustriesView() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <section className="relative w-full min-h-[250px] lg:min-h-[320px] flex flex-col justify-center items-center text-center overflow-hidden">
        <motion.img
          src="/images/retail_rfid.png"
          alt="Loyal String industries"
          initial={{ scale: 1.16 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-slate-900/75 z-10" />
        <div className="relative z-20 max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            {"Industries".split(" ").map((word, i) => (
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
            RFID and automation for retail, libraries, healthcare, and warehouses.
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
              <Building2 size={14} /> Industry catalog
            </span>
            <h2 className="text-3xl lg:text-[2.25rem] font-extrabold tracking-tight text-slate-900 mb-3 leading-tight">
              The same RFID stack, fitted to how each operation runs
            </h2>
            <p className="text-slate-600 text-[0.95rem] lg:text-base leading-relaxed">
              LoyalString deploys readers, tags, gates, and software for four environments that cannot share a one-size workflow. Retail needs shrink control and live stock. Libraries need self-service and collection security. Hospitals need asset location and compliance. Warehouses need dock-door speed and pallet truth.
            </p>
          </motion.div>
        </div>
      </section>

      {industries.map((industry, index) => (
        <section
          key={industry.slug}
          id={industry.slug}
          className={`py-12 lg:py-16 border-b border-slate-200 ${index % 2 === 0 ? "bg-white" : "bg-[#f4f6f8]"}`}
        >
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <CatalogMedia
                  src={industry.image}
                  alt={industry.heading}
                  caption={industry.title}
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
                  {String(index + 1).padStart(2, "0")} · {industry.title}
                </p>
                <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
                  {industry.heading}
                </h2>
                <p className="text-slate-500 font-medium mb-4">{industry.subtitle}</p>
                <p className="text-slate-600 text-[0.95rem] leading-relaxed mb-5">
                  {industry.overview}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {industry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {industry.highlights.map((item, i) => {
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
                    {industry.offerings.map((item) => (
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
                  href={`/industries/${industry.slug}`}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-2.5 px-5 rounded-md hover:bg-blue-700 transition-colors text-sm"
                >
                  View {industry.title} solutions
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
              Not sure which industry fit to start with?
            </h2>
            <p className="text-slate-300 text-[0.95rem] max-w-2xl">
              Contact sales and we will map RFID, EAS, and software to your floor, warehouse, or collection.
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
              href="/products/rfid"
              className="inline-flex items-center justify-center bg-white/10 border border-white/20 text-white font-semibold py-2.5 px-6 rounded-md hover:bg-white/15 transition-colors text-sm"
            >
              View RFID products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
