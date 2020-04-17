import { recalculateCardsState } from './actions/recalculateCardsState';

const cards = document.getElementsByClassName('card');

export const addZhandler = () => {
  for (const card of cards) {
    const handler = () => recalculateCardsState(card.id);

    card.addEventListener('click', handler);
    card.addEventListener('mousedown', handler);
    card.addEventListener('keyup', handler);
  }
};
