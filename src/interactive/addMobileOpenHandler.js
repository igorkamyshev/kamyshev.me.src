import { closeCard } from './actions/closeCard';
import { openCard } from './actions/openCard';
import { PHONE_DOWN, PHONE_UP } from './CONFIG';

const cards = document.getElementsByClassName('card');

const isArticlesOnArticlesPage = (card) =>
  card.id.includes('articles') && window.location.href.includes('articles');

const isArticlesOnOtherPage = (card) =>
  card.id.includes('articles') && window.location.href.includes('articles');

const closeAll = () => {
  for (const card of cards) {
    const isAbout = card.id.includes('about');

    if (!isAbout && !isArticlesOnArticlesPage()) {
      closeCard(card.dataset.checker, true);
    }
  }
};

const openAll = () => {
  for (const card of cards) {
    if (!isArticlesOnOtherPage()) {
      openCard(card.dataset.checker);
    }
  }
};

export const addMobileOpenHandler = () => {
  window.matchMedia(`(max-width: ${PHONE_DOWN}px)`).addListener((e) => {
    if (e.matches) {
      closeAll();
    }
  });

  window.matchMedia(`(min-width: ${PHONE_UP}px)`).addListener((e) => {
    if (e.matches) {
      openAll();
    }
  });

  if (window.innerWidth <= PHONE_DOWN) {
    closeAll();
  }
};
