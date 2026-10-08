import { philosophy, quotes } from "@/content/story";
import { ExternalLink, Reveal, SectionHeading } from "@/components/ui";

const featured = [quotes.resilience, quotes.brand, quotes.team];

export function Philosophy() {
  return (
    <section id="philosophy" aria-labelledby="philosophy-title" className="bg-sand py-24 lg:py-36">
      <div className="container-luxe">
        <SectionHeading
          align="center"
          eyebrow="Leadership Philosophy"
          title={
            <span id="philosophy-title">
              Lead with purpose. <span className="italic text-champagne-dark">Build with people.</span>
            </span>
          }
        />

        <Reveal className="mx-auto mt-16 max-w-4xl text-center">
          <figure>
            <span aria-hidden className="block font-serif text-8xl leading-none text-gold">&ldquo;</span>
            <blockquote className="-mt-6 font-serif text-3xl leading-snug text-charcoal italic sm:text-4xl">
              {quotes.resilience.text}
            </blockquote>
            <figcaption className="eyebrow mt-8 text-charcoal/60">
              Qurat Ul Ain &mdash;{" "}
              <ExternalLink href={quotes.resilience.source} className="underline decoration-gold underline-offset-4">
                {quotes.resilience.publication}
              </ExternalLink>
            </figcaption>
          </figure>
        </Reveal>

        <ol className="mt-24 grid gap-px bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
          {philosophy.map((p, i) => (
            <li key={p.title} className="bg-sand">
              <Reveal delay={(i % 3) * 0.08} className="h-full p-8 lg:p-10">
                <span className="font-serif text-lg text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-serif text-3xl leading-tight text-charcoal">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-charcoal/70">{p.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {featured.slice(1).map((q, i) => (
            <Reveal key={q.text} delay={i * 0.1}>
              <figure className="border-l-2 border-gold pl-6">
                <blockquote className="font-serif text-2xl leading-snug text-charcoal italic">&ldquo;{q.text}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm text-charcoal/60">
                  &mdash; Qurat Ul Ain,{" "}
                  <ExternalLink href={q.source} className="underline decoration-gold underline-offset-4">
                    {q.publication}
                  </ExternalLink>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
