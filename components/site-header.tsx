import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-white/20 text-white">
      <div className="container flex h-[82px] items-center justify-between">
        <Link href="/" className="leading-none">
          <span className="font-display text-[30px] tracking-[.03em]">AZEVINA</span>
          <span className="mt-1 block text-[7px] tracking-[.34em] opacity-85">PEOPLE · PLACES · FLAVOURS</span>
        </Link>
        <nav className="desktop-nav flex items-center gap-8">
          <Link className="nav-link" href="/menu">Menu</Link>
          <Link className="nav-link" href="/about">About</Link>
          <Link className="nav-link" href="/order">Order</Link>
          <a className="nav-link" href="#social">Instagram</a>
        </nav>
        <Link href="/order" className="btn-light">Order Now <span>→</span></Link>
      </div>
    </header>
  );
}
