import { SET_LA_LIGA_STANDINGS } from '../types/standingsTypes';

const initialState = {
  standings: {},
};

export default function standingsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LA_LIGA_STANDINGS:
      return {
        ...state,
        standings: action.payload,
      };
    default:
      return state;
  }
}
