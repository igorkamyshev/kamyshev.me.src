const labels = document.getElementsByTagName('label')

const toggle = event => {
  const checkbox = document.getElementById(event.target.htmlFor)
  checkbox.checked = !checkbox.checked
}

export const addCheckerKeyPress = () => {
  for (const label of labels) {
    label.onkeypress = toggle
  }
}
