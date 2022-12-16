import React from 'react';

export default function InputField(props) {
    const { type, htmlAttributes, label, container, children, component } =
        props || {};

    debugger;
    const eLabel = React.createElement(
        'label',
        {
            htmlFor: htmlAttributes.name,
            className: label.className,
        },
        label.value
    );
    const el = React.createElement(type, { ...htmlAttributes }, children);
    const Cont = React.createElement(container ?? React.Fragment, null, el);
    return Cont;
}
