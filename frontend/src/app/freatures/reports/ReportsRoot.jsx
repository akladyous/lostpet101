import {
  Outlet,
  useOutlet,
  useParams,
  useLocation,
  Navigate,
} from 'react-router-dom';

export default function ReportsRoot() {
  const location = useLocation();
  const params = useParams();
  const currentChildren = useOutlet();

  // if (!currentChildren) return <Navigate to="/" replace />;
  return (
    <div className="ReportsRoot w-10/12 md:w-3/4 max-w-7xl mx-auto my-8">
      <Outlet context={{ params: params, location: location }} />
    </div>
  );
}
