import { useSelector } from 'react-redux';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useAxios } from '../../../hooks/useAxios.jsx';
import { useCallback, useEffect, useRef } from 'react';
import { useState } from 'react';

export default function LikePet({ pet_id }) {
  const isMounted = useRef(false);
  const [likes, setLikes] = useState(0);
  const state = useSelector((state) => state.users);
  const [request, { isLoading, isError, error, isSuccess, data }] = useAxios(
    null,
    { manual: false }
  );

  const handleLike = useCallback(() => {
    console.log('data : ', data);
    if (isMounted.current) {
      const currentUserLikes = Boolean(
        data.filter(({ user_email }) => user_email === state.user.email).length
      );
      if (currentUserLikes) {
        console.log('dislike');
        request({
          method: 'delete',
          url: `pets/${pet_id}/likes`,
          data: { pet_id: pet_id },
        });
      } else {
        console.log('like');
        request({
          method: 'post',
          url: `pets/${pet_id}/likes`,
          data: { pet_id: pet_id },
        });
      }
    }
  }, [request]);

  useEffect(() => {
    request({
      method: 'get',
      url: `pets/${pet_id}/likes`,
      data: { pet_id: pet_id },
    });
  }, [request, pet_id]);

  useEffect(() => {
    isMounted.current = true;
    if (!isMounted.current) return;
    if (isSuccess && data) {
      setLikes(data.length);
    }
  }, [isSuccess, isLoading, data]);
  return isMounted.current ? (
    <>
      <div className="relative rounded-full bg-slate-50">
        <button onClick={handleLike} disabled={!state.isAuthenticated}>
          <HeartIcon className="h-7 w-7 mt-1 text-gray-400 transition duration-500 ease-in-out transform hover:text-gray-500 hover:fill-red-300" />
        </button>
        <div className="absolute -top-3 left-3 px-1 py-1 text-[9px] font-bold ring-1 ring-white leading-none text-red-100 transform bg-red-600 rounded-full">
          {/* <p>{likes.length}</p> */}
          <p>{data.length}</p>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
