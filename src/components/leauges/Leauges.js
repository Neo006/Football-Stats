import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLigues } from '../../api/leaugesService';
import LeaugeItem from '../leauge-item/LeaugeItem';

function Leauges() {
  const leaugesState = useSelector((state) => state.leauges);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLigues());
  }, []);

  return (
    <div
      id="features"
      className="relative w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0"
    >
      <div className="container flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
        <h2 className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">Our Features</h2>
        <h3 className="max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl">
          Built and Designed with you in Mind
        </h3>
        <div className="flex flex-col w-full mt-0 lg:flex-row sm:mt-10 lg:mt-20">
          {leaugesState.leauges.length &&
            leaugesState.leauges.map((item) => <LeaugeItem key={item.league.id} data={item} />)}
        </div>
      </div>
    </div>
  );
}

export default Leauges;
