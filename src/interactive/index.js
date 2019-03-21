import { addZhandler } from './addZHandler'
import { addDragHandler } from './addDragHandler'
import { addArticleToggle } from './addArticleToggle'
import { addCheckerListener } from './addCheckerListener'
import { addUpButtonDisplay } from './addUpButtonDisplay'
import { addCloseButtonsHandler } from './addCloseButtonsHandler'

const bootstrap = () => {
  addZhandler()
  addDragHandler()
  addArticleToggle()
  addCheckerListener()
  addUpButtonDisplay()
  addCloseButtonsHandler()
}

try {
  bootstrap()
} catch (e) {
  document.addEventListener('DOMContentLoaded', bootstrap)
}
