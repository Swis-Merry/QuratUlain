"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { press } from "@/content/press";
import { SectionHeading } from "@/components/ui";

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });

export function Press() {
  const years = useMemo(() => [...new Set(press.map((p) => p.date.slice(0, 4)))], []);
  const publications = useMemo(() => [...new Set(press.map((p) => p.publication))], []);
  const [filter, setFilter] = useState("All");
  const items = press.filter((p) => filter === "All" || p.date.startsWith(filter) || p.publication === filter);
  const [lead, ...rest] = items;

  const chip = (value: string) => (
    <li key={value}>
      <button
        type="button"
        aria-pressed={filter === value}
        onClick={() => setFilter(value)}
        className={`border px-4 py-2 text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 ${
          filter === value ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/20 text-charcoal/70 hover:border-charcoal"
        }`}
      >
        {value}
      </button>
    </li>
  );

  return (
    <section id="press" aria-labelledby="press-title" className="bg-ivory py-24 lg:py-36">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Media & Press"
          title={
            <span id="press-title">
              In the <span className="italic text-champagne-dark">headlines</span>
            </span>
          }
          intro="Interviews, features and recognitions from the region's leading business and real estate publications."
        />

        <div className="mt-12 space-y-4" role="group" aria-label="Filter press coverage">
          <ul className="flex flex-wrap gap-2">{["All", ...years].map(chip)}</ul>
          <ul className="flex flex-wrap gap-2">{publications.map(chip)}</ul>
        </div>
        <p className="sr-only" aria-live="polite">
          Showing {items.length} articles
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12"
          >
            {lead && <PressCard item={lead} featured />}
            {rest.length > 0 && (
              <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((p) => (
                  <li key={p.url}>
                    <PressCard item={p} />
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function PressCard({ item, featured }: { item: (typeof press)[number]; featured?: boolean }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group grid h-full bg-white transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(36,36,36,0.35)] ${
        featured ? "lg:grid-cols-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden bg-sand ${featured ? "aspect-[16/9] lg:aspect-auto lg:min-h-[22rem]" : "aspect-[16/9]"}`}>
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            fill
            sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
            className="object-cover transition-transform duration-[1.2s] ease-luxe group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-sand to-champagne/40 p-8">
            <span className="text-center font-serif text-4xl leading-none text-charcoal/80 italic">{item.publication}</span>
          </div>
        )}
      </div>
      <div className={`flex flex-col p-7 ${featured ? "lg:justify-center lg:p-14" : ""}`}>
        <p className="eyebrow flex flex-wrap gap-x-3 text-champagne-dark">
          <span>{item.publication}</span>
          <span aria-hidden>&middot;</span>
          <time dateTime={item.date}>{formatDate(item.date)}</time>
        </p>
        <h3 className={`mt-4 font-serif leading-tight text-charcoal ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
          {item.headline}
        </h3>
        <p className="mt-auto pt-6 text-xs font-semibold tracking-[0.18em] text-charcoal uppercase">
          Read {item.type.toLowerCase()} <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
          <span className="sr-only"> on {item.publication} (opens in a new tab)</span>
        </p>
      </div>
    </a>
  );
}
