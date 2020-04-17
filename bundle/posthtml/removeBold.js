module.exports.removeBold = (tree) =>
  tree.match({ tag: 'strong' }, (i) => ({
    ...i,
    tag: 'em',
  }));
