import { recalculateCardsState } from './actions/recalculateCardsState'

const closeButtons = document.querySelectorAll('[data-checker]')

const listener = button => () => {
  const checker = document.getElementById(button.dataset.checker)
  checker.checked = false

  recalculateCardsState(checker.dataset.card)
}

export const addCloseButtonsHandler = () => {
  for (const button of closeButtons) {
    button.addEventListener('click', listener(button))
  }
}
