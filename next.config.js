// module.exports = {
//   swcMinify: false,
//   experimental: {
//     // Remove or comment out the invalid property if present
//     // images: {}, 
//   },
//   output: 'export',
//   images: { 
//     unoptimized: true, 
//   },
// };

// next.config.js



module.exports = {
  output: 'export', // This is key for static export
  swcMinify: false,
  images: {
    unoptimized: true, // Required for static exports
  },
};