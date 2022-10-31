import { addCheckerKeyPress } from './interactive/addCheckerKeyPress';
import { addCheckerListener } from './interactive/addCheckerListener';
import { addCloseButtonsHandler } from './interactive/addCloseButtonsHandler';
import { addDragHandler } from './interactive/addDragHandler';
import { addMobileOpenHandler } from './interactive/addMobileOpenHandler';
import { addUpButtonDisplay } from './interactive/addUpButtonDisplay';
import { addZhandler } from './interactive/addZHandler';

const bootstrap = () => {
  addZhandler();
  addDragHandler();
  addCheckerListener();
  addUpButtonDisplay();
  addCheckerKeyPress();
  addMobileOpenHandler();
  addCloseButtonsHandler();
};

try {
  bootstrap();
} catch (error) {
  document.addEventListener('DOMContentLoaded', bootstrap);
}
