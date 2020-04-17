const PADDING = 26;

const getActualSize = (card, sizeType) =>
  parseInt(
    document.defaultView
      .getComputedStyle(card, null)
      .getPropertyValue(sizeType),
    10,
  );

// The maximum is exclusive and the minimum is inclusive
const getRandomInt = (from, to) => {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const randomMoveCard = (card) => {
  const cardWidth = getActualSize(card, 'width');
  const cardHeight = getActualSize(card, 'height');

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const minXOffset = -2;
  const maxXOffset = windowWidth - cardWidth - 2 * PADDING;

  const minYOffset = 100;
  const maxYOffset = windowHeight - cardHeight - 2 * PADDING;

  card.style.left = `${getRandomInt(minXOffset, maxXOffset)}px`;
  card.style.top = `${getRandomInt(minYOffset, maxYOffset)}px`;
};
