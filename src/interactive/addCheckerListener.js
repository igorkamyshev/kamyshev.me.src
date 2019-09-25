import { recalculateCardsState } from './actions/recalculateCardsState';

const checkers = document.getElementsByTagName('input');

export const addCheckerListener = () => {
  for (const cheker of checkers) {
    cheker.addEventListener('change', () =>
      recalculateCardsState(cheker.dataset.card),
    );
  }
};
