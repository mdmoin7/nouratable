import Link from "next/link";

export function SiteFooter() {
  return (
    <footer id="social" className="border-t border-[#5c4033]/10 bg-[#f4e9e1] py-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Link href="/" className="font-display text-3xl text-[#8b2e1f]">AZEVINA</Link>
          <p className="mt-1 text-[9px] uppercase tracking-[.3em] text-[#5c4033]/70">Good food brings people together</p>
        </div>
        <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs text-[#5c4033]">
          <Link href="/menu">Menu</Link><Link href="/about">About</Link><Link href="/order">Order</Link>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
        </div>
        <p className="text-[11px] text-[#5c4033]/60">© 2026 AZEVINA</p>
      </div>
    </footer>
  );
}
