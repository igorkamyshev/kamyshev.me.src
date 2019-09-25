import { restoreArticleUrlAfterScrollStop } from './actions/restoreArticleUrlAfterScrollStop';
import { PHONE_DOWN } from './CONFIG';
import { throttle } from './helpers/throttle';

const button = document.querySelector('#articles-up');
const articles = document.querySelector('.articles');

const toggle = predicate => {
  if (predicate) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
};

const getArticleTop = () => {
  const rect = articles.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const top = rect.top + scrollTop - 90;

  return top;
};

const initDisplay = () => {
  const THRESHOLD = 400;
  const THROTTLE_TIME = 150;

  if (window.innerWidth > PHONE_DOWN) {
    articles.onscroll = throttle(
      () => toggle(articles.scrollTop > THRESHOLD),
      THROTTLE_TIME,
    );
  } else {
    document.onscroll = throttle(() => {
      const top = getArticleTop();
      const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;

      toggle(top + THRESHOLD < currentScroll);
    }, THROTTLE_TIME);
  }
};

const scrollToTop = (top, scrollElement, stopElement) => {
  scrollElement.scrollTo({
    top,
    behavior: 'smooth',
  });

  restoreArticleUrlAfterScrollStop(stopElement);
};

const initOnClick = () => {
  button.onclick = () => {
    if (window.innerWidth > PHONE_DOWN) {
      scrollToTop(0, articles, articles);
    } else {
      const top = getArticleTop();

      scrollToTop(top, document.body, document.body); // For iOS
      scrollToTop(top, document.documentElement, document);
    }
  };
};

export const addUpButtonDisplay = () => {
  window.matchMedia(`(max-width: ${PHONE_DOWN}px)`).addListener(initDisplay);

  initDisplay();
  initOnClick();
};
