export default function ReportCard(props) {
  const { report, children } = props || {};

  return report ? (
    <section className="relative border-orange-100 bg-white shadow-xl rounded-2xl border">
      <div className="grid grid-cols-12 gap-2 p-4">
        <div className="col-span-12 sm:col-span-5 h-[34rem]">
          <img
            className="object-cover shadow-xl rounded-2xl h-full w-full"
            src={report.pet.photo_url}
            alt=""
          />
        </div>
        <div className="col-span-12 sm:col-span-7 px-2 flex flex-col justify-between">
          <h3 className="text-2xl font-bold tracking-tight text-orange-600 uppercase">
            {report.pet.name}
          </h3>
          <div className="grid grid-cols-12">
            <div className="col-span-3 [&>p]:py-1 [&>p]:capitalize [&>p]:font-medium [&>p]:text-gray-500">
              <p>species</p>
              <p>age</p>
              <p>gender</p>
              <p>breed</p>
              <p>size</p>
              <p>collar</p>
              <p>color</p>
              <p>last</p>
              <p>address</p>
            </div>
            <div className="col-span-9 [&>p]:py-1 [&>p]:capitalize [&>p]:font-medium [&>p]:text-gray-500">
              <p>{report.pet.species}</p>
              <p>{`${report.pet.age} years`}</p>
              <p>{report.pet.gender}</p>
              <p>{report.pet.breed}</p>
              <p>{report.pet.size}</p>
              <p>{report.pet.collar || 'Unknown'}</p>
              <p>{report.pet.color}</p>
              <p>{new Date(report.lost_found_date).toLocaleDateString()}</p>
              <p>{report.address}</p>
            </div>
          </div>
          <p className="py-1 text-gray-500 font-medium capitalize">
            Owner Message
          </p>
          <p className="font-light text-gray-500 px-1 pb-4">{report.comment}</p>

          {children}
        </div>
      </div>
    </section>
  ) : null;
}
