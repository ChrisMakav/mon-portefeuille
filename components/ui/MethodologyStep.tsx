export interface MethodologyStepProps {
  number: string;
  name: string;
  description: string;
  isLast?: boolean;
}

export function MethodologyStep({
  number,
  name,
  description,
  isLast = false,
}: MethodologyStepProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 relative">
      {/* Number + connector line (desktop) */}
      <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2 shrink-0">
        <span className="font-display text-5xl md:text-6xl font-black text-accent/20 leading-none select-none">
          {number}
        </span>
        {!isLast && (
          <div
            className="hidden md:block w-px flex-1 bg-line min-h-[2rem] mt-1"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Content */}
      <div
        className={[
          "flex flex-col gap-1.5 pb-6 md:pb-8",
          !isLast && "border-b border-line md:border-0",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-fg leading-tight">
          {name}
        </h3>
        <p className="font-sans text-sm text-fg-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
