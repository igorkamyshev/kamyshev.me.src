import { correctUrl } from '../helpers/correctUrl';

export const restoreArticleUrlAfterScrollStop = (element) => {
  let isScrolling;
  function correctAndReset() {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      correctUrl();
      element.removeEventListener('scroll', correctAndReset);
    }, 66);
  }

  element.addEventListener('scroll', correctAndReset);
};
