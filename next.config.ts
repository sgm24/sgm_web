import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/visionmission.html',
        destination: '/visionmission',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/carbonbrush-2.html',
        destination: '/products/carbon-brush',
        permanent: true,
      },
      {
        source: '/brushholder.html',
        destination: '/products/carbon-brush-holder',
        permanent: true,
      },
      {
        source: '/butterfly.html',
        destination: '/products/butterfly-valve',
        permanent: true,
      },
      {
        source: '/ballvalve.html',
        destination: '/products/ball-valve',
        permanent: true,
      },
      {
        source: '/doubleblockballvalve.html',
        destination: '/products/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;