"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
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

export default function PricingLadder() {
  return (
    <section id="preco" className="bg-surface-2 px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <Countdown />
        <SectionHeader
          title="Escolha seu kit"
          subtitle="Os dois kits dão acesso imediato. A diferença está em o quanto você quer resolver de uma vez."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">

          {/* Básico — primeiro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-surface-1 border border-border rounded-2xl p-8 md:p-10 flex flex-col gap-6"
          >
            <p className="text-xs uppercase tracking-widest text-text-subtle font-inter font-semibold text-center">
              Básico
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
              <p className="text-text-muted font-inter text-sm mt-1">à vista</p>
            </div>

            <div className="w-full h-px bg-border" />

            <div className="flex flex-col gap-3 w-full">
              <div className="flex gap-3 items-center">
                <Check className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={2} />
                <p className="text-text-primary font-inter text-sm">
                  +80 recursos visuais terapêuticos
                </p>
              </div>
              {[
                "Guia de Primeira Sessão",
                "Cartilha Conversando com os Pais",
                "Banco de Frases pra Destravar",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-center">
                  <X className="w-5 h-5 text-text-subtle flex-shrink-0" strokeWidth={2} />
                  <p className="text-text-subtle font-inter text-sm line-through">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="https://pay.wiapy.com/iyCj7VBNAt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full border-2 border-border bg-surface-1 hover:bg-surface-2 text-text-primary font-inter font-semibold text-sm px-8 py-4 rounded-full transition-all duration-200 min-h-[44px]"
            >
              Quero o Básico
            </a>
          </motion.div>

          {/* Completo — segundo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative bg-surface-1 border-2 border-highlight rounded-2xl p-8 md:p-10 flex flex-col gap-6 shadow-[0_8px_32px_rgba(61,90,74,0.12)]"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-highlight text-white font-inter font-semibold text-xs px-5 py-1.5 rounded-full whitespace-nowrap">
                92% escolhem esse
              </span>
            </div>

            <p className="text-xs uppercase tracking-widest text-highlight font-inter font-semibold text-center mt-2">
              Completo
            </p>

            <div className="w-full max-w-xs mx-auto aspect-[4/3] relative overflow-hidden rounded-xl">
              <Image
                src="/mockupteen.png"
                alt="Kit Consultório Teen Completo"
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center">
              <p className="font-inter text-sm text-red-400 line-through mb-1">
                De R$345,00
              </p>
              <p className="font-fraunces font-bold text-5xl text-text-primary leading-none tracking-tight">
                R$27,90
              </p>
              <p className="text-text-muted font-inter text-sm mt-1">
                à vista ou 12x de R$2,89
              </p>
              <p className="mt-2 inline-block bg-highlight/10 text-highlight font-inter font-semibold text-xs px-3 py-1 rounded-full">
                Você economiza R$317,10
              </p>
            </div>

            <div className="w-full h-px bg-border" />

            <div className="flex flex-col gap-3 w-full">
              {[
                "+80 recursos visuais terapêuticos",
                "Bônus 1: Guia de Primeira Sessão",
                "Bônus 2: Cartilha Conversando com os Pais",
                "Bônus 3: Banco de Frases pra Destravar",
                "Bônus 4: Fichas de Anamnese e Devolutivas",
                "Acesso vitalício",
                "Garantia de 15 dias",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-text-primary font-inter text-sm">{item}</p>
                </div>
              ))}
            </div>

            <a
              href="https://pay.wiapy.com/1neK1z4ecL_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-accent hover:bg-accent-hover text-white font-inter font-semibold text-base px-10 py-5 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20 min-h-[44px]"
            >
              Quero o Kit Completo
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
