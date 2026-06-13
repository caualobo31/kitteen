"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const testimonials = [
  {
    name: "Amanda Fagundes",
    text: "Ela quase não falava. Com as cartas, começou apontando e depois foi se abrindo aos poucos.",
  },
  {
    name: "Thatiana Lobo",
    text: "Finalmente um material que não tem cara de criança. Consegui usar com adolescente sem precisar adaptar tudo.",
  },
  {
    name: "Yana Maia",
    text: "Gostei porque é organizado por demanda. Abri ansiedade, escolhi o recurso e já usei na sessão.",
  },
];

const duplicated = [...testimonials, ...testimonials];

export default function SocialProof() {
  return (
    <section className="bg-background px-5 md:px-8 py-14 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title={<><span className="text-accent">Quem já testou</span> conta:</>}
        />
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {duplicated.map((t, i) => (
            <div
              key={i}
              className="w-72 md:w-80 flex-shrink-0 bg-surface-1 border border-border rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-accent fill-accent" strokeWidth={0} />
                ))}
              </div>

              <p className="font-fraunces italic text-base text-text-primary leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              <p className="text-text-primary font-inter font-bold text-sm">
                {t.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
