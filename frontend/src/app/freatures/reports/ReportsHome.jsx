import { useCallback, useEffect, useRef } from 'react';
// import { useAxios } from '../../../hooks/useAxios.jsx';
import ReportsSearch from './ReportsSearch.jsx';
import ListMapper from '../../../hooks/ListMapper.jsx';
import ReportCard from './ReportCard.jsx';
import { BouncingLoader } from '../../../components/ui/BouncingLoader.jsx';
import { useSearchReportsMutation } from '../../../state/api/reportsSlice.js';

export default function ReportsHome() {
  const isMounted = useRef(false);
  // const [request, { isLoading, isError, error, isSuccess, data }] = useAxios(
  //   null,
  //   { manual: true }
  // );
  const [request, { isLoading, isError, error, isSuccess, data }] =
    useSearchReportsMutation();

  const onSubmit = useCallback(
    async (values) => {
      await request({
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
    if (isMounted.current) request({ data: null });

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
        <ReportsSearch onSubmit={onSubmit} onError={onError} />
      </section>

      <section className="relative border-orange-100 bg-white shadow-xl rounded-2xl border p-5">
        {isLoading ? <BouncingLoader /> : null}
        {isError && error ? (
          <div className="text-center">{error.data}</div>
        ) : null}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {isSuccess && !isError ? (
            <ListMapper
              items={data}
              resourceName="report"
              itemComponent={ReportCard}
            />
          ) : null}
        </div>
      </section>
    </>
  ) : null;
}
