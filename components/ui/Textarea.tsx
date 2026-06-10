import { TextareaHTMLAttributes } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export function Textarea({ error, className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={[
        "w-full px-4 py-3 rounded-lg bg-surface border font-sans text-base text-fg placeholder:text-fg-subtle",
        "transition-colors duration-[200ms] outline-none resize-none min-h-[120px]",
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
