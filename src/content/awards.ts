import { sources } from "./sources";

export type Award = {
  title: string;
  year: number;
  organisation: string;
  description: string;
  source: string;
  sourceLabel: string;
  image?: string;
  kind: "award" | "recognition";
};

export const personalAwards: Award[] = [
  {
    title: "Industry Pioneer Female Excellence Award",
    year: 2026,
    organisation: "Danube Properties",
    description:
      "Honoured as one of Dubai's Female Industry Pioneers for visionary leadership and lasting contribution to the city's real estate industry.",
    source: sources.dreDanube,
    sourceLabel: "DRE Homes",
    image: "/images/award-danube.jpg",
    kind: "award",
  },
  {
    title: "100 Agents Driving UAE's Property Market Resilience",
    year: 2026,
    organisation: "Entrepreneur Middle East",
    description:
      "Named in the \u201cSurvival of the Fittest\u201d special edition recognising the brokers, founders and leaders shaping the UAE property market.",
    source: sources.entrepreneurMe,
    sourceLabel: "Entrepreneur Middle East",
    image: "/images/press-entrepreneur-me.jpg",
    kind: "recognition",
  },
  {
    title: "Among Real Estate's Most Influential Leaders",
    year: 2026,
    organisation: "Ahlan Dubai | Real Estate Media",
    description:
      "Featured alongside the entrepreneurs, founders and brokers who have built lasting credibility and influence in real estate.",
    source: sources.dreAhlan,
    sourceLabel: "DRE Homes",
    image: "/images/press-ahlan-dubai.jpg",
    kind: "recognition",
  },
  {
    title: "Real Estate Legends \u2014 Ranked #22",
    year: 2024,
    organisation: "Arabian Business",
    description:
      "Ranked 22nd on the Arabian Business Real Estate Legends 2024 list of the biggest brokers across the UAE.",
    source: sources.arabianBusinessLegends,
    sourceLabel: "Arabian Business",
    image: "/images/press-arabian-business.jpg",
    kind: "award",
  },
  {
    title: "Top Female Entrepreneur in Real Estate",
    year: 2024,
    organisation: "Ultimate Realty Awards (NDTV & NKN Media)",
    description:
      "Recognised at the Ultimate Realty Awards for her entrepreneurial drive and contribution to the UAE property industry.",
    source: sources.dreEntrepreneurMe,
    sourceLabel: "DRE Homes",
    kind: "award",
  },
  {
    title: "Excellence in Real Estate \u2014 Best Real Estate Broker",
    year: 2024,
    organisation: "Gulf News & Being She Excellence Awards",
    description:
      "Celebrated by Gulf News and women's empowerment platform Being She for determination and leadership in Dubai real estate.",
    source: sources.gulfNewsExcellence,
    sourceLabel: "Gulf News",
    kind: "award",
  },
];

export const companyAwards: Award[] = [
  {
    title: "Black Onyx Platinum Award",
    year: 2024,
    organisation: "Dubai Holding",
    description:
      "Awarded to DRE Homes for AED 2 billion in 2023\u201324 sales across Meraas and Nakheel developments.",
    source: sources.gulfNewsBlackOnyx,
    sourceLabel: "Gulf News",
    kind: "award",
  },
  {
    title: "Best Places to Work \u2014 Middle East",
    year: 2026,
    organisation: "Best Places to Work",
    description: "DRE Homes recognised once again among the Middle East's leading real estate workplaces.",
    source: sources.bestPlacesToWork,
    sourceLabel: "DRE Homes on LinkedIn",
    kind: "recognition",
  },
];
