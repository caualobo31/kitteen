"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="bg-background px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto gap-5"
        >
          <Shield className="w-16 h-16 text-success" strokeWidth={1.5} />

          <h2 className="font-fraunces font-semibold text-2xl md:text-4xl text-text-primary leading-tight tracking-tight">
            Garantia <span className="text-accent">incondicional</span> de 15 dias
          </h2>

          <p className="text-base md:text-lg text-text-muted font-inter leading-relaxed">
            Compre, baixe, use 15 dias. Se não for pra você, devolvemos o
            dinheiro. Sem pergunta, sem burocracia.
          </p>

          <p className="font-fraunces italic font-semibold text-xl text-accent leading-snug">
            O risco é todo nosso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
