const closeButtons = document.querySelectorAll('[data-checker]')

const listener = button => () => {
  const checker = document.getElementById(button.dataset.checker)
  checker.checked = false
}

export const addCloseButtonsHandler = () => {
  for (const button of closeButtons) {
    button.addEventListener('click', listener(button))
  }
}
