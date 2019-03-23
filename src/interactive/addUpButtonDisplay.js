import { PHONE_DOWN } from './CONFIG'
import { restoreArticleUrlAfterScrollStop } from './actions/restoreArticleUrlAfterScrollStop'

const button = document.querySelector('#articles-up')
const articles = document.querySelector('.articles')
const firstHiddenP = document.querySelector('.articles > p:nth-of-type(6)')

const isSafary = () =>
  navigator.vendor &&
  navigator.vendor.includes('Apple') &&
  navigator.userAgent &&
  !navigator.userAgent.includes('CriOS') &&
  !navigator.userAgent.includes('FxiOS')

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

      if (isSafary()) {
        document.body.scrollTo({
          top: rect.top + scrollTop - 90,
          behavior: 'smooth',
        })
        restoreArticleUrlAfterScrollStop(document.body)
      } else {
        document.documentElement.scrollTo({
          top: rect.top + scrollTop - 90,
          behavior: 'smooth',
        })
        restoreArticleUrlAfterScrollStop(document)
      }
    }
  }
}

export const addUpButtonDisplay = () => {
  initDisplay()
  initOnClick()
}
