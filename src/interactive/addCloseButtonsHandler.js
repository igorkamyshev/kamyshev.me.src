const closeButtons = document.querySelectorAll('[data-checker]')

const listener = ({ target }) => {
  const checker = document.getElementById(target.dataset.checker)
  checker.checked = false
}

export const addCloseButtonsHandler = () => {
  for (const button of closeButtons) {
    button.addEventListener('click', listener)
  }
}
