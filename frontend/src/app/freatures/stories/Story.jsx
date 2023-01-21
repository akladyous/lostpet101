import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import LikesList from '../likes/LikesList.jsx';
import LikePet from '../likes/LikePet.jsx';
export default function Story({ pet }) {
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
          <LikesList pet={pet} />
          <div className="flex space-x-4 mr-3">
            <LikePet petId={pet.id} likes={pet.likes} />
            <div className="relative">
              <ChatBubbleLeftIcon className="h-7 w-7 mt-1 text-gray-400 hover:text-gray-500 hover:fill-slate-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
