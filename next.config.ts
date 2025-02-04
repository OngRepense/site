import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.ctfassets.net',
      'ctfassets.net'
    ],
  },
  experimental: {
    appDir: true
  }
};

export default nextConfig;