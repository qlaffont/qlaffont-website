/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.jp', 'cdn.hashnode.com'],
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
