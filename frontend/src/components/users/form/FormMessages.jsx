import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

export const FormMessages = forwardRef((props, ref) => {
    const state = useSelector((state) => state.users);
    return (
        <div className="">
            <p
                ref={ref}
                className={clsx(
                    'text-sm capitalize',
                    state.status === 'faild'
                        ? 'text-red-700'
                        : state.status === 'succeeded'
                        ? 'text-green-600'
                        : null
                )}
            />
        </div>
    );
});
