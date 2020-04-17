#!/usr/bin/env node

const { format } = require('date-fns');
const fs = require('fs-extra');
const path = require('path');
const readline = require('readline');

const { generateName } = require('./helpers/generateName');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getNextNumber = () =>
  fs
    .readdir(path.resolve(__dirname, '../data/articles'))
    .then((files) => files.pop())
    .then((file) => file.split('-')[0])
    .then((str) => parseInt(str, 10) + 1)
    .then((num) => num.toString())
    .then((str) => str.padStart(3, '0'));

const asyncQuestion = async (text, mapper = (t) => t) => {
  const answer = await new Promise((resolve) =>
    rl.question(`${text}\n`, resolve),
  );

  const value = mapper(answer);

  rl.write('\n');

  return value;
};

const run = async () => {
  const articleName = await asyncQuestion('Article title');

  if (!articleName) {
    throw new Error('Empty title');
  }

  const userFriendlyUrl = await asyncQuestion('User friendly URL');

  const nextNumber = await getNextNumber();
  const generatedName = generateName(userFriendlyUrl || articleName);

  const fileName = `${nextNumber}-${generatedName}.md`;
  const articlePath = path.resolve(__dirname, '../data/articles', fileName);

  const sampleArticle = fs.readFileSync(
    path.resolve(__dirname, './assets/sample.md'),
    'utf-8',
  );

  const replaces = [
    {
      pattern: '{{name}}',
      value: articleName,
    },
    {
      pattern: '{{date}}',
      value: format(new Date(), 'dd.MM.yyyy'),
    },
  ];

  const external = await asyncQuestion(
    'Does it place on external resource? [yes, no]',
    (answer) => ['y', 'yes'].includes(answer.trim().toLowerCase()),
  );

  if (external) {
    const res = await asyncQuestion('Resource name');
    replaces.push({
      pattern: '{{res}}',
      value: res,
    });

    const link = await asyncQuestion('Article link');
    replaces.push({
      pattern: '{{link}}',
      value: link,
    });
  } else {
    replaces.push({
      pattern: ' [Читать на {{res}}]({{link}})',
      value: '',
    });
  }

  const newArticle = replaces.reduce(
    (text, { pattern, value }) => text.replace(pattern, value),
    sampleArticle,
  );

  await fs.writeFile(articlePath, newArticle);

  rl.write(`Article created -> ${articlePath}\n`);

  rl.close();
};

run();
