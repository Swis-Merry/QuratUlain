import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { Awards } from "@/components/sections/Awards";
import { BuildingDre } from "@/components/sections/BuildingDre";
import { Projects } from "@/components/sections/Projects";
import { Press } from "@/components/sections/Press";
import { Philosophy } from "@/components/sections/Philosophy";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { site, siteUrl } from "@/content/site";
import { personalAwards } from "@/content/awards";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: site.name,
      url: siteUrl,
      image: `${siteUrl}${site.portrait}`,
      jobTitle: site.title,
      description: site.description,
      worksFor: { "@id": `${siteUrl}/#organization` },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "American University of Sharjah" },
        { "@type": "CollegeOrUniversity", name: "University of Wollongong in Dubai" },
      ],
      award: personalAwards.filter((a) => a.kind === "award").map((a) => `${a.title} — ${a.organisation} (${a.year})`),
      sameAs: [...site.socials.map((s) => s.href), site.profileUrl],
    },
    {
      "@type": "RealEstateAgent",
      "@id": `${siteUrl}/#organization`,
      name: site.company,
      url: site.companyUrl,
      foundingDate: "2007",
      address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
      founder: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: site.name,
      about: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Journey />
        <Awards />
        <BuildingDre />
        <Projects />
        <Press />
        <Philosophy />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
