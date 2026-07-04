"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";

const BASIC_URL = "https://pay.wiapy.com/iyCj7VBNAt";
const PROMO_URL = "https://pay.wiapy.com/NZBL0sww06J";

const differentials = [
  "Os 4 bônus exclusivos que o básico não inclui",
  "Acesso vitalício a todos os recursos",
  "Garantia incondicional de 15 dias",
];

export default function UpsellPopup() {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    document.addEventListener("upsell:open", handler);
    return () => document.removeEventListener("upsell:open", handler);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
      setTimeout(() => cardRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60"
            onClick={() => setOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center px-5 py-8 overflow-y-auto"
            onClick={() => setOpen(false)}
          >
            <div
              ref={cardRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              className="bg-surface-1 border border-border rounded-2xl p-7 md:p-8 w-full max-w-[440px] relative shadow-xl outline-none"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-text-subtle hover:text-text-muted transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>

              <p className="text-xs uppercase tracking-widest text-accent font-inter font-bold mb-4">
                Oferta só nesta página
              </p>

              <h3 className="font-fraunces font-bold text-2xl md:text-3xl text-text-primary leading-tight mb-3">
                Espera! Por só R$10 a mais você leva o kit COMPLETO
              </h3>

              <p className="text-sm text-text-muted font-inter leading-relaxed mb-5">
                Você tá levando o plano básico por R$19,90. Mas por só R$10 a mais, dá pra levar o plano completo, com todos os recursos e os bônus. Ele normalmente sai R$37,90, e só aqui, agora, tá por R$29,90.
              </p>

              <div className="flex items-baseline gap-3 mb-5">
                <span className="font-inter text-base text-text-subtle line-through">R$37,90</span>
                <span className="font-fraunces font-bold text-4xl text-accent leading-none">R$29,90</span>
              </div>

              <div className="flex flex-col gap-2.5 mb-6">
                {differentials.map((item) => (
                  <div key={item} className="flex gap-3 items-center">
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-text-primary font-inter text-sm">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href={PROMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-accent hover:bg-accent-hover text-white font-inter font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20 min-h-[44px] mb-3"
              >
                QUERO O COMPLETO POR R$29,90
              </a>

              <a
                href={BASIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full text-text-subtle hover:text-text-muted font-inter text-sm py-2 transition-colors duration-200 min-h-[44px]"
              >
                Não, quero continuar com o básico por R$19,90
              </a>

              <p className="text-center text-xs text-text-subtle font-inter mt-3">
                Garantia de 15 dias · Compra 100% segura
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
