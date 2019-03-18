module.exports.extrarnalLinks = tree =>
  tree.match({ tag: 'a' }, i => {
    return {
      tag: 'a',
      content: i.content,
      attrs: {
        ...i.attrs,
        target: '_blank',
        rel: 'noopener',
      },
    }
  })
