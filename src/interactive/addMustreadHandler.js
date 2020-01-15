import { openCard } from './actions/openCard';
import { randomMoveCard } from './actions/randomMoveCard';
import { PHONE_DOWN } from './CONFIG';

const initIframes = () => {
  const iframes = Array.from(document.getElementsByClassName('iframe'));

  window.addEventListener('message', event => {
    if (event.data === 'click-mustread') {
      iframes.forEach(iframe => iframe.parentElement.click());
    }
  });
};

const initButtons = () => {
  const links = Array.from(document.getElementsByTagName('a'));

  const mustreadButton = links.find(link =>
    link.href.includes('#magic_mustread'),
  );
  const mustreadCard = document.getElementById('mustread-card');

  const openInDestop = () => {
    randomMoveCard(mustreadCard);
    openCard('mustread-check');
  };

  const openInMobile = () => {
    window.open('https://read.kamyshev.me/standalone.html', '_blank');
  };

  mustreadButton.addEventListener('click', event => {
    event.stopPropagation();
    event.preventDefault();

    if (window.innerWidth > PHONE_DOWN) {
      openInDestop();
    } else {
      openInMobile();
    }
  });
};

export const addMustreadHandler = () => {
  initIframes();
  initButtons();
};
