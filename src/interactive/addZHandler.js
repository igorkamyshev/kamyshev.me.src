import { PHONE_UP, PHONE_DOWN } from './CONFIG'

const cards = document.getElementsByClassName('card')
let maxZ = cards.length

const applyZ = card => () => {
  const nowZ = document.defaultView
    .getComputedStyle(card, null)
    .getPropertyValue('z-index')

  const nowZParsed = nowZ === 'auto' ? 0 : nowZ

  if (nowZParsed <= maxZ) {
    for (const other of cards) {
      other.className = other.className.replace('highlight', '')
    }
    card.className = `${card.className} highlight`

    maxZ++
    card.style.zIndex = maxZ + 1
  }
}

const applyAll = () => {
  for (const card of cards) {
    card.onmousedown = applyZ(card)
  }
}

export const addZhandler = () => {
  if (window.innerWidth > PHONE_DOWN) {
    applyAll()
  } else {
    window.matchMedia(`(min-width: ${PHONE_UP}px)`).addListener(e => {
      if (e.matches) {
        applyAll()
      }
    })
  }
}
