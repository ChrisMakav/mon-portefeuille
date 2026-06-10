import { ReactNode } from "react";

export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  ctaLabel = "Say Hello →",
  ctaHref = "#contact",
}: ServiceCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-xl bg-surface border border-line p-6 shadow-sm transition-all duration-[200ms] hover:-translate-y-0.5 hover:border-accent group">
      <div className="text-accent w-6 h-6" aria-hidden="true">
        {icon}
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-fg leading-tight">
          {title}
        </h3>
        <p className="font-sans text-sm text-fg-muted leading-relaxed">
          {description}
        </p>
      </div>

      <a
        href={ctaHref}
        className="inline-flex items-center gap-1 font-sans text-sm text-fg-muted transition-colors duration-[200ms] hover:text-accent group-hover:text-accent mt-auto pt-2"
      >
        {ctaLabel}
      </a>
    </article>
  );
}
