import { redirect } from '../helpers/redirect'

const articleCheckbox = document.getElementById('articles-check')

export const restoreArticleUrlAfterScrollStop = element => {
  let isScrolling
  element.onscroll = () => {
    clearTimeout(isScrolling)
    isScrolling = setTimeout(() => {
      redirect(!articleCheckbox.checked)
      element.onscroll = null
    }, 66)
  }
}
