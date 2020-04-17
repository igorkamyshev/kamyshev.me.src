const fs = require('fs');
const path = require('path');
const posthtml = require('posthtml');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

const postHtmlPlugin = (tree, cb) => {
  let tasks = 0;

  const done = () => {
    tasks -= 1;

    if (!tasks) {
      cb(null, tree);
    }
  };

  tree.match({ tag: 'link', attrs: { rel: 'stylesheet' } }, (node) => {
    const cssPath = path.join(__dirname, '..', '..', 'dist', node.attrs.href);

    readFile(cssPath)
      .then((buffer) => buffer.toString())
      .then((css) => ({ tag: 'style', content: [css] }))
      .then((newNode) => {
        node.tag = newNode.tag;
        node.content = newNode.content;
        node.attrs = undefined;

        done();
      })
      .catch(done);

    tasks += 1;

    return node;
  });
};

module.exports.inlineCss = (on) =>
  on('html', async (file) =>
    posthtml([postHtmlPlugin])
      .process(file)
      .then((result) => result.html),
  );
