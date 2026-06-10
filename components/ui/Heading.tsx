import { ElementType, HTMLAttributes } from "react";

type Level = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: Level;
}

const levelClasses: Record<Level, string> = {
  1: "font-display text-display font-black uppercase tracking-tight leading-none text-fg",
  2: "font-display text-7xl font-black uppercase tracking-tight leading-none text-fg",
  3: "font-display text-4xl font-bold uppercase tracking-tight leading-tight text-fg",
  4: "font-sans text-2xl font-semibold leading-snug text-fg",
  5: "font-sans text-xl font-medium leading-snug text-fg",
  6: "font-mono text-sm font-normal uppercase tracking-widest text-fg-muted",
};

const tags: Record<Level, ElementType> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

export function Heading({
  level,
  className = "",
  children,
  ...props
}: HeadingProps) {
  const Tag = tags[level];
  return (
    <Tag
      className={[levelClasses[level], className].filter(Boolean).join(" ")}
      {...(props as HTMLAttributes<HTMLHeadingElement>)}
    >
      {children}
    </Tag>
  );
}
