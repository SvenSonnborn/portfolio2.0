import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Uncomment for static export:
  // output: 'export',
  // distDir: 'dist',
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
