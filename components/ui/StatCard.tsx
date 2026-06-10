export interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 rounded-xl bg-surface border border-line-strong px-8 py-6 text-center shadow-md">
      <span className="font-display text-5xl font-black text-accent leading-none">
        {value}
      </span>
      <span className="font-mono text-label uppercase tracking-widest text-fg-muted mt-1">
        {label}
      </span>
    </div>
  );
}
