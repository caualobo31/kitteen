"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MessagesSquare,
  ListChecks,
  MessageSquareText,
  Users,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import MethodBadge from "@/components/shared/MethodBadge";

const Q = '"';

const cards = [
  {
    icon: MessagesSquare,
    title: "Ele responde a página, não você",
    how: "O material fica no centro da mesa. Ele projeta na atividade o que não diria te encarando.",
    img: "/exemplo1.png",
  },
  {
    icon: ListChecks,
    title: "Passo a passo, nunca página em branco",
    how: "Todo recurso tem começo, meio e fim — igual aos workbooks dos EUA. Você conduz sem travar.",
    img: "/exemplo2.png",
  },
  {
    icon: MessageSquareText,
    title: "Sem infantilizar, sem psicologuês",
    how: "Visual e direto, na linguagem da idade dele. Ele não revira os olhos quando vê.",
    img: "/exemplo3.png",
  },
  {
    icon: Users,
    title: "Vocês dois do mesmo lado",
    how: `Terapeuta e adolescente olhando juntos pro material. Esse é o ${Q}Team${Q} do método.`,
    img: "/exemplo4.png",
  },
];

export default function MethodTeamSkills() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="metodo" className="bg-surface-1 px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-center mb-5 anim-fade-up">
          <MethodBadge />
        </div>

        <SectionHeader
          caption="Método Team Skills"
          title={<>O adolescente abre com a <span className="text-accent">página</span>. Não com a pergunta.</>}
          subtitle="A lógica dos workbooks terapêuticos dos EUA, adaptada pro seu consultório — o material puxa a conversa por você."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
          {cards.map(({ icon: Icon, title, how, img }, i) => {
            const isOpen = active === i;
            return (
              <button
                key={title}
                type="button"
                onClick={() => setActive(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group text-left bg-surface-1 border border-border rounded-2xl overflow-hidden anim-fade-up transition-colors duration-200 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                style={{ animationDelay: `${120 + i * 80}ms` }}
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={img}
                    alt={`Recurso do Kit Consultório Teen — ${title}`}
                    fill
                    sizes="(min-width: 768px) 400px, calc(100vw - 40px)"
                    className={`object-cover transition-transform duration-500 ease-out md:group-hover:scale-105 ${isOpen ? "scale-105" : ""}`}
                  />
                  <div
                    className={`absolute inset-0 bg-highlight/25 transition-opacity duration-300 md:group-hover:opacity-0 ${isOpen ? "opacity-0" : "opacity-100"}`}
                  />
                </div>

                <div className="p-5 md:p-6">
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="font-fraunces font-semibold text-base md:text-lg text-text-primary leading-snug">
                      {title}
                    </p>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ease-out md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100 md:group-hover:mt-3 ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <p className="overflow-hidden pl-8 text-sm text-text-muted font-inter leading-relaxed">
                      {how}
                    </p>
                  </div>

                  <p
                    className={`md:hidden mt-3 pl-8 text-[10px] uppercase tracking-widest text-text-subtle font-inter font-semibold ${
                      isOpen ? "hidden" : ""
                    }`}
                  >
                    Toque pra ver
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="text-center mt-10 anim-fade-up">
          <a
            href="#galeria"
            className="inline-flex items-center gap-1.5 text-accent font-inter font-semibold text-sm transition-all duration-200 hover:gap-2.5"
          >
            Ver os recursos por dentro
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </a>
        </div>

      </div>
    </section>
  );
}
