import { addZhandler } from './interactive/addZHandler'
import { addDragHandler } from './interactive/addDragHandler'
import { addArticleToggle } from './interactive/addArticleToggle'
import { addCloseButtonsHandler } from './interactive/addCloseButtonsHandler'

const bootstrap = () => {
  addZhandler()
  addDragHandler()
  addArticleToggle()
  addCloseButtonsHandler()
}

bootstrap()
