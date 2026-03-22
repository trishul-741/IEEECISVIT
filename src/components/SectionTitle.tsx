"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  light = false,
  center = true,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-16 ${center ? "text-center" : ""}`}
    >
      <span
        className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${
          light ? "text-accent" : "text-secondary-light"
        }`}
      >
        {title}
      </span>
      {subtitle && (
        <h2
          className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
            light ? "text-text-primary" : "text-white"
          }`}
        >
          {subtitle}
        </h2>
      )}
      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed ${
            center ? "mx-auto" : ""
          } ${light ? "text-text-muted" : "text-white/50"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
