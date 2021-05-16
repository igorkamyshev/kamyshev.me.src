const { clearBlockquote } = require('./bundle/posthtml/clearBlockquote');
const { extrarnalLinks } = require('./bundle/posthtml/extrarnalLinks');
const { linkLine } = require('./bundle/posthtml/linkLine');
const {
  moveBlockquoteToHeader,
} = require('./bundle/posthtml/moveBlockquoteToHeader');
const { removeBold } = require('./bundle/posthtml/removeBold');
const { typography } = require('./bundle/posthtml/typography');

module.exports = {
  plugins: [
    linkLine,
    extrarnalLinks,
    removeBold,
    clearBlockquote,
    moveBlockquoteToHeader,
    typography,
  ],
};
