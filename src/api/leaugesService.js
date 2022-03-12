import axios from 'axios';
import { setLaLiga, setPremierLeauge, setSerieA, setBundesliga } from '../redux/actions/leaugesActions';

const URL = 'https://v3.football.api-sports.io';

const LeaugesEndpoints = {
  getLeauges: '/leagues',
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

export function fetchLigues() {
  return function (dispatch) {
    config.params.id = 140;
    return axios
      .get(URL + LeaugesEndpoints.getLeauges, config)
      .then(({ data }) => {
        if (!data.errors.length) {
          dispatch(setLaLiga(data.response[0]));
        }
      })
      .then(() => {
        config.params.id = 39;
        return axios.get(URL + LeaugesEndpoints.getLeauges, config);
      })
      .then(({ data }) => {
        if (!data.errors.length) {
          dispatch(setPremierLeauge(data.response[0]));
        }
      })
      .then(() => {
        config.params.id = 135;
        return axios.get(URL + LeaugesEndpoints.getLeauges, config);
      })
      .then(({ data }) => {
        if (!data.errors.length) {
          dispatch(setSerieA(data.response[0]));
        }
      })
      .then(() => {
        config.params.id = 78;
        return axios.get(URL + LeaugesEndpoints.getLeauges, config);
      })
      .then(({ data }) => {
        if (!data.errors.length) {
          dispatch(setBundesliga(data.response[0]));
        }
      });
  };
}
