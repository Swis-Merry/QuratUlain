import { sources } from "./sources";

export type PressItem = {
  publication: string;
  headline: string;
  date: string;
  url: string;
  image?: string;
  type: "Interview" | "Feature" | "Recognition" | "News";
};

export const press: PressItem[] = [
  {
    publication: "Entrepreneur Middle East",
    headline: "100 Real Estate Agents: Qurat Ul Ain, Co-founder, DRE Homes Real Estate",
    date: "2026-08-05",
    url: sources.entrepreneurMe,
    image: "/images/press-entrepreneur-me.jpg",
    type: "Recognition",
  },
  {
    publication: "Estate Magazine",
    headline: "Kurat Ul Ain Inspires Success in Dubai Real Estate",
    date: "2025-12-05",
    url: sources.estateMagazine,
    image: "/images/press-estate-magazine.jpg",
    type: "Feature",
  },
  {
    publication: "Property Time",
    headline: "Trust & Transparency: DRE's 18-year-old Legacy",
    date: "2025-10-30",
    url: sources.propertyTime,
    image: "/images/press-property-time.jpg",
    type: "Interview",
  },
  {
    publication: "Gulf News",
    headline: "For DRE, it's all about staying focused on personalised service",
    date: "2024-09-30",
    url: sources.gulfNewsPersonalised,
    type: "Interview",
  },
  {
    publication: "Gulf News",
    headline: "DRE awarded prestigious Black Onyx Platinum Award by Dubai Holdings",
    date: "2024-09-27",
    url: sources.gulfNewsBlackOnyx,
    type: "News",
  },
  {
    publication: "Arabian Business",
    headline: "Real Estate Legends: Revealing the biggest brokers across the UAE",
    date: "2024-07-01",
    url: sources.arabianBusinessLegends,
    image: "/images/press-arabian-business.jpg",
    type: "Recognition",
  },
  {
    publication: "Khaleej Times",
    headline: "From ice cream scoops to skyscrapers: How Dubai woman built business selling properties worth billions",
    date: "2024-06-24",
    url: sources.khaleejIceCream,
    type: "Feature",
  },
  {
    publication: "Gulf News",
    headline: "Excellence Awards: Qurat Ul Ain \u2014 Leading from the front",
    date: "2024-06-21",
    url: sources.gulfNewsExcellence,
    type: "Recognition",
  },
  {
    publication: "Khaleej Times",
    headline: "The Power of Passion",
    date: "2022-03-08",
    url: sources.khaleejPassion,
    type: "Interview",
  },
  {
    publication: "UAE Times",
    headline: "Qurat Ul Ain Facilitating Luxury and Comfort With Drehomes",
    date: "2022-03-08",
    url: sources.uaeTimes,
    type: "Interview",
  },
];
