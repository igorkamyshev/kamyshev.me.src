import { randomMoveCard } from './randomMoveCard'
import { correctUrl } from '../helpers/correctUrl'

const cards = Array.from(document.getElementsByClassName('card'))
let maxZ = cards.length + 2

const normalizeZ = z => (z === 'auto' ? 0 : parseInt(z, 10))

const getZ = card =>
  normalizeZ(
    document.defaultView
      .getComputedStyle(card, null)
      .getPropertyValue('z-index'),
  )

const isVisible = card =>
  document.defaultView
    .getComputedStyle(card, null)
    .getPropertyValue('display') !== 'none'

const highlightCard = targetCard => {
  for (const card of cards) {
    card.className = card.className.replace('highlight', '')
  }
  targetCard.className = `${targetCard.className} highlight`
}

const deadScreen = () => {
  const body = document.getElementsByTagName('body')[0]

  const allClosed = cards.filter(isVisible).length === 0

  if (allClosed) {
    body.className = `${body.className} dead-screen`
  } else {
    body.className = body.className.replace('dead-screen', '')
  }
}

const makeCardHighest = card => {
  const cardZ = getZ(card)

  if (cardZ <= maxZ) {
    maxZ++
    card.style.zIndex = maxZ
  }
}

export const recalculateCardsState = cardId => {
  const card = cards.find(c => c.id === cardId)

  if (isVisible(card)) {
    makeCardHighest(card)
  } else {
    randomMoveCard(card)
  }

  const visibleCards = cards.filter(isVisible)
  const theHighestZ = Math.max(...visibleCards.map(getZ))
  const theHighestCard = visibleCards.find(c => getZ(c) === theHighestZ)

  if (theHighestCard) {
    highlightCard(theHighestCard)
  }

  deadScreen()
  correctUrl()
}
