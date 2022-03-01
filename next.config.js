/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.coinranking.com", "www.bing.com"]
  },
  svgs: {
    domains: ["cdn.coinranking.com", "www.bing.com"]
  },
}

module.exports = nextConfig
