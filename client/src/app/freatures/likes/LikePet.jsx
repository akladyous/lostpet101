import { useSelector } from 'react-redux';
import {
  useLikeMutation,
  useDislikeMutation,
} from '../../../state/api/likesSlice.js';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useCallback, useEffect, useRef } from 'react';
import { useState, useMemo } from 'react';
import clsx from 'clsx';

export default function LikePet(props) {
  const { petId, likes: initialLikes } = props || {};
  const [likes, setLikes] = useState(initialLikes || []);

  const state = useSelector((state) => state.users);
  const isMounted = useRef(false);

  const [likePet] = useLikeMutation();
  const [dislikePet] = useDislikeMutation();

  const currentUserLikes = useMemo(() => {
    return Boolean(
      likes.filter((like) => {
        if (state.isAuthenticated) {
          return like.user_email === state.user.email;
        }
      }).length
    );
  }, [likes]);

  const handleLike = useCallback(async () => {
    if (currentUserLikes) {
      const data = await dislikePet(petId).unwrap();
      setLikes(data);
    } else {
      const data = await likePet(petId).unwrap();

      setLikes(data);
    }
  }, [likes.length, likePet, dislikePet, currentUserLikes]);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, [likes]);

  return likes ? (
    <>
      <div className="relative rounded-ful">
        <button onClick={handleLike} disabled={!state.isAuthenticated}>
          <HeartIcon
            className={clsx(
              'h-7 w-7 mt-1 text-gray-400 transition duration-500 ease-in-out transform hover:text-gray-500  disabled:bg-slate-500',
              {
                ['text-red-500']: currentUserLikes,
                ['hover:fill-red-300']: currentUserLikes,
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
