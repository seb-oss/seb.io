const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/component",
        destination: "/components",
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "random.unsplash.com",
      "github.com",
      "avatars.githubusercontent.com",
    ],
    formats: ["image/webp"],
  },
  experimental: {
    esmExternals: "loose",
  }
  // output: "export",
}

module.exports = withContentlayer(nextConfig)
