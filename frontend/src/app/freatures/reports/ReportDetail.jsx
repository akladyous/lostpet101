import moment from 'moment';

export default function ReportDetail(props) {
  const { report, children } = props || {};

  return report ? (
    <section className="relative border-orange-100 bg-white shadow-xl rounded-2xl border">
      <div className="grid grid-cols-12 gap-2 p-4">
        <div className="col-span-12 sm:col-span-5 h-[25rem] sm:h-[35rem]">
          <img
            className="object-cover shadow-xl rounded-2xl h-full w-full"
            src={report.pet.photo_url}
            alt=""
          />
        </div>
        <div className="col-span-12 sm:col-span-7 px-2 flex flex-col justify-start mt-4 sm:mt-1">
          {/* <p className="font-bold">Hi, i&apos;m</p> */}
          <h3 className=" text-5xl font-bold tracking-tight text-orange-600 uppercase py-2">
            {report.pet.name}
          </h3>
          <div className="grid grid-cols-12">
            <div className="col-span-3 [&>p]:py-1 [&>p]:capitalize [&>p]:font-medium [&>p]:text-gray-800">
              <p>report type</p>
              <p>species</p>
              <p>last seen</p>
              <p>age</p>
              <p>gender</p>
              <p>breed</p>
              <p>size</p>
              <p>collar</p>
              <p>color</p>
              <p>located at</p>
            </div>
            <div className="col-span-9 [&>p]:py-1 [&>p]:capitalize [&>p]:font-medium [&>p]:text-gray-500">
              <p>{report.report_type}</p>
              <p>{report.pet.species}</p>
              <p>{moment(report.lost_found_date).format('MMM Do YY')}</p>
              <p>{`${Number(report.pet.age)} year${
                report.pet.age > 1 ? 's' : null
              }`}</p>
              <p>{report.pet.gender}</p>
              <p>{report.pet.breed}</p>
              <p>{report.pet.size}</p>
              <p>{report.pet.collar || 'Unknown'}</p>
              <p>{report.pet.color}</p>
              <p>{report.address}</p>
            </div>
          </div>
          <div className="[&>p]:py-1 [&>p]:capitalize [&>p]:font-medium [&>p]:text-gray-800">
            <p className="py-1 text-gray-500 font-medium capitalize">
              Owner Message
            </p>
            <p className="font-light text-gray-500 px-1 pb-4-- line-clamp-4">
              {report.comment}
            </p>
          </div>

          {/* <div className=" border-t py-2">
            <p className="mb-2 capitalize text-xs text-slate-500 italic leading-5 font-semibold">
              reported
              <span>{` ${moment(report.lost_found_date).fromNow()}`}</span>
            </p>
          </div> */}
          {children}
        </div>
      </div>
    </section>
  ) : null;
}
