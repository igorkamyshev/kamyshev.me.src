const CyrillicToTranslit = require('cyrillic-to-translit-js');

const transliterator = new CyrillicToTranslit();

const generateName = (header) =>
  transliterator
    .transform(header)
    .trim()
    .replace(/\s+/gi, '-')
    .replace(/\./gi, '')
    .toLowerCase();

module.exports = {
  generateName,
};
