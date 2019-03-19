module.exports.linkLine = tree =>
  tree.match({ tag: 'p' }, i => {
    const linkLine = i.content
      .filter(child => child !== ' ')
      .every(child => child.tag === 'a')

    if (linkLine) {
      const originalClass = (i.attrs && i.attrs.class) || ''

      return {
        ...i,
        attrs: {
          ...i.attrs,
          class: `${originalClass} link-line`,
        },
      }
    }

    return i
  })
