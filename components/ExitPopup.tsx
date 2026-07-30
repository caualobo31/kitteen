"use client";

import { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";

export default function ExitPopup() {
  const [open, setOpen] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered.current) {
        triggered.current = true;
        setOpen(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    let scrolled = false;
    const handleScroll = () => { scrolled = true; };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const timer = setTimeout(() => {
      if (!scrolled && !triggered.current) {
        triggered.current = true;
        setOpen(true);
      }
    }, 60000);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-50 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="fixed inset-0 bg-black/50" onClick={() => setOpen(false)} />

      <div className="fixed inset-0 flex items-center justify-center px-5">
        <div
          className={`bg-background border border-border rounded-xl p-6 md:p-8 w-full max-w-md relative shadow-lg transition-[transform,opacity] duration-200 ${
            open ? "scale-100 opacity-100 translate-y-0" : "scale-[0.92] opacity-0 translate-y-5"
          }`}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-text-subtle hover:text-text-muted transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>

          <h3 className="font-fraunces italic text-2xl md:text-3xl text-text-primary leading-tight mb-3">
            Espera — antes de fechar.
          </h3>

          <p className="text-base text-text-muted font-inter leading-relaxed mb-5">
            Se você quase comprou mas ficou em dúvida, o kit tem garantia
            incondicional de 15 dias — compra sem risco, pede reembolso se
            não gostar.
          </p>

          <a
            href="#preco"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-full bg-accent hover:bg-accent-hover text-white font-inter font-bold text-sm px-6 py-4 rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 min-h-[44px]"
          >
            Quero o kit com garantia de 15 dias
          </a>
        </div>
      </div>
    </div>
  );
}
