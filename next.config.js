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
};

next.config.js


// /** @type {import('next').NextConfig} */
// module.exports = {
//   output: 'export', // Enables static export
//   images: {
//     unoptimized: true, // Required for static exports
//   },
// };


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: {
//      unoptimized: true, // Required for static exports
//  },
// }
 
// module.exports = nextConfig