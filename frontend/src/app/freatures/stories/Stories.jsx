import { useGetPetsQuery } from '../../../state/api/petsSlice.js';
import { useNavigate } from 'react-router-dom';
import { BouncingLoader } from '../../../components/ui/BouncingLoader.jsx';
import ListMapper from '../../../hooks/ListMapper.jsx';
import Story from './Story.jsx';
import StoriesSide from './StoriesSide.jsx';

export default function Stories() {
  const navigate = useNavigate();
  const {
    data: pets,
    error,
    isFetching,
    isSuccess,
    isError,
  } = useGetPetsQuery();

  if (isError) {
    {
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 2000);
      return <div className="">{JSON.stringify(error, null, 2)}</div>;
    }
  }

  return (
    <main>
      {isFetching ? <BouncingLoader /> : null}
      <div className="grid grid-cols-12 gap-x-2">
        <div className="col-span-12 sm:col-span-8 sm:order-first order-last">
          <div className="flex flex-col">
            {isSuccess && !isError ? (
              <ListMapper
                items={pets}
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
