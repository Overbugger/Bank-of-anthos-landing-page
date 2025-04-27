/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  async rewrites() {
    return [
      {
        source: "/api/stock-prices/:symbol",
        destination: "http://34.68.201.235:8082/api/stock-prices/:symbol",
      },
    ];
  },
};

module.exports = nextConfig;
