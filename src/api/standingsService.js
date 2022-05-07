import axios from 'axios';
import { setLeaugeStandings } from '../redux/actions/standingActions';

const URL = 'https://v3.football.api-sports.io';

const StandingsEndpoints = {
  getStandings: '/standings',
};

const config = {
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': 'fc954d0c18b2cb78ac98385285d46f7d',
  },
  params: {
    season: 2021,
  },
};

export function fetchStandings(leaugeid) {
  return function (dispatch) {
    config.params.league = leaugeid;
    return axios.get(URL + StandingsEndpoints.getStandings, config).then(({ data }) => {
      if (!data.errors.length) {
        dispatch(setLeaugeStandings(data.response[0]));
      }
    });
  };
}
