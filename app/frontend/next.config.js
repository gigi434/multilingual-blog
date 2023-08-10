/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'directus-production-e176.up.railway.app',
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
