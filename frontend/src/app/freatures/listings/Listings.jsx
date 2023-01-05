import { useCallback, useEffect, useRef } from 'react';
import { useAxios } from '../../../hooks/useAxios.jsx';
import ListingsSearch from './lost-found/ListingsSearch.jsx';
import ListMapper from '../../../hooks/ListMapper.jsx';
import ListingInfo from './lost-found/ListingInfo.jsx';
import { BouncingLoader } from '../../../components/ui/BouncingLoader.jsx';

export default function Listings() {
  const isMounted = useRef(false);
  const [request, { isLoading, isError, error, isSuccess, data }] = useAxios(
    null,
    { manual: true }
  );

  const onSubmit = useCallback(async (values, event) => {
    await request({
      method: 'post',
      url: 'reports/search',
      data: values,
    });
  }, []);
  const onError = useCallback((error) => {
    console.log('error : ', error);
  }, []);

  useEffect(() => {
    isMounted.current = true;
    if (isMounted.current) {
      request({
        method: 'post',
        url: 'reports/search',
        data: null,
      });
    }
    console.log('componentDidMound');

    return () => {
      isMounted.current = false;
    };
  }, []);
  if (isError) {
    debugger;
    console.error('error: ', error);
  }
  console.log('data : ', data);
  return isMounted.current ? (
    <>
      <div className="w-11/12 md:w-3/4 max-w-7xl mx-auto my-8 md:my-16">
        <section className="relative border-orange-100 bg-white shadow-xl rounded-2xl border mb-5 p-5">
          <ListingsSearch onSubmit={onSubmit} onError={onError} />
        </section>

        <section className="relative border-orange-100 bg-white shadow-xl rounded-2xl border p-5">
          {isLoading ? <BouncingLoader /> : null}
          {isError && error ? (
            <div className="text-center">{error.data.message}</div>
          ) : null}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {isSuccess && !isError ? (
              <ListMapper
                items={data}
                resourceName="report"
                itemComponent={ListingInfo}
              />
            ) : null}
          </div>
        </section>
      </div>
    </>
  ) : null;
}
