import { HTMLAttributes } from "react";

type Variant = "default" | "accent";

export interface LabelProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  default: "text-fg-muted",
  accent:  "text-accent border-l-2 border-accent pl-3",
};

export function Label({
  variant = "default",
  className = "",
  children,
  "aria-hidden": ariaHidden = true,
  ...props
}: LabelProps & { "aria-hidden"?: boolean }) {
  return (
    <p
      aria-hidden={ariaHidden}
      className={[
        "font-mono text-label uppercase tracking-widest",
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </p>
  );
}
