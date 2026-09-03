"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { 
  Bot, 
  Sparkles, 
  Wifi, 
  Database, 
  Cloud, 
  Share2,
  CheckCircle2
} from "lucide-react";

const WAVE_WORDS = ["Moving", "From", "Software", "That", "Records"] as const;
const FOLLOW_WORDS = ["to", "Technology", "That"] as const;
const TYPED_WORD = "Understands";

function AnimatedInsightHeading() {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [cycle, setCycle] = useState(0);
  const [typed, setTyped] = useState(prefersReducedMotion ? TYPED_WORD : "");
  const [showCursor, setShowCursor] = useState(!prefersReducedMotion);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    let interval: ReturnType<typeof setInterval> | undefined;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timeouts.push(setTimeout(resolve, ms));
      });

    const typeText = (word: string, speed: number, reverse = false) =>
      new Promise<void>((resolve) => {
        let i = reverse ? word.length : 0;
        interval = setInterval(() => {
          if (cancelled) {
            if (interval) clearInterval(interval);
            resolve();
            return;
          }
          i = reverse ? i - 1 : i + 1;
          setTyped(word.slice(0, Math.max(i, 0)));
          if ((!reverse && i >= word.length) || (reverse && i <= 0)) {
            if (interval) clearInterval(interval);
            resolve();
          }
        }, speed);
      });

    const run = async () => {
      while (!cancelled) {
        setCycle((current) => current + 1);
        setTyped("");
        setShowCursor(true);

        await wait((WAVE_WORDS.length + FOLLOW_WORDS.length) * 90 + 520);
        if (cancelled) return;

        await typeText(TYPED_WORD, 72);
        if (cancelled) return;

        await wait(1600);
        setShowCursor(false);
        await wait(2400);
        if (cancelled) return;

        setShowCursor(true);
        await typeText(TYPED_WORD, 42, true);
        if (cancelled) return;

        await wait(800);
      }
    };

    void run();

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
      if (interval) clearInterval(interval);
    };
  }, [isInView, prefersReducedMotion]);

  return (
    <h2
      ref={ref}
      aria-label="Moving From Software That Records to Technology That Understands"
      className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.2]"
    >
      {WAVE_WORDS.map((word, i) => (
        <motion.span
          key={`wave-${cycle}-${word}-${i}`}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: [18, -8, 0] } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.55, delay: i * 0.09, ease: "easeOut" }}
          className={`inline-block mr-[0.28em] ${word === "Records" ? "text-slate-400" : ""}`}
        >
          {word}
        </motion.span>
      ))}
      <br className="hidden sm:block" />
      {FOLLOW_WORDS.map((word, i) => (
        <motion.span
          key={`follow-${cycle}-${word}-${i}`}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: [18, -8, 0] } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.55, delay: (WAVE_WORDS.length + i) * 0.09, ease: "easeOut" }}
          className="inline-block mr-[0.28em]"
        >
          {word}
        </motion.span>
      ))}
      <span className="relative inline-block align-baseline">
        <span className="invisible select-none" aria-hidden>
          {TYPED_WORD}
        </span>
        <span className="absolute left-0 top-0 inline-flex items-baseline">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-500">
            {typed}
          </span>
          {showCursor && (
            <motion.span
              aria-hidden
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.75, repeat: Infinity, ease: "linear" }}
              className="ml-0.5 inline-block w-[3px] h-[0.82em] rounded-sm bg-purple-600"
            />
          )}
        </span>
        <motion.span
          aria-hidden
          initial={{ scaleX: 0, opacity: 0 }}
          animate={typed === TYPED_WORD ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute left-0 -bottom-1 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-purple-500 to-indigo-400"
        />
      </span>
    </h2>
  );
}

function AnimatedConnectHeading() {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [cycle, setCycle] = useState(0);
  const [active, setActive] = useState<"physical" | "link" | "digital" | "idle">("idle");

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timeouts.push(setTimeout(resolve, ms));
      });

    const run = async () => {
      while (!cancelled) {
        setCycle((current) => current + 1);
        setActive("idle");
        await wait(700);
        if (cancelled) return;

        setActive("physical");
        await wait(1100);
        if (cancelled) return;

        setActive("link");
        await wait(700);
        if (cancelled) return;

        setActive("digital");
        await wait(1400);
        if (cancelled) return;

        setActive("idle");
        await wait(2600);
      }
    };

    void run();

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [isInView, prefersReducedMotion]);

  return (
    <h2
      ref={ref}
      aria-label="Connecting the Physical World With the Digital World"
      className="relative mb-6 text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.3]"
    >
      <span className="relative block overflow-hidden pb-2">
        <motion.span
          className="block text-slate-900"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Connecting the{" "}
          <span
            className={`transition-colors duration-500 ${
              active === "physical" ? "text-slate-900" : "text-slate-500"
            }`}
          >
            Physical World
          </span>
        </motion.span>

        <motion.span
          aria-hidden
          animate={
            active === "link" || active === "digital"
              ? { scaleX: 1, opacity: 1 }
              : { scaleX: 0.35, opacity: 0.35 }
          }
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="my-2 block h-[3px] w-16 origin-left rounded-full bg-gradient-to-r from-slate-400 via-blue-500 to-sky-400"
        />

        <motion.span
          className="block"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
        >
          <span className="text-slate-900">With the </span>
          <span
            className={`relative inline transition-colors duration-500 ${
              active === "digital"
                ? "text-blue-600"
                : "text-blue-600/70"
            }`}
          >
            Digital World
            <motion.span
              aria-hidden
              animate={active === "digital" ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="absolute left-0 -bottom-0.5 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-blue-500 to-sky-400"
            />
          </span>
        </motion.span>

        {isInView && !prefersReducedMotion && (
          <motion.span
            key={`scan-${cycle}`}
            aria-hidden
            initial={{ x: "-30%", opacity: 0 }}
            animate={{ x: "140%", opacity: [0, 0.55, 0] }}
            transition={{ duration: 1.35, ease: "easeInOut", delay: 0.1 }}
            className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-sky-300/40 to-transparent"
          />
        )}
      </span>
    </h2>
  );
}

