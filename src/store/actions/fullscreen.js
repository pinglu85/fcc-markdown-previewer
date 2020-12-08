import * as actionTypes from './actionTypes';

export const toggleFullScreen = (windowName) => ({
  type: actionTypes.TOGGLE_FULLSCREEN,
  payload: windowName,
});
