import Link from "next/link";
import { nav, site } from "@/content/site";
import { ExternalLink } from "@/components/ui";

export function Footer() {
  return (
    <footer className="bg-[#1b1b1b] pt-20 pb-10 text-ivory/70">
      <div className="container-luxe">
        <div className="grid gap-12 border-b border-ivory/10 pb-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="font-serif text-4xl text-ivory">
              Qurat <span className="italic text-gold-soft">Ul</span> Ain
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {site.title}, {site.company}. {site.location}.
            </p>
          </div>
          <nav aria-label="Footer" className="md:col-span-4">
            <p className="eyebrow text-gold-soft">Explore</p>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {[...nav, { label: "Connect", href: "#connect" }].map((n) => (
                <li key={n.href}>
                  <a href={`/${n.href}`} className="hover:text-ivory">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-3">
            <p className="eyebrow text-gold-soft">Follow</p>
            <ul className="mt-5 space-y-3 text-sm">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <ExternalLink href={s.href} className="hover:text-ivory">
                    {s.label}
                  </ExternalLink>
                </li>
              ))}
              <li>
                <ExternalLink href={site.companyUrl} className="hover:text-ivory">
                  DRE Homes website
                </ExternalLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-8 text-xs tracking-wide sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Qurat Ul Ain. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-ivory">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
