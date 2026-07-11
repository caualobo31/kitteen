"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronsDown } from "lucide-react";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";

const images = [
  { src: "/dep 1.jpeg", alt: "Depoimento 1" },
  { src: "/dep 2.jpeg", alt: "Depoimento 2" },
  { src: "/dep 3.jpeg", alt: "Depoimento 3" },
];

export default function SocialProof() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => go(current === 0 ? images.length - 1 : current - 1);
  const next = () => go(current === images.length - 1 ? 0 : current + 1);

  return (
    <section className="bg-background px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title={<><span className="text-accent">Quem já testou</span> conta:</>}
        />

        <div className="relative max-w-lg mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden rounded-2xl relative bg-surface-1 border border-border">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={images[current].src}
                  alt={images[current].alt}
                  width={600}
                  height={900}
                  className="w-full h-auto"
                  priority={current === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-[-20px] md:left-[-28px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface-1 border border-border shadow-sm flex items-center justify-center text-text-muted hover:text-text-primary transition-colors duration-200"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2} />
          </button>

          <button
            onClick={next}
            className="absolute right-[-20px] md:right-[-28px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface-1 border border-border shadow-sm flex items-center justify-center text-text-muted hover:text-text-primary transition-colors duration-200"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === current ? "bg-accent w-5" : "bg-border"
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Urgency bridge */}
        <div className="mt-10 text-center flex flex-col items-center gap-2">
          <p className="text-text-muted font-inter text-sm">
            Oferta por tempo limitado. Garante o seu antes que encerre.
          </p>
          <a
            href="#preco"
            className="flex flex-col items-center gap-0.5 text-highlight font-inter font-semibold text-sm hover:opacity-70 transition-opacity duration-200"
          >
            Ver oferta
            <ChevronsDown className="w-5 h-5" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
