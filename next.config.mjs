// next.config.mjs
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // ← add this
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;