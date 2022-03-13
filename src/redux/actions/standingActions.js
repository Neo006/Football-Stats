import { SET_LA_LIGA_STANDINGS } from '../types/standingsTypes';

export const setLaLigaStandings = (standings) => {
  return { type: SET_LA_LIGA_STANDINGS, payload: standings };
};
