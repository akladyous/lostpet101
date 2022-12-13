import { Outlet } from 'react-router-dom';

export default function Listings() {
    return (
        <div>
            <h3>New Listing Report</h3>
            <Outlet />
        </div>
    );
}
