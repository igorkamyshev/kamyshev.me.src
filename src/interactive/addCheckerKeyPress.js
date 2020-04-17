import { recalculateCardsState } from './actions/recalculateCardsState';

const labels = document.getElementsByTagName('label');

const toggle = (event) => {
  const checkbox = document.getElementById(event.target.htmlFor);
  checkbox.checked = !checkbox.checked;
  recalculateCardsState(checkbox.dataset.card);
};

export const addCheckerKeyPress = () => {
  for (const label of labels) {
    label.onkeypress = toggle;
  }
};
