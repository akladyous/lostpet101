import React from 'react';
import { useSelector } from 'react-redux';

export const InputField = (props) => {
    const state = useSelector(state => state.users)
    const { attributes, label, options, value, onChange } = props || {}
    return (
        <div>
            <label htmlFor={attributes.name} className={label.className}>
                {label.value}
            </label>
            <div className="mt-1">
                <input
                    {...attributes}
                    {...options}
                    id={attributes.name}
                    value={value}
                    onChange={onChange}
                />
                {
                    state.error[attributes?.name]
                        ? <p className='text-red-600 text-sm'>
                            {`${attributes?.name} ${state.error[attributes?.name][0]}`}
                        </p>
                        : null

                }
            </div>
        </div >
    )
};
export const MemoizedComponent = React.memo(InputField)
