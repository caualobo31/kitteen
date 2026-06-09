"use client";

import { motion } from "framer-motion";

import { ReactNode } from "react";

interface Props {
  caption?: string;
  title: ReactNode;
  subtitle?: string;
}

export default function SectionHeader({ caption, title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="text-center mb-10 md:mb-12"
    >
      {caption && (
        <p className="text-xs uppercase tracking-widest text-accent font-inter font-semibold mb-4">
          {caption}
        </p>
      )}
      <h2 className="font-fraunces font-semibold text-2xl md:text-4xl text-text-primary leading-tight tracking-tight max-w-3xl mx-auto">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-text-muted font-inter leading-relaxed max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
