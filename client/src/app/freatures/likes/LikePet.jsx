import { useSelector } from 'react-redux';
import {
  useGetLikesQuery,
  useLikeMutation,
  useDislikeMutation,
} from '../../../state/api/likesSlice.js';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useCallback, useEffect, useRef } from 'react';
import { useState, useMemo } from 'react';
import clsx from 'clsx';

export default function LikePet({ petId }) {
  const isMounted = useRef(false);
  const state = useSelector((state) => state.users);
  const {
    data: likes,
    error,
    isFetching,
    isSuccess,
    isError,
  } = useGetLikesQuery(petId);

  if (isError) <div className="">{JSON.stringify(error, null, 2)}</div>;
  // const currentUserLikes = useMemo(() => {
  //   Boolean(
  //     likes.filter((like) => {
  //       return like.user_email === state.user.email;
  //     }).length
  //   );
  // }, [isSuccess, likes]);

  const handleLike = useCallback(() => {
    // console.log('data : ', likes);
    const currentUserLikes = Boolean(
      likes.filter((like) => {
        return like.user_email === state.user.email;
      }).length
    );

    // if (isMounted.current) {
    //   const currentUserLikes = Boolean(
    //     data.filter(({ user_email }) => user_email === state.user.email).length
    //   );
    //   if (currentUserLikes) {
    //     console.log('dislike');
    //     request({
    //       method: 'delete',
    //       url: `pets/${petId}/likes`,
    //       data: { pet_id: petId },
    //     });
    //   } else {
    //     console.log('like');
    //     request({
    //       method: 'post',
    //       url: `pets/${petId}/likes`,
    //       data: { pet_id: petId },
    //     });
    //   }
    // }
  }, []);

  // useEffect(() => {
  //   if (isMounted.current) request();

  //   return () => {
  //     isMounted.current = false;
  //   };
  // }, [request, data]);

  if (isSuccess) {
    //
  }

  return isSuccess && likes ? (
    <>
      <div className="relative rounded-ful">
        <button onClick={handleLike} disabled={!state.isAuthenticated}>
          <HeartIcon
            className={clsx(
              'h-7 w-7 mt-1 text-gray-400 transition duration-500 ease-in-out transform hover:text-gray-500 hover:fill-red-300 disabled:bg-slate-500',
              {
                ['text-red-500']: Boolean(
                  likes.filter((like) => {
                    return like.user_email === state.user.email;
                  }).length
                ),
              }
            )}
          />
        </button>
        <div className="absolute -top-3 left-3 px-1 py-1 text-[9px] font-bold ring-1 ring-white leading-none text-red-100 transform bg-red-600 rounded-full">
          <p>{likes.length}</p>
        </div>
      </div>
    </>
  ) : null;
}
