import { useCallback, useEffect, useRef } from 'react';
import { useState, useMemo } from 'react';
import clsx from 'clsx';

import { HeartIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';

export default function LikesCount({ likes, currentUserEmail }) {
  const state = useSelector((state) => state.users);

  return likes ? (
    <>
      <div className="relative rounded-ful">
        <button onClick={handleLike} disabled={!state.isAuthenticated}>
          <HeartIcon
            className={clsx(
              'h-7 w-7 mt-1 text-gray-400 transition duration-500 ease-in-out transform hover:text-gray-500 hover:fill-red-300 disabled:bg-slate-500',
              {
                ['text-red-500']: Boolean(
                  likes.filter((like) => {
                    return like.user_email === currentUserEmail;
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
