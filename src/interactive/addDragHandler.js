import { PHONE_DOWN, PHONE_UP } from './CONFIG';

const cardHeaders = document.querySelectorAll('[data-card]');

const DEFAULT_MARGIN = 24;

const calculateCoordinates = (elem) => {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset - DEFAULT_MARGIN,
    left: box.left + window.pageXOffset - DEFAULT_MARGIN,
  };
};

const disabledHtml5DragAndDrop = () => false;

const customDragAndDrop = (header, card) => (event) => {
  const coordinates = calculateCoordinates(card);

  const shiftX = event.pageX - coordinates.left;
  const shiftY = event.pageY - coordinates.top;

  const moveAt = (e) => {
    card.style.left = `${e.pageX - shiftX}px`;
    card.style.top = `${e.pageY - shiftY}px`;
  };

  moveAt(event);

  document.onmousemove = moveAt;

  document.onmouseup = () => {
    document.onmousemove = null;
    header.onmouseup = null;
  };
};

const applyDragHandlers = () => {
  for (const header of cardHeaders) {
    header.ondragstart = disabledHtml5DragAndDrop;
    const card = document.getElementById(header.dataset.card);

    header.onmousedown = customDragAndDrop(header, card);
  }
};

const resetAll = () => {
  for (const header of cardHeaders) {
    header.ondragstart = disabledHtml5DragAndDrop;
    const card = document.getElementById(header.dataset.card);

    header.onmousedown = null;
    card.style = null;
  }
};

export const addDragHandler = () => {
  window.matchMedia(`(max-width: ${PHONE_DOWN}px)`).addListener((e) => {
    if (e.matches) {
      resetAll();
    }
  });

  window.matchMedia(`(min-width: ${PHONE_UP}px)`).addListener((e) => {
    if (e.matches) {
      applyDragHandlers();
    }
  });

  if (window.innerWidth > PHONE_DOWN) {
    applyDragHandlers();
  }
};
