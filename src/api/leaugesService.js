import axios from 'axios';
import {
  setLaLiga,
  setPremierLeauge,
  setSerieA,
  setBundesliga,
  setLigue1,
  setEredivisie,
} from '../redux/actions/leaugesActions';

const URL = 'https://v3.football.api-sports.io';

const LeaugesEndpoints = {
  getLeauges: '/leagues',
};

const config = {
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': '4c15e3b3b2f276985e09cfa6a6d0830b',
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
      })
      .then(() => {
        config.params.id = 61;
        return axios.get(URL + LeaugesEndpoints.getLeauges, config);
      })
      .then(({ data }) => {
        if (!data.errors.length) {
          dispatch(setLigue1(data.response[0]));
        }
      })
      .then(() => {
        config.params.id = 88;
        return axios.get(URL + LeaugesEndpoints.getLeauges, config);
      })
      .then(({ data }) => {
        if (!data.errors.length) {
          dispatch(setEredivisie(data.response[0]));
        }
      });
  };
}
