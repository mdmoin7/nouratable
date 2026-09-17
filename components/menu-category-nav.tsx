"use client";

import { useEffect, useState } from "react";
import { categories } from "@/lib/menu";

const sectionId = (category: string) => category.toLowerCase().replaceAll(" ", "-");

export function MenuCategoryNav() {
  const [active, setActive] = useState(categories[0]);

  useEffect(() => {
    const sections = categories
      .map((category) => document.getElementById(sectionId(category)))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          const category = categories.find((item) => sectionId(item) === visible[0].target.id);
          if (category) setActive(category);
        }
      },
      { rootMargin: "-24% 0px -58% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Menu categories" className="sticky top-0 z-20 border-b border-[#5c4033]/10 bg-[#fffaf5]/95 backdrop-blur">
      <div className="container flex gap-2 overflow-x-auto py-3">
        {categories.map((category) => {
          const isActive = category === active;
          return (
            <a
              key={category}
              href={`#${sectionId(category)}`}
              aria-current={isActive ? "page" : undefined}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                isActive
                  ? "bg-[#8b2e1f] text-white"
                  : "text-[#5c4033]/70 hover:bg-[#ebdcc8]"
              }`}
            >
              {category}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
