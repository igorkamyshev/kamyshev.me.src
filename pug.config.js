const { readdirSync, readFileSync } = require('fs');
const { resolve } = require('path');
const { marked } = require('marked');

const articles = readdirSync(resolve(__dirname, 'data', 'articles'))
  .filter((file) => file.endsWith('md'))
  .map((file) => resolve(__dirname, 'data', 'articles', file))
  .map((file) => readFileSync(file).toString())
  .reverse();

module.exports = {
  locals: {
    articles,
    md: marked,
  },
};
