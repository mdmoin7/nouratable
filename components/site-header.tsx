"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/recipes", label: "Recipes" },
  { href: "/#method", label: "The method" },
  { href: "/#pantry", label: "Pantry" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="wrap flex h-[76px] items-center justify-between gap-6">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="display text-[26px] leading-none tracking-[0.04em] text-ink uppercase">Murgh</span>
          <span className="hidden text-[9px] font-medium uppercase leading-[1.4] tracking-[0.22em] text-ink-soft sm:block">
            Indian chicken
            <br />
            cookbook
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-active={pathname === link.href}
              className="link-underline text-[12.5px] font-medium text-ink-soft transition-colors hover:text-ink data-[active=true]:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/recipes" className="btn btn-dark hidden sm:inline-flex">
            Start cooking <span aria-hidden="true">→</span>
          </Link>
          <details className="relative md:hidden">
            <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full border border-ink/20 text-ink">
              <span className="sr-only">Open menu</span>
              <span aria-hidden="true" className="text-sm">
                ☰
              </span>
            </summary>
            <div className="absolute right-0 top-12 w-48 rounded-2xl border border-line bg-card p-2 shadow-xl">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="block rounded-xl px-3 py-2 text-sm text-ink-soft hover:bg-paper hover:text-ink">
                  {link.label}
                </Link>
              ))}
              <Link href="/recipes" className="mt-1 block rounded-xl bg-ink px-3 py-2 text-sm font-medium text-paper">
                Start cooking
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
