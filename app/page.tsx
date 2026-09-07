import { EnquiryForm } from "@/components/enquiry-form";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/lib/menu";

const nav = [
  { href: "#menu", label: "Menu" },
  { href: "#how", label: "How it works" },
  { href: "#enquire", label: "Enquire" },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
        <div className="wrap flex h-16 items-center justify-between gap-4">
          <a href="#top" className="font-display text-xl tracking-tight">
            Noura
          </a>
          <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hidden px-2 py-1 text-sm text-muted-foreground hover:text-foreground sm:inline"
              >
                {item.label}
              </a>
            ))}
            <Button asChild size="sm">
              <a href="#enquire">Enquire</a>
            </Button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="wrap grid items-center gap-10 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
              Made fresh · Ready to heat
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.95] tracking-tight">
              Good food.
              <span className="block italic text-primary">Better you.</span>
              Everyday.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Wholesome meals made with real ingredients and lots of care.
              Heat, eat, get on with your day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#enquire">Enquire</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#menu">See the menu</a>
              </Button>
            </div>
          </div>
          <figure className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary sm:aspect-[5/6]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/food/hero.svg"
              alt="Illustrated grain bowl with vegetables and seeds"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl bg-background/90 px-4 py-3 text-sm leading-snug text-pretty backdrop-blur">
              Small batches. Honest ingredients. No preservatives.
            </figcaption>
          </figure>
        </section>

        <section className="border-y border-border bg-card">
          <ul className="wrap grid gap-8 py-10 sm:grid-cols-3">
            {[
              {
                title: "Made fresh",
                body: "Cooked in small batches. Heat when you are ready.",
              },
              {
                title: "Nothing artificial",
                body: "Real ingredients. No preservatives.",
              },
              {
                title: "Veg and non-veg",
                body: "A mixed menu so the table can share.",
              },
            ].map((item) => (
              <li key={item.title}>
                <p className="font-display text-xl">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="menu" className="wrap scroll-mt-20 py-16 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
            Menu
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl tracking-tight md:text-5xl">
            What&apos;s on the table today.
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Sample dishes — prices are placeholders. Meals, bowls and snacks.
            Vegetarian and non-veg.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="relative aspect-[5/4] bg-secondary">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {item.category} · {item.diet}
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-tight">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {item.tags.join(" · ")}
                  </p>
                  <div className="mt-4 flex items-baseline justify-between text-sm">
                    <span className="font-medium">{formatPrice(item.price)}</span>
                    <span className="text-muted-foreground">
                      {item.minutes === "Ready"
                        ? "Ready to eat"
                        : `Heat · ${item.minutes} min`}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="how" className="scroll-mt-20 bg-olive text-primary-foreground">
          <div className="wrap py-16 md:py-24">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground/70">
              How it works
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
              Browse. Enquire. We confirm.
            </h2>
            <ol className="mt-12 grid gap-10 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Browse",
                  body: "Pick meals from the sample menu — or tell us what you need.",
                },
                {
                  step: "02",
                  title: "Enquire",
                  body: "Leave your name and a way to reach you. No checkout yet.",
                },
                {
                  step: "03",
                  title: "We confirm",
                  body: "We come back with availability, timing and how delivery will work.",
                },
              ].map((item) => (
                <li key={item.step}>
                  <p className="font-display text-sm tracking-[0.2em] text-primary-foreground/60">
                    {item.step}
                  </p>
                  <h3 className="mt-3 font-display text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="wrap py-16 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
            The Noura way
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl tracking-tight md:text-5xl">
            Thoughtful in every bite.
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Honest ingredients",
                body: "Clean, responsibly sourced food. Nothing you cannot pronounce.",
              },
              {
                title: "Made with care",
                body: "Crafted fresh in small batches — not a factory line.",
              },
              {
                title: "Packaging with care",
                body: "Plastic-free wherever possible. Built for the journey home.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-3xl border border-border bg-card p-6"
              >
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="enquire" className="scroll-mt-20 border-t border-border bg-card">
          <div className="wrap grid gap-10 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
                Enquire
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
                Tell us what you need.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Delivery area is still being decided. Share a few details and we
                will be in touch.
              </p>
            </div>
            <EnquiryForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="wrap flex flex-col gap-3 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg text-foreground">Nouratable</p>
          <p>Ready-to-heat meals. hello@nouratable.com</p>
        </div>
      </footer>
    </>
  );
}
