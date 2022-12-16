import React from 'react';

export default function FieldErrors(props) {
    const { error, touched, children, ...rest } = props || {};

    return error && touched
        ? React.createElement('p', { className: 'pt-2 text-sm text-red-600', ...rest }, error, children)
        : null;

    // return error && touched ? (
    //     <p className="pt-2 text-sm text-red-600" {...rest}>
    //         {error}
    //         {children}
    //     </p>
    // ) : null;
}
