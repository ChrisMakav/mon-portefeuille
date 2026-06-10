import Image from "next/image";
import { Badge } from "./Badge";

export interface ProjectCardProps {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  href: string;
  ctaLabel?: string;
}

export function ProjectCard({
  image,
  imageAlt,
  category,
  title,
  href,
  ctaLabel = "See Project →",
}: ProjectCardProps) {
  return (
    <article className="group rounded-xl overflow-hidden bg-surface border border-line shadow-sm transition-all duration-[200ms] hover:-translate-y-0.5 hover:border-accent">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="relative aspect-video overflow-hidden bg-surface-raised">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-[350ms] group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="flex flex-col gap-3 p-5">
          <Badge variant="accent">{category}</Badge>

          <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-fg leading-tight">
            {title}
          </h3>

          <span className="inline-flex items-center gap-1 font-sans text-sm text-fg-muted transition-colors duration-[200ms] group-hover:text-accent">
            {ctaLabel}
          </span>
        </div>
      </a>
    </article>
  );
}
