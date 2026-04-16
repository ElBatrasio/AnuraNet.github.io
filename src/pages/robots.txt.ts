import type { APIRoute } from "astro";
import { SITE } from "@/siteConfig";

const getRobotsTxt = (sitemapURL: URL) =>
  `User-agent: *\nAllow: /\n\nSitemap: ${sitemapURL.href}\n`;

export const GET: APIRoute = () => {
  const siteHref = SITE.href.endsWith("/") ? SITE.href : `${SITE.href}/`;
  const sitemapURL = new URL("sitemap.xml", siteHref);
  return new Response(getRobotsTxt(sitemapURL), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
