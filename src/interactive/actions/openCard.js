import { recalculateCardsState } from './recalculateCardsState';

export const openCard = (id) => {
  const checker = document.getElementById(id);
  checker.checked = true;

  recalculateCardsState(checker.dataset.card);
};
