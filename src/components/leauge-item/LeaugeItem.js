import Image from 'next/image';
import Link from 'next/link';

function LeaugeItem(data) {
  return (
    <Link href={{ pathname: 'teams-standings', query: { leaugeId: data.data.league.id } }}>
      <a className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
        <div className="leauge-item ">
          <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
            <svg
              className="absolute w-full h-full text-gray-100 fill-current"
              viewBox="0 0 377 340"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g>
                  <path d="M342.8 3.7c24.7 14 18.1 75 22.1 124s18.6 85.8 8.7 114.2c-9.9 28.4-44.4 48.3-76.4 62.4-32 14.1-61.6 22.4-95.9 28.9-34.3 6.5-73.3 11.1-95.5-6.2-22.2-17.2-27.6-56.5-47.2-96C38.9 191.4 5 151.5.9 108.2-3.1 64.8 22.7 18 61.8 8.7c39.2-9.2 91.7 19 146 16.6 54.2-2.4 110.3-35.6 135-21.6z" />
                </g>
              </g>
            </svg>
            <Image src={data.data.league.logo} alt="Picture of the author" width={100} height={100} />
            <h4 className="relative mt-6 text-lg font-bold">Automated Tools</h4>
            <p className="relative mt-2 text-base text-center text-gray-600">
              Automate your workflow with these top of the line marketing tools.
            </p>
            <p className="relative flex mt-2 text-sm font-medium text-indigo-500 underline">Learn More</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default LeaugeItem;
