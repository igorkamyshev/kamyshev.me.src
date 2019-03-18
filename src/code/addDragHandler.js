const cardHeaders = document.querySelectorAll('[data-card]')

const calculateCoordinates = elem => {
  const box = elem.getBoundingClientRect()

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  }
}

const disabledHtml5DragAndDrop = () => false

const customDragAndDrop = (header, card) => event => {
  const coordinates = calculateCoordinates(card)

  const shiftX = event.pageX - coordinates.left
  const shiftY = event.pageY - coordinates.top

  const moveAt = e => {
    card.style.left = `${e.pageX - shiftX}px`
    card.style.top = `${e.pageY - shiftY}px`
  }

  card.style.position = 'absolute'
  moveAt(event)

  document.onmousemove = moveAt

  document.onmouseup = () => {
    document.onmousemove = null
    header.onmouseup = null
  }
}

const applyDragHandlers = () => {
  for (const header of cardHeaders) {
    header.ondragstart = disabledHtml5DragAndDrop
    const card = document.getElementById(header.dataset.card)

    header.onmousedown = customDragAndDrop(header, card)
  }
}

const resetAll = () => {
  for (const header of cardHeaders) {
    header.ondragstart = disabledHtml5DragAndDrop
    const card = document.getElementById(header.dataset.card)

    header.onmousedown = null
    card.style = null
  }
}

export const addDragHandler = () => {
  window.matchMedia('(max-width: 400px)').addListener(e => {
    if (e.matches) {
      resetAll()
    }
  })

  if (window.innerWidth > 400) {
    applyDragHandlers()
  } else {
    window.matchMedia('(min-width: 401px)').addListener(e => {
      if (e.matches) {
        applyDragHandlers()
      }
    })
  }
}