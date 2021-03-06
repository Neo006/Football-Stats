import { SET_LA_LIGA, SET_PREMIER_LEAUGE, SET_SERIE_A, SET_BUNDESLIGA } from '../types/leaugesTypes';

export const setLaLiga = (leauge) => {
  return { type: SET_LA_LIGA, payload: leauge };
};

export const setPremierLeauge = (leauge) => {
  return { type: SET_PREMIER_LEAUGE, payload: leauge };
};

export const setSerieA = (leauge) => {
  return { type: SET_SERIE_A, payload: leauge };
};

export const setBundesliga = (leauge) => {
  return { type: SET_BUNDESLIGA, payload: leauge };
};
