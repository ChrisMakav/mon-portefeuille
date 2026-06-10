import { HTMLAttributes } from "react";

type Variant = "default" | "raised" | "overlay";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  interactive?: boolean;
}

const variantClasses: Record<Variant, string> = {
  default: "bg-surface border border-line shadow-sm",
  raised:  "bg-surface-raised border border-line-strong shadow-md",
  overlay: "bg-overlay border border-line-strong shadow-lg",
};

export function Card({
  variant = "default",
  interactive = false,
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={[
        "rounded-xl p-6",
        variantClasses[variant],
        interactive &&
          "transition-all duration-[200ms] hover:-translate-y-0.5 hover:border-accent cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
