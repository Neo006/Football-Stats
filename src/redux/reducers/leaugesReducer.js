import { SET_LA_LIGA, SET_PREMIER_LEAUGE, SET_SERIE_A, SET_BUNDESLIGA } from '../types/leaugesTypes';

const initialState = {
  leauges: [],
};

export default function leaugesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LA_LIGA:
      return {
        ...state,
        leauges: [...state.leauges, action.payload],
      };
    case SET_PREMIER_LEAUGE:
      return {
        ...state,
        leauges: [...state.leauges, action.payload],
      };
    case SET_SERIE_A:
      return {
        ...state,
        leauges: [...state.leauges, action.payload],
      };
    case SET_BUNDESLIGA:
      return {
        ...state,
        leauges: [...state.leauges, action.payload],
      };
    default:
      return state;
  }
}
