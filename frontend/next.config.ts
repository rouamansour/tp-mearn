import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* add config turbo package */
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;
