import Image from "next/image";

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarSrc?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  avatarSrc,
}: TestimonialCardProps) {
  return (
    <article className="flex flex-col gap-5 rounded-xl bg-surface border border-line p-6 shadow-sm">
      <blockquote className="font-sans text-sm text-fg-muted leading-relaxed italic flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <footer className="flex items-center gap-3 pt-2 border-t border-line">
        {avatarSrc ? (
          <Image
            src={avatarSrc}
            alt={author}
            width={40}
            height={40}
            className="rounded-full object-cover shrink-0 ring-2 ring-line"
          />
        ) : (
          <div
            className="h-10 w-10 rounded-full bg-surface-raised border border-line-strong flex items-center justify-center shrink-0"
            aria-hidden="true"
          >
            <span className="font-display text-lg font-bold text-accent leading-none">
              {author[0].toUpperCase()}
            </span>
          </div>
        )}

        <div className="flex flex-col gap-0.5">
          <cite className="font-mono text-caption text-accent not-italic tracking-wide">
            {author}
          </cite>
          <span className="font-mono text-label uppercase tracking-widest text-fg-subtle">
            {role}
          </span>
        </div>
      </footer>
    </article>
  );
}
