import type { APIRoute } from "astro";
import { SITE } from "@/siteConfig";

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = () => {
  const siteHref = SITE.href.endsWith("/") ? SITE.href : `${SITE.href}/`;
  const sitemapURL = new URL("sitemap-index.xml", siteHref);
  return new Response(getRobotsTxt(sitemapURL));
};
