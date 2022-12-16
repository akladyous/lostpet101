import { createElement } from 'react';

export default function Label(props) {
    const { htmlFor, className, content, caption, children } = props || {};
    return (
        <div className="flex justify-between">
            <label htmlFor={htmlFor} className={className}>
                {content}
                {children}
            </label>
            {caption ? (
                <span className="text-xs text-gray-500">{caption}</span>
            ) : null}
        </div>
    );
}
