import { redirect } from './redirect'

export const correctUrl = () => {
  const articleCheckbox = document.getElementById('articles-check')
  redirect(!articleCheckbox.checked)
}
