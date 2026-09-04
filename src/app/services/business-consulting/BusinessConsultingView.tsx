"use client";

import { Briefcase, RefreshCcw, Network, Rocket, ShieldCheck, Cpu } from "lucide-react";
import ServicePageView, { type ServicePageContent } from "../ServicePageView";

const content: ServicePageContent = {
  heroWords: ["Business", "Consulting"],
  heroImage: "/images/services/business-consulting.jpg",
  heroAlt: "Business Consulting",
  subtitle: "Roadmaps that connect software, RFID, and operations.",
  overviewIcon: Briefcase,
  overviewTitle: "Consulting that plans the full stack: process, software, and hardware",
  overviewBody:
    "We help leadership teams decide where RFID, software, and robotics and automation should sit in the business—before a rollout stalls. Engagements cover process design, technology selection, and go-to-market so retail, warehouse, and textile operations get a practical roadmap, not a slide deck that never ships.",
  tags: ["RFID / IoT", "Software", "Operations", "Retail", "Warehouse", "Textile"],
  highlights: [
    {
      title: "Digital transformation",
      detail: "From manual counts and siloed tools to a connected inventory and operations model.",
      icon: RefreshCcw,
    },
    {
      title: "Workflow & automation",
      detail: "Map receiving, floor, and dock processes, then place RFID and robotics where they pay back.",
      icon: Network,
    },
    {
      title: "Technology stack assessment",
      detail: "Evaluate ERP, WMS, and device software so new hardware does not create another island.",
      icon: Cpu,
    },
    {
      title: "Go-to-market & rollout",
      detail: "Phased pilots, change management, and launch plans for product or site expansions.",
      icon: Rocket,
    },
  ],
  capabilitiesTitle: "Consulting Focus Areas",
  capabilitiesIntro: "Disciplines we use to plan RFID, software, and operations programs that leadership can execute.",
  capabilities: [
    {
      title: "Digital Transformation",
      desc: "Strategy and sequencing to modernize operations with enterprise software, RFID/IoT, and connected data—not disconnected apps.",
      icon: RefreshCcw,
    },
    {
      title: "Workflow Optimization",
      desc: "Find bottlenecks in receiving, cycle counts, and transfers, then apply robotics and automation where they reduce labor and error.",
      icon: Network,
    },
    {
      title: "Technology Stack Assessment",
      desc: "Review ERP, WMS, mobile, and device layers so LoyalString hardware and software integrate instead of sitting beside the core system.",
      icon: Cpu,
    },
    {
      title: "Go-to-Market Strategy",
      desc: "Roadmaps for product launches, new verticals, and competitive positioning across RFID, EAS, and software offers.",
      icon: Rocket,
    },
    {
      title: "Robotics and Automation",
      desc: "Practical plans for dock portals, conveyor reads, and process automation that match your volume and floor layout.",
      icon: Briefcase,
    },
    {
      title: "Risk & Compliance",
      desc: "Process and IT checks so deployments meet security, data, and operational standards before they go live.",
      icon: ShieldCheck,
    },
  ],
  gridId: "consulting-overview-grid",
};

export default function BusinessConsultingView() {
  return <ServicePageView content={content} />;
}
