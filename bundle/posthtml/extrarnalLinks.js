module.exports.extrarnalLinks = (tree) =>
  tree.match({ tag: 'a' }, (i) => {
    if (i.attrs.href.startsWith('#magic')) {
      return i;
    }

    return {
      tag: 'a',
      content: i.content,
      attrs: {
        ...i.attrs,
        target: '_blank',
        rel: 'noopener',
      },
    };
  });
