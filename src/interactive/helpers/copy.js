import * as clipboard from 'clipboard-polyfill';

export const copy = (text) => clipboard.writeText(text);
