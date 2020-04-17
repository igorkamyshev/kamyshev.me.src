import { openCard } from './actions/openCard';
import { randomMoveCard } from './actions/randomMoveCard';
import { PHONE_DOWN } from './CONFIG';

const initIframes = () => {
  const iframes = Array.from(document.getElementsByClassName('iframe'));

  window.addEventListener('message', (event) => {
    if (event.data === 'click-mustread') {
      iframes.forEach((iframe) => iframe.parentElement.click());
    }
  });
};

const openMustread = () => {
  if (window.innerWidth > PHONE_DOWN) {
    const mustreadCard = document.getElementById('mustread-card');
    randomMoveCard(mustreadCard);

    openCard('mustread-check');
  } else {
    window.open('https://read.kamyshev.me/standalone.html', '_blank');
  }
};

const initButtons = () => {
  const links = Array.from(document.getElementsByTagName('a'));

  const mustreadButton = links.find((link) =>
    link.href.includes('#magic_mustread'),
  );

  mustreadButton.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();

    openMustread();
  });
};

export const addMustreadHandler = () => {
  initIframes();
  initButtons();
};
