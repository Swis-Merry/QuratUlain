import Image from "next/image";
import { ButtonLink, Reveal } from "@/components/ui";
import { quotes } from "@/content/story";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-ivory py-24 lg:py-36">
      <div className="container-luxe grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/press-arabian-business.jpg"
              alt="Qurat Ul Ain in a contemplative pose beside a window overlooking Dubai"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[42%_50%]"
            />
          </div>
          <div aria-hidden className="absolute -right-4 -bottom-4 -z-0 hidden h-full w-full border border-gold/50 lg:block" style={{ zIndex: -1 }} />
          <p className="absolute -bottom-6 left-6 bg-charcoal px-6 py-4 font-serif text-xl text-ivory italic">
            Co-Founder &middot; DRE Homes
          </p>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-champagne-dark">Meet Qurat Ul Ain</p>
            <h2 id="about-title" className="mt-5 font-serif text-4xl leading-[1.05] font-medium sm:text-5xl lg:text-6xl">
              From Kashmir to Dubai, <span className="italic text-champagne-dark">a story written in resilience.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 space-y-5 text-base leading-relaxed text-charcoal/75 sm:text-lg">
            <p>
              Schooled in Kashmir and Delhi before moving to the UAE, Qurat Ul Ain built her career the way she would later build a
              company &mdash; one conversation at a time. While studying for her BBA at the American University of Sharjah she
              sold ice cream and hotel memberships, discovering a talent for listening, persuading and closing.
            </p>
            <p>
              In 2007 she co-founded DRE Homes Real Estate with her brother, Mudasir Wani, with minimal capital and a crystal-clear
              vision. Within months the global financial crisis tested everything. Rather than retreat, she pivoted into leasing,
              built from scratch without debt, and laid the foundations of a brokerage defined by integrity and long-term thinking.
            </p>
            <p>
              Today, as Co-Founder &amp; Chief Leadership Officer, she leads talent development and culture at one of Dubai&rsquo;s
              recognised brokerages &mdash; and has been honoured by Arabian Business, Entrepreneur Middle East, Gulf News and Danube
              Properties for her leadership.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <blockquote className="mt-10 border-l-2 border-gold pl-6">
              <p className="font-serif text-2xl leading-snug text-charcoal italic sm:text-3xl">&ldquo;{quotes.luck.text}&rdquo;</p>
              <footer className="mt-3 text-sm text-charcoal/60">
                &mdash; Qurat Ul Ain,{" "}
                <a href={quotes.luck.source} target="_blank" rel="noopener noreferrer" className="underline decoration-gold underline-offset-4">
                  {quotes.luck.publication}
                </a>
              </footer>
            </blockquote>
            <div className="mt-10">
              <ButtonLink href="#journey">Read My Story</ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
