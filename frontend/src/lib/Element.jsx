import { memo } from 'react'

function Element(props) {
    const { attributes, label, options, onChange } = props || {};
    return (
        <>
            {props.label ?
                <label htmlFor={label.htmlFor} className={label.className}>
                    {label.value}
                </label>
                : ''
            }
            <input {...attributes} onChange={onChange} {...options} />
        </>
    )
}
export const MemoizedComponent = memo(Element);
