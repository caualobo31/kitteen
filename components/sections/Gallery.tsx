import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";

const mockups = [
  "/exemplo1.png",
  "/exemplo2.png",
  "/exemplo3.png",
  "/exemplo4.png",
  "/exemplo5.png",
  "/exemplo6.png",
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-surface-2 py-14 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader
          title={<>Veja o <span className="text-accent">material por dentro:</span></>}
        />
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-4 w-max animate-marquee">
          {[...mockups, ...mockups].map((src, i) => (
            <div
              key={i}
              className="w-52 md:w-64 flex-shrink-0 aspect-[3/4] relative rounded-2xl overflow-hidden border border-border shadow-sm"
            >
              <Image
                src={src}
                alt={`Exemplo de recurso ${(i % mockups.length) + 1}`}
                fill
                sizes="(min-width: 768px) 256px, 208px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
