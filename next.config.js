/** @type {import('next').NextConfig} */

// next.config.js
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
 
  images: {
    domains: ["images.unsplash.com", "random.unsplash.com", "github.com", "avatars.githubusercontent.com"],
    formats: ["image/webp"],
  },
  // output: "export",
};

module.exports = withContentlayer(nextConfig);
