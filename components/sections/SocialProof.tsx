"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const testimonials = [
  {
    name: "Psicóloga A",
    crp: "CRP 06/123456",
    specialty: "atende ansiedade e autoestima",
    text: "[DEPOIMENTO 1 — substituir após beta]",
  },
  {
    name: "Psicóloga B",
    crp: "CRP 08/234567",
    specialty: "atende conflito familiar",
    text: "[DEPOIMENTO 2 — substituir após beta]",
  },
  {
    name: "Psicóloga C",
    crp: "CRP 04/345678",
    specialty: "atende regulação emocional",
    text: "[DEPOIMENTO 3 — substituir após beta]",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-background px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
title="Quem já testou conta:"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="bg-surface-1 border border-border rounded-2xl p-6 md:p-8 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-surface-2 border border-border flex items-center justify-center flex-shrink-0">
                  <span className="text-text-muted font-inter font-bold text-base">
                    {t.name.charAt(t.name.length - 1)}
                  </span>
                </div>
                <div>
                  <p className="text-text-primary font-inter font-bold text-sm leading-tight">
                    {t.name}
                  </p>
                  <p className="text-text-subtle font-inter text-xs mt-0.5">
                    {t.crp} · {t.specialty}
                  </p>
                </div>
              </div>

              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-accent fill-accent"
                    strokeWidth={0}
                  />
                ))}
              </div>

              <p className="font-fraunces italic text-base text-text-primary leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
