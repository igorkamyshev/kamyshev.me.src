const closeButtons = document.getElementsByClassName('close')

const listener = ({ target }) => {
  const checker = document.getElementById(target.dataset.card)
  checker.checked = false
}

export const addCloseButtonsHandler = () => {
  for (const button of closeButtons) {
    button.addEventListener('click', listener)
  }
}
