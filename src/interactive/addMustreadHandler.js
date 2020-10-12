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

const initButtons = () => {
  const links = Array.from(document.getElementsByTagName('a'));

  const mustreadButton = links.find((link) =>
    link.href.includes('https://read.kamyshev.me'),
  );
  const mustreadCard = document.getElementById('mustread-card');

  const openInDestop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    randomMoveCard(mustreadCard);
    openCard('mustread-check');
  };

  mustreadButton.addEventListener('click', (event) => {
    if (window.innerWidth > PHONE_DOWN) {
      openInDestop(event);
    }
  });
};

export const addMustreadHandler = () => {
  initIframes();
  initButtons();
};
