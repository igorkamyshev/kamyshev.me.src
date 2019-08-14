export const correctUrl = () => {
  const articleCheckbox = document.getElementById('articles-check');

  const homePage = !articleCheckbox.checked;

  window.history.pushState({}, '', homePage ? '/' : '/articles.html');
};
