/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/yeg' : '',
    assetPrefix: isProd ? '/yeg/' : '',

    images: {
        loader: 'default',
         unoptimized: true,
      },



  }
  module.exports = nextConfig