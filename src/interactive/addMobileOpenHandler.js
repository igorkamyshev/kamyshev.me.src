import { closeCard } from './actions/closeCard';
import { openCard } from './actions/openCard';
import { PHONE_DOWN, PHONE_UP } from './CONFIG';

const cards = document.getElementsByClassName('card');

const closeAll = () => {
  for (const card of cards) {
    if (card.id.includes('about')) {
      continue;
    }

    if (
      card.id.includes('articles') &&
      window.location.href.includes('articles')
    ) {
      continue;
    }

    closeCard(card.dataset.checker, true);
  }
};

const openAll = () => {
  for (const card of cards) {
    if (
      card.id.includes('articles') &&
      !window.location.href.includes('articles')
    ) {
      continue;
    }

    openCard(card.dataset.checker);
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
