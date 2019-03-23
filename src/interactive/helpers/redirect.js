export const redirect = toHome =>
  window.history.pushState({}, '', toHome ? '/' : '/articles.html')
