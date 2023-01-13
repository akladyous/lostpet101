import { ChatBubbleLeftIcon, HeartIcon } from '@heroicons/react/24/outline';
export default function Story({ pet }) {
  console.log('pet : ', pet);
  const likes = pet.likes.map((like) => like.user_image_url);
  return pet ? (
    <div
      className="bg-white border border-orange-100 rounded-lg shadow-md relative
              cursor-pointer transition duration-500 ease-in-out transform hover:translate-y-1
              flex flex-col sm:flex-row
              my-2"
    >
      <div className="w-full sm:w-1/3 h-80 sm:h-64 sm:min-w-[35%]">
        <img
          className="rounded-tr-lg rounded-tl-lg sm:rounded-tr-none sm:rounded-bl-lg h-full w-full object-fill flex-grow"
          src={pet.photo_url}
          alt="pet-image"
        />
      </div>
      <div className="p-3 before:rouned-tl-[50%] before:rouned-tr[50%] flex flex-col justify-between">
        <div id="petCard-detail">
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-[#dd2834] uppercase">
            {pet.name}
          </h4>

          <p className="mb-2">
            <span className="capitalize text-slate-800 leading-5 font-semibold text-sm line-clamp-5">
              {pet.description}
            </span>
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="likes relative">
            {pet.likes.length >= 1 ? (
              <div className="relative isolate flex -space-x-2 overflow-visible px-1 py-2 w-fit">
                {pet.likes
                  .filter((like) => like.user_image_url)
                  .slice(0, 5)
                  .map((like, index) => {
                    let zIndex = 60 - (index + 1) * 10;
                    return (
                      <>
                        <img
                          key={index}
                          className={`'relative z-${zIndex} inline-block h-7 w-7 rounded-full ring-1 ring-white`}
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
            <div className="absolute -top-2 -right-4 px-2 py-1 text-[10px] font-bold leading-none text-red-100 transform bg-red-600 rounded-full">
              {`${pet.likes.length - 1}+`}
            </div>
          </div>
          <div className="flex space-x-4 mr-3">
            {/*  */}
            <div className="relative rounded-full bg-slate-50">
              <HeartIcon className="h-7 w-7 mt-1 text-gray-400 transition duration-500 ease-in-out transform hover:text-gray-500 hover:fill-red-300" />
              <div className="absolute -top-3 left-3 px-1 py-1 text-[9px] font-bold ring-1 ring-white leading-none text-red-100 transform bg-red-600 rounded-full">
                <p>{pet.likes.length}</p>
              </div>
            </div>
            <div className="relative">
              <ChatBubbleLeftIcon className="h-7 w-7 mt-1 text-gray-400 hover:text-gray-500 hover:fill-slate-50" />
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
