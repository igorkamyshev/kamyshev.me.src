import { correctUrl } from '../helpers/correctUrl'

export const restoreArticleUrlAfterScrollStop = element => {
  let isScrolling
  element.onscroll = () => {
    clearTimeout(isScrolling)
    isScrolling = setTimeout(() => {
      correctUrl()
      element.onscroll = null
    }, 66)
  }
}
