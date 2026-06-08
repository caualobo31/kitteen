"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Lock } from "lucide-react";

const trust = [
  { icon: Zap, label: "Acesso imediato" },
  { icon: Shield, label: "Garantia de 15 dias" },
  { icon: Lock, label: "Compra 100% segura" },
];

export default function InactionCost() {
  return (
    <section className="bg-accent px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-8"
        >
          <div>
            <h2 className="font-fraunces font-semibold text-2xl md:text-4xl leading-tight tracking-tight mb-4">
              <span className="text-white">Quanto tempo você ainda vai adaptar material infantil</span>{" "}
              <span className="text-[#FFE5B4]">pra quem tem 15 anos?</span>
            </h2>
            <p className="text-white/90 font-inter text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Cada sessão sem material adequado é uma sessão em que o seu
              paciente te vê como mais uma adulta que não entende. Adolescente
              que não se sente entendido na segunda sessão raramente volta pra
              terceira.
            </p>
          </div>

          <a
            href="#preco"
            className="inline-flex items-center justify-center bg-white text-accent font-inter font-bold text-base px-10 py-4 rounded-full transition-all duration-200 hover:bg-[#FFE5B4] hover:scale-[1.02] min-h-[44px]"
          >
            Quero meu kit agora
          </a>

          <div className="flex flex-wrap justify-center gap-6">
            {trust.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-white/70" strokeWidth={2} />
                <span className="text-white/90 font-inter text-sm">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
