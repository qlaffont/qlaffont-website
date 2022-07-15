/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPreact = require('next-plugin-preact');

const nextConfig = withPreact({
  reactStrictMode: true,
  images: {
    domains: ['placehold.jp', 'cdn.hashnode.com'],
  },
  productionBrowserSourceMaps: true,
  experimental: {
    esmExternals: false,
  },
});

module.exports = nextConfig;
