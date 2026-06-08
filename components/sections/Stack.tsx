"use client";

import { motion } from "framer-motion";
import { BookOpen, Gift, Users, MessageSquare } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const Q = '"';

const items = [
  {
    icon: BookOpen,
    tag: "Produto principal",
    title: "+80 recursos visuais terapêuticos",
    desc: `Organizados por 8 demandas: ansiedade, autoestima, redes, conflito com os pais, identidade, regulação emocional, futuro e relacionamentos.`,
    value: "valor R$197",
    badge: false,
  },
  {
    icon: Gift,
    tag: null,
    title: "Guia de Primeira Sessão com Adolescente",
    desc: `Roteiro de 8 passos pra fazer ele falar mais do que ${Q}sei lá${Q} no primeiro encontro.`,
    value: "valor R$47, grátis",
    badge: true,
  },
  {
    icon: Users,
    tag: null,
    title: `Cartilha ${Q}Conversando com os Pais${Q}`,
    desc: "Como conduzir a devolutiva familiar sem expor o adolescente.",
    value: "valor R$37, grátis",
    badge: true,
  },
  {
    icon: MessageSquare,
    tag: null,
    title: "Banco de Frases pra Destravar a Sessão",
    desc: "60 perguntas testadas pra quando ele trava ou responde monossilábico.",
    value: "valor R$27, grátis",
    badge: true,
  },
];

export default function Stack() {
  return (
    <section className="bg-surface-2 px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
title="Veja o que vem no kit hoje:"
        />

        <div className="flex flex-col gap-4 max-w-3xl mx-auto mb-12">
          {items.map(({ icon: Icon, tag, title, desc, value, badge }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="bg-surface-1 border border-border rounded-2xl p-5 md:p-7 flex gap-5 items-start"
            >
              <Icon className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <div className="flex-1 min-w-0">
                {tag && (
                  <p className="text-xs uppercase tracking-widest text-text-subtle font-inter font-semibold mb-1">
                    {tag}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <p className="font-fraunces font-semibold text-lg text-text-primary leading-tight">
                    {title}
                  </p>
                  {badge && (
                    <span className="text-xs font-inter font-semibold bg-accent text-white px-2.5 py-1 rounded-full whitespace-nowrap">
                      Bônus grátis
                    </span>
                  )}
                </div>
                <p className="text-text-muted font-inter text-sm leading-relaxed mb-1">
                  {desc}
                </p>
                <p className="text-text-subtle font-inter text-xs italic">
                  {value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center max-w-md mx-auto"
        >
          <p className="text-text-muted font-inter text-lg line-through mb-1">
            Valor total: R$308
          </p>
          <p className="font-fraunces font-bold text-4xl md:text-5xl text-accent leading-tight tracking-tight">
            Hoje por R$37,90.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
