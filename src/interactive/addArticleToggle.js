import { correctUrl } from './helpers/correctUrl';

const articleCheckbox = document.getElementById('articles-check');
const articleCloseButton = document.querySelector(
  '[data-checker=articles-check]',
);

export const addArticleToggle = () => {
  articleCheckbox.addEventListener('change', correctUrl);
  articleCloseButton.addEventListener('click', correctUrl);
};
