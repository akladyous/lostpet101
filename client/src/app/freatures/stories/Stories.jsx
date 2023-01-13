import { useCallback, useRef, useEffect } from 'react';
import { useAxios } from '../../../hooks/useAxios.jsx';
import { BouncingLoader } from '../../../components/ui/BouncingLoader.jsx';
import ListMapper from '../../../hooks/ListMapper.jsx';
import Story from './Story.jsx';

import StoriesSide from './StoriesSide.jsx';

export default function Stories() {
  const isMounted = useRef(false);
  const [request, { isLoading, isError, error, isSuccess, data }] = useAxios(
    {
      method: 'get',
      url: 'pets',
    },
    { manual: false }
  );

  // useEffect(() => {
  //   isMounted.current = true;
  //   if (isMounted.current) {
  //     request({
  //       method: 'get',
  //       url: 'pets',
  //     });
  //   }
  //   console.log('data : ', data);
  //   return () => {
  //     isMounted.current = false;
  //   };
  // }, [request]);

  return (
    <main>
      {isLoading ? <BouncingLoader /> : null}
      <div className="grid grid-cols-12 gap-x-2">
        <div className="col-span-12 sm:col-span-8 sm:order-first order-last">
          <div className="flex flex-col">
            {isSuccess && !isError ? (
              <ListMapper
                items={data}
                resourceName="pet"
                itemComponent={Story}
              />
            ) : null}
          </div>
        </div>
        <div className="col-span-12 sm:col-span-4">
          <StoriesSide />
        </div>
      </div>
    </main>
  );
}
