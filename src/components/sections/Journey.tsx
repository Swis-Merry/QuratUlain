"use client";

import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import { timeline } from "@/content/story";
import { ExternalLink, SectionHeading } from "@/components/ui";

export function Journey() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });

  return (
    <section id="journey" aria-labelledby="journey-title" className="bg-sand py-24 lg:py-36">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="My Journey"
          title={
            <span id="journey-title">
              From a 400 sq ft office <span className="italic text-champagne-dark">to an industry legacy</span>
            </span>
          }
          intro="Every milestone below is drawn from published interviews and official DRE Homes announcements."
        />

        <div className="relative mt-20">
          <div aria-hidden className="absolute top-0 bottom-0 left-4 w-px bg-charcoal/15 md:left-1/2" />
          <motion.div
            aria-hidden
            style={{ scaleY: scrollYProgress }}
            className="absolute top-0 bottom-0 left-4 w-px origin-top bg-gold md:left-1/2"
          />
          <ol ref={ref} className="relative">
          {timeline.map((m, i) => {
            const right = i % 2 === 1;
            return (
              <motion.li
                key={m.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid pb-14 pl-12 md:grid-cols-2 md:pl-0 last:pb-0"
              >
                <span
                  aria-hidden
                  className="absolute top-2 left-4 h-3 w-3 -translate-x-1/2 rotate-45 border border-gold bg-sand md:left-1/2"
                />
                <div className={right ? "md:col-start-2 md:pl-16" : "md:pr-16 md:text-right"}>
                  <p className="eyebrow text-champagne-dark">{m.year}</p>
                  <h3 className="mt-3 font-serif text-3xl leading-tight text-charcoal">{m.title}</h3>
                  <p className="mt-3 leading-relaxed text-charcoal/70">{m.body}</p>
                  <ExternalLink
                    href={m.source}
                    className="mt-3 inline-block text-xs font-semibold tracking-[0.18em] text-charcoal/50 uppercase underline-offset-4 hover:text-champagne-dark hover:underline"
                  >
                    Source
                  </ExternalLink>
                </div>
              </motion.li>
            );
          })}
          </ol>
        </div>
      </div>
    </section>
  );
}
