import { ReactNode } from "react";

export interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}

export function FormField({
  label,
  htmlFor,
  error,
  required,
  children,
}: FormFieldProps) {
  const errorId = error ? `${htmlFor}-error` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="font-sans text-sm text-fg-muted leading-none"
      >
        {label}
        {required && (
          <span className="text-accent ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {/* Inject aria-describedby into child input/textarea */}
      <div
        aria-describedby={errorId}
      >
        {children}
      </div>

      {error && (
        <p id={errorId} className="font-sans text-xs text-danger mt-0.5" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
