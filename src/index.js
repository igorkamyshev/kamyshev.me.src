import { addDragHandler } from './code/addDragHandler'
import { addArticleToggle } from './code/addArticleToggle'
import { addCloseButtonsHandler } from './code/addCloseButtonsHandler'

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 400) {
    addDragHandler()
  } else {
    window.matchMedia('(min-width: 401px)').addListener(e => {
      if (e.matches) {
        addDragHandler()
      }
    })
  }

  addArticleToggle()
  addCloseButtonsHandler()
})
