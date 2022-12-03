import { memo, useEffect } from 'react'

function Element(props) {
    const { attributes, label, options, onChange } = props || {};

    useEffect(() => {
        console.log('element updated/mounted : ', attributes.name)

        return () => { console.log('element unmounted : ', attributes.name) }
    }, [])
    return (
        <>
            {
                props.label ?
                    <label htmlFor={attributes.name} className={label.className}>
                        {label.value}
                    </label>
                    : ''
            }
            <input
                {...attributes}
                id={attributes.name}
                {...options}
                onChange={onChange}
            />
        </>
    )
}
export const MemoizedComponent = memo(Element);
