const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const readDir = promisify(fs.readdir)

const { plugins } = require('./postparcel.config')

const on = (fileExtension, content) => async (targetExtension, execute) => {
  if (fileExtension === targetExtension) {
    return execute(content)
  }

  return content
}

/* because I want apply plugins sequentially */
/* eslint-disable no-await-in-loop */

const postparcel = async () => {
  const files = await readDir('./dist')

  await Promise.all(
    files.map(async file => {
      const filePath = path.join(__dirname, 'dist', file)
      const extension = file.split('.').reverse()[0]
      const originalContent = (await readFile(filePath)).toString()
      let newContent = originalContent

      for (const plugin of plugins) {
        newContent = await plugin(on(extension, newContent))
      }

      if (originalContent !== newContent) {
        await writeFile(filePath, newContent)
      }
    }),
  )
}

postparcel()
