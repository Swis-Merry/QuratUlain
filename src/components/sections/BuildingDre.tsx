"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { sources } from "@/content/sources";
import { ButtonLink, ExternalLink, Reveal, SectionHeading } from "@/components/ui";

const stats = [
  { value: 2007, prefix: "", suffix: "", label: "Year co-founded", source: sources.propertyTime, plain: true },
  { value: 200, prefix: "~", suffix: "", label: "Team members today", source: sources.entrepreneurMe },
  { value: 14000, prefix: "", suffix: " sq ft", label: "Dubai Hills Estate headquarters", source: sources.entrepreneurMe },
  { value: 2, prefix: "AED ", suffix: "bn", label: "Sales with Meraas & Nakheel, 2023\u201324", source: sources.gulfNewsBlackOnyx },
];

const services = ["Off-plan sales", "Secondary sales", "Leasing", "Property management", "Holiday homes"];
const developers = ["Emaar", "Nakheel", "Meraas", "Sobha", "Damac", "Aldar", "Nshama"];

function Counter({ value, prefix, suffix, plain }: { value: number; prefix: string; suffix: string; plain?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [n, setN] = useState(value);

  useEffect(() => {
    if (!inView || reduce || plain) return;
    const controls = animate(0, value, { duration: 2, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, reduce, plain, value]);

  return (
    <span ref={ref} aria-label={`${prefix}${value.toLocaleString("en-US")}${suffix}`}>
      <span aria-hidden>
        {prefix}
        {plain ? n : n.toLocaleString("en-US")}
        {suffix && <span className="ml-1 text-[0.5em]">{suffix.trim()}</span>}
      </span>
    </span>
  );
}

export function BuildingDre() {
  return (
    <section id="dre-homes" aria-labelledby="dre-title" className="relative overflow-hidden bg-charcoal py-24 text-ivory lg:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-champagne/20 blur-3xl"
      />
      <div className="container-luxe relative">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              tone="light"
              eyebrow="Building DRE Homes"
              title={
                <span id="dre-title">
                  A boutique brokerage, <span className="italic text-gold-soft">grown into an institution</span>
                </span>
              }
              intro="DRE Homes was established in 2007 to fill a service void in Dubai's booming property market. Where others offered plain-vanilla buying and selling, Qurat and her co-founder set out to guide investors through long-term strategy, asset management and successful exits."
            />
          </div>
          <Reveal delay={0.15} className="self-end text-ivory/75 lg:col-span-5">
            <p className="leading-relaxed">
              From three people in Karama to a team of around 200 in Dubai Hills Estate, DRE&rsquo;s growth has been guided by an
              ethos of <span className="font-serif text-xl text-gold-soft italic">Service Beyond the Sale</span> &mdash; personalised
              advice, transparent reporting and relationships that endure market cycles.
            </p>
            <div className="mt-8">
              <ButtonLink href={site.companyUrl} variant="light" external>
                Explore DRE Homes
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-px bg-ivory/10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-charcoal p-6 sm:p-8">
              <dt className="eyebrow text-ivory/60">{s.label}</dt>
              <dd className="mt-3 font-serif text-4xl whitespace-nowrap text-ivory sm:text-5xl xl:text-6xl">
                <Counter {...s} />
              </dd>
              <dd className="mt-3">
                <ExternalLink href={s.source} className="text-[0.65rem] tracking-[0.18em] text-ivory/40 uppercase hover:text-gold-soft">
                  Source
                </ExternalLink>
              </dd>
            </Reveal>
          ))}
        </dl>

        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <Reveal>
            <h3 className="eyebrow text-gold-soft">Full-cycle services</h3>
            <ul className="mt-6 flex flex-wrap gap-3">
              {services.map((s) => (
                <li key={s} className="border border-ivory/20 px-4 py-2 text-sm text-ivory/85">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="eyebrow text-gold-soft">Working with Dubai&rsquo;s leading developers</h3>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {developers.map((d) => (
                <li key={d} className="font-serif text-2xl text-ivory/80 italic">
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
