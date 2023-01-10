import { useCallback, useEffect, useRef } from 'react';
import { useAxios } from '../../../hooks/useAxios.jsx';
import ListingsSearch from './lost-found/ListingsSearch.jsx';
import ListMapper from '../../../hooks/ListMapper.jsx';
import ReportPreview from '../reports/ReportPreview.jsx';
import { BouncingLoader } from '../../../components/ui/BouncingLoader.jsx';

export default function Listings() {
  const isMounted = useRef(false);
  const [request, { isLoading, isError, error, isSuccess, data }] = useAxios(
    null,
    { manual: true }
  );

  const onSubmit = useCallback(
    async (values) => {
      await request({
        method: 'post',
        url: 'reports/search',
        data: values,
      });
    },
    [request]
  );
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
    return () => {
      isMounted.current = false;
    };
  }, [request]);
  if (isError) {
    console.error('error: ', error);
  }
  return isMounted.current ? (
    <>
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
              itemComponent={ReportPreview}
            />
          ) : null}
        </div>
      </section>
    </>
  ) : null;
}
