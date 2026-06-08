"use client";

import { motion } from "framer-motion";
import { LayoutGrid, Eye, Zap, Sparkles } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const cards = [
  {
    icon: LayoutGrid,
    title: "Organizado por demanda",
    desc: "Ansiedade, autoestima, redes, conflito com os pais. Abre, escolhe, aplica.",
  },
  {
    icon: Eye,
    title: "100% visual e indireto",
    desc: "O adolescente não abre pela porta da frente. Cada recurso faz ele falar pela via lateral.",
  },
  {
    icon: Zap,
    title: "Pronto pra aplicar",
    desc: "Sem adaptar, sem recortar. Você imprime ou usa na tela e a sessão flui.",
  },
  {
    icon: Sparkles,
    title: "Sem cara de criança",
    desc: "Material maduro que o seu paciente respeita. Nada de balõezinhos coloridos.",
  },
];

export default function ProductIntro() {
  return (
    <section className="bg-background px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          caption="O que é o Kit Consultório Teen"
          title="+80 recursos visuais. Organizados por demanda. Prontos pra aplicar."
          subtitle="Uma biblioteca pensada do zero pra quem atende adolescente."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {cards.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="bg-surface-1 border border-border rounded-2xl p-5 md:p-7 shadow-sm flex flex-col gap-4"
            >
              <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
              <div>
                <h3 className="font-inter font-semibold text-lg text-text-primary leading-tight mb-2">
                  {title}
                </h3>
                <p className="text-text-muted font-inter text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
