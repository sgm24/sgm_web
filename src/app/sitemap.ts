import type { MetadataRoute } from "next";

const siteUrl = "https://www.sgmcorporations.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/contact",
    "/visionmission",
    "/products/carbon-brush",
    "/products/carbon-brush-holder",
    "/products/carbon-stoker-bush",
    "/products/carbon-seal",
    "/products/carbon-bush-bearing",
    "/products/components-for-traction-application",
    "/products/rotary-steam-joint",
    "/products/gland-packing-ring",
    "/products/butterfly-valve",
    "/products/ball-valve",
    "/products/double-block-bleed-valve",
    "/products/gate-valve",
    "/products/globe-valve",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
  }));
}