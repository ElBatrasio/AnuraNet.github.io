import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const basePath = import.meta.env.BASE_URL || "/";
  const sitemapURL = new URL(`${basePath.replace(/\/$/, "")}/sitemap-index.xml`, site);
  return new Response(getRobotsTxt(sitemapURL));
};