export default function CoreTechnologies() {
  const aiCapabilities = [
    "AI business assistants", "Natural-language interfaces", "Intelligent reporting", 
    "Predictive analytics", "Intelligent search", "Anomaly detection", 
    "Recommendations", "Document intelligence", "Workflow assistance", "Robotics and Automation"
  ];

  const rfidCapabilities = [
    "RFID", "Smart identification", "Asset visibility", "Inventory intelligence", 
    "Connected devices", "Movement tracking", "Security applications", "Device-to-software integration"
  ];

  const enterpriseCards = [
    {
      title: "From Information to Intelligence",
      tag: "Data",
      icon: Database,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
      copy: "Help organisations understand what happened, why it happened, what is happening now, what could happen next and what action should follow."
    },
    {
      title: "Built to Scale",
      tag: "Cloud",
      icon: Cloud,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-100",
      copy: "Architect technology around scalability, reliability, availability, security, performance, maintainability, monitoring and disaster recovery."
    },
    {
      title: "Technology Should Connect - Not Create Silos",
      tag: "Integration",
      icon: Share2,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100",
      copy: "Use APIs and connected architectures so information can move securely across enterprise systems, devices and platforms."
    }
  ];

  return (
    <section className="py-20 lg:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-24 lg:space-y-32">
        
        {/* Section 06: AI & Intelligent Enterprise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-8 border border-purple-200 shrink-0"
            >
              <Bot className="text-purple-600" size={32} strokeWidth={2} />
            </motion.div>
            <AnimatedInsightHeading />
            <p className="text-lg text-slate-600 leading-[1.8] mb-8">
              LoyalString's approach to AI is practical: use intelligence where it improves decision-making, productivity, prediction, robotics and automation, and customer experience.
            </p>
            <blockquote className="border-l-4 border-purple-500 pl-6 py-2 mb-10">
              <p className="text-xl font-bold text-slate-800 italic">
                "We will not add AI simply because it is fashionable. We will use AI where it creates measurable business value."
              </p>
            </blockquote>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 bg-slate-50 p-8 lg:p-12 rounded-[2rem] border border-slate-100 shadow-sm"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Sparkles className="text-purple-500" size={20} /> Practical AI Capabilities
            </h3>
            <div className="flex flex-wrap gap-3">
              {aiCapabilities.map((cap, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium shadow-sm hover:border-purple-300 hover:text-purple-700 transition-colors cursor-default">
                  {cap}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section 07: RFID & IoT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 lg:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[400px]"
          >
            {/* Abstract visual for connectivity */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-[300px] h-[300px] rounded-full border-[1px] border-blue-400 animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute w-[200px] h-[200px] rounded-full border-[1px] border-indigo-400 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
              <div className="absolute w-[100px] h-[100px] rounded-full border-[2px] border-white flex items-center justify-center">
                <Wifi className="text-white" size={40} />
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs tracking-widest uppercase mb-8 border border-blue-500/30 backdrop-blur-sm">
                Physical-Digital Connectivity
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Connected Capabilities</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {rfidCapabilities.map((cap, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="text-blue-400 shrink-0" size={16} />
                    <span className="text-sm font-medium">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.06, 1] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-8 border border-blue-200"
            >
              <Wifi className="text-blue-600" size={32} strokeWidth={2} />
            </motion.div>
            <AnimatedConnectHeading />
            <p className="text-lg text-slate-600 leading-[1.8]">
              RFID, IoT and connected devices enable organisations to identify, track and interact with physical assets while feeding real-world activity into digital business systems.
            </p>
          </motion.div>
        </div>

        {/* Section 09: Data, Cloud & Integration */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Enterprise Foundation
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Data, Cloud & Integration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {enterpriseCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow relative overflow-hidden group"
                >
                  <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon size={100} className={card.color} />
                  </div>
                  <div className="relative z-10">
                    <div className="inline-block px-3 py-1 rounded-md bg-slate-100 text-slate-600 font-bold text-xs tracking-wider uppercase mb-6">
                      {card.tag}
                    </div>
                    <div className={`w-12 h-12 rounded-xl ${card.bg} ${card.border} flex items-center justify-center mb-6`}>
                      <Icon className={card.color} size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                    <p className="text-slate-600 font-medium leading-[1.6]">
                      {card.copy}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
