"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";

const mockups = [
  "/exemplo1.png",
  "/exemplo2.png",
  "/exemplo3.png",
  "/exemplo4.png",
  "/exemplo5.png",
  "/exemplo6.png",
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-surface-2 py-14 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader
          title={<>Veja o <span className="text-accent">material por dentro:</span></>}
        />
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {[...mockups, ...mockups].map((src, i) => (
            <div
              key={i}
              className="w-52 md:w-64 flex-shrink-0 aspect-[3/4] relative rounded-2xl overflow-hidden border border-border shadow-sm"
            >
              <Image
                src={src}
                alt={`Exemplo de recurso ${(i % mockups.length) + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
