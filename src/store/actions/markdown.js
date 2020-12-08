import * as actionTypes from './actionTypes';

export const updateMarkdown = (markdown) => ({
  type: actionTypes.UPDATE_MARKDOWN,
  payload: markdown,
});
