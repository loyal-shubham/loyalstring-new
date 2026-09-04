"use client";

import { BarChart, Search, Link as LinkIcon, MapPin, Code2, FileSearch } from "lucide-react";
import ServicePageView, { type ServicePageContent } from "../ServicePageView";

const content: ServicePageContent = {
  heroWords: ["Search", "Engine", "Optimization"],
  heroImage: "/images/services/seo.jpg",
  heroAlt: "SEO Services",
  subtitle: "Organic visibility for RFID, hardware, and software buyers.",
  overviewIcon: Search,
  overviewTitle: "SEO built around product catalogs, not generic blog traffic",
  overviewBody:
    "LoyalString SEO focuses on the searches your customers actually make: RFID readers, tags, EAS systems, textile tracking, and enterprise software. We fix technical foundations, structure product pages, and build authority so procurement and operations teams can find you instead of a competitor.",
  tags: ["Technical SEO", "Product pages", "Local", "RFID", "B2B", "Content"],
  highlights: [
    {
      title: "Technical SEO audits",
      detail: "Crawlability, speed, indexation, and structured data for product and industry pages.",
      icon: Code2,
    },
    {
      title: "On-page & catalog SEO",
      detail: "Titles, internals links, and copy that match RFID, EAS, and software search intent.",
      icon: Search,
    },
    {
      title: "Authority & link building",
      detail: "Relevant mentions from industry and partner sites that strengthen domain trust.",
      icon: LinkIcon,
    },
    {
      title: "Local & market SEO",
      detail: "Google Business Profile and location pages for showrooms, service, and regional buyers.",
      icon: MapPin,
    },
  ],
  capabilitiesTitle: "Core SEO Capabilities",
  capabilitiesIntro: "Methodologies we use to improve search visibility for hardware products and software services.",
  capabilities: [
    {
      title: "Technical SEO Audits",
      desc: "Architecture, crawl budget, Core Web Vitals, and structured data so product and service pages can actually rank.",
      icon: Code2,
    },
    {
      title: "On-Page Optimization",
      desc: "Content, metadata, and internal linking aligned to RFID, warehouse, retail, and software search intent.",
      icon: Search,
    },
    {
      title: "Link Building Strategies",
      desc: "High-quality, relevant backlinks that lift domain authority without chasing short-lived algorithm tricks.",
      icon: LinkIcon,
    },
    {
      title: "Local SEO",
      desc: "Google Business Profile, citations, and local pages so nearby retailers and warehouses can find your team.",
      icon: MapPin,
    },
    {
      title: "Keyword Research & Tracking",
      desc: "Keyword maps for product lines and industries, with ranking and organic-lead reporting your sales team can use.",
      icon: BarChart,
    },
    {
      title: "Content & search intent",
      desc: "Guides and comparison pages that capture buyers researching guns, tags, portals, and connected software.",
      icon: FileSearch,
    },
  ],
  gridId: "seo-overview-grid",
};

export default function SEOView() {
  return <ServicePageView content={content} />;
}
