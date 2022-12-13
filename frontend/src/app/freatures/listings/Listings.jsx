import { Outlet } from 'react-router-dom';
import { useSteps } from '../../../hooks/useSteps.jsx';

export default function Listings() {
    const _props = useSteps({
        titles: ['report details', 'pet details'],
    });
    debugger;
    return (
        <div className="content min-h-screen">
            <div>
                <h3 className="my-5 text-center text-3xl">Listing</h3>
                <p>
                    {'activeIndex '}
                    {activeIndex.current}
                </p>
            </div>
            <Outlet />
        </div>
    );
}
