import { Sparkles } from "lucide-react";

interface Props {
  href?: string;
  className?: string;
}

export default function MethodBadge({ href, className = "" }: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-full border border-border bg-surface-1 px-4 py-1.5 text-[11px] md:text-xs font-inter leading-tight text-text-muted";

  const content = (
    <>
      <Sparkles className="w-3.5 h-3.5 text-accent flex-shrink-0" strokeWidth={2} />
      <span>
        Método <span className="font-semibold text-text-primary">Team Skills</span>
        {" · "}adaptado dos workbooks terapêuticos dos EUA
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${base} transition-colors duration-200 hover:border-accent/40 hover:bg-accent/5 ${className}`}
      >
        {content}
      </a>
    );
  }

  return <div className={`${base} ${className}`}>{content}</div>;
}
