import React from 'react';

export function TextAreaField(props) {
    const { type, name, className, handleChange, handleBlur, value, ...others } = props || {};

    return (
        <>
            <textarea
                name={name}
                id={name}
                className={className}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
                {...others}
            />
            {props.children}
        </>
    );
}
