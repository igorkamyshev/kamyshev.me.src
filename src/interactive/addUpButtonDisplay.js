import { PHONE_DOWN } from './CONFIG'

const options = {
  root: null,
  threshold: 0.15,
}

const button = document.querySelector('#articles-up')
const articles = document.querySelector('.articles')

const initDisplay = () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        button.style.display = 'block'
      } else {
        button.style.display = 'none'
      }
    })
  }, options)
  observer.observe(articles)
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
  if (window.innerWidth <= PHONE_DOWN) {
    initDisplay()
  } else {
    window.matchMedia(`(max-width: ${PHONE_DOWN}px)`).addListener(e => {
      if (e.matches) {
        initDisplay()
      }
    })
  }

  initOnClick()
}
