import { closeCard } from './actions/closeCard'

const closeButtons = document.querySelectorAll('.card__close')

const listener = button => () => {
  closeCard(button.dataset.checker)
}

export const addCloseButtonsHandler = () => {
  for (const button of closeButtons) {
    button.addEventListener('click', listener(button))
  }
}
