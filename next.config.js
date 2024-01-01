// next.config.js
const path = require('path');

module.exports = {
  // Specify the output directory for the build
  distDir: 'build',

  // Customize the export path map (if needed)
  // exportPathMap: async function () {
  //   return {
  //     '/': { page: '/' },
  //   };
  // },

  // Example: Configure custom image loader
  images: {
    loader: 'custom',
    // Replace 'path/to/my-loader.ts' with the actual path to your custom image loader file
    loaderFile: path.resolve('./path/to/my-loader.ts'),
  },

  // Add other configuration options as needed
};
