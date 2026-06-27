import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section className={`mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 ${className}`}>
      {(eyebrow || title || description) && (
        <div className="mb-10 grid gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <div>
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                {title}
              </h2>
            )}
          </div>
          {description && <p className="max-w-2xl text-base leading-8 text-muted">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
