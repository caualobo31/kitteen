"use client";

import { Check, Gift, ArrowDown } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const valueItems = [
  { label: "+80 recursos terapêuticos visuais para adolescentes", price: "R$97,00" },
  { label: "Guia de Primeira Sessão com Adolescente", price: "R$27,00" },
  { label: "Cartilha Conversando com os Pais", price: "R$27,00" },
  { label: "Banco de Frases para Destravar a Sessão", price: "R$37,00" },
  { label: "Modelos de Fichas de Anamnese e Devolutivas", price: "R$47,00" },
];

const totalValue = "R$235,00";

const features = [
  "+80 recursos visuais terapêuticos",
  "Organizado por demanda clínica",
  "Acesso imediato em PDF",
  "Acesso vitalício",
  "Garantia de 15 dias",
];

const bonuses = [
  "Bônus 1: Guia de Primeira Sessão",
  "Bônus 2: Cartilha Conversando com os Pais",
  "Bônus 3: Banco de Frases pra Destravar",
  "Bônus 4: Fichas de Anamnese e Devolutivas",
];

function secsUntilEndOfDay() {
  const now = new Date();
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
  return Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000));
}

function ScarcityCountdown() {
  const [secs, setSecs] = useState<number | null>(null);

  useEffect(() => {
    setSecs(secsUntilEndOfDay());
    const id = setInterval(() => setSecs(secsUntilEndOfDay()), 1000);
    return () => clearInterval(id);
  }, []);

  if (secs === null) return null;

  const hh = String(Math.floor(secs / 3600)).padStart(2, "0");
  const mm = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-1.5 bg-accent px-6 py-3.5 rounded-2xl shadow-[0_8px_24px_rgba(213,92,47,0.35)]">
      <span className="text-white/90 font-inter font-semibold text-[11px] md:text-xs uppercase tracking-widest text-center leading-snug">
        Oferta especial disponível nesta página até o fim do dia:
      </span>
      <span className="font-fraunces font-bold text-2xl md:text-3xl text-white tabular-nums tracking-tight leading-none">
        {hh}:{mm}:{ss}
      </span>
    </div>
  );
}

export default function Offer() {
  return (
    <section id="preco" className="bg-highlight px-5 md:px-8 py-16 md:py-24">
      <div className="max-w-md mx-auto flex flex-col items-center text-center">

        <h2 className="font-fraunces font-semibold text-2xl md:text-4xl text-white leading-tight tracking-tight anim-fade-up">
          Mais de <span className="text-accent">190 materiais</span> por
          menos do que um único baralho terapêutico.
        </h2>

        <p
          className="mt-4 text-sm md:text-base text-white/80 font-inter leading-relaxed max-w-sm anim-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          Em vez de pagar caro em um material para cada demanda, você leva
          um acervo completo, organizado por tema e pronto para usar na
          sessão.
        </p>

        {/* Tabela de valor */}
        <div
          className="w-full bg-surface-1 rounded-2xl border border-border overflow-hidden mt-8 anim-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          <div className="flex items-center justify-between gap-4 px-5 py-3 bg-surface-2 border-b border-border">
            <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-text-subtle font-inter font-semibold text-left">
              O que você recebe
            </p>
            <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-text-subtle font-inter font-semibold text-right flex-shrink-0">
              Valor separado
            </p>
          </div>
          <div className="flex flex-col divide-y divide-border">
            {valueItems.map((item) => (
              <div key={item.label} className="flex items-center justify-between gap-4 px-5 py-3.5">
                <p className="text-text-primary font-inter text-sm leading-snug text-left">
                  {item.label}
                </p>
                <p className="text-red-400 font-inter text-sm font-semibold line-through whitespace-nowrap flex-shrink-0">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Total */}
        <div className="mt-7 anim-fade-up" style={{ animationDelay: "220ms" }}>
          <p className="text-white/70 font-inter text-sm mb-1">Você pagaria:</p>
          <p className="font-inter font-extrabold text-4xl md:text-5xl text-red-400 line-through leading-tight tracking-tight">
            {totalValue}
          </p>
        </div>

        <p
          className="mt-5 text-white font-inter text-base md:text-lg font-medium leading-snug max-w-xs anim-fade-up"
          style={{ animationDelay: "260ms" }}
        >
          Mas somente nesta página você pode garantir o Kit Completo com uma
          condição especial.
        </p>

        <div className="mt-5 anim-fade-up" style={{ animationDelay: "300ms" }}>
          <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center animate-bounce">
            <ArrowDown className="w-5 h-5 text-accent" strokeWidth={2.5} />
          </div>
        </div>

        <div className="mt-6 anim-fade-up" style={{ animationDelay: "340ms" }}>
          <ScarcityCountdown />
        </div>

        {/* Card único da oferta */}
        <div
          className="relative w-full bg-surface-1 rounded-3xl p-6 md:p-8 flex flex-col gap-5 shadow-[0_20px_48px_rgba(0,0,0,0.28)] mt-10 anim-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-accent text-white font-inter font-bold text-xs px-6 py-1.5 rounded-full whitespace-nowrap uppercase tracking-wider">
              Mais vendido
            </span>
          </div>

          <p className="text-xs uppercase tracking-widest text-text-subtle font-inter font-semibold text-center mt-2">
            Kit Completo
          </p>

          <div className="w-full max-w-[220px] mx-auto aspect-[4/3] relative overflow-hidden rounded-xl">
            <Image
              src="/mockupteen.png"
              alt="Kit Consultório Teen Completo"
              fill
              sizes="280px"
              className="object-contain"
            />
          </div>

          <div className="text-center">
            <p className="font-inter text-sm text-red-400 line-through mb-1">
              De {totalValue}
            </p>
            <p className="font-fraunces font-bold text-5xl text-text-primary leading-none tracking-tight">
              R$37,90
            </p>
            <p className="text-text-muted font-inter text-sm mt-1">
              à vista ou 12x de R$3,16
            </p>
            <p className="text-text-subtle font-inter text-xs mt-0.5">
              pagamento único • acesso imediato
            </p>
          </div>

          <a
            href="https://pay.wiapy.com/1neK1z4ecL_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full bg-accent hover:bg-accent-hover text-white font-inter font-semibold text-base px-10 py-5 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/30 min-h-[44px] anim-cta-pulse"
          >
            Quero o Kit Completo
          </a>

          <div className="w-full h-px bg-border" />

          <div className="flex flex-col gap-3 w-full text-left">
            {features.map((item) => (
              <div key={item} className="flex gap-3 items-center">
                <div className="w-5 h-5 rounded-full bg-highlight flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <p className="text-text-primary font-inter text-sm">{item}</p>
              </div>
            ))}
          </div>

          <div className="w-full h-px bg-border" />

          <div className="flex flex-col gap-3 text-left">
            {bonuses.map((bonus) => (
              <div key={bonus} className="flex gap-3 items-center">
                <Gift className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={2} />
                <p className="text-text-muted font-inter text-sm">{bonus}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
