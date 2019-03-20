import { addZhandler } from './interactive/addZHandler'
import { addDragHandler } from './interactive/addDragHandler'
import { addArticleToggle } from './interactive/addArticleToggle'
import { addCheckerListener } from './interactive/addCheckerListener'
import { addCloseButtonsHandler } from './interactive/addCloseButtonsHandler'

const bootstrap = () => {
  addZhandler()
  addDragHandler()
  addArticleToggle()
  addCheckerListener()
  addCloseButtonsHandler()
}

bootstrap()
