import { SET_LALIGA } from '../types/leaugesTypes';

const initialState = {
  leauge: 'premier',
};

export default function leaugesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LALIGA:
      return {
        ...state,
        leauge: action.payload,
      };
    default:
      return state;
  }
}
