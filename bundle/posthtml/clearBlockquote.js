module.exports.clearBlockquote = (tree) =>
  tree.match({ tag: 'blockquote' }, (i) => {
    const realContent = i.content
      .filter((child) => child.tag === 'p' && Boolean(child.content))
      .map((child) => child.content)[0];

    if (realContent) {
      return {
        ...i,
        content: realContent,
      };
    }

    return i;
  });
