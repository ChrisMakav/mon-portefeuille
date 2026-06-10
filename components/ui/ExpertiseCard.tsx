import { iconMap } from "@/lib/icons";

export interface ExpertiseCardProps {
  iconName: string;
  title: string;
  description: string;
  problemsSolved: string[];
}

export function ExpertiseCard({
  iconName,
  title,
  description,
  problemsSolved,
}: ExpertiseCardProps) {
  const Icon = iconMap[iconName];

  return (
    <article className="flex flex-col gap-4 rounded-xl bg-surface border border-line p-6 shadow-sm transition-all duration-[200ms] hover:-translate-y-0.5 hover:border-accent group">
      {Icon && (
        <div className="text-accent w-6 h-6" aria-hidden="true">
          <Icon className="w-6 h-6" />
        </div>
      )}

      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-fg leading-tight">
          {title}
        </h3>
        <p className="font-sans text-sm text-fg-muted leading-relaxed">
          {description}
        </p>
      </div>

      {problemsSolved.length > 0 && (
        <div className="pt-3 border-t border-line">
          <p className="font-mono text-label uppercase tracking-widest text-fg-subtle mb-2">
            Problèmes résolus
          </p>
          <ul className="flex flex-col gap-1.5">
            {problemsSolved.map((problem, i) => (
              <li
                key={i}
                className="flex items-start gap-2 font-sans text-xs text-fg-muted"
              >
                <span className="text-accent mt-0.5 shrink-0" aria-hidden="true">
                  ↗
                </span>
                {problem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
