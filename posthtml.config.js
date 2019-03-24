const {
  moveBlockquoteToHeader,
} = require('./bundle/posthtml/moveBlockquoteToHeader')
const { clearBlockquote } = require('./bundle/posthtml/clearBlockquote')
const { extrarnalLinks } = require('./bundle/posthtml/extrarnalLinks')
const { addCopyButton } = require('./bundle/posthtml/addCopyButton')
const { removeBold } = require('./bundle/posthtml/removeBold')
const { typography } = require('./bundle/posthtml/typography')
const { linkLine } = require('./bundle/posthtml/linkLine')

module.exports = {
  plugins: [
    addCopyButton, // `addCopyButton` must be before `linkLine`
    linkLine,
    extrarnalLinks,
    removeBold,
    clearBlockquote,
    moveBlockquoteToHeader,
    typography,
  ],
}
