module.exports.typography = tree =>
  tree.walk(i => {
    if (i.content) {
      const newContent = i.content.map(c => {
        if (typeof c === 'string') {
          // TODO: add
          return c
        }

        return c
      })

      return {
        ...i,
        content: newContent,
      }
    }

    return i
  })
