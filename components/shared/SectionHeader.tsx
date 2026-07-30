import { ReactNode } from "react";

interface Props {
  caption?: string;
  title: ReactNode;
  subtitle?: string;
}

export default function SectionHeader({ caption, title, subtitle }: Props) {
  return (
    <div className="text-center mb-10 md:mb-12 anim-fade-up">
      {caption && (
        <p className="text-xs uppercase tracking-widest text-accent font-inter font-semibold mb-4">
          {caption}
        </p>
      )}
      <h2 className="font-fraunces font-semibold text-2xl md:text-4xl text-text-primary leading-tight tracking-tight max-w-3xl mx-auto">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-text-muted font-inter leading-relaxed max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
