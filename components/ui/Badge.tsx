type Variant = "default" | "accent" | "success" | "warning" | "danger";
type Size = "sm" | "md";

export interface BadgeProps {
  variant?: Variant;
  size?: Size;
  dot?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  default: "bg-surface-raised border border-line text-fg-muted",
  accent:  "bg-accent-tint border border-accent/20 text-accent",
  success: "bg-success/10 border border-success/20 text-success",
  warning: "bg-warning/10 border border-warning/20 text-warning",
  danger:  "bg-danger/10 border border-danger/20 text-danger",
};

const dotColors: Record<Variant, string> = {
  default: "bg-fg-subtle",
  accent:  "bg-accent",
  success: "bg-success",
  warning: "bg-warning",
  danger:  "bg-danger",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-2 py-0.5 text-label",
  md: "px-3 py-1 text-caption",
};

export function Badge({
  variant = "default",
  size = "sm",
  dot = false,
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 font-mono uppercase tracking-widest rounded-md",
        variantClasses[variant],
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {dot && (
        <span
          className={`inline-block h-1.5 w-1.5 rounded-full shrink-0 ${dotColors[variant]}`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
