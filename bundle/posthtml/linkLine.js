module.exports.linkLine = tree =>
  tree.match({ tag: 'p' }, i => {
    const linkLine = i.content
      .filter(child => child !== ' ')
      .every(child => child.tag === 'a')

    const singleLink = i.content.filter(child => child !== ' ').length === 1

    if (linkLine) {
      const originalClass = (i.attrs && i.attrs.class) || ''

      const additionalClass = singleLink ? 'single-link' : 'link-line'

      return {
        ...i,
        attrs: {
          ...i.attrs,
          class: `${originalClass} ${additionalClass}`,
        },
      }
    }

    return i
  })
