"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const Q = '"';

const pains = [
  `Ele cruza os braços e responde ${Q}sei lá${Q} pra tudo.`,
  `Todo material da sua estante parece infantil demais pra ele.`,
  `Os pais perguntam ${Q}tá funcionando?${Q} e você trava.`,
  `Ele passa a sessão inteira no celular.`,
  `Você tenta uma técnica e leva olhar de deboche.`,
  `Quer trabalhar ansiedade ou autoestima, só tem material infantil.`,
];

export default function PainIdentification() {
  return (
    <section id="dor" className="bg-background px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
title="Cenas que toda psicóloga de adolescente já viveu."
          subtitle="Marque mentalmente quantas você reconhece."
        />

        <div className="flex flex-col gap-4 max-w-2xl mx-auto mb-10">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.07, ease: "easeOut" }}
              className="flex gap-4 items-center"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-accent" strokeWidth={2.5} />
              </div>
              <p className="text-base md:text-lg text-text-primary font-inter leading-snug">
                {pain}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-surface-2 border border-border rounded-2xl p-6 md:p-10 max-w-2xl mx-auto text-center"
        >
          <p className="text-base md:text-lg text-text-primary font-inter font-semibold leading-relaxed mb-3">
            Se você marcou três ou mais, não é falta de competência. É falta de
            material certo.
          </p>
          <p className="font-fraunces italic font-semibold text-lg md:text-xl text-accent leading-snug">
            O Kit Consultório Teen foi feito desde o primeiro recurso pro
            adolescente que você atende.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
