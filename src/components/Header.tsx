"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-ivory/90 shadow-[0_1px_0_rgba(36,36,36,0.08)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex h-18 items-center justify-between py-4">
        <Link href="/" className="font-serif text-2xl tracking-wide text-charcoal" aria-label="Qurat Ul Ain — home">
          Qurat <span className="italic text-champagne-dark">Ul</span> Ain
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative text-[0.72rem] font-semibold tracking-[0.2em] text-charcoal/80 uppercase transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 hover:text-charcoal hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#connect"
            className="hidden bg-charcoal px-5 py-3 text-[0.7rem] font-semibold tracking-[0.2em] text-ivory uppercase transition-colors duration-500 hover:bg-champagne-dark sm:inline-block"
          >
            Connect
          </a>
          <button
            type="button"
            className="relative h-10 w-10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`absolute left-2 h-px w-6 bg-charcoal transition-all duration-300 ${open ? "top-5 rotate-45" : "top-3.5"}`}
            />
            <span
              className={`absolute left-2 h-px w-6 bg-charcoal transition-all duration-300 ${open ? "top-5 -rotate-45" : "top-6"}`}
            />
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-charcoal/10 bg-ivory lg:hidden"
      >
        <ul className="container-luxe flex flex-col gap-1 py-8">
          {[...nav, { label: "Connect", href: "#connect" }].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-serif text-3xl text-charcoal transition-colors hover:text-champagne-dark"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
