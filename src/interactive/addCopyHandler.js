import { correctUrl } from './helpers/correctUrl';
import { copy } from './helpers/copy';

const copyButtons = document.querySelectorAll('[data-copy]');

const listener = button => () => {
  const { id } = button.parentElement.parentElement;

  const urlForCopy = `${window.location.href.replace(/#(.+)$/gi, '')}#${id}`;
  copy(urlForCopy);

  // rewrite url to article.html
  setTimeout(correctUrl);

  button.innerText = 'Скопировано!';

  setTimeout(() => {
    button.innerText = 'Скопировать ссылку';
  }, 2000);
};

export const addCopyHandler = () => {
  for (const button of copyButtons) {
    button.onclick = listener(button);
  }
};
