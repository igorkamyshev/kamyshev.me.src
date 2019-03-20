import { recalculateCardsState } from './actions/recalculateCardsState'

const checkers = document.getElementsByTagName('input')

const listener = cheker => () => {
  recalculateCardsState(cheker.dataset.card)
}

export const addCheckerListener = () => {
  for (const cheker of checkers) {
    cheker.addEventListener('change', listener(cheker))
  }
}
