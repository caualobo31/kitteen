"use client";

import { motion } from "framer-motion";
import { Check, Gift } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import SectionHeader from "@/components/shared/SectionHeader";

function Countdown() {
  const [secs, setSecs] = useState(10 * 60);

  useEffect(() => {
    if (secs <= 0) return;
    const id = setInterval(() => setSecs((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [secs]);

  const mm = String(Math.floor(secs / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex justify-center mb-6"
    >
      <span className="bg-accent/10 text-accent font-inter font-bold text-xs md:text-sm px-6 py-2 rounded-full tracking-widest uppercase">
        Oferta válida até: {mm}:{ss}
      </span>
    </motion.div>
  );
}

const basicFeatures = [
  "+80 recursos visuais terapêuticos",
  "Organizado por demanda clínica",
  "Acesso imediato em PDF",
];

const completeFeatures = [
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

export default function PricingLadder() {
  return (
    <section id="preco" className="bg-surface-2 px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <Countdown />
        <SectionHeader
          title="Escolha seu kit"
          subtitle="Os dois kits dão acesso imediato. A diferença está em o quanto você quer resolver de uma vez."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto items-start">

          {/* Card Básico */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-surface-1 border border-border rounded-2xl p-8 flex flex-col gap-5"
          >
            <p className="text-xs uppercase tracking-widest text-text-subtle font-inter font-semibold text-center">
              Kit Básico
            </p>

            <div className="w-full max-w-xs mx-auto aspect-[4/3] relative overflow-hidden rounded-xl">
              <Image
                src="/mockupcru.png"
                alt="Kit Consultório Teen Básico"
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center">
              <p className="font-fraunces font-bold text-5xl text-text-primary leading-none tracking-tight">
                R$17,90
              </p>
              <p className="text-text-muted font-inter text-sm mt-1">Pagamento único</p>
            </div>

            <a
              href="https://pay.wiapy.com/iyCj7VBNAt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full border-2 border-border bg-surface-1 hover:bg-surface-2 text-text-primary font-inter font-semibold text-sm px-8 py-4 rounded-full transition-all duration-200 min-h-[44px]"
            >
              Quero o Kit Básico
            </a>

            <div className="w-full h-px bg-border" />

            <div className="flex flex-col gap-3 w-full">
              {basicFeatures.map((item) => (
                <div key={item} className="flex gap-3 items-center">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={2} />
                  <p className="text-text-primary font-inter text-sm">{item}</p>
                </div>
              ))}
            </div>

            {/* Upsell hint */}
            <div className="mt-2 rounded-xl border border-highlight/20 bg-highlight/5 px-5 py-4 text-center">
              <p className="font-inter text-sm text-highlight font-semibold leading-snug">
                92% escolhem o Completo — +80 recursos e 4 bônus exclusivos
              </p>
              <p className="text-xs text-text-muted font-inter mt-1">
                Por apenas R$10 a mais
              </p>
            </div>
          </motion.div>

          {/* Card Completo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
            whileHover={{ scale: 1.01 }}
            className="relative bg-highlight rounded-2xl p-8 flex flex-col gap-5 shadow-[0_8px_32px_rgba(61,90,74,0.25)]"
          >
            {/* Badge Mais vendido */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-accent text-white font-inter font-bold text-xs px-6 py-1.5 rounded-full whitespace-nowrap uppercase tracking-wider">
                Mais vendido
              </span>
            </div>

            <p className="text-xs uppercase tracking-widest text-white/60 font-inter font-semibold text-center mt-2">
              Kit Completo
            </p>

            {/* Badge recursos */}
            <div className="flex justify-center">
              <span className="bg-white/10 text-white font-inter font-bold text-xs px-5 py-1.5 rounded-full uppercase tracking-wider border border-white/20">
                +80 recursos + 4 bônus exclusivos
              </span>
            </div>

            <div className="w-full max-w-xs mx-auto aspect-[4/3] relative overflow-hidden rounded-xl">
              <Image
                src="/mockupteen.png"
                alt="Kit Consultório Teen Completo"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-center font-inter text-white/70 text-sm font-medium">
              O kit completo para transformar suas sessões
            </p>

            <div className="text-center">
              <p className="font-inter text-sm text-red-400 line-through mb-1">
                De R$345,00
              </p>
              <p className="font-fraunces font-bold text-5xl text-white leading-none tracking-tight">
                R$27,90
              </p>
              <p className="text-white/60 font-inter text-sm mt-1">
                à vista ou 12x de R$2,89
              </p>
              <p className="text-white/50 font-inter text-xs mt-0.5">
                pagamento único • acesso imediato
              </p>
              <p className="mt-2 font-inter font-semibold text-sm text-accent">
                Você economiza R$317,10
              </p>
            </div>

            <a
              href="https://pay.wiapy.com/1neK1z4ecL_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-accent hover:bg-accent-hover text-white font-inter font-semibold text-base px-10 py-5 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/30 min-h-[44px]"
            >
              Quero o Kit Completo
            </a>

            <div className="w-full h-px bg-white/10" />

            <div className="flex flex-col gap-3 w-full">
              {completeFeatures.map((item) => (
                <div key={item} className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-white font-inter text-sm">{item}</p>
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-white/10" />

            <div className="flex flex-col gap-3">
              {bonuses.map((bonus) => (
                <div key={bonus} className="flex gap-3 items-center">
                  <Gift className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={2} />
                  <p className="text-white/80 font-inter text-sm">{bonus}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
