"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

export default function ProblemRecognition() {
  return (
    <section className="bg-surface-2 px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
title="Se você atende adolescente, já entendeu."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="text-base md:text-lg text-text-muted font-inter leading-relaxed mb-6">
            Ele chega resistente. No celular. Respondendo &ldquo;sei lá&rdquo;
            pra tudo. E quase todo material que existe foi feito pra criança.
          </p>

          <p className="font-fraunces italic font-semibold text-xl md:text-2xl text-accent leading-snug">
            Aqui você não vai precisar mais improvisar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
