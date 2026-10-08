import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { site, siteUrl } from "@/content/site";
import { Providers } from "@/components/Providers";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const title = "Qurat Ul Ain | Co-Founder & CLO of DRE Homes, Dubai Real Estate Entrepreneur";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Qurat Ul Ain" },
  description: site.description,
  keywords: [
    "Qurat Ul Ain",
    "Qurat Ul Ain DRE Homes",
    "Qurat Ul Ain Dubai Real Estate",
    "Qurat Ul Ain Entrepreneur",
    "Qurat Ul Ain Awards",
    "DRE Homes Co-Founder",
  ],
  alternates: { canonical: "/" },
  authors: [{ name: site.name }],
  openGraph: {
    type: "profile",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    locale: "en_AE",
    images: [{ url: site.portrait, width: 1024, height: 985, alt: "Qurat Ul Ain, Co-Founder & CLO of DRE Homes" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: [site.portrait],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#faf8f5",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-charcoal focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
