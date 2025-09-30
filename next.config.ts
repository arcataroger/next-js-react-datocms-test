import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow DatoCMS image host for next/image, https://nextjs.org/docs/messages/next-image-unconfigured-host
  images: {
    remotePatterns: [new URL("https://www.datocms-assets.com/**")],
  },
};

export default nextConfig;
