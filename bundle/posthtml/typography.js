const typography = str =>
  str
    .replace(/(“|"|&quot;)(.+?)(”|"|&quot;)/gi, (_1, _2, inner) => `«${inner}»`)
    .replace(/(\s*?)(—)(\s*)/gi, ` — `)
    .replace(
      /\s+.{1,2}(\s+)/gi,
      match => `${match.trimEnd()}${String.fromCharCode(160)}`,
    )

module.exports.typography = tree =>
  tree.walk(i => {
    if (i.content) {
      const newContent = i.content.map(c => {
        if (typeof c === 'string') {
          return typography(c)
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
