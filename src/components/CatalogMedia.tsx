"use client";

import { motion } from "framer-motion";

export default function CatalogMedia({
  src,
  alt,
  caption,
  reverse = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  reverse?: boolean;
}) {
  return (
    <div className="relative">
      <div
        className={`absolute inset-3 rounded-2xl bg-[#0f172a]/10 ${reverse ? "-translate-x-3 translate-y-3" : "translate-x-3 translate-y-3"}`}
        aria-hidden
      />
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-[0_20px_40px_-24px_rgba(15,23,42,0.45)]">
        <motion.div
          initial={{ opacity: 0, x: reverse ? 56 : -56 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.img
            src={src}
            alt={alt}
            initial={{ scale: 1.16 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="h-56 w-full object-cover sm:h-64 lg:h-[340px]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
          {caption && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="absolute bottom-0 left-0 right-0 p-4 sm:p-5"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-300 mb-1">
                Featured
              </p>
              <p className="text-white font-semibold text-[0.95rem] leading-snug">{caption}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
