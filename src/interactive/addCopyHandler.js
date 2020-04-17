import { copy } from './helpers/copy';
import { correctUrl } from './helpers/correctUrl';

const copyButtons = document.querySelectorAll('[data-copy]');

const listener = (button) => () => {
  const { id } = button.parentElement.parentElement;

  const urlForCopy = `${window.location.href.replace(/#(.+)$/gi, '')}#${id}`;
  copy(urlForCopy);

  // rewrite url to article.html
  setTimeout(correctUrl);

  button.textContent = 'Скопировано!';

  setTimeout(() => {
    button.textContent = 'Скопировать ссылку';
  }, 2000);
};

export const addCopyHandler = () => {
  for (const button of copyButtons) {
    button.onclick = listener(button);
  }
};
