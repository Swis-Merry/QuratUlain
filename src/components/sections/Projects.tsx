import Image from "next/image";
import { getProjects, OFFPLAN_URL, type Project } from "@/lib/dre-projects";
import { ButtonLink, Reveal, SectionHeading } from "@/components/ui";

const price = (p: Project) =>
  p.startingPrice ? `From ${p.currency} ${p.startingPrice.toLocaleString("en-US")}` : "Price on request";

export async function Projects() {
  const projects = await getProjects();
  if (!projects.length) return null;

  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-sand py-24 lg:py-36">
      <div className="container-luxe">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Featured Projects"
            title={
              <span id="projects-title">
                Landmark addresses, <span className="italic text-champagne-dark">curated by DRE Homes</span>
              </span>
            }
            intro="A selection of the off-plan developments DRE Homes is currently presenting to investors and homebuyers across the UAE, in partnership with leading developers."
          />
          <Reveal className="shrink-0">
            <ButtonLink href={OFFPLAN_URL} variant="outline" external>
              View All Projects
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col bg-white transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(36,36,36,0.35)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
                    <Image
                      src={p.image}
                      alt={`${p.name}${p.developer ? ` by ${p.developer}` : ""}, ${p.location}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1.2s] ease-luxe group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/0 to-transparent" />
                    <p className="absolute bottom-5 left-6 eyebrow text-ivory">{p.location}</p>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    {p.developer && <p className="eyebrow text-champagne-dark">{p.developer}</p>}
                    <h3 className="mt-3 font-serif text-3xl leading-tight text-charcoal">{p.name}</h3>
                    <div className="mt-6 flex items-end justify-between gap-4 border-t border-charcoal/10 pt-5">
                      <p className="text-sm font-semibold text-charcoal">{price(p)}</p>
                      <span className="text-xs font-semibold tracking-[0.18em] text-charcoal uppercase">
                        Explore{" "}
                        <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                          &rarr;
                        </span>
                      </span>
                    </div>
                  </div>
                  <span className="sr-only"> on drehomes.com (opens in a new tab)</span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-xs text-charcoal/50">
          Project details and starting prices are provided by DRE Homes Real Estate and refreshed daily from drehomes.com. Prices and
          availability are subject to change.
        </p>
      </div>
    </section>
  );
}
