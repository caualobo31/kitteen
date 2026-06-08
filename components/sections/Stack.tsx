"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

const Q = '"';

const bullets = [
  "Recursos organizados por 8 demandas clínicas",
  "Material visual e indireto — o adolescente fala sem perceber",
  "Pronto pra imprimir ou usar na tela",
  "Com a linguagem que o adolescente respeita",
  "Funciona presencial e online",
];

const bonuses = [
  {
    n: "01",
    title: "Guia de Primeira Sessão com Adolescente",
    desc: `Roteiro de 8 passos pra fazer ele falar mais do que ${Q}sei lá${Q} no primeiro encontro.`,
    from: "R$47,00",
  },
  {
    n: "02",
    title: `Cartilha ${Q}Conversando com os Pais${Q}`,
    desc: "Como conduzir a devolutiva familiar sem expor o adolescente.",
    from: "R$37,00",
  },
  {
    n: "03",
    title: "Banco de Frases pra Destravar a Sessão",
    desc: "60 perguntas testadas pra quando ele trava ou responde monossilábico.",
    from: "R$27,00",
    full: true,
  },
];

export default function Stack() {
  return (
    <section className="bg-surface-2 px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-fraunces font-semibold text-2xl md:text-4xl text-text-primary text-center mb-10 md:mb-14 leading-tight tracking-tight"
        >
          Tudo o que você <span className="text-highlight">vai receber</span>
        </motion.h2>

        {/* Produto principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-8 items-center mb-8"
        >
          <div className="w-full md:w-72 flex-shrink-0">
            <Image
              src="/mockupteen.png"
              alt="Kit Consultório Teen"
              width={600}
              height={450}
              className="w-full h-auto rounded-xl"
            />
          </div>

          <div className="flex-1">
            <p className="font-fraunces font-bold text-xl md:text-2xl text-text-primary leading-tight mb-1">
              Kit Consultório Teen
            </p>
            <p className="font-fraunces font-bold text-xl md:text-2xl text-highlight leading-tight mb-6">
              +80 recursos terapêuticos
            </p>

            <div className="flex flex-col gap-3">
              {bullets.map((b, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 border-highlight flex items-center justify-center">
                    <Check className="w-3 h-3 text-highlight" strokeWidth={3} />
                  </div>
                  <p className="text-text-primary font-inter text-sm md:text-base leading-snug">
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Texto de transição */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-text-primary font-inter text-base md:text-lg leading-relaxed mb-6"
        >
          E não para por aí. No kit completo, você ainda recebe 3 bônus que
          complementam o kit e resolvem as maiores dores do dia a dia clínico:
        </motion.p>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-block bg-accent text-white font-inter font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full">
            3 Bônus Exclusivos
          </span>
        </motion.div>

        {/* Cards de bônus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {bonuses.map(({ n, title, desc, from, full }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
              className={`bg-surface-1 border border-border rounded-2xl p-6 flex gap-4 items-start${full ? " md:col-span-2" : ""}`}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-highlight flex items-center justify-center">
                <span className="text-white font-inter font-bold text-sm">{n}</span>
              </div>
              <div>
                <p className="font-inter font-bold text-text-primary text-sm md:text-base leading-tight mb-1">
                  {title}
                </p>
                <p className="text-text-muted font-inter text-sm leading-relaxed mb-3">
                  {desc}
                </p>
                <p className="font-inter text-sm">
                  <span className="line-through text-red-400 mr-2">De {from}</span>
                  <span className="font-bold text-highlight">GRÁTIS</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center"
        >
          <a
            href="#preco"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-inter font-bold text-base px-12 py-5 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20 min-h-[44px]"
          >
            Quero o kit completo
          </a>
        </motion.div>

      </div>
    </section>
  );
}
