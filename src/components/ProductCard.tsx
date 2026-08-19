"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./ProductCard.css";

interface ProductCardProps {
  title: string;
  description: string;
  type: "tag" | "gun" | "system";
  delay?: number;
}

export default function ProductCard({ title, description, type, delay = 0 }: ProductCardProps) {
  return (
    <motion.div 
      className="product-card glass-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="product-icon">
        {type === "tag" && <div className="icon-placeholder tag-icon" />}
        {type === "gun" && <div className="icon-placeholder gun-icon" />}
        {type === "system" && <div className="icon-placeholder system-icon" />}
      </div>
      <h3 className="product-title heading-3">{title}</h3>
      <p className="product-desc">{description}</p>
      <button className="product-link">
        Learn more <ArrowRight size={16} />
      </button>
    </motion.div>
  );
}
