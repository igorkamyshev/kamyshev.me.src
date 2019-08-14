import { closeCard } from './actions/closeCard';

const closeButtons = document.querySelectorAll('.card__close');

export const addCloseButtonsHandler = () => {
  for (const button of closeButtons) {
    button.addEventListener('click', () => closeCard(button.dataset.checker));
  }
};
