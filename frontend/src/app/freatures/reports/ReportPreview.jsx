/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import moment from 'moment';
import { BouncingLoader } from '../../../components/ui/BouncingLoader.jsx';

export default function ReportPreview({ report }) {
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
      <div className="h-[20rem]">
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
        <div
          id="petCard-body"
          className="before:rouned-tl-[50%] before:rouned-tr[50%]"
        >
          <div id="petCard-detail">
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-[#dd2834] uppercase">
              {report.pet.name}
            </h4>

            <p className="mb-2">
              <span className="capitalize text-slate-800 leading-5 font-semibold text-sm">
                {report.pet.gender}
              </span>

              {report.pet.breed ? (
                <span className="capitalize text-slate-500 leading-5 font-semibold text-xs italic">
                  {' '}
                </span>
              ) : null}
              <span className="capitalize">{report.pet.breed}</span>
            </p>
            <p className="mb-2">
              <span className="capitalize text-sm text-slate-500 leading-5 font-semibold">
                Last Seen{' '}
              </span>
              <span className="capitalize text-sm text-slate-500 leading-5 font-semibold">
                {moment(report.lost_found_date).format('MMM Do YY')}
              </span>
            </p>
          </div>
        </div>
        <div className="pt-3">
          <Link
            to={`/reports/${report.pet.name}`}
            state={report}
            key={report.pet.name}
            className="btn btn-secondary w-full"
          >
            Pet Info
          </Link>
        </div>
      </div>
    </div>
  ) : null;
}
