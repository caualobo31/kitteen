"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const mockups = [
  "Baralho de Conversa: Ansiedade",
  "Dilemas: Identidade",
  "Ficha TCC: Pensamento/Emoção",
  "Redes Sociais: Comparação",
  "Autoestima: Imagem",
  "Conflito com os Pais",
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-surface-2 py-14 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader
title={<>Veja o <span className="text-accent">material por dentro:</span></>}
        />
      </div>

      {/* Marquee — edge-to-edge */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {[...mockups, ...mockups].map((label, i) => (
            <div
              key={i}
              className="w-44 md:w-56 flex-shrink-0 aspect-[4/5] bg-surface-1 border border-border rounded-2xl flex flex-col items-center justify-center gap-3 p-4"
            >
              <ImageIcon className="w-6 h-6 text-text-subtle" strokeWidth={1.5} />
              <p className="text-text-subtle font-inter text-xs uppercase tracking-wider text-center leading-relaxed">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
