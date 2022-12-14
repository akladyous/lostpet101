import React from 'react';

export default function FieldErrors(props) {
    const { error, touched, ...rest } = props || {};
    return error && touched
        ? React.createElement(
              'p',
              { className: 'pt-2 text-sm text-red-600', ...rest },
              error,
              props.children
          )
        : null;
}
