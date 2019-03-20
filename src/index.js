import { addZhandler } from './interactive/addZHandler'
import { addDragHandler } from './interactive/addDragHandler'
import { addArticleToggle } from './interactive/addArticleToggle'
import { addCheckerListener } from './interactive/addCheckerListener'
import { addUpButtonDisplay } from './interactive/addUpButtonDisplay'
import { addCloseButtonsHandler } from './interactive/addCloseButtonsHandler'

const bootstrap = () => {
  addZhandler()
  addDragHandler()
  addArticleToggle()
  addCheckerListener()
  addUpButtonDisplay()
  addCloseButtonsHandler()
}

bootstrap()
