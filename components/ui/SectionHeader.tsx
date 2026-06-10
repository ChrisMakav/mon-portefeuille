import { Label } from "./Label";
import { Heading } from "./Heading";

interface SectionHeaderProps {
  label: string;
  heading: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  heading,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={[
        "mb-16",
        align === "center" && "text-center",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Label variant="accent">{label}</Label>
      <Heading level={2} className="mt-2">
        {heading}
      </Heading>
    </div>
  );
}
