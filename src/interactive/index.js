import { addArticleToggle } from './addArticleToggle';
import { addCheckerKeyPress } from './addCheckerKeyPress';
import { addCheckerListener } from './addCheckerListener';
import { addCloseButtonsHandler } from './addCloseButtonsHandler';
import { addCopyHandler } from './addCopyHandler';
import { addDragHandler } from './addDragHandler';
import { addMobileOpenHandler } from './addMobileOpenHandler';
import { addUpButtonDisplay } from './addUpButtonDisplay';
import { addZhandler } from './addZHandler';
import { addMustreadHandler } from './addMustreadHandler';

const bootstrap = () => {
  addZhandler();
  addCopyHandler();
  addDragHandler();
  addArticleToggle();
  addMustreadHandler();
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
