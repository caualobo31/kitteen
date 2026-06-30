"use client";

import { motion } from "framer-motion";
import { Zap, Printer, LayoutGrid, Layers, Monitor } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: Zap, label: "Acesso imediato após a compra" },
  { icon: Printer, label: "Imprime e usa na mesma sessão" },
  { icon: LayoutGrid, label: "Organizado por demanda clínica" },
  { icon: Layers, label: "+80 recursos prontos pra usar" },
  { icon: Monitor, label: "Funciona online e presencial" },
];

export default function Hero() {
  return (
    <section className="bg-background px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-xs uppercase tracking-widest text-accent font-inter font-semibold"
        >
          Atenda adolescentes sem improvisar, sem adaptar e sem travar.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="font-fraunces font-bold text-xl md:text-4xl lg:text-5xl text-text-primary leading-tight tracking-tight max-w-4xl"
        >
          +80 RECURSOS TERAPÊUTICOS PARA QUALQUER DEMANDA QUE{" "}
          <span className="text-accent">ENTRAR NO SEU CONSULTÓRIO.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.16, ease: "easeOut" }}
          className="text-sm md:text-base text-text-muted font-inter leading-relaxed max-w-xl"
        >
          Material pronto pra aplicar, com a linguagem que ele respeita.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
          className="w-full max-w-sm md:max-w-3xl mx-auto"
        >
          <Image
            src="/mockupteen.png"
            alt="Kit Consultório Teen — recursos visuais terapêuticos para adolescentes"
            width={1200}
            height={900}
            className="w-full h-auto rounded-2xl"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center gap-3 w-full"
        >
          <a
            href="#preco"
            className="inline-flex items-center justify-center w-full md:w-auto bg-accent hover:bg-accent-hover text-white font-inter font-semibold text-base px-10 py-4 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20 min-h-[44px]"
          >
            Quero meu kit agora
          </a>
          <p className="text-sm text-text-subtle font-inter">
            +2000 psicólogas já confiam nos Kits Consultório.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-3"
        >
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={2} />
              <span className="text-text-primary font-inter text-sm font-medium">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
