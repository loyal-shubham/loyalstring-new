"use client";

import { Megaphone, Share2, Target, TrendingUp, Mail, BarChart } from "lucide-react";
import ServicePageView, { type ServicePageContent } from "../ServicePageView";

const content: ServicePageContent = {
  heroWords: ["Digital", "Marketing"],
  heroImage: "/images/services/digital-marketing.jpg",
  heroAlt: "Digital Marketing",
  subtitle: "Demand generation for RFID, software, and hardware brands.",
  overviewIcon: TrendingUp,
  overviewTitle: "Marketing that sells LoyalString-class products, not generic clicks",
  overviewBody:
    "We run campaigns for RFID, EAS, and enterprise software businesses that need qualified buyers—retailers, warehouses, and textile operators—not vanity traffic. Creative, media, and landing pages stay aligned with the products you actually sell: readers, tags, portals, and connected platforms.",
  tags: ["Retail", "RFID / EAS", "B2B", "Lead gen", "Social", "PPC"],
  highlights: [
    {
      title: "Performance media (PPC)",
      detail: "Google, LinkedIn, and Meta ads aimed at procurement, ops, and retail decision-makers.",
      icon: Target,
    },
    {
      title: "Social & brand presence",
      detail: "Channel plans that explain hardware and software clearly to a B2B audience.",
      icon: Share2,
    },
    {
      title: "Content for technical buyers",
      detail: "Case-led assets on inventory accuracy, cycle counts, and dock-door automation.",
      icon: Megaphone,
    },
    {
      title: "Conversion & nurture",
      detail: "Landing pages and email sequences that turn inquiries into sales conversations.",
      icon: Mail,
    },
  ],
  capabilitiesTitle: "Core Strategies",
  capabilitiesIntro: "Tactics we use to generate demand for RFID systems, software platforms, and industrial hardware.",
  capabilities: [
    {
      title: "Social Media Strategy",
      desc: "LinkedIn and industry-channel programs that position your RFID and software offering in front of operations and retail leaders.",
      icon: Share2,
    },
    {
      title: "Performance Marketing (PPC)",
      desc: "Search and paid social campaigns built around product terms—RFID guns, tags, EAS, WMS—and high-intent buyer queries.",
      icon: Target,
    },
    {
      title: "Content Marketing",
      desc: "Authoritative content on inventory visibility, textile tracking, and warehouse automation that supports both sales and SEO.",
      icon: Megaphone,
    },
    {
      title: "Email Marketing Campaigns",
      desc: "Nurture sequences for demo requests, product launches, and follow-ups after RFID or software evaluations.",
      icon: Mail,
    },
    {
      title: "Conversion Optimization",
      desc: "Landing page tests, form design, and offer structure so paid and organic traffic turns into qualified pipeline.",
      icon: TrendingUp,
    },
    {
      title: "Campaign analytics",
      desc: "Reporting that ties spend to inquiries, demos, and product-line interest—not just impressions and clicks.",
      icon: BarChart,
    },
  ],
  gridId: "dm-overview-grid",
};

export default function DigitalMarketingView() {
  return <ServicePageView content={content} />;
}
