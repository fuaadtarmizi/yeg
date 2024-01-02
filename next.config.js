/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {

    images: {
        loader: 'default',
         unoptimized: true,
      },

    

    output: 'export',



  }
  module.exports = nextConfig