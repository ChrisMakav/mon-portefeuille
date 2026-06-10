import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export function Input({ error, className = "", ...props }: InputProps) {
  return (
    <input
      className={[
        "w-full h-12 px-4 rounded-lg bg-surface border font-sans text-base text-fg placeholder:text-fg-subtle",
        "transition-colors duration-[200ms] outline-none",
        error
          ? "border-danger ring-1 ring-danger"
          : "border-line focus:border-line-focus focus:ring-1 focus:ring-line-focus",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
