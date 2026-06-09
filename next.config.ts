import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],

    // fix image warnings (optional but recommended)
    qualities: [75, 100],
  },

  // 🔥 IMPORTANT FIX FOR LAN / IP ACCESS
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "192.168.100.81",
  ],
};

export default nextConfig;
