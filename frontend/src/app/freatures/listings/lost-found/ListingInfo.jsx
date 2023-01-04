import { useState, useCallback } from 'react';
import moment from 'moment';
import { BouncingLoader } from '../../../../components/ui/BouncingLoader.jsx';

export default function ListingInfo({ report }) {
  const [isLoading, setIsLoading] = useState(true);

  return report ? (
    <div
      className="max-w-sm bg-white border border-orange-100 rounded-lg shadow-md relative
              cursor-pointer transition duration-500 ease-in-out transform hover:translate-y-1
              flex flex-col justify-between
              "
    >
      {/* dark:bg-gray-800 dark:border-gray-700 */}
      {/* <div className="absolute top-0 right-0 rounded-xl p-1">
        <p className="rounded-ful bg-white w-fit rounded-full text-orange-600 px-3 read-only">
          {report.report_type}
        </p>
      </div> */}
      <div className="h-[25rem]">
        {isLoading && <BouncingLoader />}
        <img
          className="rounded-t-lg h-full w-full object-cover"
          src={report.pet.photo_url}
          alt="pet-image"
          onLoad={() => {
            setIsLoading(false);
          }}
        />
      </div>
      <div className="py-4 px-3">
        <p className="mb-2 capitalize text-slate-500 leading-5 font-bold text-lg">
          {report.report_type}
        </p>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600 uppercase">
          {report.pet.name}
        </h5>

        <p className="mb-2">
          <span className="capitalize text-slate-500 leading-5 font-bold text-lg">
            {report.pet.gender}
          </span>

          {report.pet.breed ? (
            <span className="capitalize text-slate-500 leading-5 font-bold text-lg">
              {' '}
              {report.pet.breed}
            </span>
          ) : null}
        </p>
        <p className="mb-2">
          <span className="capitalize text-lg text-slate-500 leading-5 font-bold">
            Last Seen{' '}
          </span>
          <span className="capitalize text-lg text-slate-500 leading-5 font-bold">
            {new Date(report.lost_found_date).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </span>
        </p>
        <p className="mb-2 capitalize text-sm text-slate-600 italic leading-5 font-semibold">
          reported
          <span>{` ${moment(report.lost_found_date).fromNow()}`}</span>
        </p>
        <div className="pt-3">
          <button className="btn btn-secondary w-full">contact</button>
        </div>
      </div>
    </div>
  ) : null;
}
