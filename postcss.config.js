const autoprefixer = require('autoprefixer');
const postcssNesting = require('postcss-nesting');
const postcssCustomMedia = require('postcss-custom-media');
const postcssScrollbar = require('postcss-scrollbar');
const postcssColorModFunction = require('postcss-color-mod-function');

module.exports = {
  plugins: [
    autoprefixer,
    postcssNesting,
    postcssCustomMedia({
      importFrom: './src/custom-media.css',
    }),
    postcssScrollbar,
    postcssColorModFunction,
  ],
};
