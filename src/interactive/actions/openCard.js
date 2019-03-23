import { recalculateCardsState } from './recalculateCardsState'

export const openCard = (id, withoutRecalculation = false) => {
  const checker = document.getElementById(id)
  checker.checked = true

  if (withoutRecalculation) {
    return
  }

  recalculateCardsState(checker.dataset.card)
}
