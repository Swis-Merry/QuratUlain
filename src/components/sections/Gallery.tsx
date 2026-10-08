"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { gallery } from "@/content/story";
import { SectionHeading } from "@/components/ui";

const layout = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-6",
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    setActive(null);
    triggerRef.current?.focus();
  }, []);

  const step = useCallback(
    (d: number) => setActive((i) => (i === null ? null : (i + d + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  const current = active === null ? null : gallery[active];

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-ivory py-24 lg:py-36">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Photo Gallery"
          title={
            <span id="gallery-title">
              Moments of <span className="italic text-champagne-dark">leadership</span>
            </span>
          }
          intro="Portraits, award ceremonies and media features from official DRE Homes and press sources."
        />

        <ul className="mt-16 grid auto-rows-[14rem] grid-cols-1 gap-4 sm:auto-rows-[16rem] md:grid-cols-6">
          {gallery.map((g, i) => (
            <li key={g.src} className={layout[i] ?? "md:col-span-2"}>
              <button
                type="button"
                onClick={(e) => {
                  triggerRef.current = e.currentTarget;
                  setActive(i);
                }}
                className="group relative block h-full w-full overflow-hidden bg-sand"
                aria-label={`View larger: ${g.alt}`}
              >
                <Image
                  src={g.src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  style={{ objectPosition: g.focus }}
                  className="object-cover transition-transform duration-[1.2s] ease-luxe group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <span className="eyebrow absolute bottom-4 left-4 text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {g.category}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4 outline-none sm:p-12"
            onClick={close}
          >
            <figure className="relative h-full w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
              <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
              <figcaption className="absolute inset-x-0 -bottom-2 text-center text-sm text-ivory/70">{current.alt}</figcaption>
            </figure>
            <button type="button" onClick={close} className="absolute top-5 right-5 p-3 text-3xl text-ivory" aria-label="Close gallery">
              &times;
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute top-1/2 left-3 -translate-y-1/2 p-3 text-3xl text-ivory"
              aria-label="Previous image"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute top-1/2 right-3 -translate-y-1/2 p-3 text-3xl text-ivory"
              aria-label="Next image"
            >
              &rarr;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
