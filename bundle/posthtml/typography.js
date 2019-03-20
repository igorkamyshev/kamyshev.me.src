const NON_BREAKING_SPACE = String.fromCharCode(160)

// polyfill trimEnd
const trimEnd = str => str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')

const typography = str =>
  str
    .replace(/(“|"|&quot;)(.+?)(”|"|&quot;)/gi, (_1, _2, inner) => `«${inner}»`)
    .replace(/(\s*?)(—)(\s*)/gi, ` — `)
    .replace(
      /\s+.{1,2}(\s+)/gi,
      match => `${trimEnd(match)}${NON_BREAKING_SPACE}`,
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
