import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-white/20 text-white">
      <div className="container flex h-[82px] items-center justify-between gap-4">
        <Link href="/" className="leading-none">
          <span className="font-display text-[30px] tracking-[.03em]">AZEVINA</span>
          <span className="mt-1 block text-[7px] tracking-[.34em] opacity-85">PEOPLE · PLACES · FLAVOURS</span>
        </Link>
        <nav className="desktop-nav flex items-center gap-8" aria-label="Primary">
          <Link className="nav-link" href="/menu">Menu</Link>
          <Link className="nav-link" href="/about">About</Link>
          <Link className="nav-link" href="/order">Order</Link>
          <a className="nav-link" href="#social">Instagram</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/order" className="btn-light">Order Now <span>→</span></Link>
          <details className="relative md:hidden">
            <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full border border-white/35 text-sm">☰</summary>
            <div className="absolute right-0 top-12 w-40 rounded-2xl border border-white/15 bg-[#5c4033] p-2 shadow-2xl">
              <Link className="block rounded-xl px-3 py-2 text-sm hover:bg-white/10" href="/menu">Menu</Link>
              <Link className="block rounded-xl px-3 py-2 text-sm hover:bg-white/10" href="/about">About</Link>
              <Link className="block rounded-xl px-3 py-2 text-sm hover:bg-white/10" href="/order">Order</Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
