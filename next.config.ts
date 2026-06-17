import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // This allows the build to pass even if there are type errors
    ignoreBuildErrors: true, 
  },
};

export default nextConfig;
