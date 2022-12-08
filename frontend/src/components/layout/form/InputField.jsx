import React from 'react';
import { useSelector } from 'react-redux';

const formClasses = {
    label: 'mb-2 block text-sm font-medium text-gray-700 capitalize',
    textField:
        'block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-300 focus:outline-none focus:ring-orange-500 sm:text-sm',
};

export const InputField = (props) => {
    // console.log(props.input.name, ' : ', props)
    const state = useSelector((state) => state.users);
    const { input, label, value, onChange } = props || {};
    React.useEffect(() => {
        console.log('useEffect : ', input.name);
    }, []);
    return (
        <div>
            {label ? (
                <label
                    htmlFor={label?.htmlFor ?? input.name}
                    className={formClasses.label}
                >
                    {label?.name}
                </label>
            ) : null}
            <input
                {...input}
                id={input.name}
                className={input?.className ?? formClasses.textField}
                value={value}
                onChange={onChange}
            />
            {state.error[input?.name] ? (
                <div className="pt-2">
                    <p className="text-sm text-red-600">
                        {`${input?.name} ${state.error[input?.name][0]}`}
                    </p>
                </div>
            ) : null}
        </div>
    );
};
export const MemoizedComponent = React.memo(InputField);
