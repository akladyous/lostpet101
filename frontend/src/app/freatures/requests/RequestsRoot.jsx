import { Outlet } from 'react-router-dom';

export default function RequestsRoot() {
  return (
    <div className="ReportsRoot w-11/12 md:w-3/4 max-w-7xl mx-auto my-8">
      <Outlet />
    </div>
  );
}
