import { Outlet } from 'react-router-dom';

export default function ListingsRoot() {
  return (
    <div className="listingsRoot w-11/12 md:w-3/4 max-w-7xl mx-auto my-8">
      <Outlet />
    </div>
  );
}
