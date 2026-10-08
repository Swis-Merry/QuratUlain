"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";

type RevealProps = HTMLMotionProps<"div"> & { delay?: number; y?: number };

export function Reveal({ delay = 0, y = 28, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`eyebrow ${tone === "light" ? "text-gold-soft" : "text-champagne-dark"}`}>{eyebrow}</p>
      <h2
        className={`mt-5 font-serif text-4xl leading-[1.05] font-medium sm:text-5xl lg:text-6xl ${
          tone === "light" ? "text-ivory" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-6 text-base leading-relaxed sm:text-lg ${tone === "light" ? "text-ivory/75" : "text-charcoal/70"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}

const variants = {
  solid: "bg-charcoal text-ivory hover:bg-champagne-dark",
  outline: "border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
  light: "bg-ivory text-charcoal hover:bg-gold-soft",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "solid",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
}) {
  const className = `group inline-flex items-center gap-3 px-7 py-4 text-[0.78rem] font-semibold tracking-[0.2em] uppercase transition-colors duration-500 ${variants[variant]}`;
  const arrow = (
    <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
      &rarr;
    </span>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      {arrow}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
      {arrow}
    </Link>
  );
}

export function ExternalLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
