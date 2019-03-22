import { recalculateCardsState } from './recalculateCardsState'

export const closeCard = id => {
  const checker = document.getElementById(id)
  checker.checked = false

  recalculateCardsState(checker.dataset.card)
}
