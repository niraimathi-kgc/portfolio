/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://codeandconsole.com' : '',
  trailingSlash: true,
  distDir: 'out',
}

module.exports = nextConfig 