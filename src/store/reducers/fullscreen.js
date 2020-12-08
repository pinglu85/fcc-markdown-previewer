import * as actionTypes from '../actions/actionTypes';

const initialFullscreenState = {
  editor: false,
  previewer: false,
};

const fullscreenReducer = (state = initialFullscreenState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FULLSCREEN:
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    default:
      return state;
  }
};

export default fullscreenReducer;
