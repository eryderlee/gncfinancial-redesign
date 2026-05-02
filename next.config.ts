import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gncfinancial.com.au",
      },
    ],
  },
};

export default nextConfig;
