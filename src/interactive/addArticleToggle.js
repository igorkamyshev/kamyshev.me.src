import { redirect } from './helpers/redirect'

const articleCheckbox = document.getElementById('articles-check')
const articleCloseButton = document.querySelector(
  '[data-checker=articles-check]',
)

const changeListener = ({ target }) => redirect(!target.checked)
const clickListener = () => redirect(true)

export const addArticleToggle = () => {
  articleCheckbox.addEventListener('change', changeListener)
  articleCloseButton.addEventListener('click', clickListener)
}
