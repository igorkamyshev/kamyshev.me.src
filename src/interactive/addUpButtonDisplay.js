import { PHONE_DOWN } from './CONFIG'

const button = document.querySelector('#articles-up')
const articles = document.querySelector('.articles')
const firstHiddenP = document.querySelector('.articles > p:nth-of-type(3)')

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
    } else {
      const rect = articles.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      document.documentElement.scrollTo({
        top: rect.top + scrollTop - 90,
        behavior: 'smooth',
      })
    }
  }
}

export const addUpButtonDisplay = () => {
  initDisplay()
  initOnClick()
}
