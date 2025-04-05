/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: './',
  trailingSlash: true,
  distDir: 'out',
}

module.exports = nextConfig 