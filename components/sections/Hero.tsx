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

        <p
          className="text-xs uppercase tracking-widest text-accent font-inter font-semibold anim-fade-up"
        >
          Atenda adolescentes sem improvisar, sem adaptar e sem travar.
        </p>

        <h1
          className="font-fraunces font-bold text-2xl md:text-5xl lg:text-6xl text-text-primary leading-tight tracking-tight max-w-4xl anim-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          <span className="text-accent">+80 RECURSOS TERAPÊUTICOS</span>{" "}
          PARA QUALQUER DEMANDA QUE ENTRAR NO SEU CONSULTÓRIO.
        </h1>

        <p
          className="text-sm md:text-base text-text-muted font-inter leading-relaxed max-w-xl anim-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          Material pronto pra aplicar, com a linguagem que ele respeita.
        </p>

        <div
          className="w-full max-w-sm md:max-w-3xl mx-auto anim-fade-up"
          style={{ animationDelay: "220ms" }}
        >
          <Image
            src="/mockupteen.png"
            alt="Kit Consultório Teen — recursos visuais terapêuticos para adolescentes"
            width={1200}
            height={900}
            sizes="(min-width: 768px) 768px, 100vw"
            className="w-full h-auto rounded-2xl"
            priority
          />
        </div>

        <div
          className="flex flex-col items-center gap-3 w-full anim-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#galeria"
            className="inline-flex items-center justify-center w-full md:w-auto bg-accent hover:bg-accent-hover text-white font-inter font-semibold text-base px-10 py-4 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20 min-h-[44px]"
          >
            Quero meu kit agora
          </a>
          <p className="text-sm text-text-subtle font-inter">
            +2000 psicólogas já confiam nos Kits Consultório.
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-x-6 gap-y-3 anim-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={2} />
              <span className="text-text-primary font-inter text-sm font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
