// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }




// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };



// postcss.config.js

// @ts-ignore
export const plugins = {
  'postcss-flexbugs-fixes': {},
  'postcss-preset-env': {
    autoprefixer: {
      flexbox: 'no-2009',
    },
    stage: 3,
    features: {
      'custom-properties': false,
    },
  },
};
