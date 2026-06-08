"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "@/components/shared/SectionHeader";

const faqs = [
  {
    q: "Esse kit serve pra atender adolescente de qualquer idade?",
    a: "Sim. Pensado pra faixa de 12 a 18 anos, com adaptações sugeridas em cada recurso conforme a maturidade do paciente.",
  },
  {
    q: "Eu já tenho o Kit Consultório Lúdico. Faz sentido pegar esse também?",
    a: `Faz total. O Lúdico atende criança até 11 anos. Esse começa nos 12. Juntos, você cobre o caseload inteiro sem improvisar.`,
  },
  {
    q: "Funciona em sessão online?",
    a: "Sim. Todos os recursos funcionam presencial (imprime ou tablet) e online (compartilha tela ou envia antes).",
  },
  {
    q: "Os materiais são editáveis?",
    a: "PDF de alta resolução pra imprimir ou usar na tela. Alguns vêm em .docx pra adaptar o nome do paciente, sinalizamos quais.",
  },
  {
    q: "Quanto tempo eu tenho de acesso?",
    a: "Acesso vitalício. Baixou, é seu pra sempre. Atualizações futuras também.",
  },
  {
    q: "Posso parcelar?",
    a: "Sim. O plano Completo parcelado em até 12x de R$3,89, ou à vista por R$37,90 (Pix ou cartão).",
  },
  {
    q: "E se eu não gostar?",
    a: "15 dias de garantia. Manda um e-mail, devolvemos 100% do valor. Sem perguntas.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-surface-2 px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
title="Respondendo o que você tá pensando agora."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-3xl mx-auto mb-12"
        >
          <Accordion multiple={false} className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={i}
                className="bg-surface-1 border border-border rounded-2xl px-6 data-[open]:border-accent/40 transition-colors duration-200"
              >
                <AccordionTrigger className="text-text-primary font-inter font-semibold text-sm md:text-base text-left py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-text-muted font-inter text-sm md:text-base leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center"
        >
          <a
            href="#preco"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-inter font-semibold text-base px-10 py-5 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20 min-h-[44px]"
          >
            Quero meu kit agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
