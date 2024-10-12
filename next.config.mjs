/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "chenanda.in" }],
  },
};

export default nextConfig;
