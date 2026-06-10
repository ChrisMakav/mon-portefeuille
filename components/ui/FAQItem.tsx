"use client";

export interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-line last:border-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex items-center justify-between w-full py-5 text-left gap-4 group"
      >
        <span className="font-sans text-base font-medium text-fg group-hover:text-accent transition-colors duration-[200ms]">
          {question}
        </span>
        <span
          className="text-accent text-xl font-bold shrink-0 transition-transform duration-[200ms] leading-none"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        role="region"
        style={{
          maxHeight: isOpen ? "500px" : "0px",
          overflow: "hidden",
          transition: "max-height 350ms ease-out",
        }}
      >
        <p className="font-sans text-sm text-fg-muted leading-relaxed pb-5">
          {answer}
        </p>
      </div>
    </div>
  );
}
