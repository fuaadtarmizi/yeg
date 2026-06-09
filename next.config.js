/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: false, // Disable SWC minification (optional)
  output: 'export', // Enable static export mode
  basePath: '/yeg',
  assetPrefix: '/yeg/',

  images: {
    unoptimized: true, // Required for GitHub Pages
  },
};
