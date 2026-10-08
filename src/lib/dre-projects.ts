export type Project = {
  name: string;
  slug: string;
  url: string;
  image: string;
  location: string;
  developer?: string;
  startingPrice?: number;
  currency: string;
};

const BASE = "https://drehomes.com";
export const PROJECTS_SOURCE = `${BASE}/`;
export const OFFPLAN_URL = `${BASE}/offplan-properties`;
const REVALIDATE_SECONDS = 60 * 60 * 24;

/** Featured projects from drehomes.com, refreshed daily (ISR). Falls back to the bundled snapshot. */
export async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch(PROJECTS_SOURCE, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; QuratUlAinSite/1.0)" },
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`drehomes.com responded ${res.status}`);
    const projects = parseProjects(await res.text());
    if (projects.length) return projects.slice(0, 6);
    throw new Error("No projects parsed from drehomes.com");
  } catch (err) {
    console.warn("Using project snapshot:", err instanceof Error ? err.message : err);
    const { projectSnapshot } = await import("@/content/projects-snapshot");
    return projectSnapshot;
  }
}

const clean = (s = "") =>
  s
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

/** Parses the featured off-plan project cards from the drehomes.com homepage markup. */
export function parseProjects(html: string): Project[] {
  const seen = new Set<string>();
  const projects: Project[] = [];

  for (const block of html.split('class="geodir-category-listing"').slice(1)) {
    const url = block.match(/href="(https:\/\/drehomes\.com\/property\/([a-z0-9-]+))"/i);
    const image = block.match(/class="off-plan-thumb">\s*<img[^>]+src="([^"]+)"/i);
    const name = block.match(/<h3>\s*<a[^>]*>([\s\S]*?)<\/a>/i);
    if (!url || !image || !name || seen.has(url[2])) continue;
    seen.add(url[2]);

    const developer = block.match(/off-n-sp2">([^<]+)</i)?.[1];
    const location = block.match(/class="map-item"[^>]*>([\s\S]*?)<\/a>/i)?.[1];
    const price = block.match(/data-original-price="\s*(\d+)/i)?.[1];
    const currency = block.match(/data-original-currency="([A-Z]{3})"/i)?.[1] ?? "AED";

    projects.push({
      name: clean(name[1]),
      slug: url[2],
      url: url[1],
      image: image[1].startsWith("http") ? image[1] : `${BASE}/${image[1].replace(/^\//, "")}`,
      location: clean(location),
      developer: developer ? clean(developer) : undefined,
      startingPrice: price ? Number(price) : undefined,
      currency,
    });
  }
  return projects;
}
