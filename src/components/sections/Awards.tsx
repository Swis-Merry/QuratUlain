import Image from "next/image";
import { companyAwards, personalAwards, type Award } from "@/content/awards";
import { ExternalLink, Reveal, SectionHeading } from "@/components/ui";

function AwardCard({ award, index }: { award: Award; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <article className="group flex h-full flex-col bg-white shadow-[0_1px_0_rgba(36,36,36,0.06)] transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(36,36,36,0.35)]">
        <div className="relative aspect-[1600/707] overflow-hidden bg-charcoal">
          {award.image ? (
            <Image
              src={award.image}
              alt={`${award.title} — ${award.organisation}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1.2s] ease-luxe group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_30%,#3a332d,#242424)] p-6 text-center">
              <span aria-hidden className="text-2xl text-gold-soft/70">&#10022;</span>
              <span aria-hidden className="mt-3 max-w-[16rem] font-serif text-2xl leading-tight text-gold-soft italic">
                {award.organisation}
              </span>
            </div>
          )}
          <span className="absolute top-4 left-4 bg-ivory px-3 py-1 text-xs font-semibold tracking-widest text-charcoal">
            {award.year}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-7">
          <p className="eyebrow text-champagne-dark">{award.organisation}</p>
          <h3 className="mt-3 font-serif text-2xl leading-tight text-charcoal">{award.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">{award.description}</p>
          <ExternalLink
            href={award.source}
            className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-charcoal uppercase underline-offset-4 hover:text-champagne-dark hover:underline"
          >
            Source: {award.sourceLabel} <span aria-hidden>↗</span>
          </ExternalLink>
        </div>
      </article>
    </Reveal>
  );
}

export function Awards() {
  return (
    <section id="awards" aria-labelledby="awards-title" className="bg-ivory py-24 lg:py-36">
      <div className="container-luxe">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Awards & Achievements"
            title={
              <span id="awards-title">
                Recognised for <span className="italic text-champagne-dark">leadership that lasts</span>
              </span>
            }
          />
          <Reveal className="max-w-sm text-charcoal/70">
            Personal honours and editorial recognitions awarded to Qurat Ul Ain, each linked to its published source.
          </Reveal>
        </div>

        <h3 className="sr-only">Personal awards and recognitions</h3>
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {personalAwards.map((a, i) => (
            <li key={a.title}>
              <AwardCard award={a} index={i} />
            </li>
          ))}
        </ul>

        <div className="mt-24 border-t border-charcoal/10 pt-14">
          <Reveal className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
            <h3 className="font-serif text-3xl text-charcoal">Company recognitions &mdash; DRE Homes</h3>
            <p className="text-sm text-charcoal/60">Awarded to DRE Homes Real Estate as an organisation, under her co-leadership.</p>
          </Reveal>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {companyAwards.map((a, i) => (
              <li key={a.title}>
                <Reveal delay={i * 0.08} className="flex h-full gap-6 border border-charcoal/10 p-7">
                  <span className="font-serif text-4xl text-gold">{a.year}</span>
                  <div>
                    <p className="eyebrow text-champagne-dark">{a.organisation}</p>
                    <p className="mt-2 font-serif text-2xl text-charcoal">{a.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{a.description}</p>
                    <ExternalLink
                      href={a.source}
                      className="mt-4 inline-block text-xs font-semibold tracking-[0.18em] text-charcoal uppercase underline-offset-4 hover:underline"
                    >
                      Source: {a.sourceLabel} <span aria-hidden>↗</span>
                    </ExternalLink>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
