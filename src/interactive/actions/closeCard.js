import { recalculateCardsState } from './recalculateCardsState';

export const closeCard = (id, skipUrlCorrection = false) => {
  const checker = document.getElementById(id);
  checker.checked = false;

  recalculateCardsState(checker.dataset.card, skipUrlCorrection);
};
