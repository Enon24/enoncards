/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/enoncards',
  assetPrefix: '/enoncards/',
  images: { unoptimized: true },
};
module.exports = nextConfig;
