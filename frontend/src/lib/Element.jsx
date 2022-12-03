import { memo } from 'react'

function Element(props) {
    const { attributes, label, options, onChange } = props || {};
    return (
        <>
            {props.label ?
                <label htmlFor={attributes.name} className={label.className}>
                    {label.value}
                </label>
                : ''
            }
            <input
                {...attributes}
                id={attributes.name}
                onChange={onChange}
                {...options}
            />
        </>
    )
}
export const MemoizedComponent = memo(Element);
