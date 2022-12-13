import React from 'react';

export default function WizardContainerComponent(props) {
    const { currentIndex, lastIndex, next, previous } = props || {};
    const currentChild = React.Children.toArray(props.children)[currentIndex];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, {
            currentIndex,
            lastIndex,
            next,
            previous,
        });
    } else {
        return null;
    }
}
