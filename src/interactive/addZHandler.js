const cards = document.getElementsByClassName('card')
let maxZ = cards.length

const applyZ = card => () => {
  const nowZ = document.defaultView
    .getComputedStyle(card, null)
    .getPropertyValue('z-index')

  const nowZParsed = nowZ === 'auto' ? 0 : nowZ

  if (nowZParsed <= maxZ) {
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
  if (window.innerWidth > 400) {
    applyAll()
  } else {
    window.matchMedia('(min-width: 401px)').addListener(e => {
      if (e.matches) {
        applyAll()
      }
    })
  }
}
