const articleCheckbox = document.getElementById('about-check')

const redirect = urlPath => {
  articleCheckbox.checked = urlPath.includes('articles')
  window.history.pushState({}, '', urlPath)
}

articleCheckbox.addEventListener('change', ({ target }) => {
  if (target.checked) {
    redirect('/articles.html')
  } else {
    redirect('/')
  }
})
