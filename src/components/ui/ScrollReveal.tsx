import type { ReactNode } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
  as?: "div" | "li";
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: ScrollRevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${delay ? `reveal-delay-${delay}` : ""} ${
        visible ? "is-visible" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
