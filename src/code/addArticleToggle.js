const articleCheckbox = document.getElementById('articles-check')
const articleCloseButton = document.querySelectorAll(
  '[data-checker=articles-check]',
)[0]

const redirect = toHome =>
  window.history.pushState({}, '', toHome ? '/' : '/articles.html')

const changeListener = ({ target }) => redirect(!target.checked)
const clickListener = () => redirect(true)

export const addArticleToggle = () => {
  articleCheckbox.addEventListener('change', changeListener)

  articleCloseButton.addEventListener('click', clickListener)
}
