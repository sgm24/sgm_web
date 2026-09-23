import type { MetadataRoute } from "next";

const siteUrl = "https://www.sgmcorporations.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/contact",
    "/visionmission",
    "/carbon-bush-bearing",
    "/products/carbon-brush",
    "/products/carbon-brush-holder",
    "/products/carbon-stoker-bush",
    "/products/components-for-traction-application",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
  }));
}