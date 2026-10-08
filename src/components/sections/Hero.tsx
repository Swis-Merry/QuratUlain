"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui";

const featuredIn = ["Arabian Business", "Entrepreneur Middle East", "Gulf News", "Khaleej Times", "Property Time", "Estate Magazine"];

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, reduce ? 0 : 80]);

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-ivory pt-28 lg:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 h-full w-full bg-[radial-gradient(ellipse_at_70%_40%,rgba(171,152,137,0.22),transparent_60%)]"
      />
      <div className="container-luxe relative grid min-h-[calc(100svh-6rem)] items-center gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="relative z-10 order-2 pb-12 lg:order-1 lg:col-span-6 lg:pb-24">
          <motion.p {...fade(0.1)} className="eyebrow flex items-center gap-4 text-champagne-dark">
            <span aria-hidden className="h-px w-10 bg-gold" />
            Dubai &middot; Since 2007
          </motion.p>
          <motion.h1
            id="hero-title"
            {...fade(0.2)}
            className="mt-6 font-serif text-[clamp(3.6rem,9vw,8.5rem)] leading-[0.88] font-medium tracking-tight text-charcoal"
          >
            Qurat
            <br />
            <span className="italic text-champagne-dark">Ul</span> Ain
          </motion.h1>
          <motion.p {...fade(0.4)} className="mt-8 max-w-xl font-serif text-2xl leading-snug text-charcoal sm:text-3xl">
            {site.tagline}
          </motion.p>
          <motion.p {...fade(0.5)} className="mt-5 max-w-xl text-sm leading-relaxed tracking-wide text-charcoal/65 sm:text-base">
            {site.subtitle}
          </motion.p>
          <motion.div {...fade(0.65)} className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="#journey">Discover My Journey</ButtonLink>
            <ButtonLink href="#awards" variant="outline">
              Explore My Achievements
            </ButtonLink>
          </motion.div>
        </div>

        <div className="relative order-1 px-4 pt-6 lg:order-2 lg:col-span-6 lg:pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-[4/5] w-full max-w-[520px] lg:max-h-[calc(100svh-9rem)]"
          >
            <div
              aria-hidden
              className="absolute -inset-x-3 -top-3 bottom-0 rounded-t-full border border-gold/50 sm:-inset-x-5 sm:-top-5"
            />
            <div className="absolute inset-0 overflow-hidden rounded-t-full bg-sand">
              <motion.div style={{ y: imageY }} className="absolute inset-x-0 -top-[6%] h-[112%]">
                <Image
                  src={site.portrait}
                  alt="Qurat Ul Ain, Co-Founder and Chief Leadership Officer of DRE Homes"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover object-[50%_20%]"
                />
              </motion.div>
            </div>
            <p className="absolute bottom-8 -left-4 hidden bg-ivory/95 px-5 py-4 shadow-[0_20px_40px_-20px_rgba(36,36,36,0.3)] sm:block lg:-left-12">
              <span className="block font-serif text-3xl leading-none text-charcoal">2007</span>
              <span className="eyebrow mt-2 block text-champagne-dark">Co-founded DRE Homes</span>
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative border-y border-charcoal/10 bg-ivory">
        <div className="container-luxe flex flex-col items-center gap-4 py-6 md:flex-row md:gap-10">
          <p className="eyebrow shrink-0 text-charcoal/50">As featured in</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:justify-start">
            {featuredIn.map((name) => (
              <li key={name} className="font-serif text-lg text-charcoal/60 italic sm:text-xl">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
