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

const isGithubPages = process.env.GITHUB_PAGES === 'true';


module.exports = {
  output: 'export', // This is key for static export
  swcMinify: false,
  images: {
    unoptimized: true, // Required for static exports
  },
};