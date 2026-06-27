import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-lg border border-black/10 bg-surface p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)] dark:border-white/10 ${className}`}
    >
      {children}
    </article>
  );
}
