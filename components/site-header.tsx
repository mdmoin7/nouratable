"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSelector, useLanguage } from "@/components/language-provider";

const kitchenLinks = [
  { href: "/cooking-journal", label: "Cooking journal" },
  { href: "/saved", label: "Saved recipes" },
  { href: "/recently-viewed", label: "Recently viewed" },
  { href: "/shopping-list", label: "Shopping list" },
  { href: "/meal-planner", label: "Meal planner" },
  { href: "/pantry", label: "Pantry finder" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const kitchenActive = kitchenLinks.some((link) => pathname === link.href);

  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="wrap flex h-[76px] items-center justify-between gap-4">
        <Link href="/" className="group flex shrink-0 items-baseline gap-3">
          <span className="display text-[26px] leading-none tracking-[0.04em] text-ink uppercase">Murgh</span>
          <span className="hidden text-[9px] font-medium uppercase leading-[1.4] tracking-[0.22em] text-ink-soft sm:block">
            Indian chicken
            <br />
            cookbook
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          <Link href="/recipes" data-active={pathname === "/recipes"} className="link-underline text-[13px] font-medium text-ink-soft transition-colors hover:text-ink data-[active=true]:text-ink">
            {t("recipes")}
          </Link>
          <details className="group relative">
            <summary aria-haspopup="true" className="flex cursor-pointer list-none items-center gap-1.5 py-3 text-[13px] font-medium text-ink-soft transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
              <span className={kitchenActive ? "text-ink" : ""}>My kitchen</span>
              <span aria-hidden="true" className="text-[10px]">▾</span>
            </summary>
            <div className="absolute left-0 top-full z-40 mt-1 w-56 rounded-xl border border-line bg-card p-2 shadow-xl">
              {kitchenLinks.map((link) => (
                <Link key={link.href} href={link.href} data-active={pathname === link.href} className="block rounded-lg px-3 py-2.5 text-sm text-ink-soft transition-colors hover:bg-paper hover:text-ink data-[active=true]:bg-paper data-[active=true]:text-ink">
                  {link.label}
                </Link>
              ))}
            </div>
          </details>
          <Link href="/#method" className="link-underline text-[13px] font-medium text-ink-soft transition-colors hover:text-ink">
            {t("method")}
          </Link>
          <Link href="/about" data-active={pathname === "/about"} className="link-underline text-[13px] font-medium text-ink-soft transition-colors hover:text-ink data-[active=true]:text-ink">
            {t("about")}
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <LanguageSelector />
          <Link href="/recipes" className="btn btn-dark hidden sm:inline-flex">
            {t("startCooking")} <span aria-hidden="true">→</span>
          </Link>
          <details className="relative lg:hidden">
            <summary aria-controls="mobile-primary-navigation" className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full border border-ink/20 text-ink [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open menu</span>
              <span aria-hidden="true" className="text-sm">☰</span>
            </summary>
            <nav id="mobile-primary-navigation" aria-label="Mobile primary" className="absolute right-0 top-12 z-40 w-64 rounded-2xl border border-line bg-card p-2 shadow-xl">
              <Link href="/recipes" className="block rounded-xl px-3 py-2.5 text-sm text-ink-soft hover:bg-paper hover:text-ink">{t("recipes")}</Link>
              <p className="px-3 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-soft">My kitchen</p>
              {kitchenLinks.map((link) => (
                <Link key={link.href} href={link.href} data-active={pathname === link.href} className="block rounded-xl px-3 py-2.5 text-sm text-ink-soft hover:bg-paper hover:text-ink data-[active=true]:bg-paper data-[active=true]:text-ink">
                  {link.label}
                </Link>
              ))}
              <div className="my-1 border-t border-line" />
              <Link href="/#method" className="block rounded-xl px-3 py-2.5 text-sm text-ink-soft hover:bg-paper hover:text-ink">{t("method")}</Link>
              <Link href="/about" className="block rounded-xl px-3 py-2.5 text-sm text-ink-soft hover:bg-paper hover:text-ink">{t("about")}</Link>
              <Link href="/recipes" className="mt-1 block rounded-xl bg-ink px-3 py-2.5 text-sm font-medium text-paper">{t("startCooking")}</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
