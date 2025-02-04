import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.ctfassets.net', // Domínio principal
      'ctfassets.net' // Alternativa caso precise
    ],
  },
  // Outras configurações podem ficar aqui...
};

export default nextConfig;