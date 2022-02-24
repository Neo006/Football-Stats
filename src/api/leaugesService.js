import axios from 'axios';

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
    id: 140,
    season: 2021,
  },
};

export function fetchLaLiga() {
  return function (dispatch) {
    return axios.get(URL + LeaugesEndpoints.getLeauges, config).then(({ data }) => {
      console.log(data);
      // dispatch(setArticleDetails(data));
    });
  };
}
