import {
  SET_LA_LIGA,
  SET_PREMIER_LEAUGE,
  SET_SERIE_A,
  SET_BUNDESLIGA,
  SET_LIGUE_1,
  SET_EREDIVISIE,
} from '../types/leaugesTypes';

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
    case SET_LIGUE_1:
      return {
        ...state,
        leauges: [...state.leauges, action.payload],
      };
    case SET_EREDIVISIE:
      return {
        ...state,
        leauges: [...state.leauges, action.payload],
      };
    default:
      return state;
  }
}
