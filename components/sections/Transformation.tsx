"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const Q = '"';

const items = [
  `Abrir uma pasta organizada por demanda e saber em 30 segundos o que aplicar.`,
  `Entregar um material que ele olha e pensa ${Q}isso aqui é diferente${Q}.`,
  `Ver ele falar pela via lateral, sem perceber que tá sendo trabalhado.`,
  `Responder com segurança quando os pais perguntam ${Q}tá funcionando?${Q}.`,
  `Parar de improvisar. Começar a aplicar.`,
];

export default function Transformation() {
  return (
    <section className="bg-surface-2 px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
title={<>Seu trabalho fica <span className="text-accent">mais leve</span> depois disso...</>}
        />

        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
              className="flex gap-4 items-start"
            >
              <div className="mt-1.5 flex-shrink-0">
                <ArrowRight className="w-5 h-5 text-accent" strokeWidth={2} />
              </div>
              <p className="text-base md:text-lg text-text-primary font-inter leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
