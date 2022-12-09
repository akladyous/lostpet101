import { forwardRef } from 'react';

export const FormMessages = forwardRef((props, ref) => {
    return (
        <div className="">
            <p ref={ref} className="text-sm text-red-600">
                {/* {ref.current} */}
            </p>
        </div>
    );
});
