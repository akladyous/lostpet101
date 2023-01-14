import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import waysToGive from '../../../assets/images/stories/ways-to-give.png';
import takeAction from '../../../assets/images/stories/take-action.png';
import trendingTale from '../../../assets/images/stories/Trending-Tale.png';
import communityImpact from '../../../assets/images/stories/communityImpact.png';
import adoptMe from '../../../assets/images/stories/adoptMe.png';

export default function StoriesSide() {
  return (
    <div className="flex flex-col my-2 sm:mx-4 space-y-3">
      <div className="search p-2 border rounded-xl bg-orange-50 opacity-90 ">
        <form action="/listings">
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="text"
              name="name"
              id="name"
              className="peer mt-1 block w-full rounded-md border-orange-200 py-3 px-4 h-12 text-base text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm placeholder:italic placeholder:text-xs placeholder:text-gray-400 disabled:opacity-75 disabled:bg-slate-100"
              placeholder="Search pet by name"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
          </div>
          <button className="btn btn-secondary my-2 w-full rounded-lg">
            Search
          </button>
        </form>
      </div>
      <div className="OurStories  p-2 border rounded-xl bg-orange-50 space-y-3">
        <div className="py-3 my-2 flex items-center space-x-2">
          <div className="w-1/3 h-20">
            <img
              src={waysToGive}
              alt="ways-to-give"
              className="h-full w-full opacity-70 rounded-lg"
            />
          </div>
          <h3 className="capitalize text-lg font-semibold text-slate-600">
            Ways To Give
          </h3>
        </div>
        <div className="py-3 my-2 flex items-center space-x-2">
          <div className="w-1/3 h-20">
            <img
              src={takeAction}
              alt="ways-to-give"
              className="h-full w-full opacity-70 rounded-lg"
            />
          </div>
          <h3 className="capitalize text-lg font-semibold text-slate-600">
            Take Action
          </h3>
        </div>
        <div className="py-3 my-2 flex items-center space-x-2">
          <div className="w-1/3 h-20">
            <img
              src={trendingTale}
              alt="ways-to-give"
              className="h-full w-full opacity-70 rounded-lg"
            />
          </div>
          <h3 className="capitalize text-lg font-semibold text-slate-600">
            Trending Tale
          </h3>
        </div>
        <div className="py-3 my-2 flex items-center space-x-2">
          <div className="w-1/3 h-20">
            <img
              src={communityImpact}
              alt="ways-to-give"
              className="h-full w-full opacity-70 rounded-lg"
            />
          </div>
          <h3 className="capitalize text-lg font-semibold text-slate-600">
            community impact
          </h3>
        </div>
        <div className="py-3 my-2 flex items-center space-x-2">
          <div className="w-1/3 h-20">
            <img
              src={adoptMe}
              alt="ways-to-give"
              className="h-full w-full opacity-70 rounded-lg"
            />
          </div>
          <h3 className="capitalize text-lg font-semibold text-slate-600">
            adoption centers
          </h3>
        </div>
      </div>
    </div>
  );
}
