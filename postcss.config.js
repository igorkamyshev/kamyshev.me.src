module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nesting'),
    require('postcss-custom-media')({
      importFrom: './src/custom-media.css',
    }),
  ],
}
