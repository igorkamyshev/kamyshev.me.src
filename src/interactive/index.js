import { addZhandler } from './addZHandler'
import { addCopyHandler } from './addCopyHandler'
import { addDragHandler } from './addDragHandler'
import { addArticleToggle } from './addArticleToggle'
import { addCheckerListener } from './addCheckerListener'
import { addUpButtonDisplay } from './addUpButtonDisplay'
import { addCheckerKeyPress } from './addCheckerKeyPress'
import { addMobileOpenHandler } from './addMobileOpenHandler'
import { addCloseButtonsHandler } from './addCloseButtonsHandler'

const bootstrap = () => {
  addZhandler()
  addCopyHandler()
  addDragHandler()
  addArticleToggle()
  addCheckerListener()
  addUpButtonDisplay()
  addCheckerKeyPress()
  addMobileOpenHandler()
  addCloseButtonsHandler()
}

try {
  bootstrap()
} catch (e) {
  document.addEventListener('DOMContentLoaded', bootstrap)
}
