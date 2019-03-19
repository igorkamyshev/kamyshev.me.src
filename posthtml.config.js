const { extrarnalLinks } = require('./bundle/posthtml/extrarnalLinks')
const { linkLine } = require('./bundle/posthtml/linkLine')

module.exports = {
  plugins: [extrarnalLinks, linkLine],
}
