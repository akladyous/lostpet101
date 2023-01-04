import { useCallback, useEffect } from 'react';
import { useShowReportsQuery } from '../../../state/api/reportsSlice.js';
import ListingsSearch from './lost-found/ListingsSearch.jsx';
import ListMapper from '../../../hooks/ListMapper.jsx';
import ListingInfo from './lost-found/ListingInfo.jsx';
import { BouncingLoader } from '../../../components/ui/BouncingLoader.jsx';

export default function Listings() {
  const { data, error, isLoading, isSuccess, isError } = useShowReportsQuery();

  const onSubmit = useCallback((values, event) => {
    console.log('values : ', values);
  }, []);
  const onError = useCallback(() => {
    console.log('error : ', error);
  }, []);

  return (
    <>
      <div className="w-11/12 md:w-3/4 max-w-7xl mx-auto my-8 md:my-16">
        <section className="relative border-orange-100 bg-white shadow-xl rounded-2xl border mb-5 p-5">
          <ListingsSearch onSubmit={onSubmit} onError={onError} />
        </section>

        <section className="relative border-orange-100 bg-white shadow-xl rounded-2xl border p-5">
          {isLoading ? <BouncingLoader /> : null}
          {isError && <div className="text-center">{error}</div>}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {isSuccess ? (
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
  );
}
