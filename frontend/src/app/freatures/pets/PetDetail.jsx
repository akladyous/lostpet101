import React from 'react';

export default function PetDetail({ report, children }) {
  return (
    <section className="relative border-orange-100 bg-white shadow-xl rounded-2xl border">
      <div className="grid grid-cols-12 gap-2 p-4">
        {}
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
            <div className="col-span-3 [&>p]:py-1">
              <p className="text-gray-500 font-medium capitalize">species</p>
              <p className="text-gray-500 font-medium capitalize">age</p>
              <p className="text-gray-500 font-medium capitalize">gender</p>
              <p className="text-gray-500 font-medium capitalize">breed</p>
              <p className="text-gray-500 font-medium capitalize">size</p>
              <p className="text-gray-500 font-medium capitalize">collar</p>
              <p className="text-gray-500 font-medium capitalize">color</p>
              <p className="text-gray-500 font-medium capitalize">last</p>
              <p className="text-gray-500 font-medium capitalize">address</p>
            </div>
            <div className="col-span-9 [&>p]:py-1">
              <p className="text-gray-500 capitalize">{report.pet.species}</p>
              <p className="text-gray-500 capitalize">
                {`${report.petage} years`}
              </p>
              <p className="text-gray-500 capitalize">{report.pet.gender}</p>

              <p className="text-gray-500 capitalize">{report.pet.breed}</p>
              <p className="text-gray-500 capitalize">{report.pet.size}</p>
              <p className="text-gray-500 capitalize">{report.pet.collar}</p>
              <p className="text-gray-500 capitalize">{report.pet.color}</p>
              <p className="text-gray-500 capitalize">
                {new Date(report.lost_found_date).toLocaleDateString()}
              </p>
              <p className=" text-gray-500  capitalize">{report.address}</p>
            </div>
          </div>
          <p className="text-gray-500 font-medium capitalize">Owner Message</p>
          <p className="font-light text-gray-500 px-1 pt-1 pb-4">
            {report.comment}
          </p>

          {children}
        </div>
      </div>
    </section>
  );
}
