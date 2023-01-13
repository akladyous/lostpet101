import { Outlet, useParams, useLocation } from 'react-router-dom';

export default function LikesRoot() {
  const location = useLocation();
  const params = useParams();
  return (
    <div className="ReportsRoot w-10/12 md:w-3/4 max-w-7xl mx-auto my-8">
      <Outlet context={{ params: params, location: location }} />
    </div>
  );
}
