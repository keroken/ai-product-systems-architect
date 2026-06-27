import Link from "next/link";

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function Hero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: HeroProps) {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
        <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">{description}</p>
        {(primaryHref || secondaryHref) && (
          <div className="mt-10 flex flex-wrap gap-3">
            {primaryHref && primaryLabel && (
              <Link
                href={primaryHref}
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-foreground px-5 text-sm font-semibold text-background transition hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-background"
              >
                {primaryLabel}
              </Link>
            )}
            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-black/15 px-5 text-sm font-semibold text-foreground transition hover:border-foreground dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-background"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        )}
      </div>
      <div className="self-end border-y border-black/10 py-8 dark:border-white/10">
        <p className="text-sm uppercase tracking-[0.2em] text-muted">Core tagline</p>
        <p className="mt-5 text-2xl font-medium leading-snug text-foreground sm:text-3xl">
          “I design AI-native systems that connect design, engineering, and product development.”
        </p>
      </div>
    </section>
  );
}
