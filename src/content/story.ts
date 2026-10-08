import { sources } from "./sources";

export type Milestone = {
  year: string;
  title: string;
  body: string;
  source: string;
};

export const timeline: Milestone[] = [
  {
    year: "The Beginning",
    title: "From Kashmir to the classroom",
    body: "Schooled in Kashmir and Delhi, she moved to the UAE to study, earning a BBA from the American University of Sharjah and later an MBA from the University of Wollongong in Dubai.",
    source: sources.gulfNewsExcellence,
  },
  {
    year: "Early Career",
    title: "Learning to sell, one conversation at a time",
    body: "She funded her studies with part-time work \u2014 selling ice cream and hotel privilege memberships \u2014 learning to listen, handle objections and close.",
    source: sources.propertyTime,
  },
  {
    year: "2007",
    title: "Co-founding DRE Homes",
    body: "Together with her brother, Mudasir Wani, she co-founded DRE Homes Real Estate with minimal capital and a clear vision: service beyond the sale.",
    source: sources.propertyTime,
  },
  {
    year: "2008",
    title: "Resilience through the downturn",
    body: "As the global financial crisis hit Dubai, DRE pivoted to leasing in communities such as Dubai Silicon Oasis and Discovery Gardens \u2014 building from scratch, without debt.",
    source: sources.propertyTime,
  },
  {
    year: "Breakthrough",
    title: "A landmark multi-floor commercial sale",
    body: "A corporate client relocating its headquarters from Lebanon entrusted DRE with acquiring multiple floors in a single Dubai tower \u2014 a turning point that brought referrals and wider recognition.",
    source: sources.khaleejIceCream,
  },
  {
    year: "Growth",
    title: "From a 400 sq ft office to Business Bay",
    body: "Starting with three people in a 400 sq ft office in Karama, DRE moved to Business Bay and grew into a top-performing agency for many of Dubai's leading developers.",
    source: sources.khaleejIceCream,
  },
  {
    year: "2024",
    title: "A landmark year of recognition",
    body: "Ranked #22 on Arabian Business' Real Estate Legends list, named Top Female Entrepreneur in Real Estate and honoured by Gulf News & Being She \u2014 while DRE received Dubai Holding's Black Onyx Platinum Award.",
    source: sources.arabianBusinessLegends,
  },
  {
    year: "2025",
    title: "A new home in Dubai Hills Estate",
    body: "DRE opened its 14,000 sq ft headquarters in Dubai Hills Estate, home to a team of around 200 professionals.",
    source: sources.estateMagazine,
  },
  {
    year: "2026",
    title: "Pioneer, leader, voice of the industry",
    body: "Honoured with Danube Properties' Industry Pioneer Female Excellence Award and recognised by Entrepreneur Middle East and Ahlan Dubai as DRE Homes marked 19 years.",
    source: sources.entrepreneurMe,
  },
];

export type Quote = { text: string; source: string; publication: string };

export const quotes = {
  resilience: {
    text: "Life\u2019s challenges were met with resilience, exemplifying the age-old adage of turning lemons into lemonade. The path to achievement wasn\u2019t a hasty one; it required dedication and hard work.",
    source: sources.dreArabianBusiness,
    publication: "DRE Homes, 2024",
  },
  luck: {
    text: "I came by luck but didn\u2019t get success by luck. I put in a lot of hard work.",
    source: sources.khaleejIceCream,
    publication: "Khaleej Times, 2024",
  },
  brand: {
    text: "A brand is what clients feel when they hear your name\u2014it\u2019s more than colors and a tagline.",
    source: sources.propertyTime,
    publication: "Property Time, 2025",
  },
  people: {
    text: "We believe in people and culture.",
    source: sources.khaleejIceCream,
    publication: "Khaleej Times, 2024",
  },
  team: {
    text: "None of this would have been possible without our amazing team, whose dedication and passion continue to inspire me every day.",
    source: sources.dreEntrepreneurMe,
    publication: "DRE Homes, 2026",
  },
} satisfies Record<string, Quote>;

export const philosophy = [
  {
    title: "Leadership with purpose",
    body: "For Qurat, leadership is measured by the people it lifts. As Chief Leadership Officer she oversees talent development, organisational culture and leadership initiatives across DRE Homes.",
  },
  {
    title: "Empowering teams",
    body: "Through mentoring and structured training \u2014 including the DRE Academy \u2014 she prepares aspiring agents with practical knowledge and professional skills. Many former team members have gone on to found their own firms.",
  },
  {
    title: "Women in business",
    body: "As a woman who co-founded and leads one of Dubai's established brokerages, she champions women's growing influence in real estate and encourages the next generation of female founders and investors.",
  },
  {
    title: "Trust & long-term relationships",
    body: "Transparency, ethics and responsiveness sit at the core of DRE's reputation \u2014 a commitment to clients and developers that has withstood every market cycle since 2007.",
  },
  {
    title: "Innovation in real estate",
    body: "She supports the adoption of artificial intelligence, digital marketing and technology-driven processes to elevate client service and operational efficiency.",
  },
  {
    title: "Inspiring future entrepreneurs",
    body: "Her story \u2014 from part-time sales jobs to co-founding an award-winning brokerage \u2014 is a reminder that starting small, staying consistent and working relentlessly can build something lasting.",
  },
];

export const gallery = [
  { src: "/images/qurat-portrait.jpg", alt: "Portrait of Qurat Ul Ain in a black shirt with arms crossed", category: "Portraits", focus: "50% 20%" },
  { src: "/images/award-danube.jpg", alt: "Industry Pioneer Female Excellence Award trophy presented by Danube Properties", category: "Awards", focus: "50% 50%" },
  { src: "/images/press-property-time.jpg", alt: "Qurat Ul Ain with DRE Homes co-founder and CEO Mudasir Wani", category: "Leadership", focus: "55% 30%" },
  { src: "/images/press-entrepreneur-me.jpg", alt: "Qurat Ul Ain featured by Entrepreneur Middle East", category: "Media", focus: "85% 30%" },
  { src: "/images/press-arabian-business.jpg", alt: "Qurat Ul Ain recognised on Arabian Business Real Estate Legends list", category: "Media", focus: "45% 30%" },
  { src: "/images/press-ahlan-dubai.jpg", alt: "Qurat Ul Ain featured by Ahlan Dubai among influential real estate leaders", category: "Media", focus: "80% 30%" },
  { src: "/images/press-estate-magazine.jpg", alt: "Estate Magazine feature on Qurat Ul Ain", category: "Media", focus: "50% 25%" },
] as const;
