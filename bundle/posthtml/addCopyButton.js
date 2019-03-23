const CyrillicToTranslit = require('cyrillic-to-translit-js')
const transliterator = new CyrillicToTranslit()

const generateId = header =>
  encodeURIComponent(
    transliterator
      .transform(header)
      .replace(/\s+/gi, '-')
      .replace(/\./gi, ''),
  )

const isDate = str => /\d{2}\.\d{2}\.\d{4}/gi.test(str)
const skipButtonElement = i =>
  i.content.length !== 1 ||
  typeof i.content[0] !== 'string' ||
  !isDate(i.content[0])

module.exports.addCopyButton = tree => {
  // add button
  tree.match({ tag: 'p' }, i => {
    if (skipButtonElement(i)) {
      return i
    }

    return {
      ...i,
      content: [
        ...i.content,
        {
          tag: 'button',
          content: ['Скопировать ссылку'],
          attrs: {
            'data-copy': true,
          },
        },
      ],
    }
  })

  // add id to section
  tree.match({ tag: 'section' }, i => {
    if (!i.content[0] || i.content[0].tag !== 'h3') {
      return i
    }

    const id = generateId(i.content[0].content[0])

    return {
      ...i,
      attrs: { id },
    }
  })
}
