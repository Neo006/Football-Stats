import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { fetchStandings } from '../../api/standingsService';
import Layout from '../../components/layout/Layout';

export default function TeamsStandings() {
  const standingsState = useSelector((state) => state.standings);
  const dispatch = useDispatch();

  const getGoalsDifference = (goalsFor, goalsAgainst) => {
    return Number(goalsFor) - Number(goalsAgainst);
  };

  useEffect(() => {
    dispatch(fetchStandings());
  }, []);

  return (
    <Layout>
      <div className="container items-center justify-between h-full max-w-6xl mx-auto">
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team</th>
              <th>Games</th>
              <th>Win</th>
              <th>Draw</th>
              <th>Lose</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD (+/-)</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(standingsState.standings).length &&
              standingsState.standings.league.standings[0].map((item) => (
                <tr key={item.team.id}>
                  <td data-th="Rank">{item.rank}</td>
                  <td data-th="Team">
                    <div className="rwd-table__team-name">
                      <Image src={item.team.logo} alt="Picture of the author" width={30} height={30} />
                      <span>{item.team.name}</span>
                    </div>
                  </td>
                  <td data-th="Games">{item.all.played}</td>
                  <td data-th="Win">{item.all.win}</td>
                  <td data-th="Draw">{item.all.draw}</td>
                  <td data-th="Lose">{item.all.lose}</td>
                  <td data-th="GF">{item.all.goals.for}</td>
                  <td data-th="GA">{item.all.goals.against}</td>
                  <td data-th="GD (+/-)">{getGoalsDifference(item.all.goals.for, item.all.goals.against)}</td>
                  <td data-th="Points">{item.points}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
