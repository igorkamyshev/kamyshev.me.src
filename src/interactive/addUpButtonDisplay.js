import { PHONE_DOWN } from './CONFIG'
import { restoreArticleUrlAfterScrollStop } from './actions/restoreArticleUrlAfterScrollStop'

const button = document.querySelector('#articles-up')
const articles = document.querySelector('.articles')
const firstHiddenP = document.querySelector(
  '.articles > section > *:nth-child(4)',
)

const initDisplay = () => {
  let previousY = 0
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const currentY = entry.boundingClientRect.y

      if (entry.isIntersecting || previousY > currentY) {
        button.style.display = 'block'
      } else {
        button.style.display = 'none'
      }

      previousY = currentY
    })
  })
  observer.observe(firstHiddenP)
}

const scrollToTop = (top, scrollElement, stopElement) => {
  scrollElement.scrollTo({
    top,
    behavior: 'smooth',
  })
  restoreArticleUrlAfterScrollStop(stopElement)
}

const initOnClick = () => {
  button.onclick = () => {
    if (window.innerWidth > PHONE_DOWN) {
      articles.scrollTo({
        top: 0,
        behavior: 'smooth',
      })

      restoreArticleUrlAfterScrollStop(articles)
    } else {
      const rect = articles.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const top = rect.top + scrollTop - 90

      scrollToTop(top, document.body, document.body) // For iOS
      scrollToTop(top, document.documentElement, document)
    }
  }
}

export const addUpButtonDisplay = () => {
  initDisplay()
  initOnClick()
}
