"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FileText,
  MessagesSquare,
  Glasses,
  Tags,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const cards = [
  {
    icon: FileText,
    title: "Ele reage primeiro ao material",
    how: "A página traz uma cena, uma escolha, uma escala ou uma pergunta visual. Isso tira o peso de começar falando diretamente sobre si.",
    img: "/metodo1.png",
  },
  {
    icon: MessagesSquare,
    title: "Você conduz a partir da resposta",
    how: "O recurso não substitui sua escuta. Ele cria uma entrada para você aprofundar a conversa com mais clareza.",
    img: "/metodo2.png",
  },
  {
    icon: Glasses,
    title: "Sem cara de atividade infantil",
    how: "Os materiais foram adaptados para adolescentes, com linguagem mais madura e temas que fazem sentido para essa fase.",
    img: "/metodo3.png",
  },
  {
    icon: Tags,
    title: "Separado por demandas reais",
    how: "Ansiedade, autoestima, redes sociais, conflito com os pais, identidade, relacionamentos, futuro e regulação emocional.",
    img: "/metodo4.png",
  },
];

export default function MethodTeenSkills() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="metodo" className="bg-surface-1 px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">

        <SectionHeader
          title={<>Uma lógica diferente para fazer o adolescente <span className="text-accent">entrar na conversa</span>.</>}
          subtitle="O Método Teen Skills adapta a lógica dos workbooks terapêuticos dos EUA para transformar cada recurso em uma ponte: o adolescente responde a página primeiro, e você conduz a conversa a partir dali."
        />

        <div className="grid grid-cols-2 gap-3 md:gap-5 max-w-4xl mx-auto">
          {cards.map(({ icon: Icon, title, how, img }, i) => {
            const isOpen = active === i;
            return (
              <button
                key={title}
                type="button"
                onClick={() => setActive(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group flex flex-col text-left bg-surface-1 border border-border rounded-2xl overflow-hidden anim-fade-up transition-colors duration-200 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                style={{ animationDelay: `${120 + i * 80}ms` }}
              >
                <div className="relative h-28 sm:h-36 md:h-40 overflow-hidden">
                  <Image
                    src={img}
                    alt={`Recurso do Kit Consultório Teen — ${title}`}
                    fill
                    sizes="(min-width: 768px) 400px, 50vw"
                    className={`object-cover transition-transform duration-500 ease-out md:group-hover:scale-105 ${isOpen ? "scale-105" : ""}`}
                  />
                  <div
                    className={`absolute inset-0 bg-highlight/25 transition-opacity duration-300 md:group-hover:opacity-0 ${isOpen ? "opacity-0" : "opacity-100"}`}
                  />
                </div>

                <div className="flex flex-col flex-1 p-4 md:p-6">
                  <div className="flex items-start gap-2.5">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="font-fraunces font-semibold text-sm md:text-lg text-text-primary leading-snug">
                      {title}
                    </p>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ease-out md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100 md:group-hover:mt-3 ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <p className="overflow-hidden text-xs md:text-sm text-text-muted font-inter leading-relaxed">
                      {how}
                    </p>
                  </div>

                  <p
                    className={`md:hidden mt-auto pt-3 text-[10px] uppercase tracking-widest text-text-subtle font-inter font-semibold ${
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
