/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  swcMinify: false, // Disable SWC minification (optional)
  output: 'export', // Enable static export mode
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

if (basePath) {
  nextConfig.basePath = basePath
  nextConfig.assetPrefix = `${basePath}/`
}

module.exports = nextConfig;
