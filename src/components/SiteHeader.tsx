import Link from "next/link";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-background/85 backdrop-blur-xl dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Link href="/" className="group w-fit">
          <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-foreground">
            AI Product Systems
          </span>
          <span className="mt-1 block text-sm text-muted">Architect Portfolio</span>
        </Link>
        <nav aria-label="Primary navigation" className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted transition hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-background"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
