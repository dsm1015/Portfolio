import { SitemapStream, streamToPromise } from "sitemap";

export default defineEventHandler(async () => {
  const sitemap = new SitemapStream({
    hostname: process.env.HOST,
  });
  sitemap.write({
    url: "/",
    changefreq: "daily",
  });
  sitemap.write({
    url: "/contact",
    changefreq: "daily",
  });
  sitemap.write({
    url: "/projects",
    changefreq: "daily",
  });
  sitemap.write({
    url: "/experience",
    changefreq: "daily",
  });
  sitemap.end();

  return streamToPromise(sitemap);
});