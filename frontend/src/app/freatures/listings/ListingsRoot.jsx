import { Outlet } from 'react-router-dom';

export default function ListingsRoot() {
  return (
    <div id="listings">
      <Outlet />
    </div>
  );
}
