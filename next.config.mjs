import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  experimental: {
    turbopack: {
      root: process.cwd(),
    },
  },
};

export default nextConfig;
