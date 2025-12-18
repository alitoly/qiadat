import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/qiadat',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
