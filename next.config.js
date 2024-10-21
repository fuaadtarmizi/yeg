// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {

//     images: {
//         loader: 'default',
//          unoptimized: true,
//       },

//     output: 'export',
//   };
//   export default nextConfig; 




// next.config.js

module.exports = {
  swcMinify: false,
  experimental: {
    // Remove or comment out the invalid property if present
    // images: {},
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  // other configurations
};
