const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000")
).replace(/\/$/, "");

export const site = {
  name: "Qurat Ul Ain",
  title: "Co-Founder & Chief Leadership Officer (CLO)",
  company: "DRE Homes Real Estate",
  companyUrl: "https://www.drehomes.com/",
  profileUrl: "https://drehomes.com/management/qurat-ul-ain",
  tagline: "Building Legacies. Inspiring Leaders. Redefining Real Estate.",
  subtitle: "Co-Founder & Chief Leadership Officer of DRE Homes | Entrepreneur | Real Estate Industry Leader",
  description:
    "Qurat Ul Ain is the Co-Founder & Chief Leadership Officer of DRE Homes Real Estate, Dubai. Discover her entrepreneurial journey since 2007, awards, media features and leadership philosophy.",
  location: "Dubai, United Arab Emirates",
  portrait: "/images/qurat-portrait.jpg",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/qurat-ul-ain-6528a467/" },
  ],
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Awards", href: "#awards" },
  { label: "DRE Homes", href: "#dre-homes" },
  { label: "Press", href: "#press" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Gallery", href: "#gallery" },
] as const;
