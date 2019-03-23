let textArea

function isOS() {
  return navigator.userAgent.match(/ipad|iphone/i)
}

function createTextArea(text) {
  textArea = document.createElement('textArea')
  textArea.value = text
  document.body.appendChild(textArea)
}

function selectText() {
  let range
  let selection

  if (isOS()) {
    range = document.createRange()
    range.selectNodeContents(textArea)
    selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(range)
    textArea.setSelectionRange(0, 999999)
  } else {
    textArea.select()
  }
}

function copyToClipboard() {
  document.execCommand('copy')
  document.body.removeChild(textArea)
}

export const copy = function(text) {
  createTextArea(text)
  selectText()
  copyToClipboard()
}
