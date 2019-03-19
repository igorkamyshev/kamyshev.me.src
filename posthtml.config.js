const {
  moveBlockquoteToHeader,
} = require('./bundle/posthtml/moveBlockquoteToHeader')
const { clearBlockquote } = require('./bundle/posthtml/clearBlockquote')
const { extrarnalLinks } = require('./bundle/posthtml/extrarnalLinks')
const { linkLine } = require('./bundle/posthtml/linkLine')

module.exports = {
  plugins: [extrarnalLinks, linkLine, clearBlockquote, moveBlockquoteToHeader],
}
