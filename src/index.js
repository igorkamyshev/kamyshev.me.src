import { addZhandler } from './code/addZHandler'
import { addDragHandler } from './code/addDragHandler'
import { addArticleToggle } from './code/addArticleToggle'
import { addCloseButtonsHandler } from './code/addCloseButtonsHandler'

document.addEventListener('DOMContentLoaded', () => {
  addZhandler()
  addDragHandler()
  addArticleToggle()
  addCloseButtonsHandler()
})
