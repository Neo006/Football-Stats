import { SET_LEAUGE_STANDINGS } from '../types/standingsTypes';

export const setLeaugeStandings = (standings) => {
  return { type: SET_LEAUGE_STANDINGS, payload: standings };
};
