import { SET_LALIGA } from '../types/leaugesTypes';

export const setLaLiga = (leauge) => {
  return { type: SET_LALIGA, payload: leauge };
};
