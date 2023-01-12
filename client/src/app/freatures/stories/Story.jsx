import clsx from 'clsx';

export default function Story({ pet }) {
  console.log(pet);
  const likes = pet.likes.map((like) => like.user_image_url);
  return pet ? (
    <div
      className="bg-white border border-orange-100 rounded-lg shadow-md relative
              cursor-pointer transition duration-500 ease-in-out transform hover:translate-y-1
              flex flex-col sm:flex-row
              my-2 "
    >
      <div className="w-full sm:w-1/3 h-80 sm:h-64 sm:min-w-[35%]">
        <img
          className="rounded-tl-lg rounded-bl-lg h-full w-full object-cover flex-grow"
          src={pet.photo_url}
          alt="pet-image"
        />
      </div>
      <div className="p-3">
        <div className="before:rouned-tl-[50%] before:rouned-tr[50%]">
          <div id="petCard-detail">
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-[#dd2834] uppercase">
              {pet.name}
            </h4>

            <p className="mb-2">
              <span className="capitalize text-slate-800 leading-5 font-semibold text-sm line-clamp-5">
                {pet.description}
              </span>
            </p>
            <p className="mb-2">xxxxx</p>
          </div>

          {pet.likes.length >= 1 ? (
            <div className="relative isolate flex -space-x-2 overflow-hidden px-1 py-2 w-fit">
              {pet.likes
                .filter((like) => like.user_image_url)
                .slice(0, 5)
                .map((like, index) => {
                  let zIndex = 60 - (index + 1) * 10;
                  return (
                    <>
                      <img
                        key={index}
                        className={`'relative z-${zIndex} inline-block h-8 w-8 rounded-full ring-1 ring-white`}
                        src={like.user_image_url}
                        alt=""
                      />
                    </>
                  );
                })}
            </div>
          ) : (
            <></>
          )}
          <div className="flex items-center justify-between">
            <div className="flex">
              {/*  */}
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 my-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <div className="absolute inline-flex items-center justify-center px-1 h-5 text-[10px] font-bold text-white bg-orange-500 rounded-full -top-3 left-3 z-10">
                  2033
                </div>
              </div>
              <div className="relative mx-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 my-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>

                <div className="absolute inline-flex items-center justify-center px-1 h-5 text-[10px] font-bold text-white bg-orange-500 rounded-full -top-3 left-3 z-10">
                  325
                </div>
              </div>
              {/*  */}
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
